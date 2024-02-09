import { useState } from "react";
import { collection, getDocs, where, query, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { db } from "../../services/firebaseConfig";
import OrderForm from "./OrderForm";
import Swal from 'sweetalert2';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { cart, total, clearCart } = useCart();

    const createOrder = async ({name, phone, email}) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: { 
                   name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date()) 
            };

            const batch = writeBatch(db);
            const outOfStock = [];

            const ids = cart.map(prod => prod.id);
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));

            const querySnapshot = await getDocs(productsCollection);
            const { docs } = querySnapshot;

            docs.forEach(doc => {
                const fields = doc.data();
                const stockDb = fields.stock;

                const productsAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productsAddedToCart.quantity;
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity});
                } else {
                    outOfStock.push({ id: doc.id, ...fields});
                }
            });

            if(outOfStock.length === 0) {
                batch.commit();

                const orderCollection = collection(db, 'orders');
                const { id } = await addDoc(orderCollection, objOrder);
                
                setOrderId(id);

                clearCart();

                Swal.fire({
                    icon: 'success',
                    title: '¡Compra realizada con éxito!',
                    text: `El ID de su compra es: ${id}`,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hay productos que no tienen stock disponible',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error al crear la orden',
            });
        } finally {
            setLoading(false);
        }   
    }

    if(loading) {
        return <h1 className="margen">Se está generando su orden, por favor espere...</h1>;
    }

    if(orderId) {
        return <h1 className="margen">El ID de su compra es: {orderId}</h1>;
    }

    return (
        <>
            <h1>CHECKOUT</h1>
            <OrderForm onCreate={createOrder}/>
        </>
    );
}

export default Checkout;

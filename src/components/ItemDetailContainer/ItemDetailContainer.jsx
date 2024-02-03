import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    if (product) document.title = product.name;

    return () => {
      document.title = "Shark";
    };
  });

  useEffect(() => {
    setLoading(true);

    const productDocument = doc(db, "products", productId);

    getDoc(productDocument)
      .then((queryDocumentSnapshot) => {
        const fields = queryDocumentSnapshot.data();
        const productAdapted = { id: queryDocumentSnapshot.id, ...fields };
        setProduct(productAdapted);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div className="margen">
        <h1>Cargando el producto...</h1>
    </div>;
  }

  if (!product) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El producto no existe",
    });

    return <div className="margen rojo">
        <h1 className="ms-5">¡UPS!</h1>
        <h2> HUBO UN ERROR </h2>
    </div>;
  }

  return (
    <div
      id="item-detail-container"
      className="ms-0 item-detail-container p-4"
    >
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

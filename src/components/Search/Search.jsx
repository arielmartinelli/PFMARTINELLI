import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { db } from "../../services/firebaseConfig";
import { getDocs, query, where } from "firebase/firestore";
import Swal from "sweetalert2";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const searchProducts = async () => {
        try {
            // Consulta para buscar productos en Firebase
            const productsQuery = query(
                collection(db, "products"),
                where("name", ">=", searchTerm)
            );
            const querySnapshot = await getDocs(productsQuery);

            // Mapea los resultados de la consulta
            const results = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            // Actualiza el estado con los resultados
            setSearchResults(results);

            // Puedes mostrar una alerta o realizar otra acción aquí si lo deseas
        } catch (error) {
            // Muestra una alerta en caso de error
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un error al buscar productos",
            });
        }
    };

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    searchProducts();
                }}
                className="d-flex search"
            >
                <input
                    type="text"
                    id="SearchInput"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="btn btn-danger" id="SearchButton">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>

            {/* Muestra los resultados de la búsqueda */}
            {searchResults.length > 0 && (
                <div>
                    <h2>Resultados de la búsqueda:</h2>
                    <ul>
                        {searchResults.map((product) => (
                            <li key={product.id}>{product.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
        // <form action="" className='d-flex search '>
        //     <input type="text" id="SearchInput" placeholder="Buscar..." />
        //     <button className="btn btn-danger" id='SearchButton'>
        //         <FontAwesomeIcon icon={faSearch} />
        //     </button>
        // </form>
}

export default Search;
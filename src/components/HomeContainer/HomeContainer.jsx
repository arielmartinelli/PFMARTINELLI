

const HomeContainer = () => {

    return (
        <div>
            <div className="flayer-container">
                <div className="flayer-content">
                    <img src="https://www.enasport.com/cdn/shop/files/Captura_de_pantalla_2023-11-27_170921_1300x.png?v=1701115821" alt="Imagen de fondo" className="flayer-background" />
                </div>
            </div>
            <div className="categorias">
                <h2> Categorias </h2>
                <div className="row text-center">
                    <div className="col-4 box-categoria">
                        <div className="box-img mx-auto">
                            <a href="#"><img src="https://www.enasport.com/cdn/shop/files/Productos_21_300x.png?v=1702474426" alt="pROTEINA" /></a>
                        </div>
                        <h3 className="mt-3">Suplementos</h3>
                    </div>
                    <div className="col-4 box-categoria">
                        <div className="box-img mx-auto">
                            <a href="#"><img src="https://www.enasport.com/cdn/shop/files/Cat-amino_300x.jpg?v=1702474045" alt="Accesorios" /></a>
                        </div>
                        <h3 className="mt-3">Accesorios</h3>
                    </div>
                    <div className="col-4 box-categoria">
                        <div className="box-img mx-auto">
                            <a href="#"><img src="https://www.enasport.com/cdn/shop/files/Productos_65_300x.png?v=1702474782" alt="Indumentaria" /></a>
                        </div>
                        <h3 className="mt-3">Indumentaria</h3>
                    </div>
                </div>
            </div>
            <div className="flayer-container-2">
                <div className="flayer-content-2">
                    <img src="https://www.enasport.com/cdn/shop/files/DSC02702_c5ef7328-4389-410e-894d-b4f50c0c796e_1400x.jpg?v=1674137180" alt="Imagen de fondo" className="flayer-background" />
                </div>
            </div>
            <div className="row proveedor-box">
                <div className="col-6 proveedor-img">
                    <img src="https://www.enasport.com/cdn/shop/files/laboratorio_ena_Sin_Fondo_800x.png?v=1694693795" alt="Laboratorio ENA" />
                </div>
                <div className="col-6 proveedor-text">
                    <h4> Proveedor Oficial ENA </h4>
                    <p>Laboratorio ENA produce los suplementos de más alto nivel y eficacia, bajo los más estrictos estándares de calidad, sanidad y bioseguridad; contribuyendo a una mejor calidad de vida.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer
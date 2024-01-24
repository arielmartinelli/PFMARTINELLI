import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Enlaces</h3>
                        <ul className="list-unstyled">
                            <li><Link className='link' to={"/"}> Inicio </Link></li>
                            <li><Link className='link' to={"/category/suplementos"} > Suplementos </Link></li>
                            <li><Link className='link' to={"/category/accesorios"} > Accesorios  </Link></li>
                            <li><Link className='link' to={"/category/indumentaria"} > Indumentaria </Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Contacto</h3>
                        <p>Dirección: 123 Calle Principal, Ciudad</p>
                        <p>Email: atomic@hotmail.com</p>
                        <p>Teléfono: (555) 123-4567</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Patrocinador</h3>
                        <img src="https://www.enasport.com/cdn/shop/files/logo_uar_y_pumas_300x.png?v=1681907369" alt="Pumas" />
                    </div>
                </div>
                <hr className="my-3" />
                <div className="text-center">
                    <p>&copy; 2022 ATOMIC. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

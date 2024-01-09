import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return  (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src="{img} " alt="name" />
            </picture>
            <section>
                <p>
                    {category}
                </p>
                <p>
                    {description}
                </p>
                <p>
                    {price}
                </p>
            </section>
            <footer>
                <ItemCount initial={0} stock={stock} onAdd={(count) => console.log("Cantidad agregada", count)} />
            </footer>
        </article>
    )
}

export default ItemDetail
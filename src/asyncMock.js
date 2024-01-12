const products = [
       {id: "1", name: "Proteina ENA", price: 25000,category: "suplementos",img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg",
        stock: 15, description: "Proteina de 1000mg."},
       {id: "2", name: "Creatina ENA", price: 35000, category: "suplementos", img: "https://www.farmacialeloir.com.ar/img/articulos/2023/01/ena_creatina_micronizada_en_polvo_1_imagen2.jpg", stock: 5, description: "Creatina de 300mg."}, 
       {id: "3", name: "BCAA ENA", price: 15000, category: "suplementos", img: "https://elbloquear.vtexassets.com/arquivos/ids/160309/97_gr_-_2021-08-02t152015.png?v=637870984361200000", stock: 13, description: "Amino acidos x 90 compr."},
       {id: "4", name: "Barra Proteica", price: 15000, category: "suplementos", img: "https://www.enasport.com/cdn/shop/products/Caja_protein_vainilla_400x.jpg?v=1652799516", stock: 13, description: "Barra con 5% de proteina"},{id: "1", name: "Proteina ENA", price: 25000,category: "suplementos",img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg",
       stock: 15, description: "Proteina de 1000mg."},
      {id: "2", name: "Creatina ENA", price: 35000, category: "suplementos", img: "https://www.farmacialeloir.com.ar/img/articulos/2023/01/ena_creatina_micronizada_en_polvo_1_imagen2.jpg", stock: 5, description: "Creatina de 300mg."}, 
      {id: "3", name: "BCAA ENA", price: 15000, category: "suplementos", img: "https://elbloquear.vtexassets.com/arquivos/ids/160309/97_gr_-_2021-08-02t152015.png?v=637870984361200000", stock: 13, description: "Amino acidos x 90 compr."},
      {id: "4", name: "Barra Proteica", price: 15000, category: "suplementos", img: "https://www.enasport.com/cdn/shop/products/Caja_protein_vainilla_400x.jpg?v=1652799516", stock: 13, description: "Barra con 5% de proteina"}
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryById) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod.category === categoryById))
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
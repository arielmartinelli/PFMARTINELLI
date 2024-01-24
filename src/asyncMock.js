const products = [
       {id: "1", name: "Proteina ENA", price: 25000,category: "suplementos",img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg",
        stock: 15, description: "Proteina de 1000mg."},
       {id: "2", name: "Creatina ENA", price: 35000, category: "suplementos", img: "https://www.farmacialeloir.com.ar/img/articulos/2023/01/ena_creatina_micronizada_en_polvo_1_imagen2.jpg", stock: 5, description: "Creatina de 300mg."}, 
       {id: "3", name: "BCAA ENA", price: 15000, category: "suplementos", img: "https://elbloquear.vtexassets.com/arquivos/ids/160309/97_gr_-_2021-08-02t152015.png?v=637870984361200000", stock: 13, description: "Amino acidos x 90 compr."},
       {id: "4", name: "Barra Proteica", price: 15000, category: "suplementos", img: "https://www.enasport.com/cdn/shop/products/Caja_protein_vainilla_400x.jpg?v=1652799516", stock: 13, description: "Barra con 5% de proteina"},{id: "1", name: "Proteina ENA", price: 25000,category: "suplementos",img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg",
       stock: 15, description: "Proteina de 1000mg."},
      {id: "2", name: "Creatina ENA", price: 35000, category: "suplementos", img: "https://www.farmacialeloir.com.ar/img/articulos/2023/01/ena_creatina_micronizada_en_polvo_1_imagen2.jpg", stock: 5, description: "Creatina de 300mg."}, 
      {id: "3", name: "BCAA ENA", price: 15000, category: "suplementos", img: "https://elbloquear.vtexassets.com/arquivos/ids/160309/97_gr_-_2021-08-02t152015.png?v=637870984361200000", stock: 13, description: "Amino acidos x 90 compr."},
      {id: "4", name: "Barra Proteica", price: 15000, category: "suplementos", img: "https://www.enasport.com/cdn/shop/products/Caja_protein_vainilla_400x.jpg?v=1652799516", stock: 13, description: "Barra con 5% de proteina"},

      {id: "5", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0010-d3094fe2a297aaeed717051678719498-240-0.webp",
       stock: 7, description: "Remera oversize premium."},
      {id: "6", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0017-6e07b09a25c79fd2d117051679792594-240-0.webp",
      stock: 15, description: "Remera oversize premium."}, 
      {id: "7", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0014-6d0fb2565f2e6a424217051677984376-240-0.webp",
      stock: 5, description: "Remera oversize premium."},
      {id: "8", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/imagen-de-whatsapp-2023-12-26-a-las-08-26-21_0088e990-4c17852ab5a0bf80d717054162016378-240-0.webp",
      stock: 3, description: "Remera oversize premium."},
      {id: "5", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0010-d3094fe2a297aaeed717051678719498-240-0.webp",
       stock: 7, description: "Remera oversize premium."},
      {id: "6", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0017-6e07b09a25c79fd2d117051679792594-240-0.webp",
      stock: 15, description: "Remera oversize premium."}, 
      {id: "7", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0014-6d0fb2565f2e6a424217051677984376-240-0.webp",
      stock: 5, description: "Remera oversize premium."},
      {id: "8", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/imagen-de-whatsapp-2023-12-26-a-las-08-26-21_0088e990-4c17852ab5a0bf80d717054162016378-240-0.webp",
      stock: 3, description: "Remera oversize premium."},

      {id: "9", name: "Muñequeras", price: 16000,category: "accesorios",img: "https://acdn.mitiendanube.com/stores/002/280/059/products/20604539081-537fe16ae7ef6cd94b16591056288728-480-0.webp",
       stock: 7, description: "Muñequeras elasticas."},
      {id: "10", name: "Cinturon de cuero", price: 42000,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_720927-MLA48737277472_012022-O.webp",
      stock: 2, description: "Rodillera 7mm Balboafit Baile"}, 
      {id: "11", name: "Straps", price: 14500,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_664585-MLU72847868579_112023-O.webp",
      stock: 5, description: "Cintas Poder Agarre Straps."},
      {id: "12", name: "Soga", price: 32500,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_951682-MLU72755812942_112023-O.webp",
      stock: 3, description: "Soga Salto Pesada Saltar."},
      {id: "9", name: "Muñequeras", price: 16000,category: "accesorios",img: "https://acdn.mitiendanube.com/stores/002/280/059/products/20604539081-537fe16ae7ef6cd94b16591056288728-480-0.webp",
       stock: 7, description: "Muñequeras elasticas."},
      {id: "10", name: "Cinturon de cuero", price: 42000,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_720927-MLA48737277472_012022-O.webp",
      stock: 2, description: "Rodillera 7mm Balboafit Baile"}, 
      {id: "11", name: "Straps", price: 14500,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_664585-MLU72847868579_112023-O.webp",
      stock: 5, description: "Cintas Poder Agarre Straps."},
      {id: "12", name: "Soga", price: 32500,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_951682-MLU72755812942_112023-O.webp",
      stock: 3, description: "Soga Salto Pesada Saltar."}
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(products.filter((product) => product.category === categoryId ))
            resolve(products.filter((product) => product.category === categoryId ))
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
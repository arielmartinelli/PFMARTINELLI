const products = [
       {id: "1", name: "Proteina ENA", price: 25000,category: "suplementos",img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg",
        stock: 15, description: "Eleva tu ingesta proteica con nuestra Proteína ENA de alta calidad. Una fórmula equilibrada que proporciona los nutrientes esenciales para el desarrollo muscular y la recuperación después del ejercicio. Disponible en deliciosos sabores para que cada batido sea una experiencia única.", OldPrice: 30000},
       {id: "2", name: "Creatina ENA", price: 35000, category: "suplementos", img: "https://www.farmacialeloir.com.ar/img/articulos/2023/01/ena_creatina_micronizada_en_polvo_1_imagen2.jpg", stock: 5, description: "Potencia tus entrenamientos con nuestra Creatina ENA, diseñada para mejorar la fuerza y la resistencia muscular. La creatina es un aliado clave para optimizar el rendimiento físico, ayudándote a alcanzar tus metas de fitness de manera eficaz y segura.", OldPrice: 40000}, 
       {id: "3", name: "BCAA ENA", price: 15000, category: "suplementos", img: "https://elbloquear.vtexassets.com/arquivos/ids/160309/97_gr_-_2021-08-02t152015.png?v=637870984361200000", stock: 13, description: "Maximiza tu recuperación con nuestros BCAA ENA. Estos aminoácidos de cadena ramificada son esenciales para prevenir la fatiga muscular y acelerar la recuperación después del ejercicio intenso. Disfruta de una mezcla de sabores refrescantes mientras impulsas tu rendimiento.", OldPrice: 20000},
       {id: "4", name: "Barra Proteica", price: 5000, category: "suplementos", img: "https://www.enasport.com/cdn/shop/products/Caja_protein_vainilla_400x.jpg?v=1652799516", stock: 13, description: "Saborea la nutrición con nuestras Barras Proteicas ENA. Una deliciosa combinación de proteínas de alta calidad y sabores irresistibles. Perfectas como snack entre comidas o para satisfacer tus antojos de manera saludable.", OldPrice: 7000},
       {id: "1", name: "Proteina ENA", price: 25000,category: "suplementos",img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg",
        stock: 15, description: "Eleva tu ingesta proteica con nuestra Proteína ENA de alta calidad. Una fórmula equilibrada que proporciona los nutrientes esenciales para el desarrollo muscular y la recuperación después del ejercicio. Disponible en deliciosos sabores para que cada batido sea una experiencia única.", OldPrice: 30000},
       {id: "2", name: "Creatina ENA", price: 35000, category: "suplementos", img: "https://www.farmacialeloir.com.ar/img/articulos/2023/01/ena_creatina_micronizada_en_polvo_1_imagen2.jpg", stock: 5, description: "Potencia tus entrenamientos con nuestra Creatina ENA, diseñada para mejorar la fuerza y la resistencia muscular. La creatina es un aliado clave para optimizar el rendimiento físico, ayudándote a alcanzar tus metas de fitness de manera eficaz y segura.", OldPrice: 40000}, 
       {id: "3", name: "BCAA ENA", price: 15000, category: "suplementos", img: "https://elbloquear.vtexassets.com/arquivos/ids/160309/97_gr_-_2021-08-02t152015.png?v=637870984361200000", stock: 13, description: "Maximiza tu recuperación con nuestros BCAA ENA. Estos aminoácidos de cadena ramificada son esenciales para prevenir la fatiga muscular y acelerar la recuperación después del ejercicio intenso. Disfruta de una mezcla de sabores refrescantes mientras impulsas tu rendimiento.", OldPrice: 20000},
       {id: "4", name: "Barra Proteica", price: 5000, category: "suplementos", img: "https://www.enasport.com/cdn/shop/products/Caja_protein_vainilla_400x.jpg?v=1652799516", stock: 13, description: "Saborea la nutrición con nuestras Barras Proteicas ENA. Una deliciosa combinación de proteínas de alta calidad y sabores irresistibles. Perfectas como snack entre comidas o para satisfacer tus antojos de manera saludable.", OldPrice: 7000},

      {id: "5", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0010-d3094fe2a297aaeed717051678719498-240-0.webp",
       stock: 7, description: "Confeccionadas con materiales de alta calidad, estas remeras ofrecen un ajuste amplio y cómodo, perfecto para esos días en los que buscas un toque casual pero a la moda.", OldPrice: 15000},
      {id: "6", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0017-6e07b09a25c79fd2d117051679792594-240-0.webp",
      stock: 15, description: "Confeccionadas con materiales de alta calidad, estas remeras ofrecen un ajuste amplio y cómodo, perfecto para esos días en los que buscas un toque casual pero a la moda.", OldPrice: 15000}, 
      {id: "7", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0014-6d0fb2565f2e6a424217051677984376-240-0.webp",
      stock: 5, description: "Confeccionadas con materiales de alta calidad, estas remeras ofrecen un ajuste amplio y cómodo, perfecto para esos días en los que buscas un toque casual pero a la moda.", OldPrice: 15000},
      {id: "8", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/imagen-de-whatsapp-2023-12-26-a-las-08-26-21_0088e990-4c17852ab5a0bf80d717054162016378-240-0.webp",
      stock: 3, description: "Confeccionadas con materiales de alta calidad, estas remeras ofrecen un ajuste amplio y cómodo, perfecto para esos días en los que buscas un toque casual pero a la moda.", OldPrice: 15000},
      {id: "5", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0010-d3094fe2a297aaeed717051678719498-240-0.webp",
       stock: 7, description: "Confeccionadas con materiales de alta calidad, estas remeras ofrecen un ajuste amplio y cómodo, perfecto para esos días en los que buscas un toque casual pero a la moda.", OldPrice: 15000},
      {id: "6", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0017-6e07b09a25c79fd2d117051679792594-240-0.webp",
      stock: 15, description: "Confeccionadas con materiales de alta calidad, estas remeras ofrecen un ajuste amplio y cómodo, perfecto para esos días en los que buscas un toque casual pero a la moda.", OldPrice: 15000}, 
      {id: "7", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/img-20240113-wa0014-6d0fb2565f2e6a424217051677984376-240-0.webp",
      stock: 5, description: "Confeccionadas con materiales de alta calidad, estas remeras ofrecen un ajuste amplio y cómodo, perfecto para esos días en los que buscas un toque casual pero a la moda.", OldPrice: 15000},
      {id: "8", name: "Remera over", price: 12000,category: "indumentaria",img: "https://acdn.mitiendanube.com/stores/956/789/products/imagen-de-whatsapp-2023-12-26-a-las-08-26-21_0088e990-4c17852ab5a0bf80d717054162016378-240-0.webp",
      stock: 3, description: "Confeccionadas con materiales de alta calidad, estas remeras ofrecen un ajuste amplio y cómodo, perfecto para esos días en los que buscas un toque casual pero a la moda.", OldPrice: 15000},

      {id: "9", name: "Muñequeras", price: 16000,category: "accesorios",img: "https://acdn.mitiendanube.com/stores/002/280/059/products/20604539081-537fe16ae7ef6cd94b16591056288728-480-0.webp",
       stock: 7, description: "Eleva tu seguridad y comodidad durante tus sesiones de entrenamiento con nuestras muñequeras gym. Diseñadas para brindar un soporte óptimo a tus muñecas, estas muñequeras son esenciales para levantamientos de pesas intensos y ejercicios que requieren estabilidad.", OldPrice: 20000},
      {id: "10", name: "Cinturon de cuero", price: 42000,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_720927-MLA48737277472_012022-O.webp",
      stock: 2, description: "Dale un impulso a tu entrenamiento de levantamiento de pesas con nuestro cinturón de cuero gym. Fabricado con cuero resistente y hebillas seguras, este cinturón ofrece el soporte necesario para tu zona lumbar durante levantamientos pesados.", OldPrice: 50000}, 
      {id: "11", name: "Straps", price: 14500,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_664585-MLU72847868579_112023-O.webp",
      stock: 5, description: "Optimiza tu agarre y conquista levantamientos desafiantes con nuestros straps gym. Ideales para ejercicios que involucran pesas pesadas, estos straps brindan un agarre firme y seguro. Olvídate de preocuparte por perder el agarre y concéntrate en alcanzar tus metas de fuerza sin restricciones.", OldPrice: 18000},
      {id: "12", name: "Soga", price: 32500,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_951682-MLU72755812942_112023-O.webp",
      stock: 3, description: "Eleva tus entrenamientos de cardio y resistencia con nuestra soga gym. Diseñada para saltos intensos y ejercicios de resistencia, esta soga resistente es tu compañera perfecta para quemar calorías y mejorar tu resistencia. Su durabilidad y diseño ergonómico la convierten en un accesorio esencial para tu rutina de gimnasio.", OldPrice: 38500},
      {id: "9", name: "Muñequeras", price: 16000,category: "accesorios",img: "https://acdn.mitiendanube.com/stores/002/280/059/products/20604539081-537fe16ae7ef6cd94b16591056288728-480-0.webp",
       stock: 7, description: "Eleva tu seguridad y comodidad durante tus sesiones de entrenamiento con nuestras muñequeras gym. Diseñadas para brindar un soporte óptimo a tus muñecas, estas muñequeras son esenciales para levantamientos de pesas intensos y ejercicios que requieren estabilidad.", OldPrice: 20000},
      {id: "10", name: "Cinturon de cuero", price: 42000,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_720927-MLA48737277472_012022-O.webp",
      stock: 2, description: "Dale un impulso a tu entrenamiento de levantamiento de pesas con nuestro cinturón de cuero gym. Fabricado con cuero resistente y hebillas seguras, este cinturón ofrece el soporte necesario para tu zona lumbar durante levantamientos pesados.", OldPrice: 50000}, 
      {id: "11", name: "Straps", price: 14500,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_664585-MLU72847868579_112023-O.webp",
      stock: 5, description: "Optimiza tu agarre y conquista levantamientos desafiantes con nuestros straps gym. Ideales para ejercicios que involucran pesas pesadas, estos straps brindan un agarre firme y seguro. Olvídate de preocuparte por perder el agarre y concéntrate en alcanzar tus metas de fuerza sin restricciones.", OldPrice: 18000},
      {id: "12", name: "Soga", price: 32500,category: "accesorios",img: "https://http2.mlstatic.com/D_NQ_NP_951682-MLU72755812942_112023-O.webp",
      stock: 3, description: "Eleva tus entrenamientos de cardio y resistencia con nuestra soga gym. Diseñada para saltos intensos y ejercicios de resistencia, esta soga resistente es tu compañera perfecta para quemar calorías y mejorar tu resistencia. Su durabilidad y diseño ergonómico la convierten en un accesorio esencial para tu rutina de gimnasio.", OldPrice: 38500}
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

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}
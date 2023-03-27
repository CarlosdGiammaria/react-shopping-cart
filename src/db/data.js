export const HOME_CATEGORY = 'HOME_CATEGORY'
export const PERSONAL_USE_CATEGORY = 'PERSONAL_USE_CATEGORY'
export const FOOD_CATEGORY = 'FOOD_CATEGORY'

const INVENTARIO = [
  {
    id: 1,
    name: 'jabon',
    description: 'jabon verde natural',
    image:
      'https://www.protex-soap.com/content/dam/cp-sites/personal-care/protex-relaunch/es_gt/products/protex-balance-saludable-110g.jpg',
    quantity: 12,
    price: 2000,
    category: HOME_CATEGORY,
  },
  {
    id: 2,
    name: 'cepillo',
    description: 'color rojo, tripe  cepillo',
    image:
      'https://media.istockphoto.com/id/153998974/es/foto/cepillo-de-dientes.jpg?s=612x612&w=0&k=20&c=uwt43n2BMLBxQSKQGYIEF8eOBhM_7PmS-sjc516Za0U=',
    quantity: 12,
    price: 2000,
    category: PERSONAL_USE_CATEGORY,
  },
  {
    id: 3,
    name: 'escoba',
    description: 'roja, bara de acero',
    image:
      'https://www.kipclin.com/images/virtuemart/product/KIP-NEGR-EP92.jpg',
    quantity: 15,
    price: 1000,
    category: HOME_CATEGORY,
  },
  {
    id: 4,
    name: 'tomate',
    description: 'vegetal, rojo con semillas',
    image:
      'https://media.istockphoto.com/id/941825878/es/foto/tomate-con-una-rebanada-aislada-con-trazado-de-recorte.jpg?s=612x612&w=0&k=20&c=0tNlCXT_Ng6DmexbqBN2rR7BUrur1pQKGcaPaemRwE4=',
    quantity: 15,
    price: 2300,
    category: FOOD_CATEGORY,
  },

  {
    id: 5,
    name: 'manzana',
    description: 'fruta',
    image: 'https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg',
    quantity: 10,
    price: 1600,
    category: FOOD_CATEGORY,
  },
  {
    id: 6,
    name: 'hilo dental',
    description: 'sabor a menta fresca',
    image:
      'https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/es-co/product-detail-pages/specialty/hilo-dental-colgate-menta-50m-pack.jpg',
    quantity: 20,
    price: 1200,
    category: PERSONAL_USE_CATEGORY,
  },
]

export default INVENTARIO

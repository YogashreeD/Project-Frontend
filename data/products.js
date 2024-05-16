export function findMatchingProduct(cartItem){
  let matchItem;
  products.forEach((prd)=>{
      if(cartItem.productId === prd.id){
          matchItem = prd;
      }
  });
  return matchItem;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "image/products/3-seater-sofa.jpg",
    name: "3-Seater Sofa",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "sofa",
      "seating"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "image/products/Beige-Art-leather-chair.jpg",
    name: "Beige Art leather chair",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sofa",
      "seating",
      "chair"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "image/products/black-office-chair.jpg",
    name: "Black Office Chair",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "seating",
      "chair",
      "office"
    ]
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "image/products/brown-recliner.jpg",
    name: "Modern Recliner - Brown",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "recliner",
      "sofa",
      "massage chair",
      "seating",
      "chair"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "image/products/Dining-chair.jpg",
    name: "Modern Dining chair",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "seating",
      "chair",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "image/products/grey-office-chair.jpg",
    name: "Office chair - Grey",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "seating",
      "chair",
      "office"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "image/products/metal-stool-bar-chair.jpg",
    name: "Metal Stool Bar Chair",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "seating",
      "chair",
      "office",
      "bar",
      "stool chair"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "image/products/mint-sofa-chair.jpg",
    name: "1-Seated Sofa Chair - Mint",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "seating",
      "chair",
      "office",
      "bar",
      "dining"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "image/products/Modern-comfy-velvet-chair.jpg",
    name: "Modern Comfy Velvet Chair",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "seating",
      "chair",
      "office",
      "bar",
      "hall"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "image/products/recliner.jpg",
    name: "Comfy Recliner",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "seating",
      "chair",
      "office",
      "bar",
      "hall",
      "massage"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "image/products/stainless-steel-bar-stool.jpg",
    name: "Stainless Steel Bar Stool",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "seating",
      "chair",
      "office",
      "bar",
      "hall"
    ]
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "image/products/yellow-sofa-chair.jpg",
    name: "Sofa Chair - Yellow",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "seating",
      "chair",
      "office",
      "bar",
      "hall"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "image/products/gaming-chair.webp",
    name: "Gaming chair",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "chair",
      "gaming chair",
      "gaming"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "image/products/shoe-cabinet.webp",
    name: "Shoe Cabinet",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "cabinet",
      "wardrobe",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "image/products/coffee-tables.webp",
    name: "Coffee Table",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "table",
      "guest",
      "coffee table"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "image/products/nesting-table.webp",
    name: "Nesting table",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "table",
      "guest",
      "nesting table"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "image/products/trunks.webp",
    name: "Trunks",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "table",
      "guest",
      "trunks"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "image/products/wood-console.webp",
    name: "Wooden Console",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "table",
      "showcase",
      "wooden console"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "image/products/c-shape-end-table.webp",
    name: "C-shaped End Table",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "table",
      "showcase",
      "end table"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "image/products/end-table.webp",
    name: "Brookleigh Sheesham Wood End Table In Provincial Teak Finish",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "table",
      "showcase",
      "end table"
    ]
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "image/products/tv-console.webp",
    name: "Segur Sheesham Wood TV Console",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "tv-console",
      "console",
      "showcase"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "image/products/sideboard.webp",
    name: "Davos Solid Wood L Sideboard In White Finish",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "sideboard",
      "console",
      "showcase",
      "cabinet"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "image/products/bookshelf.webp",
    name: "Book Shelf In Walnut Bronze Finish",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "bookshelf",
      "console",
      "showcase",
      "cabinet"
    ]
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "image/products/bookcase.webp",
    name: "Zenith Book Case in Columbian Walnut Finish",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "bookshelf",
      "console",
      "showcase",
      "cabinet"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "image/products/8-seater-dinning-set.webp",
    name: "Tourconing Sheesham Wood 8 Seater Dining Set",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "table",
      "dinning set",
      "dinning table",
      "kitchen"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "image/products/crockery-unit.webp",
    name: "Barkston Sheesham Wood Crockery Unit",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "cabinet",
      "dinning set",
      "dinning shelf",
      "kitchen"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "image/products/bar-cabinet.webp",
    name: "Bar Cabinet In Provincial Teak Finish",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "cabinet",
      "dinning set",
      "bar cabinet",
      "kitchen"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "image/products/bar-trolley.webp",
    name: "Mirra Solid Wood Bar Trolley in Walnut Colour",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "cabinet",
      "dinning set",
      "bar cabinet",
      "kitchen"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "image/products/queen-size-bed.webp",
    name: "Kimi Queen Size Bed in Walnut Finish with Box Storage",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "bedroom",
      "queen size bed",
      "bed"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "image/products/poster-bed.webp",
    name: "Navah Solid Wood Poster Queen Bed",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "bedroom",
      "queen size bed",
      "bed",
      "poster bed"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "image/products/single-bed.webp",
    name: "Eva Sheesham Wood Single Bed",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bedroom",
      "single bed",
      "bed"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "image/products/bedside-table.webp",
    name: "Caily Bedside Table in Wenge Finish with Drawers",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "bedroom",
      "single bed",
      "bed"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "image/products/treasure-chest-of-drawers.webp",
    name: "Treasure chest of drawers",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "treasure chest of drawers",
      "draw",
      "cabinet"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "image/products/dressing-table.webp",
    name: "PieceHermes Dressing Cabinet & Mirror in Pearlised Beige",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "accessories",
      "dressing table",
      "draw",
      "cabinet",
      "bedroom"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "image/products/dressing-unit.webp",
    name: "Kosmo Ripple Dressing Unit in High Gloss Grey Finish",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "accessories",
      "dressing table",
      "draw",
      "cabinet",
      "bedroom"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "image/products/wardrobe.webp",
    name: "3 Door Wardrobe In Wenge Finish",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home",
      "accessories",
      "dressing table",
      "draw",
      "cabinet"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "image/products/sliding-wardrobe.webp",
    name: "Kosmo Universal Sliding Door Wardrobe In Natural Teak Finish",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bedroom",
      "home",
      "accessories",
      "dressing table",
      "draw",
      "cabinet"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "image/products/crib.webp",
    name: "Joy Crib in Yellow Colour",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "bedroom",
      "kids bed",
      "crib",
      "kids"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "image/products/swing.webp",
    name: "Wicker Swing in White & Grey Colour",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "swing",
      "outdoor",
      "seating"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "image/products/computer-table.webp",
    name: "Zanko Computer Table in Leon Teak Finish",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "computer table",
      "table",
      "study table"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "image/products/hutch-table.webp",
    name: "Kosmo Coral Kids Study Table in Drift Wood Finish",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "computer table",
      "table",
      "study table",
      "kids table"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "image/products/office-cabinet.webp",
    name: "Nova Pedestal in Walnut Rigato Finish with 3 Drawer",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "cabinet",
      "draw",
      "office",
      "office draw"
    ]
  }
];
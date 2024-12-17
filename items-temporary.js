import { useId } from "react";

const tShirtsData = [
  // man's
  {
    id: `prod-${useId()}`,
    name: "BASIC T-SHIRT WITH A NARROW CUT",
    descr: "Stretchy cotton T-shirt with a round collar and short sleeves.",
    images: {
      white: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/white/t-shirt-3.jpeg",
      ],
      black: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/black/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/black/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/black/t-shirt-3.jpg",
      ],
      brown: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/brown/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/brown/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/brown/t-shirt-3.jpg",
      ],
    },
    price: 13.5,
    colors: ["white", "black", "brown"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 9,
  },
  {
    id: `prod-${useId()}`,
    name: "T-SHIRT WITH A CONTRASTING PRINT",
    descr:
      "T-shirt with a round collar and short sleeves. Contrasting print on the front and back.",
    images: {
      black: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-2/black/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-2/black/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-2/black/t-shirt-3.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-2/black/t-shirt-4.jpg",
      ],
    },
    price: 27,
    colors: ["black"],
    sizes: ["S", "M", "L"],
    category: "man",
    rating: 8,
  },
  {
    id: `prod-${useId()}`,
    name: "T-SHIRT WITH A CONTRASTING PRINT",
    descr:
      "T-shirt with a round collar and short sleeves. Contrasting inscription on the front.",
    images: {
      lightyellow: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-3/lightyellow/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-3/lightyellow/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-3/lightyellow/t-shirt-3.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-3/lightyellow/t-shirt-4.jpg",
      ],
    },
    price: 27,
    colors: ["lightyellow"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 10,
  },
  {
    id: `prod-${useId()}`,
    name: "T-SHIRT WITH A CONTRASTING PRINT",
    descr:
      "Oversized T-shirt with a round collar and short sleeves. Contrasting print on the front.",
    images: {
      whitesmoke: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-4/whitesmoke/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-4/whitesmoke/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-4/whitesmoke/t-shirt-3.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-4/whitesmoke/t-shirt-4.jpg",
      ],
    },
    price: 27,
    colors: ["whitesmoke"],
    sizes: ["M", "L"],
    category: "man",
    rating: 9,
  },
  {
    id: `prod-${useId()}`,
    name: "SATIN T-SHIRT",
    descr: "Satin T-shirt with a round collar and short sleeves.",
    images: {
      black: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-3.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-4.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-5.jpg",
      ],
    },
    price: 40,
    colors: ["black"],
    sizes: ["S", "L"],
    category: "man",
    rating: 10,
  },
  {
    id: `prod-${useId()}`,
    name: "DENIM T-SHIRT - LIMITED EDITION",
    descr:
      "Cotton denim loose-fitting T-shirt with a boiled effect, a round collar and short sleeves. Asymmetrical cut and side slits at the bottom.",
    images: {
      burlywood: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/burlywood/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/burlywood/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/burlywood/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/burlywood/t-shirt-4.jpeg",
      ],
      chocolate: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/chocolate/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/chocolate/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/chocolate/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/chocolate/t-shirt-4.jpeg",
      ],
    },
    price: 51,
    colors: ["burlywood", "chocolate"],
    sizes: ["M", "L", "XL"],
    category: "man",
    rating: 10,
  },
  {
    id: `prod-${useId()}`,
    name: "T-SHIRT WITH DOUBLE SLEEVES",
    descr:
      "Loose-fitting T-shirt with a round collar and long sleeves with a double effect. Contrasting print on the front.",
    images: {
      darkcyan: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-7/darkcyan/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-7/darkcyan/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-7/darkcyan/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-7/darkcyan/t-shirt-4.jpeg",
      ],
    },
    price: 40.5,
    colors: ["darkcyan"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 8,
  },
  {
    id: `prod-${useId()}`,
    name: "T-SHIRT WITH A NARROW CUT AND LONG SLEEVES",
    descr: "Stretchy cotton T-shirt with a round collar and long sleeves.",
    images: {
      olivedrab: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/olivedrab/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/olivedrab/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/olivedrab/t-shirt-3.jpeg",
      ],
      darkblue: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkblue/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkblue/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkblue/t-shirt-3.jpeg",
      ],
      darkgray: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkgray/t-shirt-3.jpeg",
      ],
      white: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/white/t-shirt-3.jpeg",
      ],
    },
    price: 16,
    colors: ["olivedrab", "darkblue", "darkgray", "white"],
    sizes: ["S", "M", "L"],
    category: "man",
    rating: 9,
  },
  {
    id: `prod-${useId()}`,
    name: "HOODIE WITH A TAI DAI PRINT",
    descr: "A sweatshirt with a round collar, short sleeves and uneven edges.",
    images: {
      olive: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-9/olive/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-9/olive/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-9/olive/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-9/olive/t-shirt-4.jpeg",
      ],
    },
    price: 38,
    colors: ["olive"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 10,
  },
  {
    id: `prod-${useId()}`,
    name: "BASIC T-SHIRT WITH A V-NECKLINE",
    descr: "Stretchy cotton slim fit T-shirt with a V-neck and short sleeves.",
    images: {
      black: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-5.jpeg",
      ],
      white: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-5.jpeg",
      ],
    },
    price: 13.5,
    colors: ["black", "white"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 9,
  },
  {
    id: `prod-${useId()}`,
    name: "COTTON-LINEN T-SHIRT",
    descr:
      "Cotton-linen oversized T-shirt with a round collar and short sleeves.",
    images: {
      lightgreen: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgreen/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgreen/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgreen/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgreen/t-shirt-4.jpeg",
      ],
      lightgray: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgray/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgray/t-shirt-4.jpeg",
      ],
      brown: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/brown/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/brown/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/brown/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/brown/t-shirt-4.jpeg",
      ],
    },
    price: 24.5,
    colors: ["lightgreen", "lightgray", "brown"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 10,
  },
  {
    id: `prod-${useId()}`,
    name: "T-SHIRT WITH AN INSCRIPTION",
    descr:
      "Loose-fitting T-shirt with a round collar and short sleeves. Contrasting inscription on the front.",
    images: {
      black: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-5.jpeg",
      ],
    },
    price: 27,
    colors: ["black"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 8,
  },
  {
    id: `prod-${useId()}`,
    name: "T-SHIRT WITH X SALVENTIUS PRINT",
    descr:
      "T-shirt with a round collar and long sleeves. Contrasting print on the front and back.",
    images: {
      white: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-5.jpeg",
      ],
    },
    price: 35,
    colors: ["white"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 10,
  },
  {
    id: `prod-${useId()}`,
    name: "T-SHIRT WITH A CONTRASTING PRINT",
    descr:
      "Boiled T-shirt with a distressed finish, a round collar, short sleeves and a contrasting print on the front and back.",
    images: {
      darkgray: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgray/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgray/t-shirt-4.jpeg",
      ],
      darkgoldenrod: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgoldenrod/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgoldenrod/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgoldenrod/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgoldenrod/t-shirt-4.jpeg",
      ],
    },
    price: 27,
    colors: ["darkgray", "darkgoldenrod"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 10,
  },
  {
    id: `prod-${useId()}`,
    name: "PRINTED T-SHIRT",
    descr:
      "Loose-fitting T-shirt with a round collar and short sleeves. Contrasting print on the front.",
    images: {
      lightsalmon: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-5.jpeg",
      ],
    },
    price: 27,
    colors: ["lightsalmon"],
    sizes: ["S", "M", "L", "XL"],
    category: "man",
    rating: 9,
  },
  {
    id: `prod-${useId()}`,
    name: "TEXTURED T-SHIRT",
    descr:
      "An oversized T-shirt with a round collar, short sleeves and side slits at the bottom.",
    images: {
      lightgoldenrodyellow: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-5.jpeg",
      ],
    },
    price: 27,
    colors: ["lightgoldenrodyellow"],
    sizes: ["S", "M", "L"],
    category: "man",
    rating: 10,
  },
  {
    id: `prod-${useId()}`,
    name: "COTTON T-SHIRT WITH REVERSE SEAMS",
    descr:
      "Boiled oversized T-shirt with reverse seams, round collar and short sleeves.",
    images: {
      white: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/white/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/white/t-shirt-4.jpeg",
      ],
      lightgray: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/lightgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/lightgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/lightgray/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/lightgray/t-shirt-4.jpeg",
      ],
      dimgray: [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/dimgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/dimgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/dimgray/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/dimgray/t-shirt-4.jpeg",
      ],
    },
    price: 13.5,
    colors: ["white", "lightgray", "dimgray"],
    sizes: ["XS", "S", "M", "L"],
    category: "women",
    rating: 10,
  },
];
console.log(JSON.stringify(tShirtsData));

/* 
mockapi data
[
  {
    "id": "prod-:r0:",
    "name": "BASIC T-SHIRT WITH A NARROW CUT",
    "descr": "Stretchy cotton T-shirt with a round collar and short sleeves.",
    "images": {
      "white": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/white/t-shirt-3.jpeg"
      ],
      "black": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/black/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/black/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/black/t-shirt-3.jpg"
      ],
      "brown": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/brown/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/brown/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-1/brown/t-shirt-3.jpg"
      ]
    },
    "price": 13.5,
    "colors": [
      "white",
      "black",
      "brown"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 9
  },
  {
    "id": "prod-:r1:",
    "name": "T-SHIRT WITH A CONTRASTING PRINT",
    "descr": "T-shirt with a round collar and short sleeves. Contrasting print on the front and back.",
    "images": {
      "black": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-2/black/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-2/black/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-2/black/t-shirt-3.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-2/black/t-shirt-4.jpg"
      ]
    },
    "price": 27,
    "colors": [
      "black"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "category": "man",
    "rating": 8
  },
  {
    "id": "prod-:r2:",
    "name": "T-SHIRT WITH A CONTRASTING PRINT",
    "descr": "T-shirt with a round collar and short sleeves. Contrasting inscription on the front.",
    "images": {
      "lightyellow": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-3/lightyellow/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-3/lightyellow/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-3/lightyellow/t-shirt-3.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-3/lightyellow/t-shirt-4.jpg"
      ]
    },
    "price": 27,
    "colors": [
      "lightyellow"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 10
  },
  {
    "id": "prod-:r3:",
    "name": "T-SHIRT WITH A CONTRASTING PRINT",
    "descr": "Oversized T-shirt with a round collar and short sleeves. Contrasting print on the front.",
    "images": {
      "whitesmoke": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-4/whitesmoke/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-4/whitesmoke/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-4/whitesmoke/t-shirt-3.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-4/whitesmoke/t-shirt-4.jpg"
      ]
    },
    "price": 27,
    "colors": [
      "whitesmoke"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "category": "man",
    "rating": 9
  },
  {
    "id": "prod-:r4:",
    "name": "SATIN T-SHIRT",
    "descr": "Satin T-shirt with a round collar and short sleeves.",
    "images": {
      "black": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-1.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-2.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-3.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-4.jpg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-5/black/t-shirt-5.jpg"
      ]
    },
    "price": 40,
    "colors": [
      "black"
    ],
    "sizes": [
      "S",
      "L"
    ],
    "category": "man",
    "rating": 10
  },
  {
    "id": "prod-:r5:",
    "name": "DENIM T-SHIRT - LIMITED EDITION",
    "descr": "Cotton denim loose-fitting T-shirt with a boiled effect, a round collar and short sleeves. Asymmetrical cut and side slits at the bottom.",
    "images": {
      "burlywood": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/burlywood/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/burlywood/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/burlywood/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/burlywood/t-shirt-4.jpeg"
      ],
      "chocolate": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/chocolate/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/chocolate/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/chocolate/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-6/chocolate/t-shirt-4.jpeg"
      ]
    },
    "price": 51,
    "colors": [
      "burlywood",
      "chocolate"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 10
  },
  {
    "id": "prod-:r6:",
    "name": "T-SHIRT WITH DOUBLE SLEEVES",
    "descr": "Loose-fitting T-shirt with a round collar and long sleeves with a double effect. Contrasting print on the front.",
    "images": {
      "darkcyan": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-7/darkcyan/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-7/darkcyan/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-7/darkcyan/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-7/darkcyan/t-shirt-4.jpeg"
      ]
    },
    "price": 40.5,
    "colors": [
      "darkcyan"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 8
  },
  {
    "id": "prod-:r7:",
    "name": "T-SHIRT WITH A NARROW CUT AND LONG SLEEVES",
    "descr": "Stretchy cotton T-shirt with a round collar and long sleeves.",
    "images": {
      "olivedrab": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/olivedrab/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/olivedrab/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/olivedrab/t-shirt-3.jpeg"
      ],
      "darkblue": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkblue/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkblue/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkblue/t-shirt-3.jpeg"
      ],
      "darkgray": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/darkgray/t-shirt-3.jpeg"
      ],
      "white": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-8/white/t-shirt-3.jpeg"
      ]
    },
    "price": 16,
    "colors": [
      "olivedrab",
      "darkblue",
      "darkgray",
      "white"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "category": "man",
    "rating": 9
  },
  {
    "id": "prod-:r8:",
    "name": "HOODIE WITH A TAI DAI PRINT",
    "descr": "A sweatshirt with a round collar, short sleeves and uneven edges.",
    "images": {
      "olive": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-9/olive/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-9/olive/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-9/olive/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-9/olive/t-shirt-4.jpeg"
      ]
    },
    "price": 38,
    "colors": [
      "olive"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 10
  },
  {
    "id": "prod-:r9:",
    "name": "BASIC T-SHIRT WITH A V-NECKLINE",
    "descr": "Stretchy cotton slim fit T-shirt with a V-neck and short sleeves.",
    "images": {
      "black": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/black/t-shirt-5.jpeg"
      ],
      "white": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-12/white/t-shirt-5.jpeg"
      ]
    },
    "price": 13.5,
    "colors": [
      "black",
      "white"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 9
  },
  {
    "id": "prod-:ra:",
    "name": "COTTON-LINEN T-SHIRT",
    "descr": "Cotton-linen oversized T-shirt with a round collar and short sleeves.",
    "images": {
      "lightgreen": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgreen/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgreen/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgreen/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgreen/t-shirt-4.jpeg"
      ],
      "lightgray": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgray/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/lightgray/t-shirt-4.jpeg"
      ],
      "brown": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/brown/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/brown/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/brown/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-13/brown/t-shirt-4.jpeg"
      ]
    },
    "price": 24.5,
    "colors": [
      "lightgreen",
      "lightgray",
      "brown"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 10
  },
  {
    "id": "prod-:rb:",
    "name": "T-SHIRT WITH AN INSCRIPTION",
    "descr": "Loose-fitting T-shirt with a round collar and short sleeves. Contrasting inscription on the front.",
    "images": {
      "black": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-14/black/t-shirt-5.jpeg"
      ]
    },
    "price": 27,
    "colors": [
      "black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 8
  },
  {
    "id": "prod-:rc:",
    "name": "T-SHIRT WITH X SALVENTIUS PRINT",
    "descr": "T-shirt with a round collar and long sleeves. Contrasting print on the front and back.",
    "images": {
      "white": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-15/white/t-shirt-5.jpeg"
      ]
    },
    "price": 35,
    "colors": [
      "white"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 10
  },
  {
    "id": "prod-:rd:",
    "name": "T-SHIRT WITH A CONTRASTING PRINT",
    "descr": "Boiled T-shirt with a distressed finish, a round collar, short sleeves and a contrasting print on the front and back.",
    "images": {
      "darkgray": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgray/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgray/t-shirt-4.jpeg"
      ],
      "darkgoldenrod": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgoldenrod/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgoldenrod/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgoldenrod/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-16/darkgoldenrod/t-shirt-4.jpeg"
      ]
    },
    "price": 27,
    "colors": [
      "darkgray",
      "darkgoldenrod"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 10
  },
  {
    "id": "prod-:re:",
    "name": "PRINTED T-SHIRT",
    "descr": "Loose-fitting T-shirt with a round collar and short sleeves. Contrasting print on the front.",
    "images": {
      "lightsalmon": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-17/lightsalmon/t-shirt-5.jpeg"
      ]
    },
    "price": 27,
    "colors": [
      "lightsalmon"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "category": "man",
    "rating": 9
  },
  {
    "id": "prod-:rf:",
    "name": "TEXTURED T-SHIRT",
    "descr": "An oversized T-shirt with a round collar, short sleeves and side slits at the bottom.",
    "images": {
      "lightgoldenrodyellow": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-4.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-18/lightgoldenrodyellow/t-shirt-5.jpeg"
      ]
    },
    "price": 27,
    "colors": [
      "lightgoldenrodyellow"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "category": "man",
    "rating": 10
  },
  {
    "id": "prod-:rg:",
    "name": "COTTON T-SHIRT WITH REVERSE SEAMS",
    "descr": "Boiled oversized T-shirt with reverse seams, round collar and short sleeves.",
    "images": {
      "white": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/white/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/white/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/white/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/white/t-shirt-4.jpeg"
      ],
      "lightgray": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/lightgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/lightgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/lightgray/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/lightgray/t-shirt-4.jpeg"
      ],
      "dimgray": [
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/dimgray/t-shirt-1.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/dimgray/t-shirt-2.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/dimgray/t-shirt-3.jpeg",
        "https://raw.githubusercontent.com/KovalDima/zaba-app/main/images/t-shirts/t-shirt-19/dimgray/t-shirt-4.jpeg"
      ]
    },
    "price": 13.5,
    "colors": [
      "white",
      "lightgray",
      "dimgray"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "category": "women",
    "rating": 10
  }
]
*/

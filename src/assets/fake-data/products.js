// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

export {
  product_01_image_01,
  product_01_image_02,
  product_01_image_03,
  product_02_image_01,
  product_02_image_02,
  product_02_image_03,
  product_03_image_01,
  product_03_image_02,
  product_03_image_03,
  product_04_image_01,
  product_04_image_02,
  product_04_image_03,
  product_05_image_01,
  product_05_image_02,
  product_05_image_03,
  product_06_image_01,
  product_06_image_02,
  product_06_image_03,

}

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 2.5,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Indulge in our Chicken Burger, a culinary delight made with premium ingredients and seasoned to perfection. Savor the taste of succulent chicken, fresh lettuce, and creamy sauces, packed between soft, freshly baked buns. Enjoy a protein-packed, convenient, and versatile meal that promises unmatched satisfaction with every bite. Order now for a flavor-packed experience delivered right to your doorstep!. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 1.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Delight your taste buds with our Vegetable Pizza, a medley of colorful, fresh vegetables atop a crispy, golden crust. Experience the perfect blend of flavors from ripe tomatoes, crunchy bell peppers, savory mushrooms, and more, all generously layered with gooey cheese. It's a wholesome, satisfying choice for vegetarians and pizza enthusiasts alike. Order now and enjoy a burst of garden-fresh goodness in every slice!.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 1.7,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Savor the simplicity of our Double Cheese Margherita Pizza, where the classic combination of rich, melted mozzarella and tangy tomato sauce takes center stage. Baked to golden perfection, this pizza boasts a double layer of creamy cheese, delivering an indulgent and gooey delight with every bite. Treat yourself to a taste of pure cheesy goodness, and experience pizza perfection like never before. Order now and enjoy a heavenly blend of flavors that will leave you craving more!.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 5.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Dive into the vibrant flavors of our Mexican Green Wave pizza, where zesty salsa verde meets creamy guacamole, layered with spicy jalapeños and colorful bell peppers. Topped with a blend of melted cheese, this pizza is a fiesta of flavors that will transport your taste buds to Mexico. Experience the bold and lively combination of ingredients, creating a wave of excitement with every slice. Order now for a Mexican culinary adventure delivered right to your doorstep.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 3.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Indulge in the classic goodness of our Cheese Burger, featuring a succulent beef patty topped with layers of melted cheese, fresh lettuce, ripe tomatoes, and tangy pickles, all nestled within a soft, toasted bun. Experience the perfect harmony of flavors and textures, from the savory meat to the creamy cheese, creating a mouthwatering delight with every bite. Bite into satisfaction and order your Cheese Burger now for an irresistible taste of comfort and satisfaction!.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 5.5,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Treat yourself like royalty with our Royal Cheese Burger, a culinary masterpiece fit for kings and queens. This regal delight features a premium beef patty, crowned with layers of decadent melted cheese, crisp lettuce, juicy tomatoes, and gourmet sauces, all encased in a freshly baked, sesame-studded bun. Experience the epitome of burger perfection, where every bite is a luxurious blend of flavors and textures. Order now and indulge in a truly majestic dining experience that will leave you feeling like culinary royalty!",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 2.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Dive into the exquisite flavors of our Seafood Pizza, where the bounty of the ocean meets the art of Italian cuisine. This delectable pizza features succulent shrimp, tender calamari, flavorful clams, and briny mussels, all expertly paired with a rich tomato sauce and a blend of melted cheeses. Experience the taste of the sea with a hint of spice, all atop a perfectly baked crust, creating a harmonious symphony of flavors. Order now and embark on a culinary voyage with our Seafood Pizza, a seafood lover's dream come true!.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 4.3,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Experience pizza perfection with our Thin Cheese Pizza, where simplicity meets taste. Delight in a thin, crispy crust generously adorned with a layer of premium, gooey melted cheese. Each bite offers a perfect balance of crispy texture and cheesy goodness, showcasing the essence of traditional Italian flavors. It's a classic choice for cheese enthusiasts and pizza purists alike. Order now and savor the simplicity of our Thin Cheese Pizza, a timeless favorite that never fails to satisfy..",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 4.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Indulge in the earthy goodness of our Pizza with Mushrooms, where savory mushrooms meet delectable cheese and zesty tomato sauce. Each slice features tender, sautéed mushrooms generously scattered atop a perfectly baked crust, creating a harmonious blend of flavors and textures. Whether you're a mushroom lover or a pizza aficionado, this mouthwatering combination promises a delightful culinary experience. Order now and enjoy the irresistible taste of our Pizza with Mushrooms for a satisfying and flavorful meal!.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 6.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Savor the timeless taste of our Classic Hamburger, where quality meets simplicity. Featuring a juicy beef patty grilled to perfection, topped with fresh lettuce, ripe tomatoes, crunchy pickles, and a dollop of tangy ketchup and mustard, all encased in a soft, toasted bun. It's a satisfying culinary experience that captures the essence of traditional American flavors. Bite into nostalgia and order our Classic Hamburger now for an authentic taste of burger perfection!.",
  },

  {
    id: "5.9",
    title: "Crunchy Bread ",
    price: 2.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Indulge in the delightful crunch of our freshly baked Crunchy Bread. Each bite offers a satisfying contrast between the crispy crust and the soft, airy interior, creating a textural delight for your palate. Perfect for sandwiches, dipping into soups, or enjoying on its own, our Crunchy Bread is a versatile and flavorful choice. Experience the ultimate crunch and freshness with every bite. Order now and elevate your dining experience with our irresistible Crunchy Bread!.",
  },

  {
    id: "12",
    title: "Loaf Bread ",
    price: 3.2,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Discover the simple pleasure of our Loaf Bread – a freshly baked masterpiece that embodies home-baked goodness. Enjoy the soft, fluffy texture and the delightful aroma of a perfectly baked loaf, made with the finest ingredients and crafted with care. Whether you're toasting it for breakfast, making sandwiches for lunch, or enjoying it as a side with dinner, our Loaf Bread is the epitome of comfort and taste. Order now and bring the warmth of a bakery to your home with every slice!.",
  },
  {
    id: "13",
    title: "Loaf Bread2 ",
    price: 3.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Discover the simple pleasure of our Loaf Bread – a freshly baked masterpiece that embodies home-baked goodness. Enjoy the soft, fluffy texture and the delightful aroma of a perfectly baked loaf, made with the finest ingredients and crafted with care. Whether you're toasting it for breakfast, making sandwiches for lunch, or enjoying it as a side with dinner, our Loaf Bread is the epitome of comfort and taste. Order now and bring the warmth of a bakery to your home with every slice!.",
  },
];

export default products;
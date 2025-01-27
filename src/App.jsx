import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Iphone16 from "./assets/iphone.jpg";
import S24 from "./assets/s24.jpg";
import Lenovo from "./assets/lenovo.jpg";
import Pavilion from "./assets/pavilion.jpg";
import Xbox from "./assets/xbox.jpg";
import SamsungTv from "./assets/samsungtv.jpg";
import SoundBar from "./assets/soundbar.jpg";

const products = [
  {
    productId: "prod1",
    product: "Iphone 16",
    productImg: Iphone16,
    description: (
      <p>
        6.1-inch Super Retina XDR OLED display A18 chip, dual 48MP + 12MP camera
        system.
      </p>
    ),
    price: "5490000",
    discountPrice: "6490000",
    percentage: "-10%",
    stock: "",
  },
  {
    productId: "prod2",
    product: "SamSung S24",
    productImg: S24,
    description: (
      <p>
        6.2-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 3 processor, triple
        50MP camera system, and a 4000mAh battery.
      </p>
    ),
    price: "6450000",
    discountPrice: "7450000",
    percentage: "-10%",
    stock: "New Stock",
  },
  {
    productId: "prod1",
    product: "Lenovo IdeaPad Thin and Light",
    productImg: Lenovo,
    description: (
      <p>
        Features a 15.6" Full HD display, AMD Ryzen 5 5500U processor, 20GB RAM,
        and 512GB SSD. It's lightweight
      </p>
    ),
    price: "8350000",
    discountPrice: "8850000",
    percentage: "-5%",
    stock: "Stock Out",
  },
  {
    productId: "prod1",
    product: "Pavilion",
    productImg: Pavilion,
    description: (
      <p>
        14-inch Full HD touchscreen display, 12th Gen Intel Core processors, up
        to 16GB RAM, and SSD storage options up to 1TB.
      </p>
    ),
    price: "7500000",
    discountPrice: "8500000",
    percentage: "-10%",
    stock: "Out of Stock",
  },
  {
    productId: "prod1",
    product: "X box",
    productImg: Xbox,
    description: (
      <p>
        4K gaming at up to 120 frames per second, offering an incredibly smooth
        and immersive gaming experience.
      </p>
    ),
    price: "7500000",
    discountPrice: "8500000",
    percentage: "-10%",
    stock: "New Stock",
  },

  {
    productId: "prod1",
    product: "Samsung S93D TV",
    productImg: SamsungTv,
    description: (
      <p>
        stunning 4K OLED Smart TV, featuring the NQ4 AI Gen2 Processor for
        enhanced picture and sound quality.
      </p>
    ),
    price: "17500000",
    discountPrice: "18500000",
    percentage: "-10%",
    stock: "Out of Stock",
  },

  {
    productId: "prod1",
    product: "Sound Bar",
    productImg: SoundBar,
    description: (
      <p>
        14-inch Full HD touchscreen display, 12th Gen Intel Core processors, up
        to 16GB RAM, and SSD storage options up to 1TB.
      </p>
    ),
    price: "4500000",
    discountPrice: "5500000",
    percentage: "-10%",
    stock: "Out of Stock",
  },
];

const handleStock = (product) => {
  if (product.stock === "New Stock" || product.stock === "Stock Out") {
    return product.stock;
  } else {
    return "";
  }
};

function App() {
  const [productIndex, setProductIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const currentProduct = products[productIndex];
  const stockStatus = handleStock(currentProduct);

  const handleNext = () => {
    if (productIndex < products.length - 1) {
      setProductIndex(productIndex + 1);
    }
  };

  const handlePrev = () => {
    if (productIndex > 0) {
      setProductIndex(productIndex - 0);
    }
  };

  const handleAddToCart = (product) => {
    // Assuming you have a cart state and a function to update it
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingProduct = prevCart.find(
        (item) => item.product === product.product
      );

      if (existingProduct) {
        // If it is, increase the quantity
        return prevCart.map((item) =>
          item.product === product.product
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If it's not, add it to the cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="productDisplay">
        {products.map((product, index) => (
          <Products
            key={index}
            productId={product.productId}
            product={product.product}
            productImg={product.productImg}
            description={product.description}
            price={product.price}
            discountPrice={product.discountPrice}
            percentage={product.percentage}
            stock={handleStock(product)}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
}

export default App;

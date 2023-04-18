import "./styles.css";
import data from "./data.json";
import { useState } from "react";
import Products from "./Products";
export default function App() {
  const [items, setItems] = useState(data);
  const [newProd, setNewProd] = useState({
    title: "",
    image: "",
    description: "",
    price: ""
  });
  const updateTitle = (e) => {
    setNewProd({ ...newProd, title: e.target.value });
  };
  const updateImage = (e) => {
    setNewProd({ ...newProd, image: e.target.value });
  };
  const updateDescription = (e) => {
    setNewProd({ ...newProd, description: e.target.value });
  };
  const updatePrice = (e) => {
    setNewProd({ ...newProd, price: e.target.value });
  };
  const addProduct = () => {
    setItems([...items, { ...newProd }]);
  };
  const deleteProduct = (i) => {
    alert(i);
    let temp = [...items];
    temp.splice(i, 1);
    setItems([...temp]);
  };
  return (
    <div className="App">
      <input type="text" onKeyUp={updateTitle} /> <br />
      <input type="text" onKeyUp={updateImage} /> <br />
      <input type="text" onKeyUp={updateDescription} /> <br />
      <input type="text" onKeyUp={updatePrice} /> <br />
      <button onClick={addProduct}>ADD_PRODUCT </button>
      <div className="products-container">
        {items.map((item, i) => {
          const { id, title, price, description, image } = item;
          return (
            <div key={id} className="products">
              <Products
                title={title}
                price={price}
                description={description}
                image={image}
                deleteProduct={deleteProduct}
                i={i}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllItems from "./components/AllItems";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      title: "Grodzic",
      category: "together",
      img: "PXL_20210522_135925335.jpg",
      price: "10"
    },
    {
      id: 2,
      title: "Grodzic",
      category: "single",
      img: "B612_20210523_004430_867.jpg",
      price: "20"
    },
    {
      id: 3,
      title: "Grodzic",
      category: "single",
      img: "B612_20210523_004738_896.jpg ",
      price: "30"
    },
    {
      id: 4,
      title: "Grodzic",
      category: "together",
      img: "B612_20210523_172935_115.jpg",
      price: "40"
    }
  ]);
  const [orders, setOrders] = useState([]);
  const [curentItems, setCurentItems] = useState([]);
  const [showFull, setShowFull] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    setCurentItems(items);
  }, [items]);

  function addToOrder(item) {
    let isInArrey = false;
    orders.forEach(el => {
      if (el.id === item.id)
        isInArrey = true;
    });
    if (!isInArrey) setOrders((prevOders) => [...prevOders, item]);
  }
  function deleteOrder(id) {
    setOrders((myOrders) => myOrders.filter(el => el.id !== id));
  }
  function chooseCategory(category) {
    if (category === "all") {
      setCurentItems(items);
      return;
    }
    setCurentItems(() => items.filter(el => el.category === category));
  }
  function onShowItem(item) {
    setFullItem(item);
    setShowFull(!showFull);
  }
  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <AllItems items={curentItems} onAdd={addToOrder} onShowItem={onShowItem} />
      {showFull && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem} />}
      <Footer />
    </div>
  );
}
export default App;

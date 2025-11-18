import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] =useState([]);
  // function addToCart(book){
  //   const dupeItem = cart.find(item => +item.id === +book.id);
  //   if(dupeItem){
  //     dupeItem.quantity +=1;
  //     setCart(cart.map(item => {
  //       if(item.id === dupeItem.id){
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1,
  //         }
  //       }
  //       else{
  //         return item
  //       }
  //     }))
  //   }
  //   else{
  //     setCart([...cart, {...book, quantity:1}])
  //   }
  // }

  function addToCart(book){

    setCart([...cart, {...book, quantity: 1}])
    console.log(cart)
  } 


  function changeQuantity(book, quantity){
    setCart(cart.map(item =>{
      if(item.id === book.id){
        return{
          ...item,
          quantity: +quantity,
        }
      }
      else{
        return item
      }
    }))
  }

  function removeItem(item){
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() =>{

  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Books books={books}/>}/>
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
          <Route path='/cart' element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

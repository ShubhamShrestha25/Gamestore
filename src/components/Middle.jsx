import React, { Component } from "react";

import data from "../data.json";
import Filter from "./Filter";
import Products from "./Product";
import Cart from "./Cart"



class Middle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products: data.products,
       sort: "",
       cartItems: []
    }
  }

  removeFromCart =(product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((remove) => remove.id !== product.id),
    })
  }
  addToCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item =>{
      if(item.id === product.id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product, count:1})
    }
    this.setState({cartItems})
  }

  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(this.state.products)
    this.setState((state)=>({
      sort: sort,
      products: this.state.products.slice().sort((a,b)=>(
        sort === "lowest"?
        ((a.price > b.price)? 1:-1):
        sort === "highest"?
        ((a.price < b.price)? 1:-1):
        ((a.id > b.id)? 1:-1)  
      ))
    }))
  }
  
 render(){
return (
        <div className="content">
        <div className="main">
          <Filter 
          count={this.state.products.length}
          sort={this.state.sort} 
          sortProducts={this.sortProducts}/>
          <Products
           products={this.state.products}
           addToCart={this.addToCart}
          />
          </div>
        <div className="sidebar"><Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/> </div>
      </div>
    )
}
}

export default Middle;

import React, { Component } from "react";

class Products extends Component {
  render() {
   
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a href={"#" + product.title}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{product.price}</div>
                  <div className="button">
                  <button onclick={() => this.props.addToCart(product)}className="cartbutton">Add To Cart</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;

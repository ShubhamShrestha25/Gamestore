import React, { Component } from "react";
import Modal from "react-modal";

class Products extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       product: null,
    }
  }

  openModal = (product) => {
    this.setState( {product})
  }

  closeModal = () => {
    this.setState({product:null})
  }
  
  render() {
    const {product} = this.state;
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a href={"#" + product.title}>
                  <img onClick={()=> this.openModal(product)} src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>${product.price}</div>
                  <div className="button">
                  <button onClick={() => this.props.addToCart(product)}className="cartbutton">Add To Cart</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {product && (<Modal isOpen={true} onRequestClose={this.closeModal}>
          <button className="close" onClick={this.closeModal}>X</button>
          <div className="productDetails">
            <img src={product.image} alt={product.title} />
            <div className="productDescription">
              <p>
                <strong>{product.title}</strong>
              </p>
              <p>
                {product.Description}
              </p>
              <div >
                <div className="productPrice"> ${product.price }</div>
                <button className="cartButton" onClick={() =>{
                  this.props.addToCart(product)
                  this.closeModal()
                }}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </Modal>)
        }
      </div>
    );
  }
}

export default Products;

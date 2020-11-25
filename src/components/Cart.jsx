import React, { Component } from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showCheckout: false
        }
    }
    submitHandler = () =>{
        alert("Thank you")
    }
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length === 0? <div className="cartHeader">Cart is empty</div>
                :
                <div className="cartHeader"> 
                    You have {cartItems.length} in the cart {" "}
                </div>
                }
                <div>
                    <div className="cart">
                        <ul className="cartItems">
                            {cartItems.map(item =>(
                                <li key={item.id}>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                    <ul> 
                                    <li className="li1">{item.title} </li>
                                     <li className="li2"> ${item.price} </li>
                                     </ul>   
                                   <div className="right">
                                   <button onClick={()=> this.props.removeFromCart(item)}><HighlightOffIcon/></button>
                                   </div>
                                </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length!==0 && (
                        <div className="cart">
                        <div className="carttotal">
                            <div className="total" >
                            Total:{" "}
                            ${cartItems.reduce((a,c)=>{return a+c.price},0)}
                            <button  onclick={()=>{this.setState({showCheckout:true})}}className="cartButton">Checkout</button>
                            </div>
                        </div>
                    </div>
                    
                    )}
                </div>
            </div>
        )
    }
}

export default  Cart;
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const Item =(item)=>{
    const{addCartData}=useContext(CartContext)
    
    return(
    
        <>
        <section className="cart">
            <img className="cart-image" src={item?.image} alt="game" />
            <article className="cart-title">{item.title}</article>
            <article className="cart-description">{item.description}</article>
            <section className="cart-footer">
                <article className="price">{item.price}</article>
                <button className="card-button" onClick={()=>{addCartData(item)}}>Add To card</button>
            </section>
        </section>
        </>
    )
}
export default Item;
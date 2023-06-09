import { useContext } from "react";
import "./header.css"
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";

const Header =()=>{
    const {cartData}= useContext(CartContext)
    const navigate = useNavigate();
    return(
    
        <>
        <nav className="nav">
            <section className="log">E-com GameSite</section>
            <section onClick={()=>{navigate('/cart')}}>
                <span>{cartData.length}</span>
                <i className="fa  fa-shopping-cart"></i>
            </section>
        </nav>
        </>
        
    )
}
export default Header;
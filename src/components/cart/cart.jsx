import { useCallback, useContext, useRef } from "react"
import { CartContext } from "../../context/cart-context"
import useRazorpay from "react-razorpay"

const Cart =()=>{
    const {cartData}=useContext(CartContext)
    const total = useRef();
    const Razorpay = useRazorpay();
    const razorpayDisplay = useCallback(async(total)=>{
   const options = {
    key: "rzp_test_MP9u24hcNCnDZg",
    amount: total,
    currency:"INR",
    name:"Ecom-game-site",
    description:"Gaming Transaction",
    handler:(res)=>{
        console.log(res);
    },
    prefill:{
        name:"shubham patil",
        email:"shubham115393@gmail.com",
        contact:"9579929346"
    }


   }
   const rzpl = new Razorpay(options);
    },[Razorpay])
    total.current.price = 0;
    return(
    
        <>
<section>
    <section>
        {cartData.map((cartItem)=>{
            return(
                <article>
                    <img src="" alt="" />
                    <article>{cartItem.title}</article>
                    <article>{cartItem.price}</article>
                    <button>Remove From Cart</button>
                </article>
            )
        })}
    </section>
    <section>
      <article> Billing Information</article> 
      {cartData.map((cart)=>{
        total.current.price=total.current.price + cart.price
        return<article>
            <span>{cart.title}</span>
            <span>{cart.price}</span>
        </article>
      })}

        <article>Total Cash:{total.current.price}</article>
        <button onClick={()=>{razorpayDisplay(6000)}}>Checkout</button>
    </section>
</section>
        </>
    )
}
export default Cart
import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../header/header";
import Item from "../item/item";

const Main =()=>{
    const[BestSellers,setBestSeller] = useState([]);
    useEffect(()=>{
    axios.get('http://localhost:1337/api/best-sellers').then((BestSellers)=>{

    setBestSeller(BestSellers.data.data)
    }).catch(()=>{

    }).finally(()=>{
        
    })
    },[])
    return( 
    
        <>
        <Header/>
        <section>
            <article>Best Sellers</article>
            {BestSellers.map((item, key)=>{
                return(
                <Item title = {item.attributes.Title} description={item.attributes.description} price={item.attributes.Price} key={key}/>)
            })}
        </section>
        </>
    ) 
}
export default Main
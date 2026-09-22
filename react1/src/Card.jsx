import "./Card.css"
import Price from "./Price"
import Laptop from "./assets/Laptop.jpg"
import Mobile from "./assets/mobile.avif"
import Ps5 from "./assets/ps5.webp"
import Fitbit from "./assets/fitbit.jpg"




export default function Card({title,idx}){
    let im = [Laptop,Mobile,Ps5,Fitbit]

    let decp1 = ["Best Laptop in the world", "Best Mobile in the world", "Best Ps5 in the world", "Best Fitbit in the world "]
    let decp2 =["With Amazing Features","With amazing camera","With Amazing games","With Amazing Technology"]

     let old=["80000","50000","40000","150000"]
     let neww=["70000","40000","30000","10000"]


    return <div className="card">
        <h2>{title}</h2>
        <img src={im[idx]} ></img>
        <p> {decp1[idx]}</p>
        <p> {decp2[idx]}</p>
       
        <Price oldp={old[idx]} newwp={neww[idx]}/>
    </div>
}
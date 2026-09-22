import Assi from "./assi3";
import { useState } from "react";
import "./form.css"

export default function Render(){
  let [infos,setinfo]= useState([{username:"Dakshi",email:"abc@gmail.com",mob:"90XXXXXXXX", tech:"MERN Stack", text:"This is amazing Tech Stack"}])
  let newinfo =(data)=>{
    setinfo((currdata)=>[...currdata,data])
  }

  return<>
  <h1>WorkShop Registration</h1>
  <div className="container">
    <div className="left">
      <Assi addnewinfo={newinfo}></Assi>
    </div>
    <div className="right">
      {infos.map((info, idx) => (
    <div key={idx} className="card">
        <h3>Name: {info.username}</h3>
        <h3>Email: {info.email}</h3>
        <h3>Mob No: {info.mob}</h3>
        <h3>Tech Stack: {info.tech}</h3>
        <h3>Reason To Join: {info.text}</h3>
    </div>
))}
    </div>
  </div>
  </>
}
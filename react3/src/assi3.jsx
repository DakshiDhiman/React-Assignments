import { useState } from "react";
import "./form.css";
import Render from "./render";


export default function Assi({ addnewinfo }) {
    let [formdata, setformdata] = useState({ username: "", email: "", mob: "", tech: "", text: "" })
    let handel = (event) => {
        setformdata((data) => {
            return { ...data, [event.target.name]: event.target.value}
        })
    }

    
    let [nameValid, setNameValid] = useState(true);
    let [emailValid, setEmailValid] = useState(true);
    let [mobValid, setMobValid] = useState(true);
    let [radiovalid,setradiovalid]=useState(true);
    let [textareavalid,settextarea]=useState(true);

    let def = (event) => {
        event.preventDefault();
    let valid = true;

 
    if (!formdata.username.trim()){
        setNameValid(false);
        valid = false;
    } else {
        setNameValid(true);
    }

    
    if (!formdata.email.trim()) {
        setEmailValid(false);
        valid = false;
    } else {
        setEmailValid(true);
    }
 
    if (!formdata.mob.trim() || !/^[0-9]{10}$/.test(formdata.mob)) {
        setMobValid(false);
        valid = false;
    } else {
        setMobValid(true);
    }

    if(!formdata.tech){
        setradiovalid(false);
        valid=false
    } else{
        setradiovalid(true);
    }

    if(!formdata.text.trim()){
        settextarea(false);
        valid=false
    }else{
        settextarea(true);
    }


    if(!valid){
        return;
    }

    addnewinfo(formdata);
    setformdata({username: "",email: "",mob: "",tech: "",text: ""})
}
    return <>
        <form onSubmit={def}>
            <input type="text" placeholder="Enter your full name" name="username" value={formdata.username} onChange={handel}></input>
            {!nameValid && <p style={{ color: "red" }}>{formdata.username.trim()==="" ?"This Field cannot be empty":"Invalid Name"}</p>}
            <br></br>
            <br></br>


            <input type="email" placeholder="Enter your Email" name="email" value={formdata.email} onChange={handel}></input>
            {!emailValid && <p style={{ color: "red" }}>{formdata.email.trim()==="" ?"This Field cannot be empty":"Invalid Email"}</p>}
            <br></br>
            <br></br>

            <input type="tel" placeholder="Enter your Mob. No." name="mob" value={formdata.mob} onChange={handel}></input>
            {/* {!isvalid && <p style={{color:"red"}}>Please Fill the Your Mobile No.</p>} */}
            {/* {!isvalid && <p style={{ color: "red" }}>Enter a  10-digit mobile number</p>} */}
            {!mobValid && <p style={{ color: "red" }}>{formdata.mob.trim()==="" ?"This Field cannot be empty":"Invalid Mobile Number"}</p>}
            <br></br>
            <br></br>

            <input id="mern" type="radio" value="MERN Stack" name="tech" checked={formdata.tech === "MERN Stack"} onChange={handel}></input>
            <label htmlFor="mern">MERN Stack</label>

            <input id="data" type="radio" value="Data Analytics" name="tech" checked={formdata.tech === "Data Analytics"} onChange={handel}></input>
            <label htmlFor="data">Data Analytics</label>

            <input id="aiml" type="radio" value="AI/ML" name="tech" checked={formdata.tech === "AI/ML"} onChange={handel}></input>
            <label htmlFor="aiml">AI/ML</label>
            {!radiovalid && <p style={{ color: "red" }}>Please Select a Tech Stack</p>}
            <br></br>
            <br></br>

            <textarea type="text" placeholder="Enter Your Text" name="text" value={formdata.text} onChange={handel}></textarea>
            {!textareavalid && <p style={{ color: "red" }}>This Field cannot be empty</p>}
            <br></br>
            <br></br>

            <button>Register</button>
        </form>
    </>
}
import { Link, useNavigate } from "react-router-dom"
import InputField from "../Components/InputField"
import { useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer"
import Header from "../Components/Header"

function Login() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
             email: "",
             password : ""
    }); 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8081/signin", values)
        .then(
            (resp)=> {
                if(resp.data == false){
                    navigate("/Login")
                }else{
                    navigate("/")
                }
            }
        )
        .catch(err => console.log(err));

    }

    const handleInput = (e) => {
        setValues(prev =>({ ...prev, [e.target.name]:[e.target.value]}))
    }

    return (
        <>
        <Header/>
        <div className=" d-flex  bg-primary justify-content-center align-items-center vh-100">
            <div className="w-25 bg-white ">
                <h2> Sign in</h2>
                <form action="" className="mb-2" onSubmit={handleSubmit}>
                <InputField label="Email" type="email" name="email" placeholder="Enter your email address"  handleChange={handleInput}/>
                <InputField label="Mot de passe" type="password" name="password" placeholder="Enter your password"  handleChange={handleInput} />
                <button className="btn btn-success w-100">Submit</button>
                </form>
                <p> Not yet have an account ?</p>
                <Link to="/Registrer" className="btn btn-default border w-100 bg-light text-decoration-none"> register</Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Login
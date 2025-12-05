import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import InputField from "../Components/InputField"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

function Register() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
             email: "",
             password : ""
    }); 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8081/signup", values).then(navigate("/")).catch(err => console.log(err));

    }

    const handleInput = (e) => {
        setValues(prev =>({ ...prev, [e.target.name]:[e.target.value]}))
        console.log(values);
    }

    return (
        <>
        <Header/>
        <div className=" d-flex justify-content-center align-items-center vh-100">
            <div className="w-25 bg-white">
                <h2> Sign up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <InputField label="Nom complet" type="text" name="fulname" placeholder="Enter your fullname" />
                   <InputField label="Email" type="email" name="email" placeholder="Enter your email address" handleChange={handleInput}/>
                   <InputField label="Mot de passe" type="password" name="password" placeholder="Enter your password" handleChange={handleInput}/>
                    <InputField label="Mot de passe de confirmation" type="repeated_password" name="repeated_password" placeholder="Confirmez le mot de passe" />
                    <button className="btn btn-success w-100">Submit</button>
                </form>
                 <p> Already have an account ?</p>
                <Link to="/Login" className="btn btn-default border w-100 bg-light text-decoration-none"> login</Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Register
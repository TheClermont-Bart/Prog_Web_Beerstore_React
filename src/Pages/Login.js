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
        <div className=" d-flex bg-secondary bg-gradient justify-content-center align-items-center vh-100">
            <div className="w-25 bg-white ">
                <h2> Se Connecter</h2>
                <form action="" className="mb-2" onSubmit={handleSubmit}>
                <InputField label="Email" type="email" name="email" placeholder="Entrer votre adresse email"  handleChange={handleInput}/>
                <InputField label="Mot de passe" type="password" name="password" placeholder="Entrer votre mot de passe"  handleChange={handleInput} />
                <button className="btn btn-success w-100">Soumettre</button>
                </form>
                <p> Vous n'avez pas de compte ?</p>
                <Link to="/Registrer" className="btn btn-default border w-100 bg-light text-decoration-none"> S'inscrire</Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Login
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Caroussel from "../Components/caroussel"
import Img1 from "../Assets/Bieres-a-lerable_www.jpg"
import Img2 from "../Assets/Burger-et-Soif_www.jpg"
import Img3 from "../Assets/Arbre-de-vie-a-lerable_www.jpg"
import Img4 from "../Assets/Tete-de-Noix_1www.jpg"
import Img5 from "../Assets/Porte-Bonheur_www.jpg"
import Img6 from "../Assets/Rosee-des-Dunes_www.jpg"


export default function Home() {
     const images = [Img1, Img2, Img3, Img4, Img5, Img6]

    return (
        <>
        <Header/>
        <Caroussel images={images} interval={3000} />
        <Footer/>
     </>
    )
}
import { useState, useEffect } from "react"

   export default function Caroussel({ images, interval = 3000, height = "70vh" }) {
     const [currentIndex, setCurrentIndex] = useState(0)

     useEffect(() => {
       const id = setInterval(() => {
         setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
       }, interval)
       return () => clearInterval(id)
     }, [images.length, interval])

     return (
       <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
         {images.map((img, index) => (
           <img
             key={index}
             className="slide"
             src={img}
             alt={`Image ${index + 1}`}
             style={{
               display: index === currentIndex ? "block" : "none",
               width: "100%",
               height,
               objectFit: "cover",
               transition: "opacity 0.5s ease-in-out",
             }}
           />
         ))}
       </div>
     )
   }
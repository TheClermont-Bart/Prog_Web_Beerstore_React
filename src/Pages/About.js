import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Fut from "../Assets/micro-fut.jpg"

export default function About() {
    return(
            <>
            <Header/>
            <section className="about">
            <h1>A Propos</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. 
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                Iaculis massa nisl malesuada lacinia integer nunc posuere.
                </p>
                <img src={Fut} height="400" width="100%" alt="Image Bieres"/>
            <h2 className="display-2">titre</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia porro deleniti voluptatibus! 
                Ipsum animi aliquam repudiandae odio reiciendis esse ipsam officia adipisci quia. 
                Temporibus debitis illo labore at, ex dolore!
                </p>
            <div className="container">
                <div className="row">
                    <div className="col-6"><img className="img-fluid" src={Fut} alt=""/></div>
                    <div className="col-6"><img className="img-fluid" src={Fut} alt=""/></div>
                </div>
            </div>
            </section>
            <Footer/>
            </>
)}
import placeholder from "../Assets/beer200x200.png"
import axios from "axios";
import Footer from "../Components/Footer"
import Header from "../Components/Header"
function Ventes() {
    return (
        <>
            <Header/>
            <span id="searchButton">
                <label htmlFor="site-search">Looking For:</label>
                <input type="search" id="site-search" name="q" />
                <button>Drink</button>
            </span>

            <div className="categorie">
                <ul>
                    <li>Categorie</li>
                    <li><input type="checkbox" /> Blonde</li>
                    <li><input type="checkbox" /> Rousse</li>
                    <li><input type="checkbox" /> IPA</li>
                    <li><input type="checkbox" /> Fruite</li>
                </ul>
            </div>
             <p>Price Range:</p>
            <div>
                <input type="range" id="PriceRange" name="Prix" min="0" max="100" />
                <label for="Price">$</label>
            </div>
             <section className="categorie">
                <form class="VenteImage">
                    <h5>Blonde<a href = "/detail"><img src={placeholder} alt="Beer placeHolder"/></a></h5>
                    <h5>Brune<a href = "/detail"><img src={placeholder} alt="Beer placeHolder"/></a></h5>
                    <h5>Rousse<a href = "/detail"><img src={placeholder} alt="Beer placeHolder"/></a></h5>
                    <h5>IPA<a href = "/detail"><img src={placeholder} alt="Beer placeHolder"/></a></h5>
                    <h5>Fruite<a href ="/detail"><img src={placeholder} alt="Beer placeHolder"/></a></h5>
                </form>
            </section>
            <Footer/>
        </>
    );
}

export default Ventes;
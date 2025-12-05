import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useEffect } from "react";
import initStoreMap from "../Components/gmap";

export default function Stores() {
  useEffect(() => {
    const cleanup = initStoreMap();
    return cleanup;
  }, []);

    return(
            <>
            <Header/>
                <iframe className="map" id="storeMap" src="https://www.google.com/maps?q=Qu%C3%A9bec%20City%2C%20QC&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 className="h4 mb-3">Nos détaillants</h2>
                <div className="list-group" id="retailerList" aria-label="Liste des détaillants">
                    <button type="button" className="list-group-item list-group-item-action retailer-item" data-address="1865,Avenue Mailloux,Quebec,QC,G1J 4Z4" data-label="Premier">
                    <strong>Premier</strong>
                        <address className="mb-0 small">1865,Avenue Mailloux,Quebec,QC,G1J 4Z4</address>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action retailer-item" data-address="1027,Rue Bach,Prevost,J0R 1T0" data-label="Deuxieme">
                    <strong>Deuxieme</strong>
                        <address className="mb-0 small">1027,Rue Bach,Prevost,J0R 1T0</address>
                    </button>
                </div>
            <Footer/>
            </>
    )
}
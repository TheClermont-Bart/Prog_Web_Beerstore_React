import Logo from "../Assets/logo-footer.png"
import FB from "../Assets/fb-noir.png"

export default function Footer() {
    return(
            <footer>
                <img src={Logo} alt="logo noir"/>
                <a href="https://www.facebook.com" className="fb"><img src={FB} className="fb" height="100" width="100" alt="facebook"/></a><br/>
                <strong className="contact">287 des Érables, Neuville (QC) G0A 2R0 | 418 909-0675 | <a href="/Modalites" >Modalités et conditions</a></strong>
            </footer>

            )
}
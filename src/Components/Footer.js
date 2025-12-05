import Logo from "../Assets/Logo.png"
import FB from "../Assets/fb-noir.png"

export default function Footer() {
    return(
            <footer>
                <img src={Logo} height="145" width="225" alt="logo"/>
                <a href="https://www.facebook.com" className="fb"><img src={FB} className="fb" height="100" width="100" alt="facebook"/></a><br/>
                <strong className="contact">287 des Érables, Neuville (QC) G0A 2R0 | 418 909-0675 | <a href="/Modalites" >Modalités et conditions</a></strong>
            </footer>

            )
}
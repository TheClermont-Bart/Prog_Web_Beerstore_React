import Logo from "../Assets/logo1.png"

export default function Header() {
    return(
           <nav className="navbar navbar-expand-lg  bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className="imglogo" src={Logo} height="200" width="200" alt="Beer Logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-lg-around " id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/stores">Detaillants</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="inventaire.html">Inventaire</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/About">A Propos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Compte </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Login">Mon Compte</a></li>
            <li><a className="dropdown-item" href="/Registrer">Inscription</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

            )
}
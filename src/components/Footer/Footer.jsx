import "./Footer.css"

function Footer() {
  return (
    <>
      <img src="/images/misc/Tabuu.png" id="tabuu" />
      <div className="footer-main">
        <p className="footer-css">© 2023 SSBB Corporation Todos los derechos reservados.</p>
        <p>
          <a className="footer-css" href="/policyconditions" id="footer-a1">Política de Privacidad, Cookies y Condiciones de Venta</a>
        </p>
        <p className="footer-css" id="footer-a2">Desarrollado por: <a className="footer-css" href="https://github.com/jasanchez97" target="_blank">jasanchez97</a></p>
        <img className="footer-img" src="./images/misc/GithubLogo.png" />
      </div>
    </>
  )
}

export default Footer
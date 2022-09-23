export default function Footer(){
  return(
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
          </a>
          <span className="text-light">© 2021 Via Villate</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/viavillate/?hl=es-la" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 24 24" style={{fill: '#000000'}}>    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" /></svg></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/ViaVillate" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 24 24" style={{fill: '#000000'}}><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z" /></svg></a></li>
          <li className="ms-1"><a className="text-muted" href="https://www.pedidosya.com.ar/restaurantes/vicente-lopez/via-villate-helados-y-cafe-menu" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" version={1.0} width={50} height={50} viewBox="0 0 1200.000000 630.000000" x="0px" y="0px" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,380.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M4690 5274 c-382 -56 -667 -288 -774 -630 -55 -179 -56 -199 -56 -1497 0 -732 4 -1219 10 -1262 6 -38 13 -88 16 -109 10 -73 55 -200 99 -281 133 -245 360 -405 656 -462 87 -17 182 -18 1359 -18 1177 0 1272 1 1359 18 357 69 623 297 724 623 26 81 29 100 47 234 5 45 9 557 9 1260 0 703 -4 1215 -9 1260 -18 134 -21 153 -47 234 -85 275 -301 494 -574 583 -192 63 -192 63 -1521 62 -973 -1 -1221 -4 -1298 -15z m1990 -818 c185 -44 351 -136 486 -270 129 -130 205 -258 260 -441 25 -82 28 -105 28 -255 0 -142 -3 -177 -23 -250 -45 -168 -127 -314 -249 -442 -150 -157 -341 -258 -555 -293 -73 -12 -197 -15 -588 -15 l-495 0 -64 -232 c-34 -128 -71 -256 -82 -284 -23 -63 -76 -126 -136 -162 l-47 -27 -280 -3 c-272 -3 -280 -3 -296 17 -13 15 -15 29 -9 53 51 220 344 1356 352 1365 8 10 184 13 782 15 769 3 771 3 811 25 52 28 100 78 119 125 37 87 7 222 -62 280 -69 58 -51 56 -882 66 l-765 8 -79 27 c-147 51 -234 131 -278 254 -30 83 -40 399 -14 438 l17 26 987 -4 c903 -3 993 -5 1062 -21z" />
            </g>
          </svg>
          </a></li>
        </ul>
      </footer>
    </div>
  )
}
import { Link } from "react-router-dom"
import spotifyLogo from '../../../Assets/spotify-logo.png'

export default function Footer() {
    return(
        <footer>
        <div className="grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20">
          <div className="md:col-span-1 pt-10 md:pt-0">
            <Link to="/">
              <img src={spotifyLogo} alt="Spotify" className="w-20 md:w-132px" />
            </Link>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Empresa</h3>
            <ul>
              <li className="mb-5">
                <Link to="/">Sobre</Link>
              </li>
              <li className="mb-5">
                <Link to="/">Empregos</Link>
              </li>
              <li class="mb-5">
                <Link to="/">For the Record</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 class="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Comunidades</h3>
            <ul>
              <li className="mb-5">
                <Link to="/">Para Artistas</Link>
              </li>
              <li className="mb-5">
                <Link to="/">Desenvolvedores</Link>
              </li>
              <li className="mb-5">
                <Link to="/">Publicidade</Link>
              </li>
              <li className="mb-5">
                <Link to="/">Investidores</Link>
              </li>
              <li className="mb-5">
                <Link to="/">Fornecedores</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Links Úteis</h3>
            <ul>
              <li className="mb-5">
                <Link to="/">Ajuda</Link>
              </li>
              <li className="mb-5">
                <Link to="/">Player da Web</Link>
              </li>
              <li className="mb-5">
                <Link to="/">Aplicativo móvel grátis</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 pt-10 md:pt-4">
            <ul className="flex md:justify-end">
              <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                <Link to="/"><i className="fab fa-instagram"></i></Link>
              </li>
              <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                <Link to="/"><i className="fab fa-twitter"></i></Link>
              </li>
              <li class="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 mt-20">
            <ul>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <Link to="/">Legal</Link>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <Link to="/">Centro de Privacidade</Link>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <Link to="/">Política de Privacidade</Link>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <Link to="/">Cookies</Link>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <Link to="/">Sobre anúncios</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 mt-20">
            <p className="flex justify-end text-gray-500 text-xs">&copy; 2020 Spotify AB</p>
          </div>
        </div>
      </footer>
    )
}

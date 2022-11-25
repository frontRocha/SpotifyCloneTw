import { Link } from "react-router-dom"
import spotifyLogo from '../../../Assets/spotify-logo.png'

export default function Header() {
    return(
        <header>
    <div class="flex fixed bg-black w-full px-3 md:px-20 py-4">
      <div class="container flex items-center mx-auto">
        <div>
          <Link href="#">
            <img src={spotifyLogo} alt="Spotify" class="w-20 md:w-125px" />
          </Link>
        </div>
        <div class="flex justify-end flex-1 md:hidden text-white text-3xl">
          <i class="fas fa-bars"></i>
        </div>
        <div class="items-end flex-1 text-white font-bold hidden md:flex">
          <nav class="flex-1">
            <ul class="flex justify-end flex-1">
              <li class="px-4">
                <Link href="#" class="hover:text-hoverspt text-sm">Premium</Link>
              </li>
              <li class="px-4">
                <Link href="#" class="hover:text-hoverspt text-sm">Ajuda</Link>
              </li>
              <li class="px-4">
                <Link href="#" class="hover:text-hoverspt text-sm">Baixar</Link>
              </li>
              <li class="px-4">
                <span class="border-r border-white"></span>
              </li>
              <li class="px-4">
                <Link href="#" class="hover:text-hoverspt text-sm">Inscrever-se</Link>
              </li>
              <li class="px-4">
                <Link href="#" class="hover:text-hoverspt text-sm">Log In</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
    )
}
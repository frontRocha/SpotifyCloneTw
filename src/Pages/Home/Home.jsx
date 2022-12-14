import { Link } from "react-router-dom"

export default function Home() {
    return (
        <main>
            <div className="flex flex-col justify-center text-center bg-spotify-theme lg:bg-spotify-theme-mobile bg-banner-mobile lg:bg-banner bg-195% md:bg-175% bg-purple-main text-green-main py-40 px-4 min-h-screen">
                <h1 className="text-5xl lg:text-9xl mb-10 font-bold max-w-4xl mx-auto leading-none">Escutar muda tudo</h1>
                <p className="text-md md:text-lg mb-10">Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
                <Link to="/" className="bg-green-main hover:bg-white text-purple-main text-sm rounded-full px-10 py-3 uppercase font-bold max-w-xl mx-auto tracking-widest transition duration-500">Obtenha o Spotify Free</Link>
            </div>
        </main>
    )
}
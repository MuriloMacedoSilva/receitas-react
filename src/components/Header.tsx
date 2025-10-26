import { Link } from "react-router"

export default function Header() {
    return (
        <header className="bg-amber-500 w-full h-[70px] flex items-center px-[30px] py-9 text-white">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
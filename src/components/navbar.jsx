import { Link } from "react-router-dom";

export default function Navbar(params) {
    return(
        <header className="h-20 w-full bg-blue-500">
            <nav className="container mx-auto h-full flex items-center justify-center">
                <Link to='/'>
                    <h2 className="text-white text-2xl text-semibold">Blogpost</h2>
                </Link>
            </nav>
        </header>
    )
}
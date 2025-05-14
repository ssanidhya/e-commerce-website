import { useNavigate } from "react-router-dom"

export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <header className="flex bg-blue-900 py-4 px-6">
            <div>
                <h1 onClick={() => navigate("/")} className="text-slate-100 text-3xl hover:cursor-pointer">Shop It</h1>
            </div>
            <nav className="ml-auto flex gap-2 gap-4">
                <span onClick={() => navigate('/cart')} className="material-symbols-outlined text-slate-100 text-2xl hover: cursor-pointer">
                    shopping_cart
                </span>
                <span onClick={() => navigate('/wishlist')} className="material-symbols-outlined text-slate-100 text-2xl hover: cursor-pointer">
                    favorite
                </span>
                <span className="material-symbols-outlined text-slate-100 text-2xl">
                    account_circle
                </span>
            </nav>
        </header>
    )
}
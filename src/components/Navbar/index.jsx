export const Navbar = () => {
    return (
        <header className="flex bg-blue-900 py-4 px-6">
            <div>
                <h1 className="text-slate-100 text-3xl">Shop It</h1>
            </div>
            <nav className="ml-auto flex gap-2">
                <span class="material-symbols-outlined text-slate-100 text-2xl hover: cursor-pointer">
                    shopping_cart
                </span>
                <span class="material-symbols-outlined text-slate-100 text-2xl">
                    favorite
                </span>
                <span class="material-symbols-outlined text-slate-100 text-2xl">
                    account_circle
                </span>
            </nav>
        </header>
    )
}
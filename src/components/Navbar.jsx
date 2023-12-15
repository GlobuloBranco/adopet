import Marca from "../assets/marca.png"

export default function Navbar() {
    return (
    <div className="fixed top-0 w-full px-4 py-4 bg-yellow-400">
        <ul className="flex">
            <img src={Marca} alt="logo" width={180} className="object-contain" />
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
        </ul>
    </div>
    )
}
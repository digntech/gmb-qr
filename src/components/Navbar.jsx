import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="bg-white shadow-md relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex-shrink-0 flex items-center">
						<Link href="/" className="font-bold text-xl text-black-800">
							<img src="/essyqr.svg" alt="Logo" className="h-8 w-auto" />
						</Link>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						<div className="flex space-x-4">
							<Link
								href="/"
								className={`${
									pathname === "/"
										? "bg-gray-900 text-white"
										: "text-black-300 hover:bg-gray-700 hover:text-white"
								} px-3 py-2 rounded-md text-sm font-medium`}
							>
								GMB QR Generator
							</Link>
							<Link
								href="/upi"
								className={`${
									pathname === "/upi"
										? "bg-gray-900 text-white"
										: "text-black-300 hover:bg-gray-700 hover:text-white"
								} px-3 py-2 rounded-md text-sm font-medium`}
							>
								UPI QR Generator
							</Link>
							<Link
								href="/signin"
								className={`${
									pathname === "/signin"
										? "bg-gray-900 text-white"
										: "text-black-300 hover:bg-gray-700 hover:text-white"
								} px-3 py-2 rounded-md text-sm font-medium`}
							>
								Login
							</Link>
						</div>
					</div>
					<div className="-mr-2 flex items-center sm:hidden">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="sm:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<Link
							href="/"
							className={`${
								pathname === "/"
									? "bg-gray-900 text-white"
									: "text-gray-300 hover:bg-gray-700 hover:text-white"
							} block px-3 py-2 rounded-md text-base font-medium`}
						>
							GMB QR Generator
						</Link>
						<Link
							href="/upi"
							className={`${
								pathname === "/upi"
									? "bg-blue-900 text-white"
									: "text-gray-300 hover:bg-gray-700 hover:text-white"
							} block px-3 py-2 rounded-md text-base font-medium`}
						>
							UPI QR Generator
						</Link>
						<Link
							href="/signin"
							className={`${
								pathname === "/upi"
									? "bg-blue-900 text-white"
									: "text-gray-300 hover:bg-gray-700 hover:text-white"
							} block px-3 py-2 rounded-md text-base font-medium`}
						>
							Login
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}

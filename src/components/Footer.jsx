import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-800 text-white">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8 xl:col-span-1">
						<img className="h-10" src="/logo-dark.svg" alt="EssyQR logo" />
						<p className="text-gray-400 text-base">
							Making QR code generation simple and efficient.
						</p>
						<div className="flex space-x-6">
							<a href="#" className="text-gray-400 hover:text-gray-300">
								<span className="sr-only">Facebook</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a href="#" className="text-gray-400 hover:text-gray-300">
								<span className="sr-only">Twitter</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
						</div>
					</div>
					<div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Solutions
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<Link
											href="/"
											className="text-base text-gray-300 hover:text-white"
										>
											GMB QR Generator
										</Link>
									</li>
									<li>
										<Link
											href="/upi"
											className="text-base text-gray-300 hover:text-white"
										>
											UPI QR Generator
										</Link>
									</li>
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Support
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<a
											href="#"
											className="text-base text-gray-300 hover:text-white"
										>
											Pricing
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-base text-gray-300 hover:text-white"
										>
											Documentation
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-base text-gray-300 hover:text-white"
										>
											Guides
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Company
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<a
											href="#"
											className="text-base text-gray-300 hover:text-white"
										>
											About
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-base text-gray-300 hover:text-white"
										>
											Blog
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-base text-gray-300 hover:text-white"
										>
											Jobs
										</a>
									</li>
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Legal
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<a
											href="#"
											className="text-base text-gray-300 hover:text-white"
										>
											Privacy
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-base text-gray-300 hover:text-white"
										>
											Terms
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-12 border-t border-gray-700 pt-8">
					<p className="text-base text-gray-400 xl:text-center">
						Made with ❤️ by{" "}
						<a href="https://digntech.com" className="font-semibold">
							Dig-n-Tech
						</a>{" "}
						and{" "}
						<a href="https://sayakdutta.site" className="font-semibold">
							Sayak Dutta
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
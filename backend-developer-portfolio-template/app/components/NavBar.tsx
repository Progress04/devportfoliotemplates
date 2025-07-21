'use client';

import Link from 'next/link';

export default function NavBar() {
	return (
		<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
			<div className="mx-auto px-6 sm:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
				<h1 className="text-white font-semibold text-xl tracking-tight font-[var(--font-space-grotesk)] text-center sm:text-left">
					<span className="text-green-400">Progyan</span> Gupta | Portfolio
				</h1>
				<nav className="flex flex-wrap justify-center sm:justify-end gap-4 text-base font-medium text-gray-300 font-[var(--font-inter)]">
					<Link href="#home" className="hover:text-green-400 transition-colors">Home</Link>
					<Link href="#experience" className="hover:text-green-400 transition-colors">Experience</Link>
					<Link href="#metrics" className="hover:text-green-400 transition-colors">Metrics</Link>
					<Link href="#contact" className="hover:text-green-400 transition-colors">Contact</Link>
				</nav>
			</div>
		</header>
	);
}

'use client';

import Link from 'next/link';

export default function NavBar() {
	return (
		<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
			<div className="mx-auto px-12 py-6 flex justify-between items-center">
				<h1 className="text-white font-semibold text-xl tracking-tight font-[var(--font-space-grotesk)]">
					<span className="text-green-400">Progyan</span> Gupta | Portfolio
				</h1>
				<nav className="space-x-8 text-base font-medium text-gray-300 font-[var(--font-inter)]">
					<Link href="#home" className="hover:text-green-400 transition-colors">Home</Link>
					<Link href="#about" className="hover:text-green-400 transition-colors">About</Link>
					<Link href="#projects" className="hover:text-green-400 transition-colors">Projects</Link>
					<Link href="#contact" className="hover:text-green-400 transition-colors">Contact</Link>
				</nav>
			</div>
		</header>
	);
}

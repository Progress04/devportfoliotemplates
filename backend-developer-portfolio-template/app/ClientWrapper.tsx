'use client';

import { useEffect, useRef } from 'react';
import NavBar from './components/NavBar';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
	const blob1 = useRef<HTMLDivElement>(null);
	const blob2 = useRef<HTMLDivElement>(null);
	const blob3 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 30;
			const y = (e.clientY / innerHeight - 0.5) * 30;

			const transform = `translate(${x}px, ${y}px)`;

			blob1.current!.style.transform = transform;
			blob2.current!.style.transform = `translate(${-x}px, ${y}px)`;
			blob3.current!.style.transform = `translate(${x}px, ${-y}px)`;
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<body className="antialiased bg-[#0d0d0d] text-white">
			{/* 🎨 Animated Blobs Background */}
			<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
				<div className="absolute inset-0">
					<div
						ref={blob1}
						className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px] transition-transform duration-300 ease-out"
					/>
					<div
						ref={blob2}
						className="absolute top-[20%] right-[-20%] w-[700px] h-[700px] bg-sky-400/25 rounded-full blur-[180px] transition-transform duration-300 ease-out"
					/>
					<div
						ref={blob3}
						className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-teal-300/20 rounded-full blur-[140px] transition-transform duration-300 ease-out"
					/>
					<div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-black" />
				</div>
			</div>

			<NavBar />
			<div className="relative z-10 space-y-32">{children}</div>
		</body>
	);
}

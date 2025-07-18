'use client';

import { useEffect, useRef } from 'react';
import NavBar from './components/NavBar';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
	const bgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 50;
			const y = (e.clientY / innerHeight - 0.5) * 50;

			if (bgRef.current) {
				bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
			}
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<body className="antialiased bg-[#0d0d0d] text-white">
			{/* 🎨 Animated Global Background */}
			<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
				<div ref={bgRef} className="absolute inset-0 transition-transform duration-300 ease-out">
					<div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[160px]" />
					<div className="absolute top-[20%] right-[-20%] w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[180px]" />
					<div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
					<div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-black" />
				</div>
			</div>

			<NavBar />
			<div className="relative z-10 space-y-32">{children}</div>
		</body>
	);
}

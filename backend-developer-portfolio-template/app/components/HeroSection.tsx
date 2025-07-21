'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white font-mono px-4">
			{/* 💻 Terminal card */}
			<div className="relative z-10 w-full max-w-6xl rounded-xl overflow-hidden border border-white/10 shadow-xl ring-1 ring-white/10 backdrop-blur-xl bg-white/5">
				{/* Header */}
				<div className="flex justify-between items-center px-6 py-3 bg-white/5 border-b border-white/10 backdrop-blur-md">
					<span className="text-base text-gray-300 select-none">Terminal — Progyan.dev</span>
					<div className="flex items-center space-x-1 text-white text-lg">
						<button title="Minimize" className="w-8 h-6 flex items-center justify-center hover:bg-white/10 rounded">&#x2212;</button>
						<button title="Maximize" className="w-8 h-6 flex items-center justify-center hover:bg-white/10 rounded">&#x2610;</button>
						<button title="Close" className="w-8 h-6 flex items-center justify-center hover:bg-red-500 rounded">&#x2715;</button>
					</div>
				</div>

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2 }}
					className="px-8 py-10 space-y-8"
				>
					{/* Whoami */}
					<div className="text-base">
						<p className="text-green-400">
							progyan@localhost:~$ <span className="text-white">whoami</span>
						</p>
						<h1 className="md:text-6xl mt-3 mb-4 text-white tracking-tight">
							Progyan Gupta
						</h1>
						<p className="text-green-400 text-md md:text-lg uppercase tracking-wide font-semibold mb-2">
							Software Developer – Computer Vision & AI
						</p>
						<p className="text-gray-200 text-md md:text-lg leading-relaxed max-w-4xl">
							Software Developer focused on AI and real-time video analytics, with additional experience
							in NLP and deploying machine learning models. Experienced in delivering scalable,
							low-latency streaming solutions with high system reliability, supported by streamlined
							CI/CD processes and performance-driven system optimization.
						</p>
					</div>

					{/* Skills */}
					<div className="text-base">
						<p className="text-green-400">
							progyan@localhost:~$ <span className="text-white">cat skills.txt</span>
						</p>
						<div className="flex flex-wrap gap-3 mt-3">
							{[
								'Python',
								'Node.js',
								'GStreamer',
								'DeepStream',
								'Kafka',
								'Triton',
								'Docker',
								'Azure',
							].map((skill) => (
								<span
									key={skill}
									className="px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-md text-sm transition"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				</motion.div>
			</div>

			{/* Scroll down indicator */}
			<div className="absolute bottom-6 flex flex-col items-center text-white/60 text-sm animate-bounce z-10">
				<span className="mb-1">Scroll Down</span>
				<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</div>
		</section>
	);
}

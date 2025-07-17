'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white font-mono px-4">
			{/* Background visuals */}
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>
			{/* Terminal Window */}
			<div className="relative z-10 w-full max-w-4xl rounded-lg overflow-hidden border border-gray-800 shadow-xl ring-1 ring-white/5 backdrop-blur-lg bg-black/60">
				{/* Title bar */}
				<div className="flex justify-between items-center px-4 py-2 bg-black/70 border-b border-gray-800">
					<span className="text-sm text-gray-400 select-none">Terminal — Progyan.dev</span>
					<div className="flex items-center space-x-1 text-white text-base">
						<button title="Minimize" className="w-8 h-6 flex items-center justify-center hover:bg-white/10 rounded">
							&#x2212;
						</button>
						<button title="Maximize" className="w-8 h-6 flex items-center justify-center hover:bg-white/10 rounded">
							&#x2610;
						</button>
						<button title="Close" className="w-8 h-6 flex items-center justify-center hover:bg-red-600 rounded">
							&#x2715;
						</button>
					</div>
				</div>

				{/* Terminal content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="px-6 py-6 space-y-6"
				>
					{/* Whoami */}
					<div className="text-sm">
						<p className="text-green-500">
							progyan@localhost:~$ <span className="text-white">whoami</span>
						</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-2 text-white">Progyan Gupta</h1>
						<p className="text-gray-300 text-sm uppercase tracking-wide font-semibold">
							Software Developer – Computer Vision & AI
						</p>
						<div className="text-gray-300 text-sm leading-relaxed mt-3">
							Software Developer focused on AI and real-time video analytics, with additional experience
							in NLP and deploying machine learning models. Experienced in delivering scalable,
							low-latency streaming solutions with high system reliability, supported by streamlined
							CI/CD processes and performance-driven system optimization.
						</div>
					</div>

					{/* Skills */}
					<div className="text-sm">
						<p className="text-green-500">
							progyan@localhost:~$ <span className="text-white">cat skills.txt</span>
						</p>
						<div className="flex flex-wrap gap-3 mt-2">
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
									className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-white text-sm"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					{/* Contact */}
					<div className="text-sm">
						<p className="text-green-500">
							progyan@localhost:~$ <span className="text-white">sendmail contact@progyan.dev</span>
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

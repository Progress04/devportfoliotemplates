'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
					<div className="relative z-10">
						<div className="flex items-center justify-end space-x-1 text-white text-lg mb-6">
							<button title="Minimize" className="w-8 h-6 flex items-center justify-center hover:bg-white/10 rounded">
								&#x2212;
							</button>
							<button title="Maximize" className="w-8 h-6 flex items-center justify-center hover:bg-white/10 rounded">
								&#x2610;
							</button>
							<button title="Close" className="w-8 h-6 flex items-center justify-center hover:bg-white/10 rounded">
								&#x2715;
							</button>
						</div>

						<div className="font-mono">
							<p className="text-green-500 mb-2">progyan@localhost:~$
								<span className="text-white"> cat connect.txt</span>
							</p>
							<h2 className="text-3xl font-bold mb-8 text-gray-200">Let&apos;s Connect</h2>
							<p className="text-green-500 mt-8 mb-4">progyan@localhost:~$
								<span className="text-white"> location --current</span>
							</p>
							<div className="flex items-center gap-2 text-gray-300">
								<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span>Melbourne, AUS</span>
							</div>
							<p className="text-green-500 mt-8 mb-4">progyan@localhost:~$
								<span className="text-white"> contact --email</span>
							</p>
							<motion.a
								href="mailto:contact@progyan.dev"
								whileHover={{ scale: 1.02 }}
								className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
							>
								contact@progyan.dev
							</motion.a>
							<p className="text-green-500 mt-8 mb-4">progyan@localhost:~$
								<span className="text-white"> cat resume.pdf</span>
							</p>
							<motion.a
								href="/path-to-resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.02 }}
								className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
								</svg>
								<span>Download Resume</span>
							</motion.a>
							<p className="text-green-500 mt-8 mb-4">progyan@localhost:~$
								<span className="text-white"> ls ./social-links</span>
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								<motion.a
									href="https://github.com/Progress04"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">GitHub</p>
										<p className="text-sm text-gray-400">@Progress04</p>
									</div>
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/progyangupta/"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">LinkedIn</p>
										<p className="text-sm text-gray-400">Progyan Gupta</p>
									</div>
								</motion.a>
							</div>
							<p className="text-green-500 mt-8 mb-4">progyan@localhost:~$
							<span className="text-white"> nano contact-form.txt</span>
							</p>
							<p className="text-white-300 mb-6"> We all build, learn, and grow — sometimes better together. If our paths align, let’s talk.</p>
							<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
							<div>
								<label className="block text-sm text-gray-400 font-mono mb-1" htmlFor="name">Name</label>
								<input
								id="name"
								type="text"
								className="w-full px-4 py-2 bg-black/30 text-white border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
								placeholder="Your name"
								required
								/>
							</div>
							<div>
								<label className="block text-sm text-gray-400 font-mono mb-1" htmlFor="email">Email</label>
								<input
								id="email"
								type="email"
								className="w-full px-4 py-2 bg-black/30 text-white border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
								placeholder="you@example.com"
								required
								/>
							</div>
							<div>
								<label className="block text-sm text-gray-400 font-mono mb-1" htmlFor="message">Message</label>
								<textarea
								id="message"
								rows={5}
								className="w-full px-4 py-2 bg-black/30 text-white border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
								placeholder="Your message"
								required
								/>
							</div>
							<motion.button
								whileHover={{ scale: 1.03 }}
								type="submit"
								className="inline-block px-6 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors font-mono"
							>
								Send Message
							</motion.button>
							</form>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

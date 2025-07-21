'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-transparent">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: false }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Real-Time Inference</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Integrated multi-model object detection pipelines to improve latency and accuracy</li>
									<li>• Achieved low-latency processing of RTSP streams at production scale</li>
									<li>• Boosted inferencing throughput using NVIDIA Triton Inference Server</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: false }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Model Optimization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Evaluated and optimized AI models like PeopleNet and YOLO for real-world video applications</li>
									<li>• Deployed object tracking and re-identification at scale</li>
									<li>• Reduced system overhead while maintaining high detection accuracy</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: false }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Streaming Infrastructure</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Designed Kafka-based event pipelines for real-time event streaming</li>
									<li>• Integrated Kafka Connect to stream analytics to external endpoints</li>
									<li>• Managed distributed RTSP ingestion with seamless video handling</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: false }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">CI/CD & Reliability</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Achieved 90%+ test coverage through automated testing</li>
									<li>• Built robust CI/CD pipelines for production deployments</li>
									<li>• Enabled reliable updates with zero-downtime rollouts</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Cross-Functional Development */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Cross-Functional Development</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: false }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">NLP & ML Deployment</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Deployed sentiment analysis models using Hugging Face API</li>
									<li>• Benchmarked transformer models for real-world feedback categorization</li>
									<li>• Improved classification accuracy and deployment scalability</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: false }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Cross-Stack Contribution</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Delivered solutions across backend, infrastructure, and streaming systems</li>
									<li>• Contributed to both development and architectural decisions</li>
									<li>• Solved complex technical challenges in high-performance environments</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

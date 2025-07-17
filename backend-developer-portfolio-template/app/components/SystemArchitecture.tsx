'use client';

import { motion } from 'framer-motion';

export default function WorkExperience() {
	return (
		<section className="py-32 px-4 bg-transparent text-white">
			{/* Optional: Gradient fade to blend top edge with previous section */}

			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Work Experience
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Software Developer – Computer Vision',
							description:
								'Developed real-time video analytics pipelines using DeepStream, Kafka, and Triton for scalable, low-latency AI applications.',
							details: [
								'Built and optimized AI pipelines for object detection, tracking, and re-identification across distributed systems',
								'Integrated DeepStream and Triton for efficient multi-model inferencing',
								'Designed Kafka-based event streaming and Kafka Connect pipelines for real-time processing',
								'Maintained 90%+ test coverage with robust CI/CD pipelines and automated testing',
								'Handled RTSP video streams and ensured continuous video handling in production',
							],
							tech: [
								'DeepStream',
								'NVIDIA Triton',
								'Kafka',
								'Kafka Connect',
								'CI/CD',
								'RTSP',
								'Python',
								'Docker',
							],
						},
						{
							title: 'Data Science Intern – NLP',
							description:
								'Built an NLP model for sentiment analysis and benchmarked state-of-the-art transfer learning architectures.',
							details: [
								'Deployed a transformer-based model using Hugging Face for customer feedback classification',
								'Benchmarked multiple pre-trained models including BERT and XLNet for optimal performance',
								'Streamlined deployment workflows for scalability using open-source NLP APIs',
								'Gained practical experience in production-ready model evaluation and end-to-end machine learning deployment',
							],
							tech: [
								'Hugging Face',
								'Transformers',
								'BERT',
								'XLNet',
								'Python',
								'Scikit-learn',
								'Pandas',
							],
						},
					].map((job, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{job.title}</h3>
							<p className="text-gray-400 mb-6">{job.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Contributions:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{job.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{job.tech.map((tech, i) => (
									<span
										key={i}
										className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

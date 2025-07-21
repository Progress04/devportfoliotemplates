'use client';

import { motion } from 'framer-motion';

export default function WorkExperience() {
	const jobs = [
		{
			title: 'Software Developer – Computer Vision',
			duration: 'Mar 2023 – Present · Melbourne, AU',
			description:
				'Developing real-time video analytics pipelines using DeepStream, Kafka, and Triton for scalable, low-latency AI applications.',
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
			duration: 'Jan 2021 – Feb 2021 · Remote',
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
	];

	return (
		<section className="relative z-10 py-32 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Section Heading */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 0.6 }}
					className="text-4xl font-bold text-center mb-20 tracking-tight text-white"
				>
					Work Experience
				</motion.h2>

				{/* Experience Cards */}
				<div className="space-y-14">
					{jobs.map((job, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false, amount: 0.2 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative rounded-2xl p-6"
						>
							{/* Card */}
							<div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-md">
								<h3 className="text-2xl font-semibold mb-1 text-white font-mono">
									{job.title}
								</h3>
								<p className="text-sm text-gray-400 italic mb-4">{job.duration}</p>
								<p className="text-gray-200 mb-6">{job.description}</p>

								<div className="mb-6">
									<h4 className="text-lg font-semibold mb-2 text-white">Key Contributions:</h4>
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
											className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 transition rounded-full border border-white/20 text-white"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

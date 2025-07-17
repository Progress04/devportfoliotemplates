import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Progyan Gupta – Computer Vision Developer',
	description:
		"Welcome to my portfolio! I'm Progyan Gupta, a software developer specializing in computer vision, AI, and real-time video analytics. I build scalable, low-latency streaming solutions with a focus on system reliability, performance, and deployment automation.",
	keywords: [
		'Computer Vision',
		'Software Developer',
		'AI Engineer',
		'Video Analytics',
		'Real-Time Inference',
		'Distributed Systems',
		'RTSP',
		'NVIDIA DeepStream',
		'Triton Inference Server',
		'Kafka',
		'GStreamer',
		'Backend Developer',
		'CI/CD',
		'Docker',
		'Progyan Gupta',
	],
	authors: [{ name: 'Progyan Gupta' }],
	creator: 'Progyan Gupta',
	openGraph: {
		title: 'Progyan Gupta – Computer Vision Developer',
		description:
			"Explore the portfolio of Progyan Gupta, a backend and computer vision developer focused on real-time AI solutions. Learn more about his experience with DeepStream, Kafka, Triton, and scalable infrastructure.",
		url: 'https://your-domain.com', // <- Replace with actual domain
		siteName: 'Progyan Gupta Portfolio',
		images: [
			{
				url: '/og-image.jpg', // <- Add a real OG image later
				width: 1200,
				height: 630,
				alt: 'Progyan Gupta – Computer Vision Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Progyan Gupta – Computer Vision Developer',
		description:
			"Explore the projects and skills of Progyan Gupta – expert in scalable AI, DeepStream, and video analytics pipelines.",
		creator: '@yourusername', // <- Optional: Replace with real Twitter
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}

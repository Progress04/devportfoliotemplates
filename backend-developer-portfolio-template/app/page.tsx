'use client';

import HeroSection from './components/HeroSection';
import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';
import WorkExperience from './components/WorkExperience';

export default function BackendPortfolio() {
	return (
		<div className="relative z-10 pt-24">
			<div id="home">
				<HeroSection />
			</div>
			<div id="experience">
				<WorkExperience />
			</div>
			<div id="metrics">
				<TechnicalMetrics />
			</div>
			<div id="contact">
				<ContactSection />
			</div>
		</div>
	);
}


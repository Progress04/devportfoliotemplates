'use client';

import HeroSection from './components/HeroSection';
import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';
import WorkExperience from './components/WorkExperience';

export default function BackendPortfolio() {
	return (
		<div className="relative z-10">
			<HeroSection />
			<WorkExperience />
			<TechnicalMetrics />
			<ContactSection />
		</div>
	);
}

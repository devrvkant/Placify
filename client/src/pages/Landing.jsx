import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import RoleSwitcher from '../components/landing/RoleSwitcher';
import FeatureGrid from '../components/landing/FeatureGrid';
import AssessmentHighlight from '../components/landing/AssessmentHighlight';
import HowItWorks from '../components/landing/HowItWorks';
import FAQ from '../components/landing/FAQ';
import CTABanner from '../components/landing/CTABanner';
import Footer from '../components/landing/Footer';

const Landing = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
            <Header />
            <main>
                <Hero />
                <RoleSwitcher />
                <FeatureGrid />
                <AssessmentHighlight />
                <HowItWorks />
                <FAQ />
                <CTABanner />
            </main>
            <Footer />
        </div>
    );
};

export default Landing;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const CTABanner = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto max-w-5xl px-4 md:px-8">
                <div className="relative rounded-3xl overflow-hidden bg-linear-to-r from-primary to-purple-600 p-1">
                    <div className="absolute inset-0 bg-grid-white/10 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                    <div className="relative rounded-[22px] bg-background p-8 md:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Ready to simplify your next placement season?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Launch your next drive with unified applications, assessments, and shortlisting — all in one calm workspace.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="w-full sm:w-auto px-8" asChild>
                                <Link to="/auth/register/student">Get Started as Student</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8" asChild>
                                <Link to="/recruiter">Talk to a Recruiter Partner</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;

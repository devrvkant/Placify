import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight mb-4">How it works</h2>
                    <p className="text-muted-foreground">Simple workflows for complex hiring drives.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            role: "For Students",
                            steps: ["Sign up & complete your profile.", "Apply to roles that match your eligibility.", "Take tests, track scores, and follow your offers."]
                        },
                        {
                            role: "For Recruiters",
                            steps: ["Create roles and set eligibility filters.", "Review applications and assign assessments.", "Shortlist top candidates and roll out offers."]
                        },
                        {
                            role: "For Admins",
                            steps: ["Onboard student batches and companies.", "Monitor drives, assessments, and selections.", "Export reports to share with stakeholders."]
                        }
                    ].map((col, i) => (
                        <div key={i} className="space-y-6 p-6 rounded-2xl bg-muted/20 border border-border/50">
                            <h3 className="text-xl font-semibold text-center">{col.role}</h3>
                            <div className="space-y-4">
                                {col.steps.map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                                            {idx + 1}
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-snug pt-0.5">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

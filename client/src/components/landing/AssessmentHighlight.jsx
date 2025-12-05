import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const AssessmentHighlight = () => {
    return (
        <section id="assessments" className="py-20 bg-muted/30 border-y border-border/50 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Left: Text */}
                    <div className="flex-1 space-y-6">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Built-in Assessments</Badge>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            Online assessments for every drive.
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Create structured aptitude and technical tests, assign them to applicants, auto-evaluate MCQs, and generate shortlists without leaving the platform.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "Reusable question banks",
                                "Time-bound tests with countdown",
                                "Automatic scoring for MCQs",
                                "Batch-wide assessments"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-medium">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Card */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <Card className="max-w-md mx-auto bg-background shadow-xl border-border overflow-hidden">
                            <div className="bg-muted/50 p-4 border-b border-border flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-semibold">Round 1 – Aptitude Test</div>
                                    <div className="text-xs text-muted-foreground">HCL Technologies</div>
                                </div>
                                <div className="flex items-center gap-2 text-orange-600 bg-orange-50 dark:bg-orange-950/30 px-2 py-1 rounded text-xs font-mono font-medium">
                                    <Clock className="h-3 w-3" />
                                    27:13
                                </div>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-wider font-medium">
                                    <span>Question 12 of 30</span>
                                    <span>+1.0 / -0.25</span>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm font-medium leading-relaxed">
                                        If a train 110m long passes a telegraph pole in 3 seconds, then the time taken by it to cross a railway platform 165m long is:
                                    </p>
                                    <div className="space-y-2">
                                        {['3 seconds', '4 seconds', '5 seconds', '7.5 seconds'].map((opt, i) => (
                                            <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border text-sm cursor-pointer transition-colors ${i === 3 ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border hover:bg-muted/50'}`}>
                                                <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${i === 3 ? 'border-primary' : 'border-muted-foreground'}`}>
                                                    {i === 3 && <div className="h-2 w-2 rounded-full bg-primary" />}
                                                </div>
                                                {opt}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-end pt-2">
                                    <Button size="sm">Save & Next</Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AssessmentHighlight;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, LayoutDashboard } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

const Hero = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="hero" className="py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

                    {/* Left Side: Text */}
                    <motion.div
                        className="flex-1 space-y-8 text-center md:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <Badge variant="secondary" className="px-3 py-1 text-sm font-medium rounded-full">
                            All-in-one campus hiring OS
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                            Campus placements, internships & assessments — <span className="text-muted-foreground">managed in one calm, unified workspace.</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Students, recruiters, and placement teams collaborate on a single platform for applications, tests, shortlisting, and offers — without messy spreadsheets or endless emails.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base" asChild>
                                <Link to="/student">Get Started as Student</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-12 text-base" asChild>
                                <Link to="/recruiter">Post a Role as Recruiter</Link>
                            </Button>
                        </div>

                        <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-xs md:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Secure & scalable</span>
                            <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> Role-based access</span>
                            <span className="flex items-center gap-1.5"><LayoutDashboard className="h-4 w-4" /> Built for modern campuses</span>
                        </div>
                    </motion.div>

                    {/* Right Side: Visual Mockup */}
                    <motion.div
                        className="flex-1 w-full max-w-md md:max-w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            animate={{ y: [-4, 4, -4] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            whileHover={{ scale: 1.02 }}
                            className="relative"
                        >
                            {/* Decorative blur behind */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50" />

                            <Card className="relative bg-card/50 backdrop-blur-sm border-border shadow-xl rounded-xl overflow-hidden">
                                <div className="p-6 space-y-6">
                                    <div className="flex items-center justify-between border-b border-border pb-4">
                                        <div className="flex gap-2">
                                            <div className="h-3 w-3 rounded-full bg-red-400/80" />
                                            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                            <div className="h-3 w-3 rounded-full bg-green-400/80" />
                                        </div>
                                        <div className="text-xs font-mono text-muted-foreground">dashboard.placify.com</div>
                                    </div>

                                    <Tabs defaultValue="student" className="w-full">
                                        <TabsList className="grid w-full grid-cols-3 mb-6">
                                            <TabsTrigger value="student">Student</TabsTrigger>
                                            <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
                                            <TabsTrigger value="admin">Admin</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="student" className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                                                    <div className="text-2xl font-bold text-primary">5</div>
                                                    <div className="text-xs text-muted-foreground">Applied Roles</div>
                                                </div>
                                                <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                                                    <div className="text-2xl font-bold text-green-600">2</div>
                                                    <div className="text-xs text-muted-foreground">Shortlisted</div>
                                                </div>
                                            </div>
                                            <div className="p-4 rounded-lg bg-card border border-border shadow-sm">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-medium">Upcoming Test</span>
                                                    <Badge variant="outline" className="text-[10px]">Today, 2 PM</Badge>
                                                </div>
                                                <div className="text-sm text-muted-foreground">HCL Technologies - Aptitude Round</div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="recruiter" className="space-y-4">
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="p-3 rounded-lg bg-muted/50 border border-border/50 text-center">
                                                    <div className="text-xl font-bold text-primary">120</div>
                                                    <div className="text-[10px] text-muted-foreground">Applicants</div>
                                                </div>
                                                <div className="p-3 rounded-lg bg-muted/50 border border-border/50 text-center">
                                                    <div className="text-xl font-bold text-primary">28</div>
                                                    <div className="text-[10px] text-muted-foreground">Shortlisted</div>
                                                </div>
                                                <div className="p-3 rounded-lg bg-muted/50 border border-border/50 text-center">
                                                    <div className="text-xl font-bold text-primary">3</div>
                                                    <div className="text-[10px] text-muted-foreground">Tests</div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary w-3/4 rounded-full" />
                                                </div>
                                                <div className="flex justify-between text-[10px] text-muted-foreground">
                                                    <span>SDE Intern Drive</span>
                                                    <span>75% Processed</span>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="admin" className="space-y-4">
                                            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
                                                <div>
                                                    <div className="text-sm font-medium">Active Drives</div>
                                                    <div className="text-xs text-muted-foreground">Currently running</div>
                                                </div>
                                                <div className="text-2xl font-bold text-primary">4</div>
                                            </div>
                                            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
                                                <div>
                                                    <div className="text-sm font-medium">Placed Students</div>
                                                    <div className="text-xs text-muted-foreground">2024 Batch</div>
                                                </div>
                                                <div className="text-2xl font-bold text-green-600">36</div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

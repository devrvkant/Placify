import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, LayoutDashboard, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

const RoleSwitcher = () => {
    return (
        <section id="roles" className="py-20 bg-muted/30 border-y border-border/50">
            <div className="container mx-auto max-w-6xl px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight mb-4">One platform, three powerful views.</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Tailored experiences for every stakeholder in the campus hiring ecosystem.
                    </p>
                </div>

                <Tabs defaultValue="students" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-3 h-12">
                            <TabsTrigger value="students" className="text-base">Students</TabsTrigger>
                            <TabsTrigger value="recruiters" className="text-base">Recruiters</TabsTrigger>
                            <TabsTrigger value="admins" className="text-base">Admins</TabsTrigger>
                        </TabsList>
                    </div>

                    <AnimatePresence mode="wait">
                        {['students', 'recruiters', 'admins'].map((role) => (
                            <TabsContent key={role} value={role} className="mt-0 focus-visible:outline-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid md:grid-cols-2 gap-12 items-center"
                                >
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary mb-2">
                                            {role === 'students' && <GraduationCap className="h-6 w-6" />}
                                            {role === 'recruiters' && <Briefcase className="h-6 w-6" />}
                                            {role === 'admins' && <LayoutDashboard className="h-6 w-6" />}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-semibold">
                                            {role === 'students' && "A single profile for every opportunity."}
                                            {role === 'recruiters' && "Faster campus hiring with real-time insights."}
                                            {role === 'admins' && "Control and clarity for your entire placement season."}
                                        </h3>
                                        <p className="text-muted-foreground text-lg">
                                            {role === 'students' && "Stop filling out the same forms. Build your profile once and apply to hundreds of companies with a single click."}
                                            {role === 'recruiters' && "Streamline your campus drives. From posting jobs to rolling out offers, manage everything in one place."}
                                            {role === 'admins' && "Get a bird's-eye view of all placement activities. Track student progress, company drives, and placement stats effortlessly."}
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                role === 'students' ? "Build and update your resume and academic profile once." :
                                                    role === 'recruiters' ? "Create job and internship postings with eligibility filters." :
                                                        "Manage batches, student eligibility, and company drives.",

                                                role === 'students' ? "Discover internships and full-time roles tailored to your batch." :
                                                    role === 'recruiters' ? "Review applicants, assign tests, and shortlist top performers." :
                                                        "Schedule and monitor assessments for any role or group.",

                                                role === 'students' ? "Take assessments, track scores, and monitor application status." :
                                                    role === 'recruiters' ? "Export candidate lists and coordinate offers with placement cells." :
                                                        "Track placements, pass rates, and outcomes in one view."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-4">
                                            <Button variant="outline" className="group" asChild>
                                                <Link to={role === 'students' ? '/student' : role === 'recruiters' ? '/recruiter' : '/admin'}>
                                                    Learn more <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="relative aspect-video md:aspect-square lg:aspect-video bg-muted rounded-2xl border border-border overflow-hidden shadow-sm flex items-center justify-center">
                                        <div className="absolute inset-0 bg-linear-to-br from-background to-muted" />
                                        <div className="relative text-center p-8">
                                            <span className="text-muted-foreground/50 text-sm font-mono">
                                                {role === 'students' ? 'Student Dashboard Preview' :
                                                    role === 'recruiters' ? 'Recruiter Dashboard Preview' :
                                                        'Admin Console Preview'}
                                            </span>
                                            {/* Placeholder for actual screenshot */}
                                            <div className="mt-4 p-4 bg-card rounded-lg shadow-sm border border-border/50 mx-auto max-w-xs opacity-80">
                                                <div className="h-2 w-20 bg-muted-foreground/20 rounded mb-3" />
                                                <div className="space-y-2">
                                                    <div className="h-2 w-full bg-muted-foreground/10 rounded" />
                                                    <div className="h-2 w-full bg-muted-foreground/10 rounded" />
                                                    <div className="h-2 w-2/3 bg-muted-foreground/10 rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </AnimatePresence>
                </Tabs>
            </div>
        </section>
    );
};

export default RoleSwitcher;

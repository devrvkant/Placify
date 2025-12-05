import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FileText, Code2, ShieldCheck, Filter, BarChart3 } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

const FeatureGrid = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="features" className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">Features</Badge>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Everything you need to hire the best.</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Powerful tools for every stage of the campus recruitment process.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {[
                        { icon: Briefcase, title: "Centralized Listings", desc: "Students browse all campus opportunities in one curated place." },
                        { icon: FileText, title: "Smart Tracking", desc: "Status updates from applied to shortlisted to hired, for everyone." },
                        { icon: Code2, title: "Assessment Engine", desc: "Create timed MCQ and coding tests using reusable question banks." },
                        { icon: ShieldCheck, title: "Role-Based Access", desc: "Separate views and permissions for students, recruiters, and admins." },
                        { icon: Filter, title: "Eligibility & Filtering", desc: "Filter by CGPA, branch, batch, skills, and past performance." },
                        { icon: BarChart3, title: "Analytics & Reports", desc: "High-level insights on applications, test scores, and outcomes." }
                    ].map((feature, i) => (
                        <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5, scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="h-full p-6 hover:shadow-md transition-shadow duration-300 border-border/60">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <feature.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureGrid;

import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

const FAQ = () => {
    return (
        <section className="py-20 bg-muted/30 border-t border-border/50">
            <div className="container mx-auto max-w-3xl px-4 md:px-8">
                <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full">
                    {[
                        { q: "Can multiple batches use Placify at the same time?", a: "Yes, our platform supports multiple batches and academic years simultaneously with separate eligibility criteria." },
                        { q: "How do recruiters access the platform?", a: "Recruiters receive an invite link from the placement cell or can sign up directly and request verification to start posting jobs." },
                        { q: "Can we configure our own questions and tests?", a: "Absolutely. You can create custom question banks for technical, aptitude, or domain-specific tests." },
                        { q: "Does Placify support both internships and full-time roles?", a: "Yes, you can categorize opportunities as Internships, Full-time, or Internship + PPO." }
                    ].map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;

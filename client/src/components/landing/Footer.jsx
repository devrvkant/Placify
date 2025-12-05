import React from 'react';
import { Briefcase } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-border py-8 bg-background">
            <div className="container mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                        <Briefcase className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold">Placify</span>
                    <span className="text-xs text-muted-foreground ml-2">— your campus hiring OS.</span>
                </div>

                <div className="flex gap-6 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">About</a>
                    <a href="#features" className="hover:text-foreground transition-colors">Features</a>
                    <a href="#" className="hover:text-foreground transition-colors">Contact</a>
                </div>

                <div className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Placify. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

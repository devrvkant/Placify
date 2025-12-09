import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Menu, X, LogOut, User } from 'lucide-react';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectCurrentUser } from '../../features/auth/authSlice';
import { useLogoutMutation } from '../../features/auth/authApi';
import { toast } from 'sonner';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectCurrentUser);
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            toast.success("Logged out successfully");
            navigate("/");
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    const getDashboardLink = () => {
        if (user?.role === 'student') return '/student';
        if (user?.role === 'recruiter') return '/recruiter';
        if (user?.role === 'admin') return '/admin';
        return '/';
    };

    return (
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto max-w-7xl px-4 md:px-8 h-16 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary shadow-sm flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-semibold tracking-tight">Placify</span>
                </div>

                {/* Center: Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <a href="#features" className="hover:text-foreground transition-colors">Features</a>
                    <a href="#assessments" className="hover:text-foreground transition-colors">Assessments</a>
                    <a href="#students" className="hover:text-foreground transition-colors">For Students</a>
                    <a href="#recruiters" className="hover:text-foreground transition-colors">For Recruiters</a>
                    <a href="#admins" className="hover:text-foreground transition-colors">For Admins</a>
                </nav>

                {/* Right: CTAs */}
                <div className="hidden md:flex items-center gap-4">
                    {isAuthenticated ? (
                        <>
                            <Button variant="ghost" asChild>
                                <Link to={getDashboardLink()}>
                                    <User className="mr-2 h-4 w-4" />
                                    Dashboard
                                </Link>
                            </Button>
                            <Button variant="outline" onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="ghost" asChild>
                                <Link to="/auth/login">Login</Link>
                            </Button>
                            <Button asChild>
                                <Link to="/auth/register">Get Started</Link>
                            </Button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={toggleMobileMenu}
                    aria-label="Open navigation"
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden border-b border-border bg-background overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={toggleMobileMenu}>Features</a>
                            <a href="#assessments" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={toggleMobileMenu}>Assessments</a>
                            <a href="#students" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={toggleMobileMenu}>For Students</a>
                            <a href="#recruiters" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={toggleMobileMenu}>For Recruiters</a>
                            <a href="#admins" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={toggleMobileMenu}>For Admins</a>
                            <div className="pt-4 flex flex-col gap-2">
                                {isAuthenticated ? (
                                    <>
                                        <Button variant="outline" className="w-full" asChild>
                                            <Link to={getDashboardLink()}>Dashboard</Link>
                                        </Button>
                                        <Button className="w-full" onClick={handleLogout}>
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button variant="outline" className="w-full" asChild>
                                            <Link to="/auth/login">Login</Link>
                                        </Button>
                                        <Button className="w-full" asChild>
                                            <Link to="/auth/register">Get Started</Link>
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

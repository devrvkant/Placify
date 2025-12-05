import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Building2,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RegisterSelector = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl w-full mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <div>
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
              Choose your role
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              How do you want to get started?
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-3 leading-relaxed">
              Placify supports students, recruiters, and placement teams. Select
              how you’ll use the platform.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Student Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-sm">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">I’m a Student</CardTitle>
                <CardDescription className="text-base mt-2">
                  Search roles, apply, and take online assessments.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Create your profile and upload your resume.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Discover internships and full-time roles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Track applications and test results.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full h-11 text-base shadow-md hover:shadow-lg transition-all">
                  <Link to="/auth/register/student">Continue as Student</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Recruiter Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-sm">
                  <Briefcase className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">I’m a Recruiter</CardTitle>
                <CardDescription className="text-base mt-2">
                  Post openings and manage campus applicants.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Publish internships and full-time roles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Review profiles and shortlist candidates.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Assign and monitor online assessments.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full h-11 text-base hover:bg-secondary/50 transition-colors">
                  <Link to="/auth/register/recruiter">
                    Continue as Recruiter
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Admin Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col bg-muted/30 hover:shadow-md transition-all duration-300 border-dashed border-2">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-muted text-muted-foreground flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">I’m an Admin / TPO</CardTitle>
                <CardDescription className="text-base mt-2">
                  Manage drives, students, and assessments.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-sm text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    Admin accounts are created internally by the placement cell
                    or system administrators.
                  </p>
                  <p>
                    There is no public sign-up for admins. If you are a TPO,
                    please contact the platform owner.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Button asChild variant="ghost" className="w-full h-11 text-base hover:bg-muted transition-colors">
                  <Link to="/auth/login?from=admin">Login as Admin / TPO</Link>
                </Button>
                <p className="text-[11px] text-muted-foreground text-center font-medium">
                  Admin access is provided by your institution.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterSelector;

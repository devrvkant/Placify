import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ToastTest = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 font-sans">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center">Toast Notification Test</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <Button
                        variant="default"
                        onClick={() => toast("Default toast message")}
                    >
                        Default Toast
                    </Button>
                    <Button
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => toast.success("Operation successful!")}
                    >
                        Success Toast
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={() => toast.error("Something went wrong!")}
                    >
                        Error Toast
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            toast.message("Event has been created", {
                                description: "Monday, January 3rd at 6:00pm",
                            })
                        }
                    >
                        Description Toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast("Event has been created", {
                                action: {
                                    label: "Undo",
                                    onClick: () => console.log("Undo"),
                                },
                            })
                        }
                    >
                        Action Toast
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ToastTest;

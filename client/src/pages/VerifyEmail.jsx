import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config/env";

export default function VerifyEmail() {
  const [status, setStatus] = useState("loading");
  // loading | success | error

  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(
          `${config.devServerUrl}/api/auth/verify-email?token=${token}`
        );

        setStatus("success");
        setMessage(res.data.message || "Email verified successfully!");
        console.log(res.data.message || "Email verified successfully!");

        // Redirect after 3s
        setTimeout(() => {
          navigate("/auth/login");
        }, 3000);
      } catch (err) {
        setStatus("error");
        setMessage(
          err.response?.data?.message ||
            "Invalid or expired token. Please try again."
        );
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-white border border-border rounded-xl shadow-lg p-8 text-center">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-foreground mb-4">
          {status === "loading" && "Verifying Email..."}
          {status === "success" && "Email Verified 🎉"}
          {status === "error" && "Verification Failed"}
        </h1>

        {/* Message */}
        <p className="text-muted-foreground text-sm mb-6">
          {message}
        </p>

        {/* Loading spinner */}
        {status === "loading" && (
          <div className="flex justify-center my-4">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Button for error or success */}
        {status !== "loading" && (
          <button
            onClick={() => navigate("/auth/login")}
            className="mt-3 w-full py-2 bg-primary text-white rounded-md font-medium shadow hover:opacity-90 transition"
          >
            {status === "success"
              ? "Continue to Login"
              : "Back to Login"}
          </button>
        )}
      </div>
    </div>
  );
}

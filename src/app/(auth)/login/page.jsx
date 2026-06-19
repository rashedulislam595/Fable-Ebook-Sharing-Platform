"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";
import { FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            setLoading(true);

            const { data, error } = await authClient.signIn.email({
                email: formData.email ,
                password: formData.password,
                rememberMe: true,
                callbackURL: "/",
            });

            if(data){
                toast.success("Welcome back! You have successfully signed in.",{
                    position:'top-center',
                    theme:'dark'
                })
            }else{
                toast.error(error.message,{position:'top-center',theme:'dark'})
            }

        } catch (err) {
            setError(err.message || "Invalid email or password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            // Todo: BetterAuth সোশ্যাল সাইন-ইন লজিক
        } catch (err) {
            console.error("Google Auth Error:", err);
        }
    };

    return (
        <section className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-4 py-6 md:py-12 selection:bg-violet-100 ">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl md:rounded-[28px] border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">

                {/* Left Side (Desktop Only) */}
                <div className="hidden lg:flex flex-col justify-between p-14 bg-linear-to-br from-slate-50 to-violet-50/30 border-r border-slate-100 group">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-violet-600 animate-pulse" />
                            <h2 className="text-xl font-bold tracking-tight text-violet-600 font-serif">
                                Fable
                            </h2>
                        </div>

                        <h1 className="text-5xl font-bold leading-tight mb-4 text-slate-800 font-serif tracking-tight">
                            Welcome back.
                            <br />
                            Your stories await.
                        </h1>

                        <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                            Log in to access your dashboard, read updates from your favorite authors, or continue drafting your next masterpiece.
                        </p>

                        <div className="relative w-full h-80 mt-10 rounded-2xl overflow-hidden shadow-md border border-slate-200/60">
                            <Image
                                src="/images/book-image.jpg" // dynamic matching image placeholder
                                alt="Fable - Ebook Sharing Platform"
                                fill
                                className="object-cover group-hover:scale-105 duration-700 transition"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/60">
                        <p className="text-sm font-medium text-slate-500">
                            Join 10k+ book lovers & authors
                        </p>
                        <div className="flex -space-x-3">
                            <div className="w-9 h-9 rounded-full bg-violet-500 border-2 border-white shadow-sm" />
                            <div className="w-9 h-9 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
                            <div className="w-9 h-9 rounded-full bg-amber-500 border-2 border-white shadow-sm" />
                        </div>
                    </div>
                </div>

                {/* Right Side (Form Area) */}
                <div className="flex items-center justify-center p-6 sm:p-10 md:p-12 w-full bg-white">
                    <Card className="w-full bg-transparent shadow-none border-none">
                        <Card.Content className="p-0 w-full">

                            {/* Mobile Logo */}
                            <div className="flex lg:hidden items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-violet-600" />
                                <h2 className="text-xl font-bold tracking-tight text-violet-600 font-serif">
                                    Fable
                                </h2>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-slate-800 mb-2 font-serif tracking-tight">
                                    Sign In
                                </h2>
                                <p className="text-slate-500 text-sm md:text-base">
                                    Enter your details to sign in to your account.
                                </p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 p-3.5 rounded-xl text-sm mb-5 font-medium">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleLogin} className="space-y-4 md:space-y-5">

                                {/* Email */}
                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">
                                        Email Address
                                    </label>
                                    <div className="h-12 rounded-xl bg-slate-50 border border-slate-200 px-4 flex items-center gap-3 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-violet-100 transition-all">
                                        <FiMail size={18} className="text-slate-400" />
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                                            Password
                                        </label>
                                        <Link
                                            href="#"
                                            className="text-xs font-semibold text-violet-600 hover:underline"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    <div className="h-12 rounded-xl bg-slate-50 border border-slate-200 px-3 flex items-center gap-2 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-violet-100 transition-all">
                                        <FiLock size={16} className="text-slate-400 shrink-0" />
                                        <input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-slate-400 hover:text-slate-600 focus:outline-none shrink-0"
                                        >
                                            {showPassword ? <FiEye size={16} /> : <FiEyeOff size={16} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Remember Me */}
                                <label className="flex items-center gap-3 text-sm text-slate-500 cursor-pointer pt-1">
                                    <input
                                        name="rememberMe"
                                        type="checkbox"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-slate-300 text-violet-600 accent-violet-600 cursor-pointer"
                                    />
                                    <span className="leading-tight text-xs sm:text-sm select-none">
                                        Remember me on this device
                                    </span>
                                </label>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    isLoading={loading}
                                    className="w-full h-12 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-sm"
                                >
                                    {!loading && (
                                        <div className="flex items-center justify-center gap-2 w-full">
                                            Sign In
                                            <FiArrowRight size={16} />
                                        </div>
                                    )}
                                </Button>

                                {/* Divider */}
                                <div className="relative py-1">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-slate-200" />
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-white px-4 text-[11px] font-semibold tracking-wider text-slate-400">
                                            OR CONTINUE WITH
                                        </span>
                                    </div>
                                </div>

                                {/* Google Sign-In */}
                                <div className="w-full">
                                    <Button
                                        type="button"
                                        onClick={handleGoogleLogin}
                                        className="h-12 rounded-xl border border-slate-200 bg-white text-slate-700 w-full flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all font-medium shadow-sm"
                                    >
                                        <FaGoogle size={14} className="text-red-500" />
                                        Google
                                    </Button>
                                </div>

                                <p className="text-center text-sm text-slate-500 pt-2">
                                    Do not have an account yet?{" "}
                                    <Link
                                        href={`/register`}
                                        className="text-violet-600 hover:text-violet-700 font-semibold transition-colors"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </form>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </section>
    );
}
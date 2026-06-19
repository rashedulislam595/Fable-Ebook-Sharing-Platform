"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";
import { FiUser, FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff, FiBookOpen, FiEdit3 } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "reader",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // কাস্টম রোল সিলেক্টর হ্যান্ডলার
    const handleRoleSelect = (selectedRole) => {
        setFormData({ ...formData, role: selectedRole });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        try {
            setLoading(true);

            const { data, error } = await authClient.signUp.email({
                name: formData.name, 
                email: formData.email, // required
                password: formData.password, // required
                role: formData.role,
                callbackURL: "/",
            });

            if(data){
                toast.success("Account created successfully!",{position:'top-center', theme:'dark'})
                router.push('/login')
            }else{
                toast.error(error.message,{position:'top-center', theme:'dark'})
            }
            
        } catch (err) {
            setError(err.message || "Registration failed. Email might already be in use.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const data = await authClient.signIn.social({
                provider: "google",
            });
            if(data){
                toast.success("Welcome back! You've successfully signed in with Google.", {
                    position: 'top-center',
                    theme: 'dark'
                })
            }
        } catch (err) {
            console.error("Google Auth Error:", err);
        }
    };

    return (
        <section className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-4 py-6 md:py-12 selection:bg-violet-100">
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
                            Share stories.
                            <br />
                            Discover worlds.
                        </h1>

                        <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                            Join a premium community of passionate writers and avid readers.
                            Publish your own ebooks or dive into thousands of stories shared by others.
                        </p>

                        <div className="relative w-full h-80 mt-10 rounded-2xl overflow-hidden shadow-md border border-slate-200/60">
                            <Image
                                src="/images/book-image.jpg"
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
                                    Create Account
                                </h2>
                                <p className="text-slate-500 text-sm md:text-base">
                                    Register and start your literary journey today.
                                </p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 p-3.5 rounded-xl text-sm mb-5 font-medium">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-5">

                                {/* Full Name */}
                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">
                                        Full Name
                                    </label>
                                    <div className="h-12 rounded-xl bg-slate-50 border border-slate-200 px-4 flex items-center gap-3 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-violet-100 transition-all">
                                        <FiUser size={18} className="text-slate-400" />
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm md:text-base"
                                        />
                                    </div>
                                </div>

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

                                {/* Password Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Password */}
                                    <div>
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">
                                            Password
                                        </label>
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

                                    {/* Confirm Password */}
                                    <div>
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">
                                            Confirm Password
                                        </label>
                                        <div className="h-12 rounded-xl bg-slate-50 border border-slate-200 px-3 flex items-center gap-2 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-violet-100 transition-all">
                                            <FiLock size={16} className="text-slate-400 shrink-0" />
                                            <input
                                                name="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                required
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="••••••••"
                                                className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="text-slate-400 hover:text-slate-600 focus:outline-none shrink-0"
                                            >
                                                {showConfirmPassword ? <FiEye size={16} /> : <FiEyeOff size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Polished Interactive Role Selection */}
                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 block">
                                        I want to join as a
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Reader Card */}
                                        <div
                                            onClick={() => handleRoleSelect("reader")}
                                            className={`p-4 rounded-xl border-2 flex items-center gap-3 cursor-pointer select-none transition-all duration-200 ${formData.role === "reader"
                                                    ? "border-violet-600 bg-violet-50/40 text-violet-700 shadow-sm"
                                                    : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-600"
                                                }`}
                                        >
                                            <div className={`p-2 rounded-lg ${formData.role === "reader" ? "bg-violet-100" : "bg-slate-200/60"}`}>
                                                <FiBookOpen size={18} />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm">Reader</p>
                                                <p className="text-[11px] opacity-80 hidden sm:block">Enjoy & review ebooks</p>
                                            </div>
                                        </div>

                                        {/* Writer Card */}
                                        <div
                                            onClick={() => handleRoleSelect("writer")}
                                            className={`p-4 rounded-xl border-2 flex items-center gap-3 cursor-pointer select-none transition-all duration-200 ${formData.role === "writer"
                                                    ? "border-violet-600 bg-violet-50/40 text-violet-700 shadow-sm"
                                                    : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-600"
                                                }`}
                                        >
                                            <div className={`p-2 rounded-lg ${formData.role === "writer" ? "bg-violet-100" : "bg-slate-200/60"}`}>
                                                <FiEdit3 size={18} />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm">Writer</p>
                                                <p className="text-[11px] opacity-80 hidden sm:block">Publish & share stories</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Terms and Conditions */}
                                <label className="flex items-start gap-3 text-sm text-slate-500 cursor-pointer pt-1">
                                    <input
                                        type="checkbox"
                                        required
                                        className="mt-1 h-4 w-4 rounded border-slate-300 text-violet-600 accent-violet-600 cursor-pointer"
                                    />
                                    <span className="leading-tight text-xs sm:text-sm">
                                        I agree to the{" "}
                                        <span className="text-violet-600 font-medium hover:underline">Terms & Conditions</span>{" "}
                                        and{" "}
                                        <span className="text-violet-600 font-medium hover:underline">Privacy Policy</span>
                                    </span>
                                </label>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    isLoading={loading}
                                    className="w-full h-12 rounded-xl font-extrabold bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-1000 transition hover:bg-linear-to-r hover:from-[#FADA59] hover:to-[#EF573E] hover:text-white shadow-sm"
                                >
                                    {!loading && (
                                        <div className="flex items-center justify-center gap-2 w-full">
                                            Get Started
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
                                        className="w-full h-12 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-sm"
                                    >
                                        <FaGoogle size={14} className="text-red-500" />
                                        Google
                                    </Button>
                                </div>

                                <p className="text-center text-sm text-slate-500 pt-2">
                                    Already have an account?{" "}
                                    <Link
                                        href={`/login`}
                                        className="text-violet-600 hover:text-violet-700 font-semibold transition-colors"
                                    >
                                        Sign In
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
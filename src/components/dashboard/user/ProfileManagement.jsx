'use client'
import React, { useState } from "react";
import { Input, Button, Avatar } from "@heroui/react";
import { toast } from "react-toastify";
import Image from "next/image";

export default function ProfileManagement({ user }) {
    const [loading, setLoading] = useState(false);

    const [profile, setProfile] = useState({
        name: user?.name,
        email: user?.email,
        role: user?.role,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Todo: MongoDB update api
            console.log("Submitting updated document to MongoDB axis:", profile);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast.success("Profile updated successfully!", {
                position: 'top-center',
                theme: 'dark'
            });
        } catch (error) {
            toast.error("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto py-10 px-4 ebook-font-sans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* LEFT COLUMN: Avatar Card & Stats */}
                <div className="space-y-6">

                    {/* Card 1: Avatar Profile */}
                    <div
                        className="rounded-sm border p-6 flex flex-col items-center text-center relative"
                        style={{ background: "#FAF7F0", borderColor: "#E3DDCB" }}
                    >
                        <div className="relative mb-4">
                            {user?.image ? <Image
                                src={user?.image}
                                alt="image"
                                width={80}
                                height={80}
                                className="w-28 h-28 text-xl font-semibold border-2"
                                style={{ borderColor: "#B08D57", background: "#1B2430", color: "#FAF7F0" }}
                            /> : <div className="flex w-28 h-28 text-xl font-semibold border-2 items-center justify-center rounded-md bg-linear-to-br from-indigo-500 to-violet-500  text-white shadow-md">
                                {user?.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>}
                        </div>

                        <h3 className="ebook-font-serif text-xl font-medium" style={{ color: "#1B2430" }}>
                            {profile.name}
                        </h3>

                        <p className="text-xs mt-1 capitalize font-mono tracking-wider" style={{ color: "#B08D57" }}>
                            {profile.role}
                        </p>

                        <div
                            className="mt-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase inline-flex items-center gap-1.5 border"
                            style={{
                                background: user?.emailVerified ? "#E1F5FE" : "#EAE5D9",
                                color: user?.emailVerified ? "#0288D1" : "#6B6354",
                                borderColor: user?.emailVerified ? "#B3E5FC" : "#C9C0AA"
                            }}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${user?.emailVerified ? 'bg-blue-500' : 'bg-amber-600'}`}></span>
                            {user?.emailVerified ? "Verified User" : "Pending Verification"}
                        </div>
                    </div>

                    {/* Card 2: Quick Stats */}
                    <div
                        className="rounded-sm border p-6 space-y-4"
                        style={{ background: "#FAF7F0", borderColor: "#E3DDCB" }}
                    >
                        <h4 className="text-xs uppercase tracking-[0.14em] font-medium border-b pb-2" style={{ color: "#B08D57", borderColor: "#E3DDCB" }}>
                            Account Meta
                        </h4>

                        <div className="space-y-3 font-mono text-xs text-[#6B6354]">
                            <div className="flex justify-between items-center py-1 border-b border-dashed" style={{ borderColor: "#E3DDCB" }}>
                                <span>Joined</span>
                                <span className="text-[#1B2430]">June 2026</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                                <span>Status</span>
                                <span className="text-green-700 font-semibold">Active</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: Personal Information Form */}
                <div className="md:grid-cols-1 md:col-span-2">
                    <div
                        className="rounded-sm border h-full"
                        style={{ background: "#FAF7F0", borderColor: "#E3DDCB" }}
                    >
                        <div className="px-6 py-5 border-b flex justify-between items-center" style={{ borderColor: "#E3DDCB" }}>
                            <div>
                                <h2 className="ebook-font-serif text-xl" style={{ color: "#1B2430" }}>
                                    Personal Information
                                </h2>
                                <p className="text-xs mt-1" style={{ color: "#9A9180" }}>
                                    Update your writer profile and platform communications.
                                </p>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <form onSubmit={handleSaveChanges} className="p-6 space-y-6">

                            {/* Full Name Field */}
                            <div className="flex flex-col space-y-1.5">
                                <label className="text-[11px] tracking-[0.14em] uppercase font-medium" style={{ color: "#6B6354" }}>
                                    Full Name
                                </label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleInputChange}
                                    variant="bordered"
                                    required
                                    className="w-full text-sm border-[#D8D1BC] hover:border-[#B08D57]  shadow-none h-11 bg-white rounded-sm"

                                />
                            </div>

                            {/* Email Address Field */}
                            <div className="flex flex-col space-y-1.5">
                                <label className="text-[11px] tracking-[0.14em] uppercase font-medium" style={{ color: "#6B6354" }}>
                                    Email Address
                                </label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleInputChange}
                                    variant="bordered"
                                    required
                                    className="w-full text-sm border-[#D8D1BC] hover:border-[#B08D57] shadow-none h-11 bg-white rounded-sm"
                                />
                            </div>

                            {/* Save Changes Button */}
                            <div className="pt-4 flex justify-end border-t" style={{ borderColor: "#E3DDCB" }}>
                                <Button
                                    type="submit"
                                    isLoading={loading}
                                    disabled={loading}
                                    className="font-medium px-8 h-11 rounded-sm transition-colors text-sm tracking-wide"
                                    style={{
                                        background: "#1B2430",
                                        color: "#FAF7F0"
                                    }}
                                >
                                    Save Changes
                                </Button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
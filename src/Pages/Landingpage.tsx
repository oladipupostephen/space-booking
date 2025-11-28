"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Calendar,
  Clock,
  Shield,
  Zap,
  Star,
  MapPin,
} from "lucide-react";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import HeroSection from "@/Components/Home/HeroSection";
import FeaturesSection from "@/Components/Home/FeaturesSection";
import PricingSection from "@/Components/Home/PricingSection";
import CTASection from "@/Components/Home/CTASection";

export default function Landingpage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

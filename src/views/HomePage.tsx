"use client";

import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyUsSection = lazy(() => import("@/components/WhyUsSection"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const EstimateFormSection = lazy(() => import("@/components/EstimateFormSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const SectionFallback = () => <div className="py-20" />;

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyUsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BeforeAfterSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <EstimateFormSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default HomePage;

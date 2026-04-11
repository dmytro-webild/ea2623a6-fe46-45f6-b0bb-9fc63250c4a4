"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="large"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ShopifyOne"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Innovation for Your Digital Life"
      description="Experience the next generation of tech-driven lifestyle products. We bridge the gap between performance and elegant modern design."
      kpis={[
        {
          value: "100K+",
          label: "Happy Users",
        },
        {
          value: "99.9%",
          label: "Uptime Rate",
        },
        {
          value: "24/7",
          label: "Customer Support",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/transparent-prism_23-2147960095.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/blue-eyed-blonde-positive-woman-round-spectalces-dressed-casually-being-good-mood-after-day-off-isolated-pink_273609-3839.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiley-woman_23-2149022644.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/waist-up-confident-businessman-office_329181-19349.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-wearing-earrings-yellow-sweater_273609-4974.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blue-eyed-blonde-positive-woman-round-spectalces-dressed-casually-being-good-mood-after-day-off-isolated-pink_273609-3839.jpg",
          alt: "User 5",
        },
      ]}
      avatarText="Trusted by 10,000+ creators"
      marqueeItems={[
        {
          type: "text",
          text: "Ultra-Fast Charging",
        },
        {
          type: "text",
          text: "Sustainable Materials",
        },
        {
          type: "text",
          text: "Ergonomic Design",
        },
        {
          type: "text",
          text: "Global Warranty",
        },
        {
          type: "text",
          text: "24/7 Support",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "prod-1",
          name: "Smart Gadget V1",
          price: "$129.00",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072201.jpg",
        },
        {
          id: "prod-2",
          name: "Modern Audio Device",
          price: "$199.00",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-tech-device_23-2150722633.jpg",
        },
        {
          id: "prod-3",
          name: "Pro Wearable Tech",
          price: "$249.00",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072234.jpg",
        },
        {
          id: "prod-4",
          name: "Premium Acoustic Headphones",
          price: "$349.00",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-girl-wearing-headphones_23-2149829758.jpg",
        },
        {
          id: "prod-5",
          name: "Compact Smart Speaker",
          price: "$89.00",
          imageSrc: "http://img.b2bpic.net/free-photo/female-student-using-sound-mixer_107420-64814.jpg",
        },
        {
          id: "prod-6",
          name: "Advanced Smart Watch",
          price: "$299.00",
          imageSrc: "http://img.b2bpic.net/free-photo/athlete-with-watch-gloves_23-2147618061.jpg",
        },
      ]}
      title="Premium Tech Collection"
      description="Hand-picked electronic gadgets designed for performance, style, and reliability."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Our Commitment to Quality"
      metrics={[
        {
          icon: Award,
          label: "Industry Awards",
          value: "25+",
        },
        {
          icon: Shield,
          label: "Warranty Guaranteed",
          value: "2 Years",
        },
        {
          icon: Zap,
          label: "Fast Shipping",
          value: "24h",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "TechCorp",
        "DigitalHub",
        "GlobalNet",
        "InnovateIT",
        "SoftWave",
        "CloudSync",
        "DataFlow",
      ]}
      title="Trusted by Leaders"
      description="Companies worldwide rely on our products for their daily workflows."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Jenkins",
          date: "Jan 2025",
          title: "Verified Buyer",
          quote: "The quality is unmatched.",
          tag: "Tech",
          avatarSrc: "http://img.b2bpic.net/free-photo/blue-eyed-blonde-positive-woman-round-spectalces-dressed-casually-being-good-mood-after-day-off-isolated-pink_273609-3839.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-graphic-designer-smiling_1170-992.jpg",
        },
        {
          id: "2",
          name: "Michael Reed",
          date: "Dec 2024",
          title: "Tech Enthusiast",
          quote: "Exceptional support.",
          tag: "Tech",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-woman_23-2149022644.jpg",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4G3PQyP0HBt0dMkI2YLJMg8fS/uploaded-1775907411588-nmtra3am.png",
        },
        {
          id: "3",
          name: "Emily Chen",
          date: "Nov 2024",
          title: "Verified Buyer",
          quote: "Perfect home setup.",
          tag: "Design",
          avatarSrc: "http://img.b2bpic.net/free-photo/waist-up-confident-businessman-office_329181-19349.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-shopping_23-2147652127.jpg",
        },
        {
          id: "4",
          name: "David Smith",
          date: "Oct 2024",
          title: "Pro User",
          quote: "Durable and reliable.",
          tag: "Performance",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-wearing-earrings-yellow-sweater_273609-4974.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businesswoman-smiling-looking-camera-successful-confident-grey-haired-manager-sitting-office-room-workplace-business-management-concept_74855-7343.jpg",
        },
        {
          id: "5",
          name: "Jessica Lee",
          date: "Sep 2024",
          title: "Verified Buyer",
          quote: "Worth every cent.",
          tag: "Quality",
          avatarSrc: "http://img.b2bpic.net/free-photo/blue-eyed-blonde-positive-woman-round-spectalces-dressed-casually-being-good-mood-after-day-off-isolated-pink_273609-3839.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-blonde-russian-girl-puts-hands-chest-looking-side-isolated-orange-background-with-copy-space_141793-65450.jpg",
        },
      ]}
      title="What Our Customers Say"
      description="Join our community of satisfied users who trust our products."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Ready to get started?"
      description="Our team is available 24/7 to help you choose the best products."
      buttons={[
        {
          text: "Email Support",
          href: "mailto:support@shopifyone.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="ShopifyOne"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Electronics",
              href: "#products",
            },
            {
              label: "Accessories",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | ShopifyOne Inc."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

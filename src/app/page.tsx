"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="large"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Menu", id: "/menu" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Royal Indian Tandoor"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Authentic Indian Spices"
      description="Discover the rich tapestry of Indian heritage with our traditional curries, aromatic biryanis, and fresh tandoori specialties."
      buttons={[{ text: "Explore Menu", href: "/menu" }]}
      slides={[
        { imageSrc: "http://img.b2bpic.net/free-photo/chicken-tikka-masala-with-naan-bread-onion-peppers_141793-2144.jpg", imageAlt: "Chicken Tikka Masala" },
        { imageSrc: "http://img.b2bpic.net/free-photo/delicious-indian-dosa-served-with-chutney-sambar_141793-2155.jpg", imageAlt: "South Indian Dosa" },
        { imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-indian-biryani_23-2149129532.jpg", imageAlt: "Aromatic Biryani" },
        { imageSrc: "http://img.b2bpic.net/free-photo/indian-style-naan-bread-with-herbs_141793-2157.jpg", imageAlt: "Fresh Naan" },
        { imageSrc: "http://img.b2bpic.net/free-photo/delicious-paneer-butter-masala-with-naan_141793-2159.jpg", imageAlt: "Paneer Butter Masala" },
        { imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-indian-curry-with-rice_23-2149129534.jpg", imageAlt: "Traditional Curries" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Authentic Heritage"
      description="Our journey began in the vibrant markets of India, where spice blending is an art form. We bring those centuries-old techniques to your plate, honoring true Indian hospitality."
      imageSrc="http://img.b2bpic.net/free-photo/chef-preparing-indian-food_141793-2170.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        { title: "Hand-ground Spices", description: "Experience the authentic aroma of our hand-prepared masala blends.", imageSrc: "http://img.b2bpic.net/free-photo/indian-spices-wooden-bowls_141793-2180.jpg" },
        { title: "Tandoor Cooked", description: "Traditional clay oven cooking ensures perfection and tenderness.", imageSrc: "http://img.b2bpic.net/free-photo/tandoori-cooking-process_141793-2190.jpg" },
        { title: "Farm-to-Fork", description: "Fresh vegetables and ingredients sourced from sustainable farms.", imageSrc: "http://img.b2bpic.net/free-photo/fresh-organic-vegetables_141793-2195.jpg" },
      ]}
      title="The Royal Experience"
      description="Quality and tradition in every bite, crafted for the true connoisseur."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Classic", name: "Butter Chicken", price: "$19.00", rating: 5, reviewCount: "250", imageSrc: "http://img.b2bpic.net/free-photo/butter-chicken-with-naan_141793-2200.jpg?_wi=1" },
        { id: "p2", brand: "Traditional", name: "Palak Paneer", price: "$16.00", rating: 5, reviewCount: "180", imageSrc: "http://img.b2bpic.net/free-photo/palak-paneer-dish_141793-2205.jpg?_wi=1" },
        { id: "p3", brand: "Spicy", name: "Lamb Vindaloo", price: "$21.00", rating: 4, reviewCount: "140", imageSrc: "http://img.b2bpic.net/free-photo/lamb-vindaloo-dish_141793-2210.jpg?_wi=1" },
        { id: "p4", brand: "Side", name: "Vegetable Samosa", price: "$8.00", rating: 5, reviewCount: "300", imageSrc: "http://img.b2bpic.net/free-photo/vegetable-samosas_141793-2215.jpg?_wi=1" },
        { id: "p5", brand: "Classic", name: "Chicken Biryani", price: "$18.00", rating: 5, reviewCount: "420", imageSrc: "http://img.b2bpic.net/free-photo/chicken-biryani-plate_141793-2220.jpg?_wi=1" },
        { id: "p6", brand: "Side", name: "Garlic Naan", price: "$5.00", rating: 5, reviewCount: "500", imageSrc: "http://img.b2bpic.net/free-photo/garlic-naan-bread_141793-2225.jpg?_wi=1" },
      ]}
      title="Royal Menu Selections"
      description="A symphony of spices awaits your palate."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", title: "Satisfied Diners", value: "15k+", icon: Users },
        { id: "m2", title: "Authentic Spices", value: "40+", icon: Utensils },
        { id: "m3", title: "Years of Service", value: "25+", icon: Award },
      ]}
      title="Excellence in Indian Cuisine"
      description="Our commitment to authenticity ensures every dish tells a story."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Sunita R.", role: "Local Foodie", company: "Blog", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-at-restaurant_141793-2230.jpg" },
        { id: "t2", name: "Arjun K.", role: "Regular", company: "Guest", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-eating-delicious-meal_141793-2235.jpg" },
      ]}
      kpiItems={[
        { value: "4.9/5", label: "Avg Rating" },
        { value: "98%", label: "Fresh Ingredients" },
        { value: "1k+", label: "Dine-in Guests" },
      ]}
      title="A Culinary Journey"
      description="See why our guests return time and time again."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do you have mild options?", content: "Yes, we accommodate all spice level preferences." },
        { id: "q2", title: "Is there a gluten-free menu?", content: "Yes, we offer a wide variety of GF-friendly dishes." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/indian-hospitality-table_141793-2240.jpg"
      mediaAnimation="slide-up"
      title="Curious About Our Cuisine?"
      description="Learn more about our ingredients and culinary process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      tag="Connect"
      title="Reserve Your Table"
      description="Join us for a royal Indian dining experience."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Royal Indian Tandoor"
      columns={[
        { title: "Navigation", items: [{ label: "Menu", href: "/menu" }, { label: "About", href: "#about" }] },
        { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Golden Dragon"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Authentic Chinese Cuisine"
      description="Experience the tradition and bold flavors of authentic Chinese cooking right in the heart of your neighborhood."
      buttons={[
        {
          text: "Order Now",
          href: "#menu",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-traditional-asian-dumplings-with-copy-space_23-2148694408.jpg",
          imageAlt: "Authentic dim sum",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-asian-dish-with-vegetables_23-2148694331.jpg",
          imageAlt: "Traditional wok dishes",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-delicious-food_23-2150854007.jpg",
          imageAlt: "Hand-pulled noodles",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beef-vegetables-sesame-seeds-white-plate-black-background_123827-20763.jpg",
          imageAlt: "Stir-fried vegetables",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fried-spring-roll_74190-640.jpg",
          imageAlt: "Golden spring rolls",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bowl-noodles-with-assortment-asian-food_23-2148382870.jpg",
          imageAlt: "Authentic rice dishes",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="A Legacy of Flavor"
      description="For over three decades, our chefs have perfected the balance of spices and traditional techniques, bringing authentic Chinese delicacies from our kitchen to your table."
      imageSrc="http://img.b2bpic.net/free-photo/delicious-ramen-with-chopsticks_23-2150606745.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Fresh Ingredients",
          description: "We source daily produce to ensure every dish is fresh.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-arrangement-salad-with-fresh-vegetables_23-2148538663.jpg",
        },
        {
          title: "Traditional Recipes",
          description: "Authentic recipes passed down through generations.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-indigenous-person-integrating-society_23-2151102496.jpg",
        },
        {
          title: "Quick Delivery",
          description: "Enjoy our meals in the comfort of your home.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-courier-yellow-uniform-black-gloves-black-mask-holding-pizza-boxes-white-card-delivering_140725-22277.jpg",
        },
      ]}
      title="Why Choose Us"
      description="Quality ingredients and traditional cooking methods define our approach."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Signature",
          name: "Kung Pao Chicken",
          price: "$18.50",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-vegetables-sauce-with-sesame_141793-92.jpg",
        },
        {
          id: "p2",
          brand: "Classic",
          name: "Sweet & Sour Pork",
          price: "$16.00",
          rating: 4,
          reviewCount: "98",
          imageSrc: "http://img.b2bpic.net/free-photo/sac-qovurmasi-turshu-govurma-local-food-inside-black-sac-with-herbs_114579-1882.jpg",
        },
        {
          id: "p3",
          brand: "Signature",
          name: "Mapo Tofu",
          price: "$14.50",
          rating: 5,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/cod-with-potatoes_123827-37158.jpg",
        },
        {
          id: "p4",
          brand: "Classic",
          name: "Wonton Soup",
          price: "$12.00",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/soup-jar-wooden-support-spoon_23-2148320813.jpg",
        },
        {
          id: "p5",
          brand: "Special",
          name: "Peking Duck",
          price: "$45.00",
          rating: 5,
          reviewCount: "200",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-traditional-asian-food-peking-duck-with-cucumbers-sauce-plate_141793-8524.jpg",
        },
        {
          id: "p6",
          brand: "Traditional",
          name: "Fried Rice",
          price: "$10.50",
          rating: 4,
          reviewCount: "300",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-rice-seafood-dish-with-copy-space_23-2148249208.jpg",
        },
      ]}
      title="Our Signature Dishes"
      description="Discover our most celebrated creations prepared with care."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Happy Guests",
          value: "10k+",
          icon: Users,
        },
        {
          id: "m2",
          title: "Daily Dishes",
          value: "500+",
          icon: Utensils,
        },
        {
          id: "m3",
          title: "Years Cooking",
          value: "30+",
          icon: Award,
        },
      ]}
      title="Our Kitchen by the Numbers"
      description="Committed to quality and service for all our loyal customers."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice Wong",
          role: "Foodie",
          company: "Local Blog",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-elegant-calm-happy-woman-green-summer-dress-sits-with-coffee-cafe-enjoying-morning_343596-3669.jpg",
        },
        {
          id: "t2",
          name: "Bob Chen",
          role: "Regular",
          company: "Neighbor",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",
        },
        {
          id: "t3",
          name: "Carol Lee",
          role: "Critic",
          company: "Food Mag",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/authentic-person-eating-fresh-cheese_23-2150220533.jpg",
        },
        {
          id: "t4",
          name: "David Tan",
          role: "Chef",
          company: "Guest",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-with-delicious-food_23-2149706752.jpg",
        },
        {
          id: "t5",
          name: "Eve Wong",
          role: "Fan",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-enjoying-food-restaurant_23-2149269175.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9/5",
          label: "Avg Rating",
        },
        {
          value: "99%",
          label: "Satisfaction",
        },
        {
          value: "500+",
          label: "Reviews",
        },
      ]}
      title="Loved by Our Community"
      description="Read what our customers have to say about their experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer delivery?",
          content: "Yes, we deliver within 5 miles.",
        },
        {
          id: "q2",
          title: "Are there vegan options?",
          content: "Yes, we have a dedicated plant-based menu.",
        },
        {
          id: "q3",
          title: "Can I make reservations?",
          content: "Absolutely, please call ahead.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/pretty-indian-girl-black-saree-dress-posed-restaurant-with-mobile-phone-hand_627829-1967.jpg"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Answers to your queries about our menu and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Visit Us"
      title="Reserve Your Table"
      description="Join us today for an authentic culinary experience."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Golden Dragon"
      columns={[
        {
          title: "Navigate",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

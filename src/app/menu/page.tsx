"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function MenuPage() {
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
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Menu", id: "/menu" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="Royal Indian Tandoor"
        />
        <div className="pt-32 pb-20">
          <ProductCardTwo
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="four-items-2x2-equal-grid"
            useInvertedBackground={false}
            products={[
              { id: "p1", brand: "Classic", name: "Butter Chicken", price: "$19.00", rating: 5, reviewCount: "250", imageSrc: "http://img.b2bpic.net/free-photo/butter-chicken-with-naan_141793-2200.jpg?_wi=2" },
              { id: "p2", brand: "Traditional", name: "Palak Paneer", price: "$16.00", rating: 5, reviewCount: "180", imageSrc: "http://img.b2bpic.net/free-photo/palak-paneer-dish_141793-2205.jpg?_wi=2" },
              { id: "p3", brand: "Spicy", name: "Lamb Vindaloo", price: "$21.00", rating: 4, reviewCount: "140", imageSrc: "http://img.b2bpic.net/free-photo/lamb-vindaloo-dish_141793-2210.jpg?_wi=2" },
              { id: "p4", brand: "Side", name: "Vegetable Samosa", price: "$8.00", rating: 5, reviewCount: "300", imageSrc: "http://img.b2bpic.net/free-photo/vegetable-samosas_141793-2215.jpg?_wi=2" },
              { id: "p5", brand: "Classic", name: "Chicken Biryani", price: "$18.00", rating: 5, reviewCount: "420", imageSrc: "http://img.b2bpic.net/free-photo/chicken-biryani-plate_141793-2220.jpg?_wi=2" },
              { id: "p6", brand: "Side", name: "Garlic Naan", price: "$5.00", rating: 5, reviewCount: "500", imageSrc: "http://img.b2bpic.net/free-photo/garlic-naan-bread_141793-2225.jpg?_wi=2" },
            ]}
            title="Our Full Menu"
            description="Discover our complete selection of authentic Indian delicacies."
          />
        </div>
        <FooterBaseCard
          logoText="Royal Indian Tandoor"
          columns={[
            { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Menu", href: "/menu" }] },
            { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
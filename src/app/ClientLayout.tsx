'use client';

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 200);
        return () => clearTimeout(timer);
    }, []);

    return isLoading ? (
        <Preloader />
    ) : (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}



// src/app/about/page.tsx

import AboutClient from "./AboutClient"; 

export const metadata = {
    title: "About Us | DR-NEXGEN Technologies",
    description:
        "Learn about DR-NEXGEN Technologies, our mission, vision, and why we are the best choice for your final year projects and tech solutions.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutClient /> 
        </main>
    );
}



import ServiceClient from "./ServiceClient"; 

export const metadata = {
    title: "Tech Services | DR-NEXGEN Technologies",
    description:
        "Discover DRNEXGEN Technologies Pvt Ltd — a leading startup offering academic engineering projects and industry-grade tech services in AI, ML, IoT, Web & Mobile App Development, Blockchain, and more. We empower students and businesses with innovative, hands-on solutions.",
};

export default function ServicePage() {
    return (
        <main>
            <ServiceClient /> 
        </main>
    );
}

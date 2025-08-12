

// src/app/contact/page.tsx

import ContactClient from "./ContactClient"; 

export const metadata = {
    title: "Contact Us | DR-NEXGEN Technologies",
    description:
        "Contact DRNEXGEN Technologies Pvt Ltd — a leading service-based tech startup in AI, ML, IoT, Web & Mobile Development, and Blockchain. Reach out for innovative project solutions, industrial training, internships, or business collaboration.",
};


export default function ContactPage() {
    return (
        <main>
            <ContactClient />
        </main>
    );
}

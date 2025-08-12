

// src/app/contact/page.tsx

import JobClient from "./JobClient"; 

export const metadata = {
    title: "Job Us | DR-NEXGEN Technologies",
    description:
        "Job DRNEXGEN Technologies Pvt Ltd — a leading service-based tech startup in AI, ML, IoT, Web & Mobile Development, and Blockchain. Reach out for innovative project solutions, industrial training, internships, or business collaboration.",
};


export default function JobPage() {
    return (
        <main>
            <JobClient />
        </main>
    );
}

// src/app/request-services/page.tsx

import RequestServices from './RequestServices';

export const metadata = {
  title: "Request Services | AI, IoT, Web, Mobile & Blockchain Solutions – DRNEXGEN",
  description:
    "Get expert solutions from DRNEXGEN Technologies – your trusted partner in AI, ML, IoT, Web & Mobile Development, Blockchain, and Embedded Systems. Request customized services, project consultations, or training support today.",
  keywords: [
    "AI development services",
    "IoT solutions provider",
    "Web and mobile app development",
    "Blockchain development services",
    "Machine learning project support",
    "Request tech services India",
    "Final year project support",
    "DRNEXGEN technologies",
    "Industrial training and internships",
    "Custom software solutions"
  ],
};

export default function RequestServicesPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Request a Service</h1>
      <RequestServices />
    </main>
  );
}

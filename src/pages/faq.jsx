import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CardFAQ from "@/components/common/CardFAQ";

// Data dummy FAQ
const faqs = [
  {
    id: 1,
    pertanyaan: "What types of services does your company specialize in?",
    jawaban:
      "Our company specializes in a comprehensive range of industrial services, primarily focusing on Mechanical, Construction, and Lifting operations. This includes intricate steel structure and precast erection, general mechanical services, precise installations, detailed piping work, and specialized heavy lifting operations for both on-shore and off-shore environments. We also offer extensive services in various Fields of Business, such as full-service support for power plants, concrete plants, material handling plants, and comprehensive infrastructure projects like bridges, toll roads, and jetties. Additionally, we provide expert lifting consultancy and heavy equipment rental, including various types of cranes. Our aim is to deliver end-to-end solutions tailored to our clients' diverse needs.",
  },
  {
    id: 2,
    pertanyaan: "How do you ensure safety and quality in your projects?",
    jawaban:
      "Safety and quality are paramount in all our operations. We adhere strictly to international safety standards and regulations, implementing rigorous safety protocols and continuous training for all personnel. Our quality assurance process involves meticulous planning, use of high-grade materials, advanced equipment, and regular inspections at every stage of the project. We employ certified and experienced professionals who are committed to delivering excellence, ensuring that all projects are completed safely, efficiently, and to the highest quality benchmarks.",
  },
  {
    id: 3,
    pertanyaan:
      "What is your process for project execution, from initial consultation to completion?",
    jawaban:
      "Our project execution process is designed to be transparent and efficient. It typically begins with an initial consultation to understand the client's specific requirements and project scope. Following this, we conduct a detailed site assessment and develop a comprehensive proposal, including technical specifications, timelines, and cost estimates. Upon agreement, our team mobilizes resources, implements the project plan with continuous monitoring and quality control, and maintains open communication with the client throughout. The project concludes with thorough testing, commissioning, and a final handover, ensuring client satisfaction and operational readiness.",
  },
  {
    id: 4,
    pertanyaan:
      "Do you offer customized solutions for unique industrial challenges?",
    jawaban:
      "Absolutely. We understand that every industrial project presents its own unique set of challenges and requirements. Our team of experienced engineers and specialists is adept at developing customized solutions that are specifically tailored to address complex industrial needs. We work closely with our clients to analyze their particular situation, identify potential obstacles, and design innovative, efficient, and cost-effective strategies that ensure successful project outcomes, even for the most demanding applications.",
  },
  {
    id: 5,
    pertanyaan: "What are your capabilities in offshore lifting operations?",
    jawaban:
      "Our offshore lifting capabilities are robust and comprehensive, designed to handle the complexities of marine environments. We possess specialized heavy lifting equipment and a team of highly certified and experienced personnel trained specifically for offshore operations. Our services include the precise lifting and placement of large modules, platforms, and subsea components, adhering to stringent international maritime safety standards. We conduct thorough risk assessments and detailed lift plans to ensure maximum safety and operational efficiency in all offshore projects.",
  },
  {
    id: 6,
    pertanyaan: "How do you manage project timelines and budget constraints?",
    jawaban:
      "Effective project management is central to our operations. We utilize advanced project planning and tracking tools to meticulously manage timelines and budget constraints. Our project managers are skilled in resource allocation, scheduling, and risk mitigation, ensuring that projects stay on track and within budget. We maintain transparent communication with our clients, providing regular updates on progress and proactively addressing any potential deviations to ensure timely and cost-effective project delivery without compromising on quality.",
  },
];

const FaqPage = () => {
  return (
    <div className="flex flex-col justify-start items-start bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-row w-full justify-center items-center h-80 sm:h-72 relative mt-20">
        <div className="w-full h-full absolute top-0 left-0 bg-black">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/assets/image/bg-faq2.png"
            alt="FAQ Background"
          />
        </div>
        <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-4 text-white text-center px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-sm font-medium max-w-4xl">
            Find answers to common questions about our services, equipment,
            certifications, and processes. We’re here to help you make informed
            decisions with clarity and confidence.
          </p>
        </div>
      </div>

      {/* Daftar FAQ Section */}
      <div className="w-full px-4 sm:px-8 md:px-20 lg:px-40 py-10 flex flex-col gap-4">
        {faqs.length > 0 ? (
          faqs.map((faqItem) => (
            <CardFAQ
              key={faqItem.id}
              question={faqItem.pertanyaan}
              answer={faqItem.jawaban}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">
            Tidak ada data FAQ yang tersedia saat ini.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FaqPage;

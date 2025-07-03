import React from "react";
import { TbZoomQuestionFilled } from "react-icons/tb";
import CardFAQ from "@/components/common/CardFAQ";

// Data dummy FAQ (4 pertama)
const dummyFaqs = [
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
];

const FAQ = () => {
  const mainFaqs = dummyFaqs.slice(0, 4);

  return (
    <div className="w-full px-4 md:px-20 lg:px-40 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <div className="flex flex-row gap-4 rounded-full px-6 md:px-10 py-2 mb-4 bg-[#00662C]/10">
          <TbZoomQuestionFilled size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">
            Frequently Asked Questions
          </p>
        </div>
      </div>

      <div className="w-full px-0 sm:px-4 md:px-12 py-6 flex flex-col gap-4">
        {mainFaqs.length > 0 ? (
          mainFaqs.map((faqItem) => (
            <CardFAQ
              key={faqItem.id}
              question={faqItem.pertanyaan}
              answer={faqItem.jawaban}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada FAQ yang tersedia saat ini.
          </p>
        )}
      </div>

      <div className="flex flex-row justify-center items-center mt-8">
        <a
          className="px-8 py-3 text-base font-medium text-white bg-[#00662C] rounded-full hover:text-[#00662C] hover:bg-transparent border border-[#00662C] transition-all duration-300 ease-in-out"
          href="/faq"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default FAQ;

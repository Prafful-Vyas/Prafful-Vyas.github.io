import Header from "./components/Header.jsx";
import React from "react";
import ResumeSection from "./components/ResumeSection.jsx";
import resumeData from "./components/resumeData.js";

export default function App() {
  return (
    <>
      <div class="flex flex-col justify-between items-center md:w-[600px] mx-auto gap-y-16 mt-10">
        <Header />
        <div class="flex flex-col justify-between gap-y-5 w-full">
          <h2 class="font-bold text-[24px] p-2">Projects</h2>
          <div class="flex flex-col gap-4">
            {resumeData.map((section, index) => (
              <ResumeSection
                key={index}
                subject={section.subject}
                items={section.items}
                liveLink={section.liveLink}
                githubLink={section.githubLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

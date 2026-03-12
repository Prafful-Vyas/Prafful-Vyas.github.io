import Header from "./components/Header.jsx";
import React from "react";
import ResumeSection from "./components/ResumeSection.jsx";
import resumeData from "./components/resumeData.js";
import OpenSourceContributions from "./components/OpenSourceContributions.jsx";
import contributionsData from "./components/contributionsData.js";
import Footer from "./components/Footer.jsx"

export default function App() {
  const hasProjects = resumeData && resumeData.length > 0;
  const hasContributions = contributionsData && contributionsData.length > 0;

  return (
    <>
      <div class="flex flex-col justify-between items-center md:w-[600px] mx-auto gap-y-8 mt-10">
        <Header />

        {/* ✅ PROJECTS SECTION – rendered only if resumeData has entries */}
        {hasProjects && (
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
        )}

        {/* ✅ OPEN SOURCE SECTION – rendered only if contributionsData has entries */}
        {hasContributions && (
          <div class="flex flex-col justify-between gap-y-5 w-full">
            <h2 class="font-bold text-[24px] p-2">Open Source Contributions</h2>

            <div class="flex flex-col gap-4">
              {contributionsData.map((section, index) => (
                <OpenSourceContributions
                  key={index}
                  subject={section.subject}
                  contributionsLink={section.contributionsLink}
                />
              ))}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

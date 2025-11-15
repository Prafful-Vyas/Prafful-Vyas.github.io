const ResumeSection = ({ subject, items = [], liveLink, githubLink }) => {
  return (
    <section class="w-full bg-[#1A1A1A] flex flex-col gap-4 p-2">
      <div class="flex flex-col justify-between gap-y-4">
        <h2 class="text-xl font-semibold">{subject}</h2>

        <ul class="list-disc list-inside text-white space-y-4">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div class="flex gap-4">
        {liveLink ? (
          <div class="w-full flex justify-center gap-2 px-4 py-2 bg-[#4E4E4E]">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              class="text-white"
            >
              Live Site
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              class="text-white"
            >
              <img src="ArrowUpRight.svg" />
            </a>
          </div>
        ) : null}

        {githubLink ? (
          <div class="w-full flex justify-center gap-2 px-4 py-2 bg-[#067402]">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              class="text-white"
            >
              GitHub
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              class="text-white"
            >
              <img src="ArrowUpRight.svg" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ResumeSection;

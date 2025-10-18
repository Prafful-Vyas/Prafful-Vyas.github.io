const ResumeSection = ({ subject, items = [], liveLink, githubLink }) => {
  return (
    <section class="grid grid-cols-1 gap-y-6 border border-blue-300">
      <div class="bg-[#1A1A1A] p-5">
        <div class="flex flex-col justify-between gap-y-4">
          <h2 class="text-xl font-semibold">{subject}</h2>

          <ul class="list-disc list-inside text-white">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div class="flex gap-4">
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Live Site
            </a>
          ) : null}

          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

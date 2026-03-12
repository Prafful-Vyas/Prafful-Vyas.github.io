const OpenSourceContributions = ({subject, contributionsLink}) => {
    return (
        <section class="w-full bg-[#1A1A1A] flex flex-col gap-4 p-2">
            {contributionsLink ? (<div class="flex justify-between items-center gap-y-4">
                <a href={contributionsLink} class="text-xl font-semibold text-white">{subject}</a>
                <a
              href={contributionsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
                <img src="ArrowUpRight.svg" />
            </a>
            </div>) : null}
        </section>
    )
}

export default OpenSourceContributions;
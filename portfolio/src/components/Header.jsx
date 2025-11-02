export default function Header() {
  return (
    <>
      <div class="flex flex-col justify-between gap-[44px] p-5">
        <div>
          <img
            src="My_image.jpg"
            alt="Profile picture"
            class="w-[70px] rounded-md"
          />
        </div>
        <div class="flex flex-col justify-between gap-y-3.5">
          <div>
            <h1 class="font-bold text-[32px]">Hi I'm Prafful</h1>
            <p>
              A passionate data enthusiast with a keen interest in math and
              computer science.
            </p>
          </div>
          <div class="flex flex-start gap-x-3.5">
            <a
              href="https://linkedin.com/in/praffulvyas"
              class="font-medium font-color text-[#639CFF] underline decoration-[#639CFF] underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Prafful-Vyas"
              class="font-medium font-color text-[#639CFF] underline decoration-[#639CFF] underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="mailto:praffulvyas07@gmail.com"
              class="font-medium font-color text-[#639CFF] underline decoration-[#639CFF] underline-offset-4"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

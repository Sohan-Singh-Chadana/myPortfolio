const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 1.5,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-300/50 dark:bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ring-2 ring-inset ring-sky-400/50 dark:ring-zinc-50/50">
          <h3 className="mb-4 text-2xl text-sky-400">About me</h3>

          <p className="text-zinc-900 dark:text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hi, I'm Sohan, a passionate Frontend Developer with a focus on
            creating engaging and user-friendly web experiences. I specialize in
            HTML, CSS, JavaScript, and modern frontend frameworks like React and
            Redux. I believe that great web development combines both technical
            skills and creativity, and I always strive to build responsive,
            efficient, and intuitive user interfaces.
          </p>

          <p className="text-zinc-900 dark:text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I’m constantly learning and growing in this ever-evolving field,
            exploring the latest web technologies and best practices to ensure
            my work is always up-to-date and future-proof. Whether it’s building
            a seamless navigation experience or optimizing performance, I
            approach every project with a keen eye for detail and a commitment
            to quality.
          </p>

          {/* <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            With experience in collaborating with teams and managing project
            deadlines, I also love problem-solving and finding solutions that
            enhance the user experience. I’m always eager to take on new
            challenges and contribute to the success of innovative web projects.
            Feel free to explore my work and get in touch if you’d like to
            collaborate or learn more about what I can bring to your project!{" "}
            <br />
            Feel free to explore my work and get in touch if you’d like to
            collaborate or learn more about what I can bring to your project!
          </p> */}

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-700 dark:text-zinc-400">
                  {label}
                </p>
              </div>
            ))}

            <img
              src="/images/light-Logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto bg-white"
              // src="/images/logo.svg"
              // width={30}
              // height={30}
              // className="ml-auto md:w-[80px] md:h-[80px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

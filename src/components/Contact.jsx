import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Contact me for collaboration
          </h2>

          <p className="text-black dark:text-zinc-400 mt-3 mb-1 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>
          <p className="text-gray-700 dark:text-zinc-400 mt-2 mb-1 max-w-[50ch] lg:max-w-[35ch] reveal-up">
            <span className="text-zinc-600 dark:text-zinc-200">Email : </span>
            &nbsp; sohansinghchadana83@gmail.com
          </p>
          <p className="text-gray-700 dark:text-zinc-400 mt-2 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            <span className="text-zinc-600 dark:text-zinc-200">Number :</span>{" "}
            &nbsp; 6354728270
          </p>

          <SocialLinks className="mt-auto" />
        </div>

        <form
          action="https://formspree.io/f/xqaklkjb"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Sohan Singh"
                className="text-field reveal-up"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Sohan@example.com"
                className="text-field reveal-up"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

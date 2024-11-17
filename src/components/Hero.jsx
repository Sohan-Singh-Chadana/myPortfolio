// * Components
import { ButtonPrimary, ButtonOutline } from "./Button";
import SocialLinks from "./SocialLinks";

// Hero component: displays the main hero section of the website
const Hero = () => {
  return (
    // Hero section container
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          {/* Profile information */}
          <div className="flex items-center gap-3">
            <figure className="img-box w-12 h-12 rounded-lg">
              <img
                src="/images/avatar-2.jpeg"
                width={40}
                height={40}
                alt="Sohan Singh"
                className="img-cover"
              />
            </figure>

            {/* Availability indicator */}
            <div className="flex items-center gap-1.5 text-zinc-950 dark:text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0  rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          {/* Hero heading */}
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8  lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          {/* Call-to-action buttons */}
          <div className="flex items-center gap-3 ">
            <ButtonPrimary
              label={"Download CV"}
              icon={"download"}
              href="/cv/CV.pdf"
              download="MY_Frontend_CV.pdf"
            />
            <ButtonOutline
              href={"#about"}
              label={"Scroll down"}
              icon={"arrow_downward"}
            />
          </div>

          {/* Social links */}
          <SocialLinks className="mt-8" />
        </div>

        {/* Hero image (visible on large screens) */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px]  ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40  to-65% rounded-[60px] overflow-hidden ring-2 ring-sky-400 ">
            <img
              src="/images/hero-banner3.jpeg"
              // src="/images/avatar-2.jpg"
              width={656}
              height={800}
              alt="Sohan"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;

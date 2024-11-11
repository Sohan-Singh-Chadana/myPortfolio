//* Node modules
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

//* Register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

//* Components
import ReviewCard from "./ReviewCard";
import { useRef } from "react";

// const reviews = [
//   {
//     content:
//       "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
//     name: "Sophia Ramirez",
//     imgSrc: "/images/people-1.jpg",
//     company: "PixelForge",
//   },
//   {
//     content:
//       "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
//     name: "Ethan Caldwell",
//     imgSrc: "/images/people-2.jpg",
//     company: "NexaWave",
//   },
//   {
//     content:
//       "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
//     name: "Liam Bennett",
//     imgSrc: "/images/people-3.jpg",
//     company: "CodeCraft",
//   },
//   {
//     content:
//       "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
//     name: "Noah Williams",
//     imgSrc: "/images/people-4.jpg",
//     company: "BrightWeb",
//   },
//   {
//     content:
//       "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
//     name: "Ava Thompson",
//     imgSrc: "/images/people-5.jpg",
//     company: "TechMosaic",
//   },
//   {
//     content:
//       "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
//     name: "Jonathan",
//     imgSrc: "/images/people-6.jpg",
//     company: "Skyline Digital",
//   },
// ];
const reviews = [
  {
    content:
      "Great shopping experience! The website is user-friendly, and checkout is quick. Product selection is vast, and delivery was on time. Highly recommend for hassle-free online shopping!",
    title: "eCommerce Website Feedback",
  },
  {
    content:
      "The Countries API is accurate and fast. It provides detailed information about countries in a simple format. A great tool for developers looking for reliable global data integration!",
    title: "Countries API Website Feedback",
  },
  {
    content:
      "Sohan’s project demonstrated strong skills in frontend development. Impressive work!",
    title: "Testimonials from Peers ",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-00",
    });
  });

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="section " id="reviews">
      <div className="container relative">
        <h2 className="headline-2 mb-8 reveal-up">What You Can Expect</h2>

        <div ref={scrollRef} className="overflow-hidden ">
          <div className="scrub-slide  flex items-stretch gap-3 w-fit ">
            {reviews.map(({ content, title }, key) => (
              <ReviewCard key={key} content={content} title={title} />
            ))}
            {/* {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))} */}
          </div>
        </div>
        <button
          onClick={scrollLeft}
          className="absolute left-1/3  -bottom-12  scrollBtn"
        >
          <span className="material-symbols-rounded ">chevron_left</span>
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-1/3  -bottom-12  scrollBtn"
        >
          <span className="material-symbols-rounded">chevron_right</span>
        </button>
      </div>
    </section>
  );
};

export default Review;

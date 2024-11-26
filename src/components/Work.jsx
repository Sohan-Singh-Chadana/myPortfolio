//* Components
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Countries Show Detail",
    tags: ["API", "Development"],
    projectLink: "https://countries-api-project-react.netlify.app/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "The Shoe Company",
    tags: ["Development", "Web-design"],
    projectLink: "https://shoe-company-p.netlify.app/",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Snitch  eCommerce",
    tags: ["Development", "API"],
    projectLink: "https://myecommerceproject-1.netlify.app/",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "Electronics  eCommerce",
    tags: ["Development", "API", "Responsive"],
    projectLink: "https://github.com/Sohan-Singh-Chadana/JSeCommer",
  },
  {
    imgSrc: "/images/project-5.png",
    title: "Flavoro foods eCommerce ",
    tags: ["Redux", "Development", "Web-Design"],
    projectLink: "https://github.com/Sohan-Singh-Chadana/Flavoro-Foods",
  },
  // {
  //   imgSrc: "/images/project-5.jpg",
  //   title: "eCommerce website",
  //   tags: ["eCommerce", "Development"],
  //   projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  // },
  // {
  //   imgSrc: "/images/project-6.jpg",
  //   title: "vCard Personal portfolio",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  // },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

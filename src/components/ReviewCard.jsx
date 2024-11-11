//* Node Modules
import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
  icon: (
    <path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z" />
  ),
});

const ReviewCard = ({ content, title, name, imgSrc, company }) => {
  return (
    <div className="bg-zinc-100/50 dark:bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420] ring-2 ring-inset  transition-shadow ring-zinc-400/50 dark:ring-zinc-50/50 hover:ring-sky-300 dark:hover:ring-sky-400 ">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon }, key) => (
          <svg
            key={key}
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#fde047"
          >
            {icon}
          </svg>
        ))}
      </div>

      <p className="text-black dark:text-zinc-400 mb-8">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            className="img-cover"
          />
        </figure>

        <div>
          <p className="text-sky-400 dark:text-white">{title}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // imgSrc: PropTypes.string.isRequired,
  // company: PropTypes.string.isRequired,
};

export default ReviewCard;

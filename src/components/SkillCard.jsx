//* Node modules
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={`flex items-center gap-3 ring-2 ring-inset ring-sky-300/50 dark:ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors group  ${classes}`}
    >
      <figure
        className={`bg-zinc-200/50 dark:bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-500 dark:group-hover:bg-zinc-100 transition-colors`}
      >
        <img src={imgSrc} alt={label} width={32} height={32} />
      </figure>

      <div>
        <h3>{label}</h3>

        <p className="text-sky-500/80 dark:text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;

import clsx from "clsx";
import s from "./Options.module.css";

const Options = ({ feedbackType, updateFeedback, total, reset }) => {
  const btnOptions = Object.keys(feedbackType);

  return (
    <div className={clsx(s.buttonWrapper)}>
      {btnOptions.map((option) => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option}
        </button>
      ))}

      {total > 0 ? <button onClick={() => reset()}>Resert</button> : null}
    </div>
  );
};

export default Options;
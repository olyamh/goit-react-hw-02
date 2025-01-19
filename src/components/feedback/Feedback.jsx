import clsx from "clsx";
import s from "./Feedback.module.css";

const Feedback = ({ feedbackType, total, positive }) => {
  if (
    feedbackType.good === 0 &&
    feedbackType.neutral === 0 &&
    feedbackType.bad === 0
  ) {
    return null;
  }
  const feedbackOptions = Object.keys(feedbackType);
  return (
    <ul>
      {feedbackOptions.map((option) => (
        <li key={option}>
          {option}: {feedbackType[option]}
        </li>
      ))}
      <li>total: {total}</li>
      <li>positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;



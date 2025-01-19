import s from "./Description.module.css";
import clsx from "clsx";

const Description = () => {
  return (
    <div className={clsx(s.descWrapper)}>
      <h1 className={clsx(s.appTitle)}>
        sip happens caf<span>{String.fromCharCode(0x00e9)}</span>
      </h1>
      <p>
        Please, leave your feedback about our service by selecting one of the
        options below
      </p>
    </div>
  );
};

export default Description;
import s from "./progressBar.module.scss";

export const ProgressBar = () => {
  return (
    <div className={s.spinner_overlay}>
      <div className={s.spinner_container}>
        <div className={s.spinner}></div>
      </div>
    </div>
  );
};

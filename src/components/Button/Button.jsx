import css from './Button.module.css';

export const Button = ({ title, onClick }) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      {title}
    </button>
  );
};

const Button = ({
  // eslint-disable-next-line react/prop-types
  label,
  // eslint-disable-next-line react/prop-types
  handleClick,
  // eslint-disable-next-line react/prop-types
  style,
  
  // className,

  // buttonId,

}) => {
  return (
    <button
      type="button"
      className={style}
      onClick={handleClick}
      // id={buttonId}
    >
      {label}
    </button>
  );
};

export default Button;

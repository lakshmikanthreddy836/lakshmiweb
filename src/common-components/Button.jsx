const Button = ({
  // eslint-disable-next-line react/prop-types
  label,
  // eslint-disable-next-line react/prop-types
  handleClick,
  // eslint-disable-next-line react/prop-types
  style,
  
  className,

}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;

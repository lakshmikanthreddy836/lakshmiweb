const Button = ({
  // eslint-disable-next-line react/prop-types
  label,
  // eslint-disable-next-line react/prop-types
  handleClick,
  // eslint-disable-next-line react/prop-types
  style,
}) => {
  return (
    <button
      type="button"
      className="button"
      onClick={handleClick}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;

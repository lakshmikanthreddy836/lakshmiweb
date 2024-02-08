const Title = ({ title, children }) => {
  return (
    <div className="flex justify-between items-center mx-2">
      <div>
        <h1 className=" text-black text-2xl font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Title;

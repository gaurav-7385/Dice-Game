import "./Button.css";
const Button = ({ onClick, name }) => {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {name}
      </button>
    </div>
  );
};
export default Button;

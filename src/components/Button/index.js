import { Link } from "react-router-dom";
// nega display 2 marta yozilgan newStyle ichida ???
function Button({
  children,
  onClick,
  link="",
  fontSize= "1.2rem",
  margin="0 0",
  padding= "0.8rem 1rem",
  justifyContent= "center",
  cursor= "pointer",
  width,
  height,
  border= "0.25rem solid #C53720",
  backgroundColor="transparent",
  color="var(--color-white)",
  display="flex",
}) {
  const newStyle = {
    fontSize,
    padding,
    cursor,
    width,
    height,
    margin,
    border,
    backgroundColor,
    textAlign: "center",
    fontFamily: "ABeeZee",
  };
  return (
    <div style={{
      width:display=="inline-block"?"0":'100%',
      display,
      justifyContent:
        (justifyContent === "center" && "center") ||
        (justifyContent === "left" && "left") ||
        (justifyContent === "right" && "right"),
    }}>
      <button
          style={newStyle}
          onClick={() => onClick}
        >
        <Link to={link} style={{width:"100%",height:"100%",color}}>
          {children}
        </Link>
        </button>
    </div>
  );
}
export default Button;

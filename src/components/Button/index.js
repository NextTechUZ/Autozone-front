import { Link } from "react-router-dom";
//buttonga children oladingan qilib qo'ying iloji bo'lsa !!!
//nega button ishlatmasdan div ishlatgansiz !!!
//propsdan font size oladigan qilib qo'ying iloji bo'lsa iltimos !!!
// nega display 2 marta yozilgan newStyle ichida ???
function Button(prop) {
  const newStyle = {
    fontSize: "1.2rem",
    padding: "0.8rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    display: "inline-block",
    cursor: "pointer",
    width: `${prop.width === undefined ? "" : prop.width}`,
    border: `${
      prop.border === undefined
        ? "0.25rem solid #C53720"
        : "0.25rem solid " + prop.border
    }`,
    backgroundColor: `${
      prop.backgroundColor === undefined ? "" : prop.backgroundColor
    }`,
    color: `${prop.color === undefined ? "white" : prop.color}`,
  };
  // <Button value={anything} width="20rem" border="color" backgroundColor="color/url("https//") color="color"/>
  return (
    <Link to={prop.link}>
      <div
        style={newStyle}
        onClick={() => (prop.onClick ? prop.onClick() : "")}
      >
        {prop.value}
      </div>
    </Link>
  );
}
export default Button;

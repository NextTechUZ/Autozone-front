import styles from "./index.module.scss";

function Title({
  color = "var(--color-brand--2)",
  children,
  outline,
  size = "3.6rem",
  textAlign = "center",
  margin = "0",
  fontStyle = "normal",
  fontWeight = "400",
}) {
  return (
    <div
      style={{
        justifyContent:
          (textAlign === "center" && "center") ||
          (textAlign === "left" && "left") ||
          (textAlign === "right" && "right"),
      }}
      className={styles.title}
    >
      <h1
        style={{
          fontSize: size,
          color: color,
          borderBottom: outline ? "4px solid var(--color-brand--1)" : "",
          textAlign: textAlign,
          margin: margin,
          fontStyle: fontStyle,
          fontWeight: fontWeight,
        }}
      >
        {children}
      </h1>
    </div>
  );
}

export default Title;

import styles from "./index.module.scss";

function Title({
  color = "var(--color-brand--2)",
  children,
  text="",
  textAlign="center",
  outline,
  size = "3.6rem",
  margin = "0",
  fontWeight = "400",
}) {
  return (
    <div style={{
      textAlign:textAlign,
      margin: margin,
      color: color
      }} className={styles.title__wrapper}>
      <h1
        style={{
          fontSize: size,
          borderBottom: outline ? "4px solid var(--color-brand--1)" : "",
          fontStyle: "italic",
          fontWeight: fontWeight,
        }}
        className={styles.title}
      >
        {children}
      </h1>
      <p className={styles.title__text}>{text}</p>
    </div>
  );
}

export default Title;

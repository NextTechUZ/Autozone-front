import styles from "./index.module.scss";

function Title({
  color = "var(--color-brand--2)",
  children,
  text="",
  textAlign="center",
  outline,
  size = "3.6rem",
  textSize="",
  margin = "0",
  fontWeight = "400",
  textWeight="",
  maxWidth="",
  marginTop=""
}) {
  return (
    <div style={{
      textAlign:textAlign,
      margin: margin,
      color: color,
      maxWidth:maxWidth
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
      <p style={
        {fontSize:textSize,
        fontWeight:textWeight,
        marginTop:marginTop
        }} className={styles.title__text}>{text}</p>
    </div>
  );
}

export default Title;

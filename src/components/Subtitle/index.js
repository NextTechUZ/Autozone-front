import styles from "./index.module.scss";

function Subtitle({
  textAlign = "center",
  children,
  color = "var(--color-brand--2)",
  size = "2.4rem",
  margin = "0",
  maxWidth = "",
}) {
  return (
    <div
      style={{
        justifyContent:
          (textAlign === "center" && "center") ||
          (textAlign === "left" && "left") ||
          (textAlign === "right" && "right"),
      }}
      className={styles.wrapper}
    >
      <p
        style={{
          color: color,
          fontSize: size,
          textAlign: textAlign,
          margin: margin,
          maxWidth: maxWidth,
        }}
        className={styles.subtitle}
      >
        {children}
      </p>
    </div>
  );
}

export default Subtitle;

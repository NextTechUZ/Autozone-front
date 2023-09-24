import styles from "./index.module.scss";

function Subtitle({
  align,
  children,
  color = "var(--color-brand--2)",
  size = "2.6rem",
  capitalize,
}) {
  return (
    <p
      style={{
        color: color,
        size: size,
        textAlign: align === "center" ? "center" : "left",
      }}
      className={styles.subtitle}
    >
      {children}
    </p>
  );
}

export default Subtitle;

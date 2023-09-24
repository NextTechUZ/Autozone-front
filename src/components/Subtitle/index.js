import styles from "./index.module.scss";

function Subtitle({
  children,
  color = "var(--color-brand--2)",
  size = "2.6rem",
  capitalize,
}) {
  return (
    <p style={{ color: color, size: size }} className={styles.subtitle}>
      {children}
    </p>
  );
}

export default Subtitle;

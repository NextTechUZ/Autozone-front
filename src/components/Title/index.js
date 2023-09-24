import styles from "./index.module.scss";

function Title({
  color = "var(--color-brand--2)",
  children,
  outline,
  size = "3.6rem",
}) {
  return (
    <div className={styles.title}>
      <h1 style={{ fontSize: size, color: color }}>{children}</h1>
      {outline && <div className={styles.line}></div>}
    </div>
  );
}

export default Title;

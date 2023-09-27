import styles from "./index.module.scss";

function Title({
  color = "var(--color-brand--2)",
  children,
  outline,
  size = "3.6rem",
  textAlign = "center",
}) {
  return (
    <div className={styles.title}>
      <h1 style={{ fontSize: size, color: color, textAlign: textAlign }}>
        {children}
      </h1>
      {outline && <div className={styles.line}></div>}
    </div>
  );
}

export default Title;

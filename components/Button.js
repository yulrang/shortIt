import styles from "./Button.module.css";

const VARIANTS = {
  primary: styles.primary,
  secondary: styles.secondary,
  minimal: styles.minimal,
  outline: styles.outline,
};

export default function Button({
  type = "button",
  className = "",
  variant,
  as: AsComponent,
  ...rest
}) {
  const classNames = `${styles.button} ${
    VARIANTS[variant] ?? styles.primary
  } ${className}`;

  if (AsComponent) {
    return <AsComponent className={classNames} {...rest} />;
  }

  return <button type={type} className={classNames} {...rest} />;
}

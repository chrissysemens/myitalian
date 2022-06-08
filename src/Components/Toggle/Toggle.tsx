import React from "react";
import styles from "./Toggle.module.scss";

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
  readonly?: boolean;
  size?: "s";
  disabled?: boolean;
};

const Toggle = ({ checked, onChange, readonly, size, disabled }: Props) => {
  return (
    <label className={`${size === "s" && styles.s} ${styles.switch}`}>
      <input
        data-testid="toggle"
        type="checkbox"
        checked={readonly ? false : checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span
        className={`${styles.slider} ${styles.round} ${
          disabled ? styles.disabled : ""
        }`}
      ></span>
    </label>
  );
};

export { Toggle };

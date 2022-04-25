import React from 'react';
import styles from './SignUpForm.module.css';

function Label (props) {
  const { type, name, value, onChange, classNames, placeholder } = props;

  return (
    <label className={styles.label}>
      <span className={styles.inputName}>{name}</span>
      <input
        className={classNames}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Label;

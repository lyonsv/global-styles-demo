// Button.tsx
import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  label: string;
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, title, onClick }) => {
  return (
    <div className={styles.buttonWrapper}>
      <h5 className={styles.buttonTitle}>{title}</h5>
      <button className={styles.button} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;

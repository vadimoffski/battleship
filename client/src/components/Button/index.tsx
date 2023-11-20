import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  name = 'Default Button',
  type = 'button',
  icon,
  ...rest
}) => {
  return (
    <button type={type} name={name} className={styles.button} {...rest}>
      {icon ?? name}
    </button>
  );
};

export default Button;

import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

const Button = ({
  name = 'Default Button',
  type = 'button',
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type={type} name={name} className={styles.button} {...rest}>
      {name}
    </button>
  );
};

export default Button;

import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './styles.module.scss';

type FieldProps = InputHTMLAttributes<HTMLInputElement>;

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ type = 'text', ...rest }, ref) => {
    return <input type={type} className={styles.field} ref={ref} {...rest} />;
  },
);

Field.displayName = 'Field';

export default Field;

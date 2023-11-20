import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type BoxProps = { children: ReactNode; className?: string };

const Box: FC<BoxProps> = ({ children, className }) => {
  return <div className={`${styles.box} ${className}`}>{children}</div>;
};

export default Box;

import { FC, ReactNode, useState } from 'react';

import styles from './styles.module.scss';

type Direction = 'top' | 'left' | 'bottom' | 'right';

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  direction?: Direction;
  delay?: number;
};

const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  direction = 'top',
  delay = 1000,
}) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState<boolean>(false);

  const showTip = () => {
    setActive(true);
    timeout = setTimeout(() => {
      setActive(false);
      clearTimeout(timeout);
    }, delay);
  };

  return (
    <div className={styles.tooltip} onClick={showTip}>
      {children}
      {active && (
        <div className={`${styles.tooltip_tip} ${styles[direction]}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

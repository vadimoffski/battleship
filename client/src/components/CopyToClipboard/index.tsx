import copy from 'copy-to-clipboard';
import { FC, ReactNode, useRef, useState } from 'react';

import CopyIcon from '@assets/ico/copy.svg?react';

import Field from '@components/Field';
import Tooltip from '@components/Tooltip';

import styles from './styles.module.scss';

type CopyToClipboardProps = {
  value: string;
  icon?: ReactNode;
  toolTipText?: string;
  delay?: number;
};

const CopyToClipboard: FC<CopyToClipboardProps> = ({
  value,
  icon,
  delay = 1500,
  toolTipText = 'Copied!',
}) => {
  let timeout: NodeJS.Timeout;

  const inputRef = useRef<HTMLInputElement>(null);

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    if (inputRef.current) {
      const copyText = inputRef.current.value;
      setIsCopied(copy(copyText));
      timeout = setTimeout(() => {
        setIsCopied(false);
        clearTimeout(timeout);
      }, delay);
    }
  };

  return (
    <div className={styles.copyToClipboard}>
      <Field
        ref={inputRef}
        disabled
        defaultValue={value}
        className={styles.copyToClipboard_input}
      />
      <Tooltip content={toolTipText} delay={delay}>
        <button
          type="button"
          name="Copy"
          onClick={handleCopy}
          className={styles.copyToClipboard_button}
        >
          {isCopied ? (
            <span className="text-lime-300">✔</span>
          ) : (
            icon ?? <CopyIcon className={styles.copyToClipboard_button_icon} />
          )}
        </button>
      </Tooltip>
    </div>
  );
};

export default CopyToClipboard;

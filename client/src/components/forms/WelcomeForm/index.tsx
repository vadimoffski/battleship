import {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useRef,
  useState,
} from 'react';

import Field from '@components/Field';
import Button from '@components/Button';
import Box from '@components/Box';

import styles from './styles.module.scss';

type WelcomeFormProps = { onSubmit: (name: string) => void };

const WelcomeForm: FC<WelcomeFormProps> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const isError = event.target.validity.patternMismatch;
    setError(isError);
    if (isError && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    const isError = event.target.validity.patternMismatch;
    setName(newName);
    setError(isError);
  };

  const handleNext = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleNext}>
      <Box>
        <h2 className={styles.welcome_title}>Welcome comrade!</h2>
        <div className={styles.welcome_interactive}>
          <Field
            ref={inputRef}
            value={name}
            placeholder="Your name"
            pattern="[A-Za-z]{3,10}"
            maxLength={10}
            min={3}
            onBlur={handleBlur}
            onChange={handleName}
          />
          <Button name="Next" disabled={error || !name.length} type="submit" />
          {error && (
            <p className={styles.welcome_error}>
              Please enter 3 to 10 alphabetic characters.
            </p>
          )}
        </div>
      </Box>
    </form>
  );
};

export default WelcomeForm;

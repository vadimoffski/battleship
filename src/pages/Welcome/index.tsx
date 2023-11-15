import WelcomeForm from '@components/forms/WelcomeForm';

import styles from './styles.module.scss';

const Welcome = () => {
  const handleNext = (name: string) => {
    // rest of your code
    console.log(name);
  };

  return (
    <div className={styles.welcome}>
      <WelcomeForm onSubmit={handleNext} />
    </div>
  );
};

export default Welcome;

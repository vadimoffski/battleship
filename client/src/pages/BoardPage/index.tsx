import { useLocation, useParams } from 'react-router-dom';

import './styles.module.scss';

const BoardPage = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params, location);

  return <main>BoardPage</main>;
};

export default BoardPage;

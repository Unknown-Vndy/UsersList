import { Link } from 'react-router-dom';
import styles from './NotFound.module.sass';

function index () {
  return (
    <div className={styles.container}>
      <div>Page not found</div>
      <Link to='/' style={{ display: 'block' }}>
        Return to main page
      </Link>
    </div>
  );
}

export default index;

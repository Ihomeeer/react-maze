import styles from './Arrows.module.css';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { v4 as generateUid } from 'uuid';
import arrowPath from '../../vendor/icons/arrow.svg';

function Arrows() {

  const { allArrows } = useSelector(
    state => state.maze
  );

  return (
    <section className={styles.arrows}>
      {
        allArrows &&
        allArrows.map((arrow) => {
          return (
            <img src={arrowPath} className={cx(styles.arrowItem, arrow === 'up' ? styles.arrowUp : arrow === 'down' ? styles.arrowDown : arrow === 'left' ? styles.arrowLeft : arrow === 'right' ? styles.arrowRight : '')} alt={'arrow'} key={generateUid()}
            />
          )
        })
      }
    </section>
  );
}

export default Arrows;

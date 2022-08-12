import styles from './Arrows.module.css';
import cx from 'classnames';
import { v4 as generateUid } from 'uuid';
import arrowPath from '../../vendor/icons/arrow.svg';

function Arrows(props) {

  return (
    <section className={styles.arrows}>
      {
        props.arrows &&
        props.arrows.map((arrow) => {
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

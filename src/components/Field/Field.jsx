import styles from './Field.module.css';
import Cell from '../../Cell/Cell';
import cx from 'classnames';
import {cells, tipsTop, tipsLeft} from '../../utils/constants';

function Field(props) {


  let Maze = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]


  return (
    <section className={styles.field}>

      <div className={styles.tipsTop}>
        {
          tipsTop &&
          tipsTop.map((tip) => {
            return (
              <div className={cx(styles.tip, styles.topTip)} key={tip.data}>{tip.data}</div>
            )
          })
        }
      </div>

      <div className={styles.mainField}>

        <div className={styles.tipsLeft}>
        {
          tipsTop &&
          tipsLeft.map((tip) => {
            return (
              <div className={cx(styles.tip, styles.leftTip)} key={tip.data}>{tip.data}</div>
            )
          })
        }
        </div>
        <div className={styles.cellsWrapper}>
          {cells &&
            cells.map((cell) => {
              return (
                <Cell className={styles.cell}
                  key={cell.id}
                  data={cell.id}
                />
              )
            })
          }
        </div>

      </div>

    </section>
  );
}

export default Field;

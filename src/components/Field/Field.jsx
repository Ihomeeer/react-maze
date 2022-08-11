import styles from './Field.module.css';
import Cell from '../../Cell/Cell';
import cx from 'classnames';
import { cells, tipsTop, tipsLeft } from '../../utils/constants';

function Field(props) {

  let startingPoint;
  let mazeWay = [];
  let arrows = [];

  const randomWayHandler = (array) => {
    startingPoint = array[Math.floor((Math.random() * array.length))];
    console.log(`начало ${startingPoint.id}`)
    mazeWay.push(startingPoint);
    changeRandomSib(mazeWay)
  }

  const changeRandomSib = (array) => {
    while (array.length < 11) {
      const sibling = startingPoint.siblings[Math.floor((Math.random() * startingPoint.siblings.length))]
      const newCell = cells.find((cell) => cell.id === sibling);
      newCell && array.push(newCell)
      arrows.push(arrowsHandler(startingPoint.coordinates, newCell.coordinates))
      console.log(mazeWay)
      console.log(arrows)
      startingPoint = newCell;
    }
  }

  const arrowsHandler = (prevCord, currCord) => {
    if (currCord.x > prevCord.x) {
      return 'right'
    } else if (currCord.x < prevCord.x) {
      return 'left'
    } else if (currCord.y > prevCord.y) {
      return 'down'
    } else if (currCord.y < prevCord.y) {
      return 'up'
    } else {
      throw new Error();
    }
  }

  cells && mazeWay && randomWayHandler(cells)


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
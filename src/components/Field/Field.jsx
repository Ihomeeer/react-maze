// Основное поле. Содержит плитки, разметку лабиринта и стрелки с путем
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  chgStartingPointAction,
  chgFinalPointAction,
  getAllPointsAction,
  getAllArrowsAction,
} from '../../services/actions/mazeActions/mazeActions';
import styles from './Field.module.css';
import cx from 'classnames';
import Cell from '../Cell/Cell';
import Arrows from '../Arrows/Arrows';
import { cells, tipsTop, tipsLeft, stepsCount } from '../../utils/constants';

function Field(props) {

  const dispatch = useDispatch();

  // Стартовая точка отсчета, массив точек пути и массив соответствующих пути стрелок
  let startPos;
  let mazeWay = [];
  let arrows = [];

  // В зависимостях пропс для перерендера игры при закрытии модалки
  useEffect(() => {
    randomWayHandler(cells)
  }, [props.reRender])

  // Тут задается стартовая точка и собираются массивы точек пути и стрелок
  const randomWayHandler = (array) => {
    startPos = array[Math.floor((Math.random() * array.length))];
    mazeWay.push(startPos);
    changeRandomSib(mazeWay)
  }

  // Сначала набираются массивы, потом все эти дела диспатчатся в хранилище (массив со всеми точками не особо там нужен, но мне показалось правильным поместить его туда, для будущих доработок)
  const changeRandomSib = (array) => {
    while (array.length < stepsCount + 1) {
      const sibling = startPos.siblings[Math.floor((Math.random() * startPos.siblings.length))]
      const newCell = cells.find((cell) => cell.id === sibling);
      newCell && array.push(newCell)
      arrows.push(arrowsHandler(startPos.coordinates, newCell.coordinates))
      startPos = newCell;
    }
    dispatch(chgStartingPointAction(mazeWay[0]));
    dispatch(chgFinalPointAction(mazeWay[stepsCount]));
    dispatch(getAllPointsAction(mazeWay));
    dispatch(getAllArrowsAction(arrows));
  }

  // Функция для определения того, какая стрелка соответствует конкретному ивенту перемещения в лабиринте
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
      <div className={styles.mazeWrapper}>
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
                    data={cell}
                  />
                )
              })
            }
          </div>
        </div>

        <Arrows />

      </div>



    </section>
  );
}

export default Field;

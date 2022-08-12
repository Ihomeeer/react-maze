// компонент модального окна, которое появляется после клика на плитку
import styles from './Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import {
  clrStartingPointAction,
  clrFinalPointAction,
  clearAllPointsAction,
  clearAllArrowsAction,
  closeModalAction,
  clrSelectCellAction
} from '../../services/actions/mazeActions/mazeActions';

const Modal = (props) => {

  const dispatch = useDispatch();
  const { modalVisibility, selectedCell, finalPoint } = useSelector(
    state => state.maze
  );

  // При закрытии модалки все очищается, закрывается само модальное окно и дергается стейт для перерендера игрового поля
  const buttonClickHandler = () => {
    dispatch(clrStartingPointAction());
    dispatch(clrFinalPointAction());
    dispatch(clearAllPointsAction());
    dispatch(clearAllArrowsAction());
    dispatch(clrSelectCellAction());
    dispatch(closeModalAction());
    props.setReRender(!props.reRender);
  }

  return (
    <>
      {
        modalVisibility === true &&
        <div className={styles.overlay}>
          <section className={styles.general}>
            {
              selectedCell.id === finalPoint.id
                ?
                <p className={cx(styles.text, styles.textSuccess)}>Верно!</p>
                :
                <p className={cx(styles.text, styles.textFailure)}>{`Ошибка! Правильный ответ: ${finalPoint.title}`}</p>
            }
            <button className={styles.restartButton} onClick={buttonClickHandler}>Попробовать еще раз</button>
          </section>
        </div>
      }
    </>
  )
}

export default Modal;

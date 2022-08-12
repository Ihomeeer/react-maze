import styles from './Cell.module.css';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import {
  openModalAction,
  selectCellAction,
} from '../../services/actions/mazeActions/mazeActions';


function Cell(props) {
  const dispatch = useDispatch();

  const { startingPoint, selectedCell } = useSelector(
    state => state.maze
  );

  const clickHandler = () => {
    dispatch(selectCellAction(props.data))
    dispatch(openModalAction())
  }

  return (
    <div className={cx(styles.cell, startingPoint.id === props.data.id ? styles.startingCell : '', selectedCell.id === props.data.id ? styles.checkedCell : '')} onClick={clickHandler}>
      <p className={styles.text}>{props.data.title}</p>
    </div>
  );
}

export default Cell;

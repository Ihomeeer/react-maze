import styles from './Cell.module.css';

function Cell(props) {

  return (
    <div className={styles.cell}>
      <p className={styles.title}>{props.data}</p>
    </div>
  );
}

export default Cell;

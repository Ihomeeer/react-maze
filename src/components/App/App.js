import { useState } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Field from '../Field/Field';
import Modal from '../Modal/Modal';

function App() {
  const [reRender, setReRender] = useState(false);

  return (
    <div className={styles.app}>
      <Header />
      <Field
        reRender={reRender}
      />
      <Modal
        reRender={reRender}
        setReRender={setReRender}
      />
    </div>
  );
}

export default App;

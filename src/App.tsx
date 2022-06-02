import React from "react";
import styles from "./App.module.scss";
import { useFirebase } from "./Hooks/useFirebase";

function App() {
  const { data } = useFirebase({ collectionName: "Translations" });

  console.log(data);

  return <div className={styles.app}>x</div>;
}

export default App;

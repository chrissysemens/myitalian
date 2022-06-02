import {
  collection,
  onSnapshot,
  query,
  doc,
  setDoc,
  deleteDoc,
} from "@firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";

type UseFirebaseProps = {
  collectionName: string;
};

export const useFirebase = <T,>({
  collectionName,
}: UseFirebaseProps): {
  data: Array<T>;
  add: (data: T) => void;
  remove: (key: string) => void;
} => {
  const [data, setData] = useState<Array<T>>([]);

  const add = async (item: T) => {
    const ref = doc(collection(db, `${collectionName}`));
    await setDoc(ref, item);
  };

  const remove = async (key: string) => {
    await deleteDoc(doc(db, `${collectionName}`, key));
  };

  useEffect(() => {
    const q = query(collection(db, `${collectionName}`));

    onSnapshot(q, (querySnapshot) => {
      let items = new Array<T>();
      querySnapshot.forEach((doc) => {
        const item = doc.data() as T;
        items.push(item);
      });
      setData(items);
    });
  }, []);
  return { data, add, remove };
};

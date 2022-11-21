// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from "../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

export async function createArticle({ title, body }) {
  const data = { title, body, date: Timestamp.now() }; //creates the data object (the actual blog post)

  //adds the data object to the "articles" collection of the database (db)
  //docRef is the id of the data in the database collection
  const docRef = await addDoc(collection(db, "articles"), data);
  return { id: docRef.id, ...data };
}

// NOT FINISHED: This only gets the first 20 articles. In a real app,
// you implement pagination.
export async function fetchArticles() {
  //getDocs gets the articles from the "articles" collection of the database
  //ordered by date in "desc"ending order
  //limit(20) only lists the first 20 articles
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
  );
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deleteArticle(id) {
  console.log("HERE1");
  //await deleteDoc(doc(db, "articles", id));
  console.log("HERE2");
}

import { db } from '../firebaseConfig'
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
} from 'firebase/firestore'

export async function createArticle({ title, body }) {
    const data = { title, body, date: Timestamp.now() } //creates the data object (the actual blog post)

    //adds the data object to the "articles" collection of the database (db)
    //docRef is the id of the data in the database collection
    const docRef = await addDoc(collection(db, 'articles', 'newarticle'), data)
    return { id: docRef.id, ...data }
}
export async function fetchArticles() {
    const snapshot = await getDocs(
        query(collection(db, 'articles'), orderBy('date', 'desc'), limit(20))
    )
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
}

export async function deleteArticle(id) {
    await deleteDoc(doc(db, 'articles', id))
}

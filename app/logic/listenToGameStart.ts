import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"

export const listenToGameStart = (callback: any) => {
    return onSnapshot(doc(db, 'StartFlag', 'isStart'), (doc) => {
        if (doc.exists()) {
            const data = doc.data();
            if (data.Flag) {
                console.log('Flag is changed!')
                callback();
            } else {
                console.log('No such doc!');
            }
        }
    })
}
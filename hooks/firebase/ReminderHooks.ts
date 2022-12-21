import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";
import { Reminder } from "../../types/FirebaseTypes";

const remindersRef = collection(db, 'reminders') // * Gets the collection of reminders.

export const createReminder = async ({title, description, remindAt} : Reminder) => {
    try {
        const user = await auth.currentUser
        if(!user) return console.log('No user') // TODO Do something more useful here, maybe send user to login page?
        await addDoc(remindersRef, {
            title : title,
            description : description,
            creator : user.uid,
            remindAt: remindAt
        });
        // TODO Create a nice toast message that a reminder is created.
    }catch(Error) {
        console.log(Error)
    }
}
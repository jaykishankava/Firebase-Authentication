import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore"
import app from '../../firebaseConfige'
const db = getFirestore(app)

export const viewUser = () => {
    return async (dispatch) => {
        try{
            const data = collection(db , "users")
            const userList = await getDocs(data)
            const record = userList.docs.map(doc => ({
                id : doc.id,
                ...doc.data()
            }))
            dispatch({
                type : "viewuser",
                payload : record
            })
        }
        catch(err){
            dispatch({
                type : "viewusererr",
                payload : err
            })
        }
    }
}

export const addUser = (user) => {
    return async (dispatch) => {
        try{
           let addrecord = await addDoc(collection(db,"users"),{
                name : user.name,
                email : user.email,
                task : user.task,
                gender : user.gender,
                hobby : user.hobby,
                city : user.city,
               
           }) 
           dispatch({
                type : "addrecord"
           })
        }
        catch(err){
            console.log(err);
            return false
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        try{
           let deleteData = await doc(db,"users",id)
           await deleteDoc(deleteData)
           dispatch({
            type : 'deleteUser',
            payload : id
           })
        }
        catch(err){
            console.log(err);
            return false
        }
    }
}

export const EDIT_USER = (user) => {
    return async(dispatch) => {
        try {
            let update = await doc(db,'users',user.id);
            await updateDoc(update, {
                name: user.name,
                email: user.email,
                task: user.task,
                gender: user.gender,
                hobby: user.hobby,
                city: user.city,
            });
            dispatch({
                type: 'edit',
                payload: user
            })
        } catch (err) {
            dispatch({
                type: 'editerr',
                payload: err
            })
        }
    }
}

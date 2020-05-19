import app from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import firebaseConfig from './config';

class Firebase { 

    constructor() {
        if(!app.apps.length) app.initializeApp( firebaseConfig )
        this.auth = app.auth()
        this.db = app.firestore()
        this.storage = app.storage()
    }

    // registra un usuario
    async signup(email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password)
        return newUser.user
    }

    // loggear a un usuario
    async signin(email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password)
    }

    // Cerrar sesión del usuario
    async signout() {
        await this.auth.signOut()
    }

    // Insertar a la base de datos
    addDocument(collection, doc, data, merge) {
        return this.db.collection(collection).doc(doc).set(data, { merge })
    }

    // Insertar con un id generado por firebase
    add(collection, data){
        return this.db.collection(collection).add(data)
    }

    // Borrar a la base de datos
    deleteDocument(collection, doc) {
        return this.db.collection(collection).doc(doc).delete()
    }

    // select * from where . . . 
    // @param rule: <,<=,==,>,>=, array-contains
    async fetchWhere(collection ,column, rule, compare) {
        return await this.db.collection(collection).where(column, rule, compare).get()
    }

}

const firebase = new Firebase()
export default firebase
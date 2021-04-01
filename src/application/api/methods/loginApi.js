import Firebase from 'firebase';

const signIn = async (email, password) => {
    await Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL);
    return Firebase.auth().signInWithEmailAndPassword(email, password);
};

const createUser = async (email, password) => {
    await Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL);
    return Firebase.auth().createUserWithEmailAndPassword(email, password);
};

export { signIn, createUser };

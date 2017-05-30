import { firebaseApp } from '../constants/api';
export function emailLogin(email, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
}
export function socialLogin(token) {
    return firebaseApp.auth().signInWithCustomToken(token);
}
//# sourceMappingURL=auth.js.map
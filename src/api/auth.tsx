import { firebaseApp } from '../constants/api'

export function emailLogin(email: string, password: string) {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}

export function socialLogin(token: string) {
  return firebaseApp.auth().signInWithCustomToken(token)
}
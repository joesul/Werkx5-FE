import firebase from 'firebase';
import firebaseapp from 'firebase';
import { browserHistory } from 'react-router';

const config = {
    apiKey: "AIzaSyAVPLQIrTnjyWc3rn7Ju_6trXW1pLU6IjI",
    authDomain: "emerg-58697.firebaseapp.com",
    databaseURL: "https://emerg-58697.firebaseio.com",
    storageBucket: "emerg-58697.appspot.com",
};

firebaseapp.initializeApp(config);

const firebaseUtils = {
    SignUp: function (email, password, obj) {
        const auth = firebaseapp.auth();
        auth.createUserWithEmailAndPassword(email, password).catch((error) => {
            if (error) {
                console.log("error: ", error)
                browserHistory.push("/")
            }
        }).then((res) => {
            console.log(res);
            browserHistory.push("/profile");
            firebase.database().ref('users/'+res.uid).set({
                firstName: obj.firstName,
                lastName: obj.lastName,
                displayName: obj.userName,
                email: obj.email,
                phone: obj.phone
            })
        })
    },

    SignIn: function (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
            console.error("Sign in error:", error.code, error.message);
        }).then((res) => {
            console.log(res.uid);
            localStorage.setItem("uid", res.uid);
            browserHistory.push("/profile");
        })
    },

    SignOut: function (event) {
        firebase.auth().signOut().then(function () {
          localStorage.setItem("uid", "");
        }, function (error) {
            console.log("signout error:", error)
        });
    }

}

export default firebaseUtils;

import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDbhbrYXbnZqSJVg-WuwrD6gPpU6OJAwa0',
    authDomain: 'chtibellos-e23f7.firebaseapp.com',
    databaseURL: 'https://chtibellos-e23f7.firebaseio.com',
    projectId: 'chtibellos-e23f7',
    storageBucket: 'chtibellos-e23f7.appspot.com',
    messagingSenderId: '530441995114'
};
firebase.initializeApp(config);
export default firebase;

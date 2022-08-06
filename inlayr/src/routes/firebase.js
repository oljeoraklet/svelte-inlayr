import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCYvIg20DveBtPkVpOpUXMKjU58q7Sudgk',
	authDomain: 'inlayr-website-prod.firebaseapp.com',
	databaseURL: 'https://inlayr-website-prod-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'inlayr-website-prod',
	storageBucket: 'inlayr-website-prod.appspot.com',
	messagingSenderId: '522608576250',
	appId: '1:522608576250:web:4c4ccbf3f2396584cb2b43',
	measurementId: 'G-Z9BQE9E8Q4'
};

const app = initializeApp(firebaseConfig);

export default app;

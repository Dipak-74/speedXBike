import { getApps, getApp, initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAhWXQg6VYvz8JcrPu42Y__oGkARfi0x1U",
    authDomain: "bikeroom-765b8.firebaseapp.com",
    projectId: "bikeroom-765b8",
    appId: "1:505548164349:web:6f1111e3b71f5643ca0294"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const page = window.location.pathname.split('/').pop().toLowerCase();
const adminPages = new Set([
    'admin.html', 'admin-dashboard.html', 'for..html', 'formlatestbike.html',
    'blogform.html', 'serviceformpage.html', 'teamform.html', 'offerform.html'
]);

onAuthStateChanged(auth, user => {
    if (!user) {
        const returnTo = `${window.location.pathname.split('/').pop()}${window.location.search}`;
        window.location.replace(`login.html?returnTo=${encodeURIComponent(returnTo)}`);
        return;
    }

    if (adminPages.has(page) && user.email !== 'dipak74@gmail.com') {
        window.location.replace('HomePage.html');
    }
});
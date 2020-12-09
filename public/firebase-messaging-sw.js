/*importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('../firebase-messaging-sw.ts')
       .then(function(registration) {
         console.log('Registration successful, scope is:', registration.scope);
       }).catch(function(err) {
         console.log('Service worker registration failed, error:', err);
       });
}
console.log("Huy")

 firebase.initializeApp({
     messagingSenderId: "296580355377"
   })

 const initMessaging = firebase.messaging()*/

importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCwCk7h5A3bK430ExwNDB4gaPvPq4L76ic",
  authDomain: "ipl-pfe-2020.firebaseapp.com",
  projectId: "ipl-pfe-2020",
  storageBucket: "ipl-pfe-2020.appspot.com",
  messagingSenderId: "296580355377",
  appId: "1:296580355377:web:3c85fbce6e75afccdf8c10",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: "/assets/icon/favicon-32x32.png",
  };

  console.log("NOTIF");

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
        includeUncontrolled: true,
      })
      .then((clientList) => {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (
            client.url == "https://ipl-pfe-2020-dev-mobile.herokuapp.com/" &&
            "focus" in client
          )
            return client.focus();
        }
        if (clients.openWindow)
          return clients.openWindow(
            "https://ipl-pfe-2020-dev-mobile.herokuapp.com/"
          );
      })
  );
});

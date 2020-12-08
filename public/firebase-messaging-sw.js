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

importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js");

firebase.initializeApp({
    messagingSenderId: "296580355377",
});

const messaging = firebase.messaging();
console.log("MATHIEU")

messaging.setBackgroundMessageHandler((payload) => {
    const notification = JSON.parse(payload.data.notification);
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
    };
    //Show the notification :)
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});

self.addEventListener('notificationclick', event => {
    const urlToOpen = new URL("https://ipl-pfe-2020-dev-mobile.herokuapp.com/", self.location.origin).href;

    const promiseChain = clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    })
        .then((windowClients) => {
            let matchingClient = null;

            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                if (windowClient.url === urlToOpen) {
                    matchingClient = windowClient;
                    break;
                }
            }

            if (matchingClient) {
                return matchingClient.focus();
            } else {
                return clients.openWindow(urlToOpen);
            }
        });

    event.waitUntil(promiseChain);
});

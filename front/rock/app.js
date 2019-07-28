// router configuration
const router = new VueRouter({
    routes: [
        { path: '', component: Home }, // Home component will be routed by default
        { path: '/Game', component: Game }, // Game component will be routed for that path
        { path: '/Statistics', component: Statistics } // Statistics component will be routed for that path
    ]
});

new Vue({
    router,
    el: '#app' // root element to control (vue instance)
});
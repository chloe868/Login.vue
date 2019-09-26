let beforeEnter = (to, from, next) => {
    next()
}
var devRoutes = []
let app = require('./app.js')
devRoutes = devRoutes.concat(app.default.routes)
for(let x = 0; x < devRoutes.length; x++) {
    devRoutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
    {
        path: '/',
        name: 'home',
        component: resolve => require(['modules/Login.vue'], resolve),
        beforeEnter : beforeEnter
    },
    {
        path: '/reg',
        name: 'registered',
        component: resolve => require(['modules/Register.vue'], resolve),
        beforeEnter : beforeEnter
    }
    // {
    //     path: 'dash',
    //     name: 'dashboard',
    //     component: resolve => require(['modules/Dashboard.vue'], resolve),
    //     beforeEnter : beforeEnter
    // }
]
routes = routes.concat(devRoutes)
export default{
    routes: routes
}
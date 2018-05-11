import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/index',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/room.vue'], resolve)
                },
                {
                    path: '/room',
                    component: resolve => require(['../components/page/room.vue'], resolve)
                },
                {
                    path: '/inside',
                    component: resolve => require(['../components/page/inside.vue'], resolve)
                },
                {
                    path: '/emptyRoom',
                    component: resolve => require(['../components/page/emptyRoom.vue'], resolve)
                },
                {
                    path: '/checkedinRoom',
                    component: resolve => require(['../components/page/checkedinRoom.vue'], resolve)
                },
                {
                    path: '/reservedRoom',
                    component: resolve => require(['../components/page/reservedRoom.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        }
    ]
})

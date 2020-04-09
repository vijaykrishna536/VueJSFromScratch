import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'
import Start from '@/pages/Start'
import Practise from '@/pages/Practise'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/start/:component',
            name:'Start',
            component: Start
        },
        {
            path:'/practise',
            name:'Practise',
            component: Practise
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
})
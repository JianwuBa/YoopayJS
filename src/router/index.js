import Vue from 'vue'
import VueRouter from 'vue-router'
//路由重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes:[
        //首页
        {
            path: '/',
            component: () =>
                import ('@/views/Home'),
            meta: {
                title: "",
                titleEn:'',
                homePages: true,
                content: {
                    keywords: '',
                    keywordsEn:'',
                    description: '',
                    descriptionEn:''
                }
            }
        },
        {
            path: '/yoopayjs',
            component: () =>
                import ('@/views/Plugin/yoopayjs'),
            meta: {
                title: "",
                titleEn:'',
                homePages: true,
                content: {
                    keywords: '',
                    keywordsEn:'',
                    description: '',
                    descriptionEn:''
                }
            }
        },
    ]
})
export default router
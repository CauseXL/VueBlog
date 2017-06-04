import Front from '@/components/frontEnd/Front';
import Home from '@/components/frontEnd/Home'
import About from '@/components/frontEnd/About'
import Tags from '@/components/frontEnd/Tags'
import Article from '@/components/frontEnd/Article'
import NotFound from '@/components/NotFound'
import Reg from '@/components/backEnd/Reg';
import Login from '@/components/backEnd/Login';
import Admin from '@/components/backEnd/Admin';
import ArticleCreate from '@/components/backEnd/ArticleCreate'
import ArticleList from '@/components/backEnd/ArticleList'
import ArticleEdit from '@/components/backEnd/ArticleEdit'
import ClassList from '@/components/backEnd/ClassList'

export default [
  {
    path:'/reg',
    component:Reg,
    meta: { auth: false },
    // hidden 自定义属性，用于在admin页面的侧边栏显示item
    hidden: true
  },
  {
    path:'/login',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    component: Front,
    hidden: true,
    children: [
      // 重定向目的是防止用户直接在浏览器上输入一级或者二级路由时，页面显示空白，
      // 所以搞了这个一级一级重定向，并且直接从第一级路由重定向到第三级路由不好使，所以就写了这么一个一级一级重定向。
      { path: '', redirect: 'home', meta: { auth: false } },
      { path: 'about', component: About, meta: { auth: false } },
      { path: 'home', component: Home, meta: { auth: false } },
      { path: 'tags', component: Tags, meta: { auth: false } },
      { path: 'article/:id', component: Article, meta: { auth: false } }
    ]
  },
  {
    path:'/admin',
    component: Admin,
    name: '管理面板',
    iconCls: 'el-icon-message',
    children: [
      { path: '', hidden: true, redirect: { name: '文章管理' } },
      { path: 'articleList', component: ArticleList, name: '文章管理' },
      { path: 'articleCreate', component: ArticleCreate, name: '创建文章', hidden: true },
      { path: 'articleEdit/:postId', component: ArticleEdit, name: "编辑文章", hidden: true },
      { path: 'classList', component: ClassList, name: '分类管理' }
      
    ]
  },
  {
    path: '*',
    component: NotFound,
    hidden:true
  },
]
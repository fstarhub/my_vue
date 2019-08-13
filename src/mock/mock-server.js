//使用mockjs定义mock接口

import Mock from 'mockjs'
import data from './data.json' //得到解析后的js对象

//goods接口
Mock.mock('/goods',{code:0,data:data.goods})
//ratings接口
Mock.mock('/ratings',{code:0,data:data.ratings})
//info接口
Mock.mock('/info',{code:0,data:data.info})
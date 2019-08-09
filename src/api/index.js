//接口请求函数,返回值是promise

import ajax from './ajax'

const BASE='/api'
const BASE2='/baidu'

// 1.经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax({
  method: 'GET', // 可以不写
  url: BASE + `/position/${latitude},${longitude}`
})

// 2.获取食品分类列表
export const reqCategorys=()=>ajax.get(BASE+'/index_category')

// 3.根据经纬度获取商铺列表
export const reqShops=({latitude,longitude})=>ajax({
  url:BASE+'/shops',
  params:{
    latitude,
    longitude
  }
})

export const reqBaiDuXxx = () => ajax(BASE2 + '/xxx')


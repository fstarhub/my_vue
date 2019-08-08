//接口请求函数,返回值是promise

import ajax from './ajax'

const BASE='/api'
const BASE2='/baidu'

// 1.经纬度获取位置详情
export const reqAddress=(longitude,latitude)=>ajax({
  method:'GET',
  url:BASE+`/position/${latitude,longitude}`
})


//根据经纬度获取商铺列表
export const reqShops=({latitude,longitude})=>ajax({
  url:BASE+'/shops',
  params:{
    latitude,
    longitude
  }
})

export const reqBaiDuXxx = () => ajax(BASE2 + '/xxx')

reqAddress('116.36867', '40.10038').then((result) => {
  console.log('result', result)
})
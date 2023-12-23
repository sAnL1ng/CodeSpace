// 没有使用也会警告
import type { Banner } from '../models/banner.ts'
import http from './http.ts';

// ts 有完整的编译阶段 ts -> js -> 
// 后端api 业务代码，负责后端数据的接入
// 广告位 banner type用于承接不同页面的banner位
export async function useBanner() {
    // 前端也有数据校验了，要对数据照单全收说不，因为要对用户负责 这就是 ts 接口

    // 在http.get<> 泛型 约束这个泛值banners返回值的类型应该是 Banner数组
    const { banners } = await http.get<{ banners:Banner[] }>('/banner',{type:1})
    return banners
}
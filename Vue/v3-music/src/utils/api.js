import http from '@/utils/http';
// 模块，前后端交流 数据模块的封装
// localhost:3000/banner 轮播图 axios
// 轮播图   
export async function getBanner(){
    //get 统一 http
    const { banners } = await http.get('/banner',{type:1})
    return banners
}

// 搜索的
export async function getSearchSuggest(keywords){
    const { result } = await http.get('/search',{ keywords })
    return result
}

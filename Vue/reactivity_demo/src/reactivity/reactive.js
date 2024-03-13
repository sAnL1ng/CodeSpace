import { mutableHandlers } from './baseHandlers'
// 可读性的接口 
// VUE的API 比React好 API的简洁

// 缓存 
// vue组件代码可能很长，多人开发
export function reactive(target) {
    // 提升可读性
    return createReactiveObject(
        target, reactiveMap, mutableHandlers
    )
}

// proxy区别于defineProperty 可以拦截的操作更多，所以模块化
function CreateReactiveObject(target, proxyMap, proxyHandlers) {
    if (typeof target !== 'object' || target === null) {
        console.log(`reactive %{target}必须是一个对象`);
        return target;
    }

    const existingProxy = proxyMap.get(target)
    if (existingProxy) {
        console.log('------------changed',target);
        return existingProxy;
    }

    const proxy = new Proxy(target,proxyHandlers)
    proxyMap.set(target,proxy)

    return proxy;
}
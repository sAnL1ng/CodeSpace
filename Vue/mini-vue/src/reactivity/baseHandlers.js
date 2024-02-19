export const mutableHandlers = {
  get: function(target, key, receiver) { // target 被代理的原对象，key是原对象中的键，receiver代理后的对象
    console.log('target对象被读取值了');
    return target[key]
  },
  set: function(target, key, value, receiver) { // target
    console.log('target对象被修改值了', key, value);
    target[key] = value;
    // 更新浏览器的视图（响应式）

  }
}
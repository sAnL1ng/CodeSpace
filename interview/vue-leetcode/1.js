// patchs 的过程，我们有哪些改变要收集
// [{type: }]

// patchFlag 变量 响应式业务之后生成的 哪种类型的改变
// [{type:patchFlag}]

const patchFlags = {
    CLASS: 1,
    TEXT: 2,
    STYLE: 4,
    ELEMENT:8,
    COMPONENT:16
}
patchFlag = 1
if (patchFlag & patchFlags.CLASS) { // true
    if (oldProps.class !== newProps.class) {
        hotPatchProp(el, 'class', null, newProps.class, isSVG);
    }
    // patchFlag == patchFlags.STYLE   性能不好 所以都是2次幂
} else if (patchFlag & patchFlags.STYLE) {
    if (oldProps.style !== newProps.style) {
        hotPatchProp(el, 'style', null, newProps.style, isSVG);
    }
} else if (shapeFlag & shapeFlags.COMPONENT) {
    // 组件改变
} else if (shapeFlag & shapeFlags.ELEMENT) {
    // 节点改变
}

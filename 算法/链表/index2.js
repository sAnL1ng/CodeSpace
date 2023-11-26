// 数组的删除操作时间复杂度O(n)
// 链表的删除操作时间复杂度O(1)

// 数组的读取操作时间复杂度O(1)
// 链表的读取操作时间复杂度O(n)

function ListNode(val){
    this.val = val;
    this.next = null;
}

const index = 10
let node = new ListNode()

for(let i = 0; i < index ; i++){
    node = node.next
}

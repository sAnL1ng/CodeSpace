// let arr = [1,2,3,4,5,6,7,8] //有序列表 线性结构

// let res = {
//     val:1, //数据域
//     next:{  //指针域
//         val:2,
//         // next:...
//     }
// }

function ListNode(val){
    this.val = val;
    this.next = null;
}
// 1 => 2
const node1 = new ListNode(1)
node.next = ListNode(2)
// 1 => 3 => 2
const node3 = new ListNode(3)
ndoe3.next = node1.next
node1.next = node3
// 1 => 2
node1.next = node3.next

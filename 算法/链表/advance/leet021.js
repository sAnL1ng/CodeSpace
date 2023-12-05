// var removeNthFromEnd = function (head, n) {
//     const dummy = new ListNode()
//     dummy.next = head
//     // 如何定位到倒数第n个
//     // 要转为length - n + 1当前
//     // length - n就是倒数第n个前一项
//     // 因此要遍历一个链表
//     let cur = dummy
//     let len = 0
//     while (cur.next) {
//         len++
//         cur = cur.next
//     }
//     // 又要遍历一次
//     let pre = dummy
//     for (let i = 0; i < len - n; i++) {
//         pre = pre.next
//     }
//     if (pre.next) {
//         pre.next = pre.next.next
//     }

//     return dummy.next
// }

var removeNthFromEnd = function (head, n) {
    // len    m = len -n -1         pre = n - 1
    const dummy = new NodeList(null)
    dummy.next = head

    let fast = dummy
    let slow = dummy

    while(n !== 0){
        fast = fast.next
        n--
    }

    while(fast.next){
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next
    return dummy.next
}
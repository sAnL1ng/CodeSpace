var reverseList = function(head) {
    let pre = null
    let cur = head
    while(cur){
        let nextNode = cur.next
        cur.next = pre
        pre = cur
        cur = nextNode
    }
    return pre
}
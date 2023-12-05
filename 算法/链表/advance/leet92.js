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

var reverseBetween = function(head, left, right) {
    if(!head.next) return head
    const dummy = new ListNode()
    dummy.next = head
    // 截取
    let lNode = dummy
    let rNode = dummy
    for(let i = 0;i < left - 1;i++){
        lNode = lNode.next
    }
    for(let j = 0 ; j < right;j++){
        rNode = rNode.next
    }
    let r = rNode.next
    rNode.next = null
    let l = lNode.next
    
    const res = reverseList(lNode.next)

    lNode.next = res
if(lNode){
    l.next = r
}
    
    return dummy.next
};
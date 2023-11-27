let head = [4,2,1,3]
var sortList = function(head) {
    let cur = head
    let node = new ListNode()
    let arr = []
    while(!cur){
        arr.push(cur.val)
        cur = cur.next
    }  
    arr.sort((a,b) => a-b)
    for(let i = 0;i < arr.length;i++){
        node.next = arr[i]
        node = node.next
    }
    return node
};

sortList(head)
let list1 = {
    val:1,
    next:{
        val:2,
        next:{
            val:4,
            next:null
        }
    }
}

let list2 = {
    val:1,
    next:{
        val:3,
        next:{
            val:4,
            next:null
        }
    }
}


var mergeTwoLists = function(list1, list2) {
    let head = newListNdoe()
    let cur = head
    while(list1 && list2){
        if(list1.val <= list2.val ){
            cur.next = list1
            list1 = list1.next
        }else{
            cur.next = list2
            list2 = list2.next
        }

        cur = cur.next
    }
    //谁的长度有剩余
    cur.next = list1 == null ? list2 : list1

    return head.next
};
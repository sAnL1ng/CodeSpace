// 前中后序遍历

let tree = {
    val:'A',
    left:{
        val:'B',
        left:{
            val:'D'
        },
        right:{
            val:'E'
        }
    },
    right:{
        val:'C',
        left:{
            val:'F'
        },
        right:{
            val:'G'
        }
    }
}

function preorder(root){
    if(!root) return 

    // 前序遍历
    // console.log(root.val);
    // preorder(root.left);
    // preorder(root.right);
    // 中序遍历
    preorder(root.left);
    console.log(root.val);
    preorder(root.right);
    // 后序遍历
    // preorder(root.left);
    // preorder(root.right);
    // console.log(root.val);
}

preorder(tree)
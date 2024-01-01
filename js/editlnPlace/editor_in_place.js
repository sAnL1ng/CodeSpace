/**
 * @func  就地编辑
 * @params {id: string, parent: string, value: string}
 */
function EditInPlace(id, parent, value) {
    this.id = id;
    this.parent = parent;
    this.value = value || "这个家伙很懒，什么都没有留下"
    this.createElements(); // 动态装配html结点
    this.attachEvents();
}
EditInPlace.prototype = {
    createElements: function () {
        this.containerElement = document.createElement('div');
        this.containerElement.id = this.id;
        // 签名文字部分
        this.staticElement = document.createElement('span');
        this.staticElement.innerText = this.value;
        this.containerElement.appendChild(this.staticElement);
        // 输入框
        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
        this.containerElement.appendChild(this.fieldElement);
        // save确认
        this.saveButton = document.createElement('input');
        this.saveButton.type = 'button';
        this.saveButton.value = '保存';
        this.containerElement.appendChild(this.saveButton);
        //取消按钮
        this.cancleButton = document.createElement('input');
        this.cancleButton.type = 'button';
        this.cancleButton.value = '取消';
        this.containerElement.appendChild(this.cancleButton);

        this.parent.appendChild(this.containerElement);
        this.convertToText();
    },
    // 鼠标经过或点击的两种状态
    convertToText: function () {
        this.staticElement.style.display = 'inline';
        this.fieldElement.style.display = 'none';
        this.saveButton.style.display = 'none';
        this.cancleButton.style.display = 'none';
    },
    convertToEdit: function () {
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'inline';
        this.saveButton.style.display = 'inline';
        this.cancleButton.style.display = 'inline';
    },
    attachEvents: function () {
        // 此时this指向实例化对象
        this.staticElement.addEventListener('click', this.convertToText.bind(this))

        // 第一种方法
        // var that = this;
        // this.staticElement.addEventListener('click', () => {
        //     // 会出现一个问题:this的丢失
        //     that.convertToEdit();
        // })
        
        //  第二种方法
        // this.staticElement.addEventListener('click', () => {
        //     // 会出现一个问题:this的丢失
        //     this.convertToEdit();
        // })
    }
}
let myHeading = document.querySelector("h1")/*querySelector()函数可以获取标题的引用,并存储到了myHeading变量中*/
myHeading.textContent='hello'+'world';  /*可以对字符串进行相加*/
myHeading.textContent=(myHeading.textContent===3);   /*赋值语句和判断是否相等的语句,返回值是bool类型 结果是1*/
myHeading.textContent=!(myHeading.textContent!==3);  /*赋值语句和取非语句,对一个判断语句的值进行取非处理  结果是1*/

/*数组：用于在单一引用中存储多个值的结构。let myVariable = [1, '李雷', '韩梅梅', 10];
元素引用方法：myVariable[0], myVariable[1] ……*/

/*对象：JavaScript 里一切皆对象，一切皆可储存在变量里。这一点要牢记于心。 let myVariable = document.querySelector('h1');
以及上面所有示例都是对象。*/

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {  //if-else结构
    alert('欢迎来到这个页面');    /*alert() 函数在浏览器窗口内弹出一个警告框，还应为其提供一个字符串参数，以告诉它警告框里要显示的内容。*/
} else {
    alert('但是巧克力才是我的最爱呀……');
}

function multiply(num1, num2) {    //定义函数,返回值是result
    let result = num1 * num2;
    return result;
}
myHeading.textContent=multiply(4, 7); //调用函数
multiply(20, 20);
multiply(0.5, 3);
myHeading.textContent = 'Hello world!';   /*修改myHeading变量的属性*/

document.querySelector('#my-id').textContent="测试器！";  //改变#my-id也就是id为my-id的p标签的内容

document.querySelector('h1').onclick = function() {   //点击h1的部分就会弹出提示框，内容是‘’
    alert('别戳我，我怕疼');
}

/*document.querySelector('h1').addEventListener('click',()=>{ 另一种方式
    alert('这是一个无序表');
})*/

document.querySelector('#my-id').onclick=function(){
    let num=multiply(5,2);
    alert('都说了5*2等于'+num);
}

let myImage = document.querySelector('img');   //可以使得网页的图片进行实时切换

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/FireFox.png') {
        myImage.setAttribute('src', 'images/FireFox1.png');
    } else {
        myImage.setAttribute('src', 'images/FireFox.png');
    }
}

/*
let myHeading1 = document.querySelector.('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading1.textContent = 'Mozilla 酷毙了，' + myName;
}
该函数首先调用了 prompt() 函数， 与 alert() 类似会弹出一个对话框。
但是这里需要用户输入数据，并在确定后将数据存储在 myName 变量里。接下来将调用 localStorage API ，
它可以将数据存储在浏览器中供后续获取。这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，
并把 myName 变量复制给它。最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字。*/

if(!localStorage.getItem('name')) {      //再次使用时，如果localStorage中的name有值，则直接调用
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {      //防止初次输入名字时，输入的是空
        setUserName();
    } else {
        localStorage.setItem('name', myName);   //myName的数据保存到了本地储存name中
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}

/*运行示例代码，弹出输入用户名的对话框，试着按下 取消 按钮。此时标题会显示为 “Mozilla 酷毙了，null”。
这是因为取消提示对话框后值将设置为 null，这是 JavaScript 中的一个特殊值，表示引用不存在。
也可以不输入任何名字直接按 确认，你的标题会显示为“Mozilla 酷毙了，”，原因么显而易见。
要避免这些问题，应该更新 setUserName() 来检查用户是否输入了 null 或者空名字：*/




/*
这里首次使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在。
若不存在，调用 setUserName() 创建。若存在（即用户上次访问时设置过），
调用 getItem() 获取保存的名字，像上文的 setUserName() 那样设置 textContent。*/

let myButton = document.querySelector('button');  //button选择
myButton.onclick = function() {
    setUserName();
}

/*
最后，为按钮设置 onclick 事件处理器。按钮按下时运行
setUserName() 函数。这样用户就可以通过按这个按钮来自由设置新名字了*/

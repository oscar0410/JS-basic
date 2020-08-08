// // Single element
// // By-Id
// let myForm_byID = document.getElementById("myForm");
// console.log(myForm_byID);
// // QuerySelector
// let container = document.querySelector(".container");
// // 當有很多<h1>，使用"querySelector"只會選取到第一個
// let h1_first =  document.querySelector("h1");


// // Multiple element
// let items = document.querySelectorAll(".item");
// console.log(items);

// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const ul = document.querySelector(".items");
// // 移除全部
// // ul.remove();
// // 移除最後一個子項目
// // ul.lastElementChild.remove();
// // 改變DOM物件的內容
// ul.firstElementChild.textContent = "Hello"
// ul.children[1].innerText = "Bird";
// ul.lastElementChild.innerHTML = "<h1>World!</h1>";

// 按下按鈕改變視窗CSS 
// const btn = document.querySelector(".btn");
// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     document.querySelector("#myForm").style.background ="#ccc";
//     document.querySelector("body").classList.add("bg-dark");
//     document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hello World!</h1>"
// });

const myForm = document.querySelector("#myForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    // 保留預設狀態
    e.preventDefault();

    if(nameInput.value==="" || emailInput===""){
        msg.innerText = "Please enter fields";
        msg.classList.add("error");
        // 設定秒數
        setTimeout(()=>msg.remove(), 3000);
    }
    else{
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //Clear Fields
        nameInput.value = "";
        emailInput.value = "";
    }
}

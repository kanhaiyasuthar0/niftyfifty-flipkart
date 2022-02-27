localStorage.setItem("Hello" , 1);
let h = localStorage.getItem("Hello");
h++;
localStorage.setItem("Hello" , h);
import navbar from "./components/navbar.js";
let nav = document.querySelector(".navigation");
nav.innerHTML = navbar();

let loginname = localStorage.getItem("name");
let tokenlogin = localStorage.getItem("token");
if(!loginname && !tokenlogin){
  alert("Please sign in to continue");
  location.href = "/index.html";
}
let i=0;
setInterval(() => {
  let slideshow = document.querySelector(".slideshow");
  let h1 = document.querySelector(".details");

  if(slideshow){
    
  }
  let img = JSON.parse(localStorage.getItem("img"));
  if(img){
    slideshow.src = `${img[i].image}`;
    h1.innerText = `${img[i].title}`
    // h1.innerText = `${img[i].title}`
    i++;
    if(i>= img.length){
      i=0;
    }
  }
  // slideshow.src = "${"
  // slideshow.append(img)
}, 3000);

// let slidcont = document.querySelector(".slideshow");
//  rednderslid(){

// }



let useropen = document.querySelector(".useropen");
useropen.addEventListener("mouseover" , ()=>{
  
})







let main = document.querySelector(".main");
let cartno = document.querySelector(".cartno");
let cart = document.querySelector(".cart");

let ls = localStorage.getItem("cart");
let cartcount = localStorage.getItem("cartcount");
if (ls === null) {
  localStorage.setItem("cart", JSON.stringify([]));
let dt = JSON.parse(localStorage.getItem("cart"));
cartnof(dt);
}else{
  let dt = JSON.parse(localStorage.getItem("cart"))
cartnof(dt);
}

let token = localStorage.getItem("token");
let uname = localStorage.getItem("name");
if(token && uname){
  const getuserdata = async (token,uname)=>{
    let data = await fetch(`https://masai-api-mocker.herokuapp.com/user/${uname}`, {
      method : "GET",
      // body:JSON.stringify({

      // })
      headers:{
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`,  
      }
    })
    let res = await data.json();
    renderuserlist(res);
  }
  getuserdata(token,uname);

}

const renderuserlist = (res)=>{
  let userdetails = document.querySelector(".userdetails");
  // userdetails.getElementsByClassName.display = "flex";
  
  userdetails.innerHTML = "";
  let opt1 = document.createElement("p");
  opt1.innerText = ` Welcome ${res.name}`;
  let opt2 = document.createElement("p");
  opt2.innerText = ` Email: ${res.email}`;
  let opt3 = document.createElement("p");
  opt3.innerText = ` Username: ${res.username}`;
  let opt4 = document.createElement("p");
  opt4.innerText = ` Contact no: ${res.mobile}`;
  let opt5 = document.createElement("p");
  opt5.value = "logout"
  opt5.innerText = `Logout?`;
  
  console.log(userdetails)
  userdetails.append(opt1,opt2,opt3,opt4,opt5);
  userdetails.addEventListener("change" , ()=>{
    let select = document.querySelector(".userdetails");
    console.log("hello")
    if(select.value=="logout"){
      localStorage.removeItem("token")
      localStorage.removeItem("name");
      location.href = "./index.html";
    }
  })
}




async function getdata() {
  let res1 = await fetch("https://fakestoreapi.com/products");
  let res2 = await res1.json();

    console.log(res2);
    // console.log(res2)
  localStorage.setItem("img" , JSON.stringify([]));
  let img = JSON.parse(localStorage.getItem("img"));
  let slideshow = document.querySelector(".slideshow");

  res2.forEach((Element)=>{
    img.push(Element);
    console.log(Element)
    
  })
  localStorage.setItem("img" , JSON.stringify(img));
  render(res2);
}
getdata();

function render(res2) {

  res2.forEach((item, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let img = document.createElement("img");
    img.src = `${item.image}`;
    img.title = `${item.description}`
    let h4 = document.createElement("h4");
    h4.title = `${item.description}`
    h4.innerText = `${item.title}`;
    let rat = document.createElement("h4");
    rat.title = `${item.description}`
    rat.innerText = `Rating: ${item.rating.rate}`;
    let h5 = document.createElement("h5");
    h5.title = `Price : ${item.price}`
    h5.innerText = `Price : ${item.price}`;

    let button = document.createElement("button");
    button.setAttribute("class" , "btn btn-outline-success")
    button.innerText = `Add to cart`;
    button.addEventListener("click", () => {
      addtocart(item);
      
    });
    div.append(img, h4,rat,h5, button);
    main.append(div);
  });
}

function addtocart(item) {
  let data = JSON.parse(localStorage.getItem("cart"));

  let ans = data.find(prod => prod.id == item.id)
  if(ans == undefined){

    data.push(item);
  
    localStorage.setItem("cart", JSON.stringify(data));
    cartnof(data)
  }  else{
    alert("Already added")
  }
  
 
}



function cartnof(data){
  console.log()
  cartno.innerText = data.length;
}

// addtocart(cartcount);
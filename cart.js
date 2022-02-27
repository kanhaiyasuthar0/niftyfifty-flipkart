import navbar from "./components/navbar.js";
let main = document.querySelector(".main");
let totald = document.querySelector(".total")
let discbtn = document.getElementById("disc");
let res2 = JSON.parse(localStorage.getItem("cart"));
let total = 0;
let checkout = document.getElementById("checkout");


let nav = document.querySelector(".navigation");
nav.innerHTML = navbar();


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
  let select = document.getElementById("userlist");
  select.innerHTML = "";
  let opt1 = document.createElement("option");
  opt1.innerText = ` Welcome ${res.name}`;
  let opt2 = document.createElement("option");
  opt2.innerText = ` Email: ${res.email}`;
  let opt3 = document.createElement("option");
  opt3.innerText = ` Username: ${res.username}`;
  let opt4 = document.createElement("option");
  opt4.innerText = ` Contact no: ${res.mobile}`;
  let opt5 = document.createElement("option");
  opt5.value = "logout"
  opt5.innerText = `Logout?`;
  
  
  select.append(opt1,opt2,opt3,opt4,opt5);
  select.addEventListener("change" , ()=>{
    let select = document.getElementById("userlist");
    console.log("hello")
    if(select.value=="logout"){
      localStorage.removeItem("token")
      localStorage.removeItem("name");
      location.href = "./index.html";
    }
  })
}


let deleteall = document.getElementById("deleteall")
deleteall.addEventListener("click" , ()=>{
    // let res3 = JSON.parse(localStorage.getItem("cart"));
    // localStorage.setItem("cart" , JSON.stringify([]));
    localStorage.clear();
    location.href = "/home.html"



})
checkout.addEventListener("click" , ()=>{
    
    let totalpaise = document.querySelector(".total").innerText;
    localStorage.getItem("total" , );
    localStorage.setItem("total" , totalpaise);
    location.href = "/details.html";

    
})
discbtn.addEventListener("click" , ()=>{
    let alldisc = document.getElementById("coupon").value;
    let amount = totald.innerText;
    if(alldisc === "MASAI30"){
        amount = amount - 0.3*amount;
        
        
        updatetotal(amount);
        discbtn.style.display = "none";
    }
})

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
      let h5 = document.createElement("h5");
      h5.title = `${item.price}`
      h5.innerText = `Price : ${item.price}`;
        total += item.price;
      // let button = document.createElement("button");
      // button.setAttribute("class" , "btn12 btn btn-outline-success")
      // button.innerText = `Add to cart`;
      // button.addEventListener("click", () => {
      //   addtocart(item);
        
      // });


      let plus = document.createElement("button");
      plus.setAttribute("class" , "plus btn btn-outline-success");
      plus.innerHTML = `+`;
      // console.log(plus)


      let plus1 = document.createElement("button");
      plus1.setAttribute("class" , "plus1 btn btn-outline-success");
      plus1.innerHTML = `${1}`;
      let mod = plus1.innerHTML;


      let plus2 = document.createElement("button");
      plus2.setAttribute("class" , "plus2 btn btn-outline-success");
      plus2.innerHTML = `-`;
      


      // console.log(plus)
      plus.addEventListener("click" , ()=>{
        let inc = item.price;
        increment(inc);
        incrementcount(mod,index);
       
      })
      plus2.addEventListener("click" , ()=>{
        let inc = item.price;
        decrement(inc);
        decrementcount(mod,index);
       
      })
      

      div.append(img, h4,h5,plus,plus1,plus2);
      main.append(div);
    });
    updatetotal(total);
  }
  render(res2);



function updatetotal(total){
  
    totald.innerText = Math.round(total);  
  
   
}

function increment(inc){
  
  let totald = document.querySelector(".total");
  // console.log(totald)
  let amount1 = +totald.innerText + +inc;
  
  updatetotal(amount1);
}


function incrementcount(val,ind){

  let plus1 = document.querySelectorAll(".plus1")
  console.log(plus1)
  
  plus1[ind].innerHTML = +plus1[ind].innerHTML + +val;

}


function decrement(inc){
  let plus1 = document.querySelector(".plus1")
  if(+plus1.innerHTML>1){
    

    let totald = document.querySelector(".total");
  
    let amount1 = +totald.innerText - +inc;
    
    updatetotal(amount1);
  }


}
function decrementcount(val,ind){
  
  console.log("yes  ")
  let plus1 = document.querySelectorAll(".plus1")
  if(+plus1[ind].innerHTML>1){
    plus1[ind].innerHTML = +plus1[ind].innerHTML - +val;
  }else{
    alert("Do you want to delete this item?")
  }
 

}
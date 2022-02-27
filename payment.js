let done = document.getElementById("done");
done.addEventListener("click" , ()=>{
    location.href = "/placed.html"
})

import navbar from "./components/navbar.js";
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
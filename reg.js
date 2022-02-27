import navbar from "./components/navbar.js";
// let login = document.querySelector(".submit1");
let submit = document.querySelector(".submit");

let nav = document.querySelector(".navigation");
console.log(navbar)
nav.innerHTML = navbar();

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      let url = "https://masai-api-mocker.herokuapp.com/auth/register";
  
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let username = document.getElementById("username").value;
      let mobile = document.getElementById("mobile").value;
      let desc = document.getElementById("desc").value;
      console.log(name, email, password, username, mobile, desc);
  
      let data = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          username: username,
          mobile: mobile,
          description: desc,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let res = await data.json();
      if (!res.error) {
        prompt("Thanks for registering");
        location.href = "/index.html"
      }else{
          alert("Enter the correct data");
          
      }
    } catch (error) {
      // console.log(error);
      
    }
  });
  
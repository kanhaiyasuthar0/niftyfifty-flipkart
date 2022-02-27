import navbar from "./components/navbar.js";
let submit = document.querySelector(".submit");

let login = document.querySelector(".submit1");

let nav = document.querySelector(".navigation");
console.log(navbar)
nav.innerHTML = navbar();

submit.addEventListener("click", async () => {
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
    }
  } catch (error) {
    // console.log(error);
  }
});

login.addEventListener("click",async () => {
  try {
    let url = "https://masai-api-mocker.herokuapp.com/auth/login";
    let password = document.getElementById("password1").value;
    let username = document.getElementById("username1").value;
    // console.log("yes")
    let data = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        password: password,
        username: username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await data.json();
    console.log(res);

    if(!res.error){
        console.log(res)

        // let data = JSON.parse(localStorage.getItem("token"));
        localStorage.setItem("token" , res.token);
        localStorage.setItem("name" , username);

        // data[logged] = username;
        // data[token] = res.token; 
        
        // localStorage.setItem("token" , JSON.stringify(data));
        location.href = "/home.html";
    }
  } catch (err) {
      
    
  }
});


// Kanhaiya kanhaiya@blah.com 123123 kanhaiya0 8976879231 asasasasas
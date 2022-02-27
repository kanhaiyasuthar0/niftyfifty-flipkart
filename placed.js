



    function placed(){
        console.log(1)
        document.body.innerHTML = "";
        let div = document.createElement("div");
        div.setAttribute("class" , "pop btn btn-outline-success");
        div.innerHTML = `Your order has been placed successfully!`;
        document.body.append(div);
    }
setTimeout(() => {


    
    placed();
}, 5000);
setTimeout(() => {
    location.href = "/index.html";
    localStorage.clear();
}, 10000);
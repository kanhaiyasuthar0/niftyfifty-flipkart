// function navbar() {
//   return `<nav style="height:4rem; width:100vw" class="bg-primary">
//         <div  class="container" style="border:1px solid red; display:inline-block;height:4rem; width:100%"  >
//           <a style= " padding:1rem ;margin-left:10rem; width:20%; text-align:right; border:1px solid red" href="/index.html"
//             ><img
//               class="logo"
//               src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"
//               alt=""
//           /></a>
//           <input style = "margin:0.5rem 0rem ;width:30% ; height:3rem; border-top-left-radius:5px ;
//           border-bottom-left-radius:5px ; outline:none; border:none;padding:0.5rem; font-size:1.1rem" placeholder="Search for products, brands and more"><i style = "width:3% ; height:3rem;  border-top-right-radius:5px ;
//           border-bottom-right-radius:5px ; outline:none; border:none;padding:0.5rem;padding-top:0.8rem; font-size:1.3rem;color:rgba(40,116,240,255); background:white" class="fa-solid fa-magnifying-glass"></i></input>

//           <ul style="list-style:none" reversed>
//           <li><select name="select" id="userlist"></select></li>
//           <li></li>
//           <li> <a  style="width:30%; marign-left:2rem" href="/cart.html"
//           ><button class="cart"> CART <i class="fa-solid fa-cart-shopping"></i> <div class="cartno"></div> </button></a
//         ></li>
//           </ul>
          
//           <div style="width:10%; border:1px solid red;"  >
           
           
//             <a></a>
            


            
  
            
                
             
            
//           </div>
//         </div>
//       </nav>`;


      
// }

function navbar(){
  return `<div style= " height:4.3rem; background-color: rgba(40,116,240,255);" class="nav">
  <a style="text-align: right ; width: 22%;" href="/home.html"
  ><img style="width:10rem; height: 4rem; padding: 0.8rem;"
    class="logo"
    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"
    alt=""
/></a>
<input style="height:3rem; margin: 0.5rem 0rem 0rem 0rem; border-top-left-radius: 0.2rem;outline: none;border: none;border-bottom-left-radius: 0.2rem; width: 30rem;padding: 0.5rem;"  placeholder="Search for products, brands and more" ><i  style="height:3rem; margin: 0.5rem 0rem; border-top-right-radius: 0.2rem;outline: none;border: none;border-bottom-right-radius: 0.2rem; width: 3rem;padding: 1rem;background-color:white;color: rgba(40,116,240,255) ;"class="fa-solid fa-magnifying-glass"></i></input>


<ul style="list-style: none;display: flex;height:3rem; margin: 0.5rem 0rem 0rem 2rem; border-top-left-radius: 0.2rem;outline: none;border: none;border-bottom-left-radius: 0.2rem; width: 30rem;padding: 0.5rem;color: white;font-weight: 500;font-size: large;" reversed>
    <!-- <li><select name="select" id="userlist"></select></li> -->
    <li style= "margin-left:3rem ;cursor : pointer;">kanhaiya <i class="fa-solid fa-angle-down useropen"></i></li>
    <li style="margin-left:3rem;cursor: pointer;"> More <i class="fa-solid fa-angle-down"></i> </li>
    
    <li style="display: flex;margin-left: 3rem;"><a href="/cart.html"><button style="display: flex;outline:none;border:none;background-color:rgba(40,116,240,255);color: white;" class="cart">  <i style="margin:0.5rem"  class="fa-solid fa-cart-shopping"></i>CART </button></a
      ></li>
      <li><div style="opacity:0.7;position:absolute; top:-0.9rem; right:2.5rem;width:1.5rem;text-align:center; outline:none;border:none; background:red;color:white; border-radius:0.5rem;height:1.5rem;" class="cartno"></div></li>
</ul>
</div>`
}
export default navbar;

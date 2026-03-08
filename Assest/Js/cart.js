document.querySelectorAll(".plus").forEach(btn=>{

    btn.onclick = function(){

        let item = this.closest(".cart-item");
        let input = item.querySelector("input");

        let qty = parseInt(input.value) + 1;
        input.value = qty;

        updateCart(item.dataset.id,qty);
    }

});


function updateCart(cartId,qty){

fetch("controller/update_cart.php",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
cart_id:cartId,
quantity:qty
})

})
.then(res=>res.json())
.then(data=>{

if(data.status !== "success"){
alert("Update failed");
}

});

}
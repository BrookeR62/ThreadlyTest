const product = [
    {
     productImage: "Assest/Image/shoes.png",
    name1: "Adidas men Lite Racer Adapt 7.0 ",
    name2: "ShoesOpens in a new window",
    name3: "or tab",
    type: "Shoes",
    price: "$42.00",
    shipping: "$5.30"

},
    
    { 
    productImage: "Assest/Image/dressss.png",
    name1: "Tibi Velvet Print Dress Women 2",
    name2: "Sweatheart Paisley Party Cocktail",
    name3: "Feminine Artsy",
    type: "Dress",
    price: "$22.00",
    shipping: "$8.75"


},
{
    productImage: "Assest/Image/jeans.png",
    name1: "Levi's 501 Original Jeans Men",
    name2: "Classic Straight Fit",
    name3: "Denim Essentials",
    type: "Jeans",
    price: "$39.99",
    shipping: "$4.99"
}   
,{
    productImage: "Assest/Image/jacket.png",
    name1: "Under Armour Windbreaker  ",
    name2: "Unisex Waterproof Outdoor",
    name3: "Wear Aesthetics",
    type: "Jacket",
    price: "$50.00",
    shipping: "$7.50"
},
{
    productImage: "Assest/Image/tshirt.png",
    name1: "Hanes Classic Cotton T-Shirt",
    name2: "Comfortable Everyday Wear",
    name3: "Essential Basics",
    type: "Tshirt",
    price: "$12.99",
    shipping: "$3.50"
} ,
{
    productImage: "Assest/Image/sweater.png",
    name1: "Columbia Puffer Jacket",
    name2: "Warm Winter Layer",
    name3: "Sweater",
    price: "$49.99",
    shipping: "$6.99"
}
];

let currentIndex = 0;
document.getElementById("arrowleft").onclick = arrowleft;
document.getElementById("arrowright").onclick = arrowright;

function arrowleft() {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = product.length - 1;
        } 
        updateProduct();
    }
        
    function arrowright() {
        currentIndex ++;
        if (currentIndex >= product.length) {
            currentIndex = 0;
        }
        updateProduct();
    }


function updateProduct() {
let item = product[currentIndex];

document.getElementById("productImage").src = item.productImage;
document.getElementById("name1").innerText = item.name1;
document.getElementById("name2").innerText = item.name2;
document.getElementById("name3").innerText = item.name3;
document.getElementById("type").innerText = item.type;
document.getElementById("price").innerText = item.price;
document.getElementById("shipping").innerText = item.shipping;

}


    const toggle = document.getElementById('profileToggle');
    const dropdown = document.getElementById('profileDropdown');

    toggle.addEventListener('click', () => {
        dropdown.style.display =
            dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
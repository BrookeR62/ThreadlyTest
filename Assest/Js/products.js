document.addEventListener("DOMContentLoaded", function() {

    const shoes = [
        { productImage: "Assest/Image/shoes.png", name: "Adidas Lite Racer", price: "$42.00", desc: "Comfortable running shoes" },
        { productImage: "Assest/Image/shoes2.jpg", name: "Sneakers Mesh", price: "$35.00", desc: "Breathable mesh design" },
        { productImage: "Assest/Image/shoes3.jpg", name: "Adokoo Women's Fashion Sneakers", price: "$45.00", desc: "Lightweight and durable" },
        { productImage: "Assest/Image/shoes4.jpg", name: "K-Swiss Men's", price: "$50.00", desc: "Classic tennis-inspired design" },
        { productImage: "Assest/Image/shoes5.jpg", name: "Hoka Mens Bondi 9", price: "$55.00", desc: "Soft cushioning for all-day comfort" },
        { productImage: "Assest/Image/shoes6.jpg", name: "Jousen Men's Fashion Sneakers", price: "$60.00", desc: "Stylish and comfortable sneakers" },
        { productImage: "Assest/Image/shoes7.jpg", name: "ASICS Men's Gel-Cumulus 27", price: "$50.00", desc: "Timeless retro design" },
        { productImage: "Assest/Image/shoes8.jpg", name: "New Balance 990v5", price: "$65.00", desc: "Premium cushioning and support" },
        { productImage: "Assest/Image/shoes9.jpg", name: "Reebok Classic Leather", price: "$45.00", desc: "Iconic leather sneakers" },
        { productImage: "Assest/Image/shoes10.jpg", name: "Asics Gel-Kayano 27", price: "$70.00", desc: "Stability and comfort for runners" },
        { productImage: "Assest/Image/shoes12.jpg", name: "Vans Old Skool", price: "$40.00", desc: "Skate-inspired classic sneakers" },
        { productImage: "Assest/Image/shoes11.jpg", name: "Converse Chuck Taylor All Star", price: "$35.00", desc: "Timeless canvas sneakers" },
        { productImage: "Assest/Image/shoes13.jpg", name: "Under Armour HOVR Phantom 2", price: "$80.00", desc: "Energy-returning cushioning" },
        { productImage: "Assest/Image/shoes14.jpg", name: "Brooks Ghost 13", price: "$75.00", desc: "Smooth and cushioned running shoes" },
        { productImage: "Assest/Image/shoes15.jpg", name: "Mizuno Wave Rider 24", price: "$70.00", desc: "Responsive and comfortable running shoes" },
        { productImage: "Assest/Image/shoes16.jpg", name: "Salomon Speedcross 5", price: "$90.00", desc: "Aggressive trail running shoes" },
        { productImage: "Assest/Image/shoes17.jpg", name: "Altra Lone Peak 4.5", price: "$85.00", desc: "Zero-drop trail running shoes" },
        { productImage: "Assest/Image/shoes18.jpg", name: "Hoka One One Clifton 7", price: "$75.00", desc: "Lightweight and cushioned running shoes" },

    ];

    const tshirts = [
        { productImage: "Assest/Image/tshirt.png", name: "Hanes Cotton T-Shirt", price: "$12.99", desc: "Comfortable everyday essentials" }
    ];

    const jeans = [
        { productImage: "Assest/Image/jeans.png", name: "Levi's 501 Jeans", price: "$39.99", desc: "Classic straight fit denim" }
    ];

    const jackets = [
        { productImage: "Assest/Image/jacket.png", name: "Under Armour Jacket", price: "$50.00", desc: "Unisex waterproof outdoor" },
        { productImage: "Assest/Image/sweater.png", name: "Columbia Puffer Jacket", price: "$49.99", desc: "Warm winter layer sweater" }
    ];

    const dresses = [
        { productImage: "Assest/Image/dressss.png", name: "Tibi Velvet Dress", price: "$22.00", desc: "Sweatheart Paisley Party Dress" }
    ];

  
    const allProducts = [...shoes, ...tshirts, ...jeans, ...jackets, ...dresses];
    const productsGrid = document.getElementById("productsGrid");
    const categoryBtns = document.querySelectorAll(".category-btn");
    const searchInput = document.getElementById("searchInput");

    let currentCategory = "All";

 
    function renderProducts() {

        const searchTerm = searchInput.value.toLowerCase();

        let filteredProducts;

        switch(currentCategory) {
            case "Shoes": filteredProducts = shoes; break;
            case "Tshirt": filteredProducts = tshirts; break;
            case "Jeans": filteredProducts = jeans; break;
            case "Jacket": filteredProducts = jackets; break;
            case "Dress": filteredProducts = dresses; break;
            default: filteredProducts = allProducts; break;
        }

       
        filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));

      
        productsGrid.innerHTML = filteredProducts.map(p => `
            <div class="product-card">
                <img src="${p.productImage}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <p class="product-price">${p.price}</p>
                <button class="add-cart-btn">Add to Cart</button>
            </div>
        `).join('');

      
        document.querySelectorAll(".add-cart-btn").forEach(btn => {
            btn.addEventListener("click", function(){
                alert("Product added to cart!");
            });
        });
    }

 
    renderProducts();

   
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            categoryBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            currentCategory = this.dataset.category;
            renderProducts();
        });
    });

    
    searchInput.addEventListener("input", function() {
        renderProducts();
    });

});
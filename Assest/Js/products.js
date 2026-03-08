    document.addEventListener("DOMContentLoaded", function() {

        const shoes = [
            { category: "Shoes", productImage: "Assest/Image/shoes.png", name: "Adidas Lite Racer", price: "$42.00", desc: "Comfortable running shoes" },
            { category: "Shoes", productImage: "Assest/Image/shoes2.jpg", name: "Sneakers Mesh", price: "$35.00", desc: "Breathable mesh design" },
            { category: "Shoes", productImage: "Assest/Image/shoes3.jpg", name: "Adokoo Women's Fashion Sneakers", price: "$45.00", desc: "Lightweight and durable" },
            { category: "Shoes", productImage: "Assest/Image/shoes4.jpg", name: "K-Swiss Men's", price: "$50.00", desc: "Classic tennis-inspired design" },
            { category: "Shoes", productImage: "Assest/Image/shoes5.jpg", name: "Hoka Mens Bondi 9", price: "$55.00", desc: "Soft cushioning for all-day comfort" },
            { category: "Shoes", productImage: "Assest/Image/shoes6.jpg", name: "Jousen Men's Fashion Sneakers", price: "$60.00", desc: "Stylish and comfortable sneakers" },
            { category: "Shoes", productImage: "Assest/Image/shoes7.jpg", name: "ASICS Men's Gel-Cumulus 27", price: "$50.00", desc: "Timeless retro design" },
            { category: "Shoes", productImage: "Assest/Image/shoes8.jpg", name: "New Balance 990v5", price: "$65.00", desc: "Premium cushioning and support" },
            { category: "Shoes", productImage: "Assest/Image/shoes9.jpg", name: "Reebok Classic Leather", price: "$45.00", desc: "Iconic leather sneakers" },
            { category: "Shoes", productImage: "Assest/Image/shoes10.jpg", name: "Asics Gel-Kayano 27", price: "$70.00", desc: "Stability and comfort for runners" },
            { category: "Shoes", productImage: "Assest/Image/shoes12.jpg", name: "Vans Old Skool", price: "$40.00", desc: "Skate-inspired classic sneakers" },
            { category: "Shoes", productImage: "Assest/Image/shoes11.jpg", name: "Converse Chuck Taylor All Star", price: "$35.00", desc: "Timeless canvas sneakers" },
            { category: "Shoes", productImage: "Assest/Image/shoes13.jpg", name: "Under Armour HOVR Phantom 2", price: "$80.00", desc: "Energy-returning cushioning" },
            { category: "Shoes", productImage: "Assest/Image/shoes14.jpg", name: "Brooks Ghost 13", price: "$75.00", desc: "Smooth and cushioned running shoes" },
            { category: "Shoes", productImage: "Assest/Image/shoes15.jpg", name: "Mizuno Wave Rider 24", price: "$70.00", desc: "Responsive and comfortable running shoes" },
            { category: "Shoes", productImage: "Assest/Image/shoes16.jpg", name: "Salomon Speedcross 5", price: "$90.00", desc: "Aggressive trail running shoes" },
            { category: "Shoes", productImage: "Assest/Image/shoes17.jpg", name: "Altra Lone Peak 4.5", price: "$85.00", desc: "Zero-drop trail running shoes" },
            { category: "Shoes", productImage: "Assest/Image/shoes18.jpg", name: "Hoka One One Clifton 7", price: "$75.00", desc: "Lightweight and cushioned running shoes" },
            { category: "Shoes", productImage: "Assest/Image/shoes19.jpg", name: "Nike Air Zoom Pegasus 37", price: "$65.00", desc: "Responsive and comfortable running shoes" },
            { category: "Shoes", productImage: "Assest/Image/shoes20.jpg", name: "Adidas Ultraboost 21", price: "$100.00", desc: "High-performance running shoes" }


        ];

        const tshirts = [
            { category: "T-Shirts", productImage: "Assest/Image/tshirt.png", name: "Hanes Cotton T-Shirt", price: "$12.99", desc: "Comfortable everyday essentials" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt2.jpg", name: "Gildan Heavy Cotton T-Shirt", price: "$14.99", desc: "Durable and soft cotton tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt3.jpg", name: "Fruit of the Loom Classic T-Shirt", price: "$11.99", desc: "Affordable and comfortable" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt4.jpg", name: "Bella+Canvas Unisex T-Shirt", price: "$15.99", desc: "Soft and stylish unisex tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt5.jfif", name: "Anime T-Shirt", price: "$20.00", desc: "Anime-themed graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt6.jfif", name: "Marvel T-Shirt", price: "$18.00", desc: "Marvel superhero graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt7.jpg", name: "Star Wars T-Shirt", price: "$22.00", desc: "Star Wars themed graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt8.jpg", name: "Disney T-Shirt", price: "$19.00", desc: "Disney character graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt9.jpg", name: "Band T-Shirt", price: "$25.00", desc: "Classic rock band graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt10.jpg", name: "Video Game T-Shirt", price: "$20.00", desc: "Video game-themed graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt11.jpg", name: "Tangiro T-Shirt", price: "$20.00", desc: "Demon Slayer themed graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt13.jpg", name: "Naruto T-Shirt", price: "$18.00", desc: "Naruto anime graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt14.jpg", name: "One Piece T-Shirt", price: "$22.00", desc: "One Piece anime graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt15.jpg", name: "Dragon Ball Z T-Shirt", price: "$25.00", desc: "Dragon Ball Z anime graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt16.jpg", name: "My Hero Academia T-Shirt", price: "$20.00", desc: "My Hero Academia anime graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt17.jpg", name: "Attack on Titan T-Shirt", price: "$22.00", desc: "Attack on Titan anime graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt18.jpg", name: "Wanglin T-Shirt", price: "$20.00", desc: "Wanglin themed graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt19.jpg", name: "Renegade Immortals T-Shirt", price: "$18.00", desc: "Renegade Immortals graphic tee" },
            { category: "T-Shirts", productImage: "Assest/Image/tshirt20.jpg", name: "Demon Slayer T-Shirt", price: "$22.00", desc: "Demon Slayer anime graphic tee" }


        ];

        const jeans = [
            { category: "Jeans", productImage: "Assest/Image/jeans.png", name: "Levi's 501 Jeans", price: "$39.99", desc: "Classic straight fit denim" },
            { category: "Jeans", productImage: "Assest/Image/jeans2.jpg", name: "Wrangler Regular Fit Jeans", price: "$34.99", desc: "Durable and comfortable denim" },
            { category: "Jeans", productImage: "Assest/Image/jeans3.jpg", name: "Lee Relaxed Fit Jeans", price: "$29.99", desc: "Relaxed fit for all-day comfort" },
            { category: "Jeans", productImage: "Assest/Image/jeans4.jpg", name: "Diesel Slim Fit Jeans", price: "$49.99", desc: "Stylish slim fit denim" },
            { category: "Jeans", productImage: "Assest/Image/jeans5.jpg", name: "G-Star RAW 3301 Jeans", price: "$59.99", desc: "Contemporary straight fit denim" },
            { category: "Jeans", productImage: "Assest/Image/jeans6.jpg", name: "True Religion Ricky Jeans", price: "$69.99", desc: "Premium denim with unique stitching" },
            { category: "Jeans", productImage: "Assest/Image/jeans7.jpg", name: "AG Adriano Goldschmied The Graduate Jeans", price: "$79.99", desc: "Classic straight leg denim" },
            { category: "Jeans", productImage: "Assest/Image/jeans8.jpg", name: "7 For All Mankind Slimmy Jeans", price: "$89.99", desc: "Slim fit with a modern edge" },
            { category: "Jeans", productImage: "Assest/Image/jeans9.jpg", name: "Paige Hoxton Jeans", price: "$99.99", desc: "Premium denim with a comfortable fit" },
            { category: "Jeans", productImage: "Assest/Image/jeans10.jpg", name: "Citizens of Humanity Rocket Jeans", price: "$109.99", desc: "High-quality denim with a sleek silhouette" },
            { category: "Jeans", productImage: "Assest/Image/jeans12.jpg", name: "Rag & Bone Fit 2 Jeans", price: "$119.99", desc: "Contemporary slim fit denim" },
            { category: "Jeans", productImage: "Assest/Image/jeans11.jpg", name: "Mother The Looker Jeans", price: "$129.99", desc: "Premium denim with a flattering fit" },
            { category: "Jeans", productImage: "Assest/Image/jeans13.jpg", name: "AG Adriano Goldschmied The Legging Jeans", price: "$89.99", desc: "Skinny fit with a comfortable stretch" },
            { category: "Jeans", productImage: "Assest/Image/jeans14.jpg", name: "7 For All Mankind Dojo Jeans", price: "$99.99", desc: "Relaxed fit with a modern edge" },
            { category: "Jeans", productImage: "Assest/Image/jeans15.jpg", name: "Paige Verdugo Ankle Jeans", price: "$109.99", desc: "Ankle-length denim with a flattering fit" },
            { category: "Jeans", productImage: "Assest/Image/jeans16.jpg", name: "Citizens of Humanity Emerson Jeans", price: "$119.99", desc: "High-quality denim with a sleek silhouette" },
            { category: "Jeans", productImage: "Assest/Image/jeans17.jpg", name: "Rag & Bone Fit 1 Jeans", price: "$129.99", desc: "Classic straight fit denim" },
            { category: "Jeans", productImage: "Assest/Image/jeans18.jpg", name: "Mother The Hustler Jeans", price: "$139.99", desc: "Premium denim with a comfortable fit" },
            { category: "Jeans", productImage: "Assest/Image/jeans19.jpg", name: "AG Adriano Goldschmied The Stilt Jeans", price: "$89.99", desc: "Skinny fit with a comfortable stretch" },
            { category: "Jeans", productImage: "Assest/Image/jeans20.jpg", name: "7 For All Mankind Dojo Jeans", price: "$99.99", desc: "Relaxed fit with a modern edge" }
        ];

        const jackets = [
            { category: "Jackets", productImage: "Assest/Image/jacket.png", name: "Under Armour Jacket", price: "$50.00", desc: "Unisex waterproof outdoor" },
            { category: "Jackets", productImage: "Assest/Image/jacket2.jpg", name: "Columbia Puffer Jacket", price: "$49.99", desc: "Warm winter layer jacket" },
            { category: "Jackets", productImage: "Assest/Image/jacket3.jpg", name: "The North Face Denali Jacket", price: "$89.99", desc: "Classic fleece jacket for warmth and comfort" },
            { category: "Jackets", productImage: "Assest/Image/jacket4.jpg", name: "Patagonia Nano Puff Jacket", price: "$99.99", desc: "Lightweight and insulated jacket for outdoor adventures" },
            { category: "Jackets", productImage: "Assest/Image/jacket5.jpg", name: "Arc'teryx Atom LT Jacket", price: "$149.99", desc: "Technical insulated jacket for versatile performance" },
            { category: "Jackets", productImage: "Assest/Image/jacket6.jpg", name: "Marmot PreCip Jacket", price: "$79.99", desc: "Waterproof and breathable rain jacket" },
            { category: "Jackets", productImage: "Assest/Image/jacket7.jpg", name: "Columbia Bugaboo II Fleece Interchange Jacket", price: "$129.99", desc: "3-in-1 jacket with a fleece liner for warmth and versatility" },
            { category: "Jackets", productImage: "Assest/Image/jacket8.jpg", name: "The North Face Apex Bionic Jacket", price: "$119.99", desc: "Softshell jacket for wind and water resistance" },
            { category: "Jackets", productImage: "Assest/Image/jacket9.jpg", name: "Patagonia Torrentshell Jacket", price: "$149.99", desc: "Waterproof and breathable rain jacket for outdoor activities" },
            { category: "Jackets", productImage: "Assest/Image/jacket10.jpg", name: "Arc'teryx Beta AR Jacket", price: "$299.99", desc: "Technical hardshell jacket for extreme weather conditions" },
            { category: "Jackets", productImage: "Assest/Image/jacket12.jpg", name: "Marmot Minimalist Jacket", price: "$99.99", desc: "Lightweight and waterproof rain jacket" },
            { category: "Jackets", productImage: "Assest/Image/jacket11.jpg", name: "Columbia Watertight II Jacket", price: "$79.99", desc: "Waterproof and breathable rain jacket for outdoor adventures" },
            { category: "Jackets", productImage: "Assest/Image/jacket13.jpg", name: "The North Face Resolve Jacket", price: "$89.99", desc: "Waterproof and breathable rain jacket for outdoor activities" },
            { category: "Jackets", productImage: "Assest/Image/jacket14.jpg", name: "Patagonia Better Sweater Jacket", price: "$139.99", desc: "Warm and versatile fleece jacket for everyday wear" },
            { category: "Jackets", productImage: "Assest/Image/jacket15.jpg", name: "Arc'teryx Camosun Parka", price: "$499.99", desc: "Technical parka for extreme cold weather conditions" },
            { category: "Jackets", productImage: "Assest/Image/jacket16.jpg", name: "Marmot Fordham Jacket", price: "$149.99", desc: "Warm and waterproof jacket for outdoor adventures" },
            { category: "Jackets", productImage: "Assest/Image/jacket17.jpg", name: "Columbia Whirlibird IV Interchange Jacket", price: "$199.99", desc: "3-in-1 jacket with a waterproof shell and insulated liner for versatile performance" },
            { category: "Jackets", productImage: "Assest/Image/jacket18.jpg", name: "The North Face McMurdo Parka", price: "$299.99", desc: "Insulated parka for extreme cold weather conditions" },
            { category: "Jackets", productImage: "Assest/Image/jacket19.jpg", name: "Patagonia Frozen Range Parka", price: "$399.99", desc: "Technical parka for extreme cold weather conditions" },
            { category: "Jackets", productImage: "Assest/Image/jacket20.jpg", name: "Arc'teryx Fission SV Jacket", price: "$599.99", desc: "Technical insulated jacket for extreme weather conditions" }

        ];

        const dresses = [
            { category: "Dresses", productImage: "Assest/Image/dressss.png", name: "Tibi Velvet Dress", price: "$22.00", desc: "Sweatheart Paisley Party Dress" },
            { category: "Dresses", productImage: "Assest/Image/dress2.jpg", name: "Reformation Juliette Dress", price: "$28.00", desc: "Floral Print Midi Dress" },
            { category: "Dresses", productImage: "Assest/Image/dress3.jpg", name: "Free People Adella Dress", price: "$35.00", desc: "Bohemian-inspired maxi dress" },
            { category: "Dresses", productImage: "Assest/Image/dress4.jpg", name: "Zara Floral Print Dress", price: "$30.00", desc: "Lightweight and flowy floral dress" },
            { category: "Dresses", productImage: "Assest/Image/dress5.jpg", name: "H&M Wrap Dress", price: "$25.00", desc: "Versatile wrap dress for any occasion" },
            { category: "Dresses", productImage: "Assest/Image/dress6.jpg", name: "ASOS Design Midi Dress", price: "$40.00", desc: "Trendy midi dress with a flattering silhouette" },
            { category: "Dresses", productImage: "Assest/Image/dress7.jpg", name: "Mango Ruffled Dress", price: "$35.00", desc: "Feminine ruffled dress for a romantic look" },
            { category: "Dresses", productImage: "Assest/Image/dress8.jpg", name: "Princess Polly Floral Dress", price: "$45.00", desc: "Elegant floral dress with a fitted bodice" },
            { category: "Dresses", productImage: "Assest/Image/dress9.jpg", name: "Princess Polly Ruffle Dress", price: "$40.00", desc: "Chic ruffled dress for a stylish look" },
            { category: "Dresses", productImage: "Assest/Image/dress10.jpg", name: "Princess Polly Wrap Dress", price: "$38.00", desc: "Flattering wrap dress for a versatile look" },
            { category: "Dresses", productImage: "Assest/Image/dress12.jpg", name: "Zara Polka Dot Dress", price: "$28.00", desc: "Playful polka dot dress for a fun look" },
            { category: "Dresses", productImage: "Assest/Image/dress11.jpg", name: "H&M Floral Dress", price: "$25.00", desc: "Lightweight and flowy floral dress" },    
            { category: "Dresses", productImage: "Assest/Image/dress13.jpg", name: "ASOS Design Ruffle Dress", price: "$40.00", desc: "Trendy ruffled dress with a flattering silhouette" },
            { category: "Dresses", productImage: "Assest/Image/dress14.jpg", name: "Mango Wrap Dress", price: "$35.00", desc: "Versatile wrap dress for any occasion" },
            { category: "Dresses", productImage: "Assest/Image/dress15.jpg", name: "Archiner Floral Dress", price: "$45.00", desc: "Elegant floral dress with a fitted bodice" },
            { category: "Dresses", productImage: "Assest/Image/dress16.jpg", name: "Princess Polly Polka Dot Dress", price: "$40.00", desc: "Chic polka dot dress for a stylish look" },
            { category: "Dresses", productImage: "Assest/Image/dress17.jpg", name: "Archiner Wrap Dress", price: "$38.00", desc: "Flattering wrap dress for a versatile look" },    
            { category: "Dresses", productImage: "Assest/Image/dress18.jpg", name: "Zara Striped Dress", price: "$28.00", desc: "Classic striped dress for a timeless look" },
            { category: "Dresses", productImage: "Assest/Image/dress19.jpg", name: "H&M Polka Dot Dress", price: "$25.00", desc: "Playful polka dot dress for a fun look" },
            { category: "Dresses", productImage: "Assest/Image/dress20.jpg", name: "ASOS Design Floral Dress", price: "$40.00", desc: "Trendy floral dress with a flattering silhouette" }
        ];

        const sweaters = [
            { category: "Sweaters", productImage: "Assest/Image/sweater.png", name: "Columbia Puffer Jacket", price: "$49.99", desc: "Warm winter layer sweater" },
            { category: "Sweaters", productImage: "Assest/Image/sweater2.jpg", name: "The North Face Denali Jacket", price: "$89.99", desc: "Classic fleece sweater for warmth and comfort" },
            { category: "Sweaters", productImage: "Assest/Image/sweater3.jpg", name: "Patagonia Nano Puff Jacket", price: "$99.99", desc: "Lightweight and insulated sweater for outdoor adventures" },
            { category: "Sweaters", productImage: "Assest/Image/sweater4.jpg", name: "Arc'teryx Atom LT Jacket", price: "$149.99", desc: "Technical insulated sweater for versatile performance" },
            { category: "Sweaters", productImage: "Assest/Image/sweater5.jpg", name: "Marmot PreCip Jacket", price: "$79.99", desc: "Waterproof and breathable rain sweater" },
            { category: "Sweaters", productImage: "Assest/Image/sweater6.jpg", name: "Columbia Bugaboo II Fleece Interchange Jacket", price: "$129.99", desc: "3-in-1 sweater with a fleece liner for warmth and versatility" },
            { category: "Sweaters", productImage: "Assest/Image/sweater7.jpg", name: "The North Face Apex Bionic Jacket", price: "$119.99", desc: "Softshell sweater for wind and water resistance" },
            { category: "Sweaters", productImage: "Assest/Image/sweater8.jpg", name: "Patagonia Torrentshell Jacket", price: "$149.99", desc: "Waterproof and breathable rain sweater for outdoor activities" },
            { category: "Sweaters", productImage: "Assest/Image/sweater9.jpg", name: "Arc'teryx Beta AR Jacket", price: "$299.99", desc: "Technical hardshell sweater for extreme weather conditions" },
            { category: "Sweaters", productImage: "Assest/Image/sweater10.jpg", name: "Marmot Minimalist Jacket", price: "$99.99", desc: "Lightweight and waterproof rain sweater" },
            { category: "Sweaters", productImage: "Assest/Image/sweater12.jpg", name: "Columbia Watertight II Jacket", price: "$79.99", desc: "Waterproof and breathable rain sweater for outdoor adventures" },
            { category: "Sweaters", productImage: "Assest/Image/sweater11.jpg", name: "The North Face Resolve Jacket", price: "$89.99", desc: "Waterproof and breathable rain sweater for outdoor activities" },
            { category: "Sweaters", productImage: "Assest/Image/sweater13.jpg", name: "Patagonia Better Sweater Jacket", price: "$139.99", desc: "Warm and versatile fleece sweater for everyday wear" },
            { category: "Sweaters", productImage: "Assest/Image/sweater14.jpg", name: "Arc'teryx Camosun Parka", price: "$499.99", desc: "Technical parka sweater for extreme cold weather conditions" },
            { category: "Sweaters", productImage: "Assest/Image/sweater15.jpg", name: "Marmot Fordham Jacket", price: "$149.99", desc: "Warm and waterproof sweater for outdoor adventures" },
            { category: "Sweaters", productImage: "Assest/Image/sweater16.jpg", name: "Columbia Whirlibird IV Interchange Jacket", price: "$199.99", desc: "3-in-1 sweater with a waterproof shell and insulated liner for versatile performance" },
            { category: "Sweaters", productImage: "Assest/Image/sweater17.jpg", name: "The North Face McMurdo Parka", price: "$299.99", desc: "Insulated parka sweater for extreme cold weather conditions" },
            { category: "Sweaters", productImage: "Assest/Image/sweater18.jpg", name: "Patagonia Frozen Range Parka", price: "$399.99", desc: "Technical parka sweater for extreme cold weather conditions" },
            { category: "Sweaters", productImage: "Assest/Image/sweater19.jpg", name: "Arc'teryx Fission SV Jacket", price: "$599.99", desc: "Technical insulated sweater for extreme weather conditions" },
            { category: "Sweaters", productImage: "Assest/Image/sweater20.jpg", name: "Columbia Puffer Jacket", price: "$49.99", desc: "Warm winter layer sweater" }
        ];

        const watch = [
            { category: "Watches", productImage: "Assest/Image/watch.jpg", name: "Casio G-Shock", price: "$99.99", desc: "Durable and shock-resistant watch" },
            { category: "Watches", productImage: "Assest/Image/watch2.jpg", name: "Seiko 5 Sports", price: "$149.99", desc: "Automatic watch with a sporty design" },
            { category: "Watches", productImage: "Assest/Image/watch3.jpg", name: "Citizen Eco-Drive", price: "$199.99", desc: "Solar-powered watch with a sleek design" },
            { category: "Watches", productImage: "Assest/Image/watch4.jpg", name: "Timex Weekender", price: "$49.99", desc: "Affordable and versatile watch for everyday wear" },
            { category: "Watches", productImage: "Assest/Image/watch5.jpg", name: "Fossil Gen 5 Smartwatch", price: "$299.99", desc: "Smartwatch with fitness tracking and notifications" },
            { category: "Watches", productImage: "Assest/Image/watch6.jpg", name: "Garmin Forerunner 945", price: "$499.99", desc: "Advanced GPS smartwatch for athletes" },
            { category: "Watches", productImage: "Assest/Image/watch7.jpg", name: "Apple Watch Series 6", price: "$399.99", desc: "Smartwatch with health and fitness features" },
            { category: "Watches", productImage: "Assest/Image/watch8.jpg", name: "Samsung Galaxy Watch 3", price: "$349.99", desc: "Smartwatch with a classic design and advanced features" },
            { category: "Watches", productImage: "Assest/Image/watch9.jpg", name: "Rolex Submariner", price: "$8,000.00", desc: "Luxury dive watch with a timeless design" },
            { category: "Watches", productImage: "Assest/Image/watch10.jpg", name: "Omega Seamaster", price: "$5,000.00", desc: "Luxury dive watch with a rich history" },
            { category: "Watches", productImage: "Assest/Image/watch12.jpg", name: "Tag Heuer Carrera", price: "$3,000.00", desc: "Luxury sports watch with a sleek design" },
            { category: "Watches", productImage: "Assest/Image/watch11.jpg", name: "Breitling Navitimer", price: "$4,000.00", desc: "Luxury pilot's watch with a distinctive design" },
            { category: "Watches", productImage: "Assest/Image/watch13.jpg", name: "Panerai Luminor", price: "$6,000.00", desc: "Luxury watch with a bold and distinctive design" },
            { category: "Watches", productImage: "Assest/Image/watch14.jpg", name: "IWC Portugieser", price: "$7,000.00", desc: "Luxury watch with a classic and elegant design" },
            { category: "Watches", productImage: "Assest/Image/watch15.jpg", name: "Audemars Piguet Royal Oak", price: "$20,000.00", desc: "Luxury watch with a unique and iconic design" },
            { category: "Watches", productImage: "Assest/Image/watch16.jpg", name: "Vacheron Constantin Overseas", price: "$15,000.00", desc: "Luxury watch with a sporty and elegant design" },
            { category: "Watches", productImage: "Assest/Image/watch18.jpg", name: "Hublot Big Bang", price: "$12,000.00", desc: "Luxury watch with a bold and modern design" },
            { category: "Watches", productImage: "Assest/Image/watch19.jpg", name: "Richard Mille RM 11-03", price: "$150,000.00", desc: "Luxury watch with a futuristic and technical design" },
            { category: "Watches", productImage: "Assest/Image/watch20.jpg", name: "Patek Philippe Nautilus", price: "$30,000.00", desc: "Luxury watch with a distinctive and elegant design" }


        ];

        const gamingdesktop = [
            { category: "Gaming Desktops", productImage: "Assest/Image/gam.jpg", name: "Alienware Aurora R11", price: "$1,499.99", desc: "High-performance gaming desktop with customizable options" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam2.jpg", name: "HP Omen Obelisk", price: "$1,299.99", desc: "Powerful gaming desktop with a sleek design" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam3.jpg", name: "CyberPowerPC Gamer Xtreme", price: "$999.99", desc: "Affordable gaming desktop with solid performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam4.jpg", name: "MSI Trident 3", price: "$1,199.99", desc: "Compact gaming desktop with powerful hardware" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam5.jpg", name: "ASUS ROG Strix GL10CS", price: "$899.99", desc: "Gaming desktop with a stylish design and good performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam6.jpg", name: "Lenovo Legion Tower 5i", price: "$1,099.99", desc: "Gaming desktop with a clean design and strong performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam7.jpg", name: "Acer Predator Orion 3000", price: "$1,199.99", desc: "Gaming desktop with a futuristic design and powerful hardware" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam8.jpg", name: "Dell G5 Gaming Desktop", price: "$899.99", desc: "Gaming desktop with a compact design and solid performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam9.jpg", name: "Corsair One i160", price: "$2,999.99", desc: "High-end gaming desktop with a sleek and compact design" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam10.jpg", name: "NZXT H510 Elite", price: "$1,499.99", desc: "Gaming desktop with a stylish design and good performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam12.jpg", name: "ASUS ROG Strix GA15", price: "$1,099.99", desc: "Gaming desktop with a sleek design and solid performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam11.jpg", name: "MSI Aegis RS", price: "$1,299.99", desc: "Gaming desktop with a futuristic design and powerful hardware" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam13.webp", name: "Lenovo Legion C730 Cube", price: "$1,199.99", desc: "Gaming desktop with a compact design and strong performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam14.webp", name: "Acer Predator Orion 9000", price: "$3,999.99", desc: "High-end gaming desktop with a powerful hardware and a sleek design" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam15.webp", name: "Dell Alienware Aurora R10", price: "$1,499.99", desc: "Gaming desktop with a customizable design and strong performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam16.webp", name: "Corsair One Pro i200", price: "$3,499.99", desc: "High-end gaming desktop with a compact design and powerful hardware" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam17.jpg", name: "NZXT H510", price: "$1,199.99", desc: "Gaming desktop with a minimalist design and solid performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam18.webp", name: "ASUS ROG Strix GL12CX", price: "$1,299.99", desc: "Gaming desktop with a stylish design and good performance" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam19.webp", name: "MSI Trident X Plus", price: "$1,499.99", desc: "Gaming desktop with a compact design and powerful hardware" },
            { category: "Gaming Desktops", productImage: "Assest/Image/gam20.webp", name: "Lenovo Legion T730", price: "$1,199.99", desc: "Gaming desktop with a clean design and strong performance" }          
        ];


        const allProducts = [...shoes, ...tshirts, ...jeans, ...jackets, ...dresses, ...sweaters, ...watch, ...gamingdesktop];
    const productsGrid = document.getElementById("productsGrid");
    const categoryBtns = document.querySelectorAll(".category-btn");
    const searchInput = document.getElementById("searchInput");

    let currentCategory = "All";

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // --- Render Products ---
    function renderProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
        let filteredProducts;

        switch(currentCategory) {
            case "Shoes": filteredProducts = shoes; break;
            case "Tshirt": filteredProducts = tshirts; break;
            case "Jeans": filteredProducts = jeans; break;
            case "Jacket": filteredProducts = jackets; break;
            case "Dress": filteredProducts = dresses; break;
            case "Sweater": filteredProducts = sweaters; break;
            case "Watch": filteredProducts = watch; break;
            case "Gaming-Setup": filteredProducts = gamingdesktop; break;
            default: filteredProducts = shuffleArray([...allProducts]); break;
        }

        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchTerm)
        );

        productsGrid.innerHTML = filteredProducts.map(p => `
            <div class="product-card">
                <img src="${p.productImage}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <p class="product-price">${p.price}</p>
                <button class="add-cart-btn"
                    data-name="${p.name}"
                    data-price="${p.price}"
                    data-image="${p.productImage}">
                    Add to Cart
                </button>
            </div>
        `).join('');

        
        document.querySelectorAll(".add-cart-btn").forEach(btn => {
            btn.addEventListener("click", () => addToCart(btn));
        });
    }
let activePopup = null;

function addToCart(btn){

    const product = {
        name: btn.dataset.name,
        price: btn.dataset.price,
        image: btn.dataset.image
    };

    // If may existing popup → remove muna
    if(activePopup){
        activePopup.remove();
        activePopup = null;
    }

    // Create popup
    const popup = document.createElement("div");
    popup.classList.add("cart-popup");

    popup.innerHTML = `
        <div class="popup-box">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>Add this item to cart?</p>

            <div class="popup-buttons">
                <button class="yes">Yes</button>
                <button class="no">No</button>
            </div>
        </div>
    `;

    document.body.appendChild(popup);

    activePopup = popup;

    // YES BUTTON
  popup.querySelector(".yes").onclick = function(){

    // convert price "$42.00" -> 42.00
    const cleanPrice = parseFloat(product.price.replace("$",""));

    fetch("controller/add_to_cart.php",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name: product.name,
            price: cleanPrice,
            image: product.image
        })
    })
    .then(res=>res.json())
    .then(data=>{

        if(data.status === "success"){
            showToast("Product added to cart ","success");
        }else{
            showToast(data.message || "Failed to add item ","error");
        }

    })
    .catch(()=>{
        showToast("Server error ⚠","error");
    });

    popup.remove();
    activePopup = null;
};
    // NO BUTTON
    popup.querySelector(".no").onclick = function(){
        popup.remove();
        activePopup = null;
    };
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

   
    if(searchInput) searchInput.addEventListener("input", renderProducts);
});


function showToast(message,type){

    const toast = document.createElement("div");
    toast.classList.add("toast-message", type);

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(()=>{
        toast.classList.add("show");
    },50);

    setTimeout(()=>{
        toast.remove();
    },3000);
}
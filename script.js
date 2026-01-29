// demo products 
/* ================= EXPANDED DATABASE (24 ITEMS) ================= */
const products = [
    // --- MOBILES ---
    { id: 1, category: "mobile", brand: "Apple", name: "iPhone 14 Plus", price: 66999, image: "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_SL1500_.jpg", specs: "128GB | A15 Bionic" },
    { id: 2, category: "mobile", brand: "Samsung", name: "Galaxy S23 Ultra", price: 124999, image: "https://m.media-amazon.com/images/I/61VfL-aiToL._AC_SL1500_.jpg", specs: "200MP Camera | S-Pen" },
    { id: 3, category: "mobile", brand: "Google", name: "Pixel 7 Pro", price: 68999, image: "https://m.media-amazon.com/images/I/51G+E+-yK+L._AC_SL1000_.jpg", specs: "128GB | Tensor G2" },
    { id: 4, category: "mobile", brand: "OnePlus", name: "OnePlus 11R", price: 39999, image: "https://m.media-amazon.com/images/I/613SAOPmLeL._AC_SL1500_.jpg", specs: "16GB RAM | 100W Charging" },
    { id: 5, category: "mobile", brand: "Vivo", name: "Vivo X90 Pro", price: 84999, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1200_.jpg", specs: "Zeiss 1-inch Sensor" },
    { id: 6, category: "mobile", brand: "Nothing", name: "Phone (2)", price: 44999, image: "https://m.media-amazon.com/images/I/71Ab1KaeuPL._AC_SL1500_.jpg", specs: "Glyph Interface | 50MP" },

    // --- LAPTOPS ---
    { id: 7, category: "laptop", brand: "Apple", name: "MacBook Air M2", price: 114900, image: "https://m.media-amazon.com/images/I/710TJuHTMhL._AC_SL1500_.jpg", specs: "M2 Chip | 13.6-inch Retina" },
    { id: 8, category: "laptop", brand: "Dell", name: "XPS 13 Plus", price: 164990, image: "https://m.media-amazon.com/images/I/61-g1+L2gzL._AC_SL1000_.jpg", specs: "OLED Touch | i7 12th Gen" },
    { id: 9, category: "laptop", brand: "HP", name: "Spectre x360", price: 145000, image: "https://m.media-amazon.com/images/I/615jX1yLwJL._AC_SL1000_.jpg", specs: "2-in-1 Convertible" },
    { id: 10, category: "laptop", brand: "Asus", name: "ROG Zephyrus G14", price: 149990, image: "https://m.media-amazon.com/images/I/815uX7Ld9+L._AC_SL1500_.jpg", specs: "Ryzen 9 | RTX 4060" },
    { id: 11, category: "laptop", brand: "Lenovo", name: "ThinkPad X1 Carbon", price: 135000, image: "https://m.media-amazon.com/images/I/61A317+p+BL._AC_SL1080_.jpg", specs: "Business Flagship | Carbon Fiber" },
    { id: 12, category: "laptop", brand: "Acer", name: "Predator Helios", price: 119999, image: "https://m.media-amazon.com/images/I/71toF+p0BBL._AC_SL1500_.jpg", specs: "Core i9 | Gaming Beast" },

    // --- HEADPHONES ---
    { id: 13, category: "headphone", brand: "Sony", name: "Sony WH-1000XM5", price: 29990, image: "https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SL1000_.jpg", specs: "Best Noise Cancellation" },
    { id: 14, category: "headphone", brand: "Apple", name: "AirPods Max", price: 59900, image: "https://m.media-amazon.com/images/I/81jqUPkIVRL._AC_SL1500_.jpg", specs: "Spatial Audio | Premium Build" },
    { id: 15, category: "headphone", brand: "Bose", name: "QC 45", price: 24900, image: "https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SL1500_.jpg", specs: "Comfort King" },
    { id: 16, category: "headphone", brand: "Sennheiser", name: "Momentum 4", price: 27990, image: "https://m.media-amazon.com/images/I/61D4Z3y0EUL._AC_SL1500_.jpg", specs: "60Hr Battery Life" },
    { id: 17, category: "headphone", brand: "JBL", name: "Tour One M2", price: 19999, image: "https://m.media-amazon.com/images/I/61Kq-9qB+jL._AC_SL1500_.jpg", specs: "Adaptive ANC" },
    { id: 18, category: "headphone", brand: "Marshall", name: "Major IV", price: 11999, image: "https://m.media-amazon.com/images/I/71Iy+9Q+i1L._AC_SL1000_.jpg", specs: "Iconic Design | 80Hr Battery" },

    // --- WATCHES ---
    { id: 19, category: "watch", brand: "Apple", name: "Watch Ultra 2", price: 89900, image: "https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_SL1500_.jpg", specs: "Titanium | Action Button" },
    { id: 20, category: "watch", brand: "Samsung", name: "Galaxy Watch 6", price: 29999, image: "https://m.media-amazon.com/images/I/61N+615Y0+L._AC_SL1500_.jpg", specs: "Rotating Bezel | WearOS" },
    { id: 21, category: "watch", brand: "Fossil", name: "Gen 6", price: 23995, image: "https://m.media-amazon.com/images/I/51+6L40rLJL._AC_SL1000_.jpg", specs: "Classic Design" },
    { id: 22, category: "watch", brand: "Garmin", name: "Fenix 7", price: 78990, image: "https://m.media-amazon.com/images/I/61b7l4tX7EL._AC_SL1500_.jpg", specs: "Solar Charging | Rugged" },
    { id: 23, category: "watch", brand: "Amazfit", name: "GTR 4", price: 16999, image: "https://m.media-amazon.com/images/I/618m4Y3sWFL._AC_SL1500_.jpg", specs: "14-Day Battery" },
    { id: 24, category: "watch", brand: "Boat", name: "Lunar Connect", price: 2999, image: "https://m.media-amazon.com/images/I/61F0Y-g+vGL._AC_SL1500_.jpg", specs: "Budget King | AMOLED" }
];

/* ================= NEW DROPDOWN FILTER LOGIC ================= */
function filterProducts() {
    const selectedCategory = document.getElementById('category-select').value;
    
    if (selectedCategory === 'all') {
        renderProducts(products);
    } else {
        // This filters the "products" array based on the "category" property
        const filtered = products.filter(p => p.category === selectedCategory);
        renderProducts(filtered);
    }
}

let cart = JSON.parse(localStorage.getItem('abeyCart')) || [];
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

/* ================= INITIALIZATION ================= */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartUI();
    updateUserUI();
});

/* ================= NAVIGATION (SPA LOGIC) ================= */
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    
    // Show target section
    const target = document.getElementById(sectionId + '-section');
    if(target) {
        target.classList.remove('hidden');
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function scrollToProducts() {
    document.getElementById('product-grid').scrollIntoView({ behavior: 'smooth' });
}

/* ================= PRODUCT RENDERING & FILTERING ================= */
function renderProducts(data) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = data.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-brand">${product.brand}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">₹${product.price.toLocaleString("en-IN")}</div>
            <button class="primary-btn full-width" onclick="event.stopPropagation(); addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join('');
}

function filterCategory(category, btnElement) {
    // Visual update for buttons
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    // Data Filtering
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.brand === category);
        renderProducts(filtered);
    }
}

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query));
    renderProducts(filtered);
}

/* ================= PRODUCT DETAILS MODAL ================= */
function openProductModal(id) {
    const product = products.find(p => p.id === id);
    const modal = document.getElementById('product-modal');
    const content = document.getElementById('modal-body-content');
    
    content.innerHTML = `
        <img src="${product.image}" style="width:100%; max-width:300px; object-fit:contain;">
        <div>
            <h2>${product.name}</h2>
            <p style="color:var(--text-light); margin-bottom:20px;">${product.brand} Official Store</p>
            <h1 style="color:var(--primary); margin-bottom:20px;">₹${product.price.toLocaleString("en-IN")}</h1>
            <p style="margin-bottom:20px; line-height:1.6;">
                Experience the power of the new ${product.name}. Featuring ${product.specs}. 
                It is designed to perform.
            </p>
            <div style="background:#f5f5f7; padding:15px; border-radius:10px; margin-bottom:20px;">
                <strong>Key Specs:</strong><br>
                ${product.specs}
            </div>
            <button class="primary-btn" onclick="addToCart(${product.id}); closeModal()">Add to Cart - ₹${product.price.toLocaleString("en-IN")}</button>
        </div>
    `;
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

/* ================= CART LOGIC ================= */
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    updateCartUI();
    showToast(`Added ${product.name} to cart`);
}

function updateCartUI() {
    localStorage.setItem('abeyCart', JSON.stringify(cart));
    document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.qty, 0);
    
    // Update Sidebar
    const cartItems = document.getElementById('cart-items');
    let total = 0;
    
    if(cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align:center; margin-top:50px; color:#888;">Your cart is empty.</p>';
    } else {
        cartItems.innerHTML = cart.map(item => {
            total += item.price * item.qty;
            return `
            <div class="cart-item-row">
                <img src="${item.image}" class="cart-item-img">
                <div style="flex:1;">
                    <h4>${item.name}</h4>
                    <p>₹${item.price.toLocaleString("en-IN")} x ${item.qty}</p>
                </div>
                <div style="display:flex; flex-direction:column; justify-content:space-between; align-items:end;">
                    <span style="color:red; cursor:pointer; font-size:0.9rem;" onclick="removeItem(${item.id})">Remove</span>
                </div>
            </div>`;
        }).join('');
    }
    
    document.getElementById('cart-total-price').innerText = "₹" + total.toLocaleString("en-IN");
    return total;
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active'); // You might need CSS for #overlay.active {display:block}
}

/* ================= CHECKOUT & LOGIN ================= */
function goToCheckout() {
    if(!isLoggedIn) {
        showToast("Please login to checkout");
        showSection('login');
        toggleCart(); // Close sidebar
    } else if (cart.length === 0) {
        showToast("Cart is empty!");
    } else {
        renderCheckoutSummary();
        showSection('checkout');
        toggleCart();
    }
}

function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items');
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    container.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.9rem;">
            <span>${item.name} (x${item.qty})</span>
            <span>₹${(item.price * item.qty).toLocaleString("en-IN")}</span>
        </div>
    `).join('');
    
    document.getElementById('checkout-total').innerText = "₹" + total.toLocaleString("en-IN");
}

function completeOrder() {
    alert("Order Placed Successfully! Welcome to the Abey Mart family.");
    cart = [];
    updateCartUI();
    showSection('home');
}

/* ================= USER AUTH (MOCK) ================= */
function handleProfileClick() {
    if(isLoggedIn) {
        if(confirm("Do you want to logout?")) {
            isLoggedIn = false;
            localStorage.setItem('isLoggedIn', 'false');
            updateUserUI();
            showToast("Logged out successfully");
            showSection('home');
        }
    } else {
        showSection('login');
    }
}

function handleLogin(e) {
    e.preventDefault();
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateUserUI();
    showToast("Login Successful!");
    showSection('home');
}

function updateUserUI() {
    const userDisplay = document.getElementById('username-display');
    userDisplay.innerText = isLoggedIn ? "Abey Akilesh" : "Login";
}

/* ================= UTILS ================= */
function showToast(msg) {
    const x = document.getElementById("toast");
    x.innerText = msg;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
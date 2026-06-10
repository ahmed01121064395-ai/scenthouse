/* app.js - Scent House E-Commerce Prototype Core Logic */

// ==================== PRODUCT CATALOG DATABASE ====================
const productsDatabase = [
    {
        id: 1,
        name: "نبض - Nabd Fresh",
        category: "men",
        categoryNameAr: "العطور الرجالية",
        price: 310,
        image: "./photo_2026-06-10_21-30-49.jpg",
        isBestSeller: false,
        isNew: true,
        rating: 4.8,
        reviewsCount: 74,
        description: "نبض: انتعاش ونظافة تدوم معاك طول اليوم. عطر رياضي وحيوي يجمع بين حمضيات الليمون والنعناع المنعش مع قاعدة خشبية دافئة تدعم يومك الشاق بالثقة والنشاط.",
        notes: {
            top: "ليمون صقلي، تفاح أخضر، نعناع منعش",
            heart: "أزهار الياسمين، لافندر فرنسي، لمحة بخور خفيفة",
            base: "خشب الصندل، المسك الأبيض، نجيل الهند"
        },
        sizes: [
            { ml: 50, price: 310 },
            { ml: 100, price: 420 }
        ]
    },
    {
        id: 2,
        name: "نقاء - Naqa' Purity",
        category: "unisex",
        categoryNameAr: "العطور المشتركة",
        price: 290,
        image: "./photo_2026-06-10_21-31-08.jpg",
        isBestSeller: false,
        isNew: false,
        rating: 4.9,
        reviewsCount: 112,
        description: "نقاء: إحساس بالنظافة والفخامة في كل رشة. عطر ناعم ومناسب للجنسين يحاكي رائحة القطن النظيف والمسك الأبيض الخالص الممزوج بالبودرة الفرنسية الفاخرة.",
        notes: {
            top: "براعم القطن الناعمة، ليمون، حمضيات خفيفة",
            heart: "المسك الأبيض النقي، زنبق الوادي، أزهار بيضاء",
            base: "بودرة فرنسية ناعمة، خشب الأرز، مسك الروم"
        },
        sizes: [
            { ml: 50, price: 290 },
            { ml: 100, price: 390 }
        ]
    },
    {
        id: 3,
        name: "هيبة - Hayba Presence",
        category: "men",
        categoryNameAr: "العطور الرجالية",
        price: 480,
        image: "./photo_2026-06-10_21-31-11.jpg",
        isBestSeller: true,
        isNew: false,
        rating: 5.0,
        reviewsCount: 194,
        description: "هيبة: حضور قوي وثبات يخليك مميز في أي مكان. عطر رجالي مهيب يعبر عن الفخامة والأصالة بفضل توليفة الزعفران والجلود المدخنة والعود المعتق الراقي.",
        notes: {
            top: "الهيل الهندي، الهيل الأسود، الزعفران الإيراني",
            heart: "الجلد الفاخر المدخن، العود الكمبودي النقي، خشب الصندل",
            base: "أخشاب الأرز، العنبر الكشميري، المسك الملكي"
        },
        sizes: [
            { ml: 50, price: 480 },
            { ml: 100, price: 680 }
        ]
    },
    {
        id: 4,
        name: "دلع - Dala' Gentle",
        category: "women",
        categoryNameAr: "العطور النسائية",
        price: 340,
        image: "./photo_2026-06-10_21-30-53.jpg",
        isBestSeller: false,
        isNew: true,
        rating: 4.8,
        reviewsCount: 63,
        description: "دلع: نعومة وجاذبية بإحساس راقي وهادي. عطر نسائي ناعم كالحرير، يمزج عبير التوت البري المنعش بقلب زهري ممتلئ بمسك الرمان الأنثوي والكراميل الدافئ.",
        notes: {
            top: "التوت البري الحلو، ليمون وردي منعش، برتقال",
            heart: "الياسمين، الفانيليا الناعمة، أزهار الكرز",
            base: "مسك الرمان، بودرة ناعمة، لمحة كراميل دافئة"
        },
        sizes: [
            { ml: 50, price: 340 },
            { ml: 100, price: 450 }
        ]
    },
    {
        id: 5,
        name: "سحر الحب - Sahar Al-Hub",
        category: "women",
        categoryNameAr: "العطور النسائية",
        price: 390,
        image: "./photo_2026-06-10_19-34-55.jpg",
        isBestSeller: true,
        isNew: false,
        rating: 4.9,
        reviewsCount: 145,
        description: "سحر الحب: دفء وجاذبية يناسب السهرات والمناسبات السعيدة. توليفة دافئة وغامضة غنية بالياسمين الهندي والورد التركي والنفحات الشرقية الفاخرة للظهور الجذاب.",
        notes: {
            top: "البرغموت، توت العليق البري، الخوخ الحلو",
            heart: "الورد التركي الفاخر، الياسمين الهندي، أوراق الباتشولي",
            base: "خشب الصندل، العنبر الكشميري، المسك الأبيض النقي"
        },
        sizes: [
            { ml: 50, price: 390 },
            { ml: 100, price: 520 }
        ]
    },
    {
        id: 6,
        name: "مجد - Majd Majesty",
        category: "men",
        categoryNameAr: "العطور الرجالية",
        price: 450,
        image: "./photo_2026-06-10_19-34-58.jpg",
        isBestSeller: true,
        isNew: true,
        rating: 5.0,
        reviewsCount: 124,
        description: "مجد: ريحة فخمة فيها توازن بين فاكهة منعشة وزهور ناعمة، ومعاها قاعدة دافئة من الفانيليا والأخشاب بتدي ثبات وهيبة. بتبدأ هادية وبعدها تبان فخامة الريحة وتفضل ثابتة طول اليوم 🤍",
        notes: {
            top: "تفاح منعش + حمضيات خفيفة (بداية لافتة فيها انتعاش وفخامة)",
            heart: "زهور ناعمة مع لمسة توابل (إحساس أنيق فيه عمق وهدوء راقي)",
            base: "فانيليا دافئة + خشب + مسك (ثبات عالي جدًا ودفا بيكمل معاك طول اليوم)"
        },
        sizes: [
            { ml: 50, price: 450 },
            { ml: 100, price: 590 }
        ]
    },
    {
        id: 7,
        name: "غرام - Gharam Love",
        category: "women",
        categoryNameAr: "العطور النسائية",
        price: 430,
        image: "./photo_2026-06-10_21-30-53.jpg",
        isBestSeller: true,
        isNew: true,
        rating: 5.0,
        reviewsCount: 156,
        description: "غرام: مزيج ما بين أنوثة ناعمة ولمسة فاكهية جذابة… بربري هير مع مسك الرمان عاملين توليفة فيها نعومة بتلفت ودفا بيثبت في الجو. ريحة بتبدأ بحلاوة هادية وتتحول لإحساس نظيف وفخم يفضل معاك طول اليوم.",
        notes: {
            top: "توليفة فاكهية حمراء (فراولة + توت + رمان - بداية ملفتة وناعمة)",
            heart: "مسك أبيض نضيف + لمسة زهرية خفيفة (إحساس نظافة ونعومة أنثوية)",
            base: "فانيليا دافئة + مسك ثابت (ثبات ودفا يفضل على الجلد)"
        },
        sizes: [
            { ml: 50, price: 430 },
            { ml: 100, price: 570 }
        ]
    },
    // Gift Boxes
    {
        id: 9,
        name: "بوكس غرام ودلع الفاخر - Gharam & Dala' Gift Box",
        category: "gifts",
        categoryNameAr: "بوكسات الهدايا",
        price: 690,
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
        isBestSeller: true,
        isNew: false,
        rating: 5.0,
        reviewsCount: 38,
        description: "بوكس مناسبات مخملي راقي يجمع ما بين عطر غرام الفاتن وعطر دلع الهادئ ليمنحك نعومة وجاذبية لا تقاوم.",
        contents: "عطر غرام 50مل، عطر دلع 50مل، مبخرة سيراميك مذهبة، كرت إهداء فاخر.",
        sizes: [{ ml: 100, price: 690 }]
    },
    {
        id: 10,
        name: "بوكس هيبة ومجد الملكي - Royal Oud & Majd Box",
        category: "gifts",
        categoryNameAr: "بوكسات الهدايا",
        price: 850,
        image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
        isBestSeller: true,
        isNew: true,
        rating: 5.0,
        reviewsCount: 47,
        description: "صندوق الإهداء النخبوي المتميز، يحتوي على عطر هيبة الرجالي الفخم وعطر مجد المتزن بنكهة الفواكه والأخشاب الدافئة.",
        contents: "عطر هيبة 50مل، عطر مجد 50مل، كبك مذهب فاخر، ربع تولة دهن عود معتق.",
        sizes: [{ ml: 100, price: 850 }]
    },
    {
        id: 11,
        name: "بوكس نبض ونقاء الانتعاش - Nabd & Naqa' Box",
        category: "gifts",
        categoryNameAr: "بوكسات الهدايا",
        price: 520,
        image: "https://images.unsplash.com/photo-1584184924103-e310d9dc85fc?q=80&w=600&auto=format&fit=crop",
        isBestSeller: false,
        isNew: false,
        rating: 4.9,
        reviewsCount: 22,
        description: "صندوق هدية مميز يفوح برائحة النظافة والنقاء والعبير اليومي المنعش.",
        contents: "عطر نبض 50مل، عطر نقاء 50مل، عينة مسك أبيض صغيرة، كرت إهداء.",
        sizes: [{ ml: 100, price: 520 }]
    },
    {
        id: 12,
        name: "بوكس مناسبات سحر الحب - Sahar Al-Hub Box",
        category: "gifts",
        categoryNameAr: "بوكسات الهدايا",
        price: 480,
        image: "https://images.unsplash.com/photo-1576016770956-debb63d900ad?q=80&w=600&auto=format&fit=crop",
        isBestSeller: false,
        isNew: true,
        rating: 4.8,
        reviewsCount: 34,
        description: "بوكس مناسبات معطر بشريط حريري فاخر يحتوي على عطر سحر الحب المثير للسهرات الخاصة.",
        contents: "عطر سحر الحب 50مل، وردة طبيعية مطلية بذهب عيار 24، شوكولاتة بلجيكية فاخرة.",
        sizes: [{ ml: 100, price: 480 }]
    },
    {
        id: 13,
        name: "صندوق الإهداء المخصص - Customized Scent Box",
        category: "gifts",
        categoryNameAr: "بوكسات الهدايا",
        price: 720,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
        isBestSeller: false,
        isNew: false,
        rating: 4.9,
        reviewsCount: 51,
        description: "صندوق خشبي فاخر مطرز بالخيوط الذهبية يتيح لك اختيار أي عطرين وكتابة رسالة الإهداء الخاصة بك بخط مذهب يدوي.",
        contents: "عطرين من اختيارك (يحددان بالطلب)، بخور عود سيوفي طبيعي، فواحة سيراميك صغيرة.",
        sizes: [{ ml: 100, price: 720 }]
    }
];

// ==================== TESTIMONIALS DATA ====================
const testimonialsDatabase = [
    {
        stars: 5,
        quote: "عطر غرام لا يقارن، ثبات لا يقل عن يومين ورائحة غنية ومليئة بالجاذبية. سرعة التوصيل والتغليف الفاخر تجعل منه الهدية المثالية بكل جدارة!",
        author: "عبدالرحمن العتيبي",
        role: "عميل متميز"
    },
    {
        stars: 5,
        quote: "أعجبتني جداً تفاصيل هيبة ومجد! جودة ونقاء العود مذهل والرائحة تنتشر بوقار، كذلك بوكس التغليف والمغناطيس يعطي طابعاً ملكياً راقياً جداً.",
        author: "خلود الحربي",
        role: "مصممة أزياء"
    },
    {
        stars: 5,
        quote: "خدمة العملاء سريعة وراقية، وطلبت بوكس الهدايا المخصص مع عبارة الإهداء، وكانت الكتابة الذهبية يدوية ودقيقة جداً وبيضت وجهي بالهدية.",
        author: "خالد الشهري",
        role: "عميل دائم"
    }
];

// ==================== SYSTEM STATE ====================
const state = {
    currentView: 'home',
    cart: [],
    wishlist: [],
    activeProduct: null,
    activeSize: null,
    activePrice: 0,
    promoCodeApplied: false,
    discountPercent: 0,
    couponCode: '',
    checkoutPaymentMethod: 'online',
    ordersHistory: [
        { id: "SH-9842", date: "10-06-2026", client: "خالد بن محمد", location: "الفيوم", amount: 1240, status: "completed" },
        { id: "SH-9843", date: "09-06-2026", client: "سارة العبدالله", location: "القاهرة", amount: 390, status: "shipping" },
        { id: "SH-9844", date: "08-06-2026", client: "فيصل الرويلي", location: "طنطا", amount: 680, status: "pending" }
    ],
    testimonialIndex: 0
};

// ==================== APP CONTROLLER CLASS ====================
class ScentHouseApp {
    constructor() {
        this.products = [...productsDatabase];
    }

    init() {
        // Render home products
        this.renderHomeGrids();
        
        // Initialize shop logic
        this.renderShopGrid(this.products);
        
        // Initialize header scroll listener for gold glow animation
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 50) {
                header.classList.add('header-active');
            } else {
                header.classList.remove('header-active');
            }
        });

        // Initialize state indicators
        this.updateCartUI();
        this.updateWishlistBadge();
        
        // Setup complete
        
        console.log("Scent House App Initialized successfully!");
    }

    // --- VIEW ROUTER ---
    navigateTo(viewName) {
        // Toggle view sections visibility
        const views = document.querySelectorAll('.view-section');
        views.forEach(v => v.classList.remove('active'));

        const targetView = document.getElementById(`view-${viewName}`);
        if (targetView) {
            targetView.classList.add('active');
            state.currentView = viewName;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Toggle active menu indicators
        const navItems = document.querySelectorAll('.nav-links li');
        navItems.forEach(item => {
            item.classList.remove('active');
            // If the view maps directly to home or shop
            if (viewName === 'home' && item.getAttribute('data-view') === 'home') {
                item.classList.add('active');
            } else if (viewName === 'shop' && item.getAttribute('data-view') === 'shop') {
                item.classList.add('active');
            } else if (viewName === 'about' && item.getAttribute('data-view') === 'about') {
                item.classList.add('active');
            } else if (viewName === 'contact' && item.getAttribute('data-view') === 'contact') {
                item.classList.add('active');
            }
        });

        // Close drawer if open
        this.toggleCartDrawer(false);
    }

    navigateToCategory(category) {
        // Reset filters
        this.resetAllFilters();

        // Check the category checkbox in shop sidebar
        const catCheckbox = document.getElementById(`filter-cat-${category}`);
        if (catCheckbox) {
            catCheckbox.checked = true;
        }

        // Update title of shop dynamically
        const shopTitle = document.getElementById('shop-view-title');
        const titlesAr = {
            'men': 'العطور الرجالية الفاخرة',
            'women': 'العطور النسائية الساحرة',
            'unisex': 'العطور المشتركة (اليونيسكس)',
            'gifts': 'بوكسات الهدايا والمناسبات الفاخرة'
        };
        if (shopTitle && titlesAr[category]) {
            shopTitle.textContent = titlesAr[category];
        }

        // Navigate to shop
        this.navigateTo('shop');
        
        // Apply filtration
        this.filterProducts();
    }

    // --- HOMEPAGE RENDERERS ---
    renderHomeGrids() {
        const bestSellers = this.products.filter(p => p.isBestSeller).slice(0, 4);
        const newArrivals = this.products.filter(p => p.isNew).slice(0, 4);

        const bestSellersGrid = document.getElementById('home-best-sellers-grid');
        const newArrivalsGrid = document.getElementById('home-new-arrivals-grid');

        if (bestSellersGrid) {
            bestSellersGrid.innerHTML = bestSellers.map(p => this.buildProductCardHtml(p)).join('');
        }
        if (newArrivalsGrid) {
            newArrivalsGrid.innerHTML = newArrivals.map(p => this.buildProductCardHtml(p)).join('');
        }
    }

    buildProductCardHtml(p) {
        const isWishlisted = state.wishlist.includes(p.id) ? 'active' : '';
        const badgeHtml = p.isBestSeller ? `<div class="product-card-badge">الأكثر مبيعاً</div>` : (p.isNew ? `<div class="product-card-badge">جديد بالدار</div>` : '');
        
        return `
            <div class="product-card">
                ${badgeHtml}
                <div class="product-card-wishlist">
                    <button class="wishlist-btn-heart ${isWishlisted}" onclick="app.toggleProductWishlist(${p.id}, this)">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="product-card-image-box">
                    <img src="${p.image}" alt="${p.name}" class="product-card-img" onerror="this.src='https://placehold.co/400x500/121212/D4AF37?text=Perfume'">
                    <div class="product-card-actions-overlay">
                        <button class="btn-quick-view" onclick="app.viewProductDetails(${p.id})">اكتشف العطر وتفاصيله</button>
                    </div>
                </div>
                <div class="product-card-info">
                    <span class="product-card-category">${p.categoryNameAr}</span>
                    <h3 class="product-card-title">${p.name.split(' - ')[0]}</h3>
                    <p class="product-card-notes">${p.notes ? 'مقدمة العطر: ' + p.notes.top : 'محتويات البوكس: ' + p.contents}</p>
                    <div class="product-card-footer">
                        <span class="product-card-price"><span class="english-num">${p.price}</span><span>ر.س</span></span>
                        <div class="product-card-rating">
                            <i class="fa-solid fa-star"></i>
                            <span class="english-num">${p.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // --- TESTIMONIAL SLIDER ---
    nextTestimonial() {
        state.testimonialIndex = (state.testimonialIndex + 1) % testimonialsDatabase.length;
        this.updateTestimonialUI();
    }

    prevTestimonial() {
        state.testimonialIndex = (state.testimonialIndex - 1 + testimonialsDatabase.length) % testimonialsDatabase.length;
        this.updateTestimonialUI();
    }

    updateTestimonialUI() {
        const item = testimonialsDatabase[state.testimonialIndex];
        const quoteEl = document.getElementById('testimonial-text');
        const authorEl = document.getElementById('testimonial-author');
        const roleEl = document.getElementById('testimonial-role');
        const starsEl = document.getElementById('testimonial-stars');

        if (quoteEl) quoteEl.textContent = `"${item.quote}"`;
        if (authorEl) authorEl.textContent = item.author;
        if (roleEl) roleEl.textContent = item.role;

        if (starsEl) {
            starsEl.innerHTML = Array(item.stars).fill('<i class="fa-solid fa-star"></i>').join('');
        }
    }

    // --- SHOP FILTERS AND SORTING ---
    renderShopGrid(productsList) {
        const shopGrid = document.getElementById('shop-products-grid');
        const noResults = document.getElementById('shop-no-results');

        if (!shopGrid) return;

        if (productsList.length === 0) {
            shopGrid.innerHTML = '';
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
            shopGrid.innerHTML = productsList.map(p => this.buildProductCardHtml(p)).join('');
        }
    }

    updatePriceFilterLabel(val) {
        const label = document.getElementById('price-range-label');
        if (label) label.textContent = val;
        this.filterProducts();
    }

    filterProducts() {
        const searchInput = document.getElementById('shop-search-input').value.toLowerCase().trim();
        const maxPrice = parseFloat(document.getElementById('filter-price-range').value);

        // Checked categories
        const checkedCategories = Array.from(document.querySelectorAll('input[name="filter-category"]:checked')).map(cb => cb.value);
        
        // Checked sizes
        const checkedSizes = Array.from(document.querySelectorAll('input[name="filter-size"]:checked')).map(cb => parseInt(cb.value));

        let filtered = this.products.filter(p => {
            // Price match
            if (p.price > maxPrice) return false;

            // Search query match
            if (searchInput) {
                const nameMatch = p.name.toLowerCase().includes(searchInput);
                const descMatch = p.description.toLowerCase().includes(searchInput);
                const contentMatch = p.contents && p.contents.toLowerCase().includes(searchInput);
                const notesMatch = p.notes && (p.notes.top + p.notes.heart + p.notes.base).toLowerCase().includes(searchInput);
                if (!nameMatch && !descMatch && !contentMatch && !notesMatch) return false;
            }

            // Category filters match
            if (checkedCategories.length > 0) {
                if (!checkedCategories.includes(p.category)) return false;
            }

            // Size match
            if (checkedSizes.length > 0 && p.sizes) {
                const hasMatchingSize = p.sizes.some(sz => checkedSizes.includes(sz.ml));
                if (!hasMatchingSize) return false;
            }

            return true;
        });

        // Store active sorted results
        this.activeFilteredProducts = filtered;
        this.sortProducts();
    }

    sortProducts() {
        const sortVal = document.getElementById('shop-sort-select').value;
        let productsToSort = this.activeFilteredProducts || [...this.products];

        if (sortVal === 'newest') {
            productsToSort.sort((a, b) => b.isNew - a.isNew);
        } else if (sortVal === 'rating') {
            productsToSort.sort((a, b) => b.rating - a.rating);
        } else if (sortVal === 'price-asc') {
            productsToSort.sort((a, b) => a.price - b.price);
        } else if (sortVal === 'price-desc') {
            productsToSort.sort((a, b) => b.price - a.price);
        } else {
            // featured/best-sellers
            productsToSort.sort((a, b) => b.isBestSeller - a.isBestSeller);
        }

        this.renderShopGrid(productsToSort);
    }

    resetAllFilters() {
        // Clear search input
        const searchInput = document.getElementById('shop-search-input');
        if (searchInput) searchInput.value = '';

        // Reset price range slider
        const rangeSlider = document.getElementById('filter-price-range');
        if (rangeSlider) {
            rangeSlider.value = 1500;
            const label = document.getElementById('price-range-label');
            if (label) label.textContent = '1500';
        }

        // Uncheck categories & sizes
        document.querySelectorAll('input[name="filter-category"]').forEach(cb => cb.checked = false);
        document.querySelectorAll('input[name="filter-size"]').forEach(cb => cb.checked = false);

        // Reset title of shop
        const shopTitle = document.getElementById('shop-view-title');
        if (shopTitle) shopTitle.textContent = 'معرض العطور الفاخرة';

        // Re-render full catalog
        this.activeFilteredProducts = null;
        this.renderShopGrid(this.products);
    }

    // --- PRODUCT DETAILS CONTROLLER ---
    viewProductDetails(id) {
        const p = this.products.find(prod => prod.id === id);
        if (!p) return;

        state.activeProduct = p;
        state.activeSize = p.sizes && p.sizes.length > 0 ? p.sizes[0] : { ml: 100, price: p.price };
        state.activePrice = state.activeSize.price;

        // Reset details elements
        document.getElementById('product-details-title').textContent = p.name.split(' - ')[0];
        document.getElementById('product-details-cat-label').textContent = p.categoryNameAr;
        document.getElementById('product-details-price').textContent = `${state.activePrice} ر.س`;
        document.getElementById('product-details-desc').textContent = p.description;
        document.getElementById('product-details-main-img').src = p.image;

        // Dynamic gallery builder (main + thumb)
        const thumbsBox = document.getElementById('product-details-thumbs');
        if (thumbsBox) {
            // Build gallery items (main image + 2 related aesthetics placeholders for details gallery)
            thumbsBox.innerHTML = `
                <div class="gallery-thumb-item active" onclick="app.setDetailsMainImage('${p.image}', this)">
                    <img src="${p.image}">
                </div>
                <div class="gallery-thumb-item" onclick="app.setDetailsMainImage('https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop', this)">
                    <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop">
                </div>
                <div class="gallery-thumb-item" onclick="app.setDetailsMainImage('https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=600&auto=format&fit=crop', this)">
                    <img src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=600&auto=format&fit=crop">
                </div>
            `;
        }

        // Draw ratings stars
        const ratingBox = document.getElementById('product-details-rating-box');
        if (ratingBox) {
            ratingBox.innerHTML = Array(Math.floor(p.rating)).fill('<i class="fa-solid fa-star"></i>').join('') + `<span>(${p.reviewsCount} تقييم)</span>`;
        }

        // Check for Gift Box customizer activation
        const giftPanel = document.getElementById('gift-customizer-panel');
        if (giftPanel) {
            if (p.category === 'gifts') {
                giftPanel.style.display = 'block';
                // Reset custom values
                document.getElementById('gift-message-input').value = '';
                document.getElementById('gift-occasion-select').selectedIndex = 0;
            } else {
                giftPanel.style.display = 'none';
            }
        }

        // Fragrance notes / specifications populate
        const noteTop = document.getElementById('product-details-note-top');
        const noteHeart = document.getElementById('product-details-note-heart');
        const noteBase = document.getElementById('product-details-note-base');

        const titleTop = document.getElementById('product-details-note-title-top');
        const titleHeart = document.getElementById('product-details-note-title-heart');
        const titleBase = document.getElementById('product-details-note-title-base');

        if (p.notes) {
            if (titleTop) titleTop.textContent = "مقدمة العطر (Top Notes)";
            if (titleHeart) titleHeart.textContent = "قلب العطر (Heart Notes)";
            if (titleBase) titleBase.textContent = "قاعدة العطر (Base Notes)";
            noteTop.textContent = p.notes.top;
            noteHeart.textContent = p.notes.heart;
            noteBase.textContent = p.notes.base;
        } else {
            // It's a gift box - swap notes header text to list contents
            if (titleTop) titleTop.textContent = "محتويات البوكس (Contents)";
            if (titleHeart) titleHeart.textContent = "التغليف والتقديم";
            if (titleBase) titleBase.textContent = "ملحقات الهدايا";
            noteTop.textContent = p.contents;
            noteHeart.textContent = "يحتوي البوكس على شرائط وتغليف هدايا فاخر من الدار.";
            noteBase.textContent = "كرت مناسبة مذهب ومطبوع يدوياً.";
        }

        // Populate size options
        const sizeBox = document.getElementById('product-details-sizes');
        if (sizeBox && p.sizes) {
            sizeBox.innerHTML = p.sizes.map((sz, index) => {
                const activeClass = index === 0 ? 'active' : '';
                return `<button class="size-option-btn ${activeClass}" onclick="app.setDetailsSize(${sz.ml}, ${sz.price}, this)">${sz.ml} ML</button>`;
            }).join('');
        }

        // Reset details quantity
        document.getElementById('product-details-qty-input').value = '1';

        // Check if details wishlist heart should glow active
        const wishlistBtn = document.getElementById('product-details-wishlist-btn');
        if (wishlistBtn) {
            if (state.wishlist.includes(p.id)) {
                wishlistBtn.classList.add('active');
            } else {
                wishlistBtn.classList.remove('active');
            }
        }

        // Render Related Products (same category)
        const related = this.products.filter(prod => prod.category === p.category && prod.id !== p.id).slice(0, 4);
        const relatedGrid = document.getElementById('product-details-related-grid');
        if (relatedGrid) {
            relatedGrid.innerHTML = related.map(prod => this.buildProductCardHtml(prod)).join('');
        }

        // Navigate to details view
        this.navigateTo('product');
    }

    setDetailsMainImage(src, element) {
        document.getElementById('product-details-main-img').src = src;
        
        // Update active thumb styling
        document.querySelectorAll('.gallery-thumb-item').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }

    setDetailsSize(ml, price, element) {
        state.activeSize = { ml, price };
        state.activePrice = price;
        document.getElementById('product-details-price').textContent = `${price} ر.س`;

        // Update active sizing class
        document.querySelectorAll('.size-option-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
    }

    adjustDetailsQty(offset) {
        const input = document.getElementById('product-details-qty-input');
        let current = parseInt(input.value) + offset;
        if (current < 1) current = 1;
        input.value = current;
    }



    // --- CART AND WISHLIST LOGIC ---
    toggleCartDrawer(show) {
        const overlay = document.getElementById('cart-drawer-overlay');
        if (overlay) {
            if (show) {
                overlay.style.display = 'block';
                setTimeout(() => overlay.classList.add('active'), 10);
            } else {
                overlay.classList.remove('active');
                setTimeout(() => overlay.style.display = 'none', 400);
            }
        }
    }

    addActiveProductToCart() {
        if (!state.activeProduct) return;

        const qty = parseInt(document.getElementById('product-details-qty-input').value);
        
        let customOccasion = '';
        let customMessage = '';

        if (state.activeProduct.category === 'gifts') {
            const selectOccasion = document.getElementById('gift-occasion-select');
            customOccasion = selectOccasion.options[selectOccasion.selectedIndex].text;
            customMessage = document.getElementById('gift-message-input').value.trim();
        }

        this.addToCart(state.activeProduct, state.activeSize, qty, customOccasion, customMessage);
    }

    addToCart(product, sizeDetails, qty, occasion = '', message = '') {
        // Verify duplicate in cart (matching product ID and volume size)
        const duplicateIndex = state.cart.findIndex(item => item.product.id === product.id && item.size.ml === sizeDetails.ml);

        if (duplicateIndex > -1) {
            state.cart[duplicateIndex].quantity += qty;
        } else {
            state.cart.push({
                product,
                size: sizeDetails,
                quantity: qty,
                occasion,
                message
            });
        }

        // Sync UI
        this.updateCartUI();
        this.toggleCartDrawer(true);
        this.showToast(`تم إضافة عطر (${product.name.split(' - ')[0]}) لسلة مشترياتك`, "success");
    }

    removeFromCart(index) {
        const removedItem = state.cart[index];
        state.cart.splice(index, 1);
        this.updateCartUI();
        this.showToast(`تم إزالة العطر من السلة`, "error");
    }

    adjustCartQty(index, offset) {
        let item = state.cart[index];
        item.quantity += offset;
        if (item.quantity < 1) {
            this.removeFromCart(index);
        } else {
            this.updateCartUI();
        }
    }

    applyPromoCode() {
        const codeInput = document.getElementById('cart-promo-input').value.trim().toUpperCase();
        if (codeInput === 'SCENT10') {
            state.promoCodeApplied = true;
            state.discountPercent = 10;
            state.couponCode = 'SCENT10';
            this.showToast('تم تطبيق كود الخصم (10%) بنجاح!', 'success');
        } else {
            state.promoCodeApplied = false;
            state.discountPercent = 0;
            state.couponCode = '';
            this.showToast('كود الخصم غير صالح أو منتهي الصلاحية', 'error');
        }
        this.updateCartUI();
    }

    updateCartUI() {
        const cartList = document.getElementById('cart-drawer-items-list');
        const badgeCount = document.getElementById('cart-badge-count');
        const drawerItemsCount = document.getElementById('cart-drawer-items-count');
        
        const subtotalValEl = document.getElementById('cart-subtotal-val');
        const discountRow = document.getElementById('discount-row');
        const discountValEl = document.getElementById('cart-discount-val');
        const totalValEl = document.getElementById('cart-total-val');

        if (!cartList) return;

        // Cart items counts
        let totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
        badgeCount.textContent = totalItems;
        drawerItemsCount.textContent = totalItems;

        if (state.cart.length === 0) {
            cartList.innerHTML = `
                <div class="cart-empty-message">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <p>سلة مشترياتك فارغة حالياً</p>
                </div>
            `;
            subtotalValEl.textContent = '0.00';
            discountRow.style.display = 'none';
            totalValEl.textContent = '0.00';
            return;
        }

        // Populate items row
        cartList.innerHTML = state.cart.map((item, index) => {
            const sizeLabel = item.product.category === 'gifts' ? 'صندوق هدايا فاخر' : `${item.size.ml} ML`;
            const customBadge = item.occasion ? `<div style="font-size:0.75rem; color:var(--primary-gold); margin-top:3px;"><i class="fa-solid fa-gift"></i> مناسبة: ${item.occasion}</div>` : '';
            
            return `
                <div class="cart-item-row">
                    <div class="cart-item-img-box">
                        <img src="${item.product.image}" alt="${item.product.name}">
                    </div>
                    <div class="cart-item-info">
                        <span class="cart-item-name">${item.product.name.split(' - ')[0]}</span>
                        <span class="cart-item-meta">${sizeLabel}</span>
                        ${customBadge}
                        <div class="cart-item-controls">
                            <div class="qty-control" style="height: 30px;">
                                <button class="qty-btn" style="width:25px;" onclick="app.adjustCartQty(${index}, -1)">-</button>
                                <span class="english-num" style="width:25px; text-align:center; font-size:0.85rem; font-weight:700;">${item.quantity}</span>
                                <button class="qty-btn" style="width:25px;" onclick="app.adjustCartQty(${index}, 1)">+</button>
                            </div>
                            <span class="cart-item-price english-num">${item.size.price * item.quantity}</span>
                            <button class="cart-item-remove-btn" onclick="app.removeFromCart(${index})">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Recalculate billing
        let subtotal = state.cart.reduce((acc, item) => acc + (item.size.price * item.quantity), 0);
        let discount = 0;

        if (state.promoCodeApplied) {
            discount = subtotal * (state.discountPercent / 100);
            discountRow.style.display = 'flex';
            discountValEl.textContent = discount.toFixed(2);
            document.getElementById('discount-percent-label').textContent = state.discountPercent;
        } else {
            discountRow.style.display = 'none';
        }

        let grandTotal = subtotal - discount;

        subtotalValEl.textContent = subtotal.toFixed(2);
        totalValEl.textContent = grandTotal.toFixed(2);
    }

    // --- WISHLIST MANAGEMENT ---
    toggleProductWishlist(id, element) {
        event.stopPropagation();
        const index = state.wishlist.indexOf(id);
        if (index > -1) {
            state.wishlist.splice(index, 1);
            if (element) element.classList.remove('active');
            this.showToast("تم إزالة العطر من قائمتك المفضلة", "error");
        } else {
            state.wishlist.push(id);
            if (element) element.classList.add('active');
            this.showToast("تم إضافة العطر لقائمتك المفضلة", "success");
        }
        this.updateWishlistBadge();
    }

    toggleActiveProductWishlist() {
        if (!state.activeProduct) return;
        const id = state.activeProduct.id;
        const index = state.wishlist.indexOf(id);
        const wishlistBtn = document.getElementById('product-details-wishlist-btn');

        if (index > -1) {
            state.wishlist.splice(index, 1);
            if (wishlistBtn) wishlistBtn.classList.remove('active');
            this.showToast("تم إزالة العطر من قائمتك المفضلة", "error");
        } else {
            state.wishlist.push(id);
            if (wishlistBtn) wishlistBtn.classList.add('active');
            this.showToast("تم إضافة العطر لقائمتك المفضلة", "success");
        }
        this.updateWishlistBadge();
    }

    updateWishlistBadge() {
        const badge = document.getElementById('wishlist-badge-count');
        if (badge) badge.textContent = state.wishlist.length;
    }

    showWishlistToast() {
        if (state.wishlist.length === 0) {
            this.showToast("قائمة المفضلة فارغة حالياً", "error");
        } else {
            this.showToast(`لديك ${state.wishlist.length} عطور مفضلة مسجلة بالدار`, "success");
        }
    }

    // --- TOAST NOTIFICATIONS BUILDER ---
    showToast(message, type = "success") {
        const container = document.getElementById('toast-messages-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast-message ${type}`;
        
        const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
        toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
        
        container.appendChild(toast);

        // Slide out after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(15px)';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    // --- CHECKOUT SUBMISSIONS AND BILLING ---
    proceedToCheckout() {
        if (state.cart.length === 0) {
            this.showToast("سلتك فارغة، يرجى إضافة عطور أولاً", "error");
            return;
        }
        
        // Hide cart drawer
        this.toggleCartDrawer(false);
        
        // Populate Checkout mini list
        this.renderCheckoutSummary();
        
        // Navigate
        this.navigateTo('checkout');
    }

    selectPaymentMethod(method, element) {
        state.checkoutPaymentMethod = method;

        // Toggle elements classes
        document.querySelectorAll('.payment-option-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');

        // Show/hide card input fields
        const cardFields = document.getElementById('card-payment-fields');
        if (cardFields) {
            if (method === 'online') {
                cardFields.style.display = 'grid';
                document.getElementById('pay-card-num').setAttribute('required', 'true');
            } else {
                cardFields.style.display = 'none';
                document.getElementById('pay-card-num').removeAttribute('required');
            }
        }
    }

    renderCheckoutSummary() {
        const miniList = document.getElementById('checkout-mini-list');
        const subtotalEl = document.getElementById('checkout-subtotal');
        const discountRow = document.getElementById('checkout-discount-row');
        const discountValEl = document.getElementById('checkout-discount');
        const vatEl = document.getElementById('checkout-vat');
        const totalEl = document.getElementById('checkout-total');

        if (!miniList) return;

        // Render products
        miniList.innerHTML = state.cart.map(item => `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; font-size:0.9rem; color:var(--text-secondary);">
                <span>${item.product.name.split(' - ')[0]} (${item.size.ml}ml) x ${item.quantity}</span>
                <span class="english-num" style="font-weight:600;">${item.size.price * item.quantity} ر.س</span>
            </div>
        `).join('');

        // Math Calculations
        let subtotal = state.cart.reduce((acc, item) => acc + (item.size.price * item.quantity), 0);
        let discount = 0;

        if (state.promoCodeApplied) {
            discount = subtotal * (state.discountPercent / 100);
            discountRow.style.display = 'flex';
            discountValEl.textContent = discount.toFixed(2);
        } else {
            discountRow.style.display = 'none';
        }

        let taxableAmount = subtotal - discount;
        let vat = taxableAmount * 0.15; // 15% VAT Saudi
        let grandTotal = taxableAmount + vat;

        subtotalEl.textContent = subtotal.toFixed(2);
        vatEl.textContent = vat.toFixed(2);
        totalEl.textContent = grandTotal.toFixed(2);
    }

    handlePlaceOrder(event) {
        event.preventDefault();

        const fullname = document.getElementById('shipping-name').value;
        const phone = document.getElementById('shipping-phone').value;
        const city = document.getElementById('shipping-city').value;
        const address = document.getElementById('shipping-address').value;

        // Create random order receipt details
        const orderId = `SH-${Math.floor(10000 + Math.random() * 90000)}`;
        const orderDate = new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'numeric', day: 'numeric' });
        
        let paymentMethodLabel = 'مدى / بطاقة ائتمانية';
        if (state.checkoutPaymentMethod === 'applepay') paymentMethodLabel = 'Apple Pay';
        if (state.checkoutPaymentMethod === 'cod') paymentMethodLabel = 'الدفع عند الاستلام';

        // Calculate values for invoice
        let subtotal = state.cart.reduce((acc, item) => acc + (item.size.price * item.quantity), 0);
        let discount = state.promoCodeApplied ? (subtotal * (state.discountPercent / 100)) : 0;
        let grandTotal = (subtotal - discount) * 1.15;

        // Record order in system dashboard orders log
        state.ordersHistory.unshift({
            id: orderId,
            date: new Date().toLocaleDateString('en-GB'),
            client: fullname,
            location: city,
            amount: grandTotal.toFixed(0),
            status: state.checkoutPaymentMethod === 'cod' ? 'pending' : 'completed'
        });

        // Set Invoice Details View
        document.getElementById('invoice-num').textContent = `#${orderId}`;
        document.getElementById('invoice-date').textContent = orderDate;
        document.getElementById('invoice-client-name').textContent = fullname;
        document.getElementById('invoice-payment-method').textContent = paymentMethodLabel;
        document.getElementById('invoice-total-val').textContent = grandTotal.toFixed(2);

        // Render products rows inside invoice table
        const tableBody = document.getElementById('invoice-items-table');
        if (tableBody) {
            tableBody.innerHTML = state.cart.map(item => `
                <tr>
                    <td>${item.product.name.split(' - ')[0]}</td>
                    <td class="english-num">${item.product.category === 'gifts' ? 'صندوق فاخر' : item.size.ml + 'ml'}</td>
                    <td class="english-num">${item.quantity}</td>
                    <td class="english-num">${item.size.price * item.quantity} ر.س</td>
                </tr>
            `).join('');
        }

        // Clean values
        state.cart = [];
        state.promoCodeApplied = false;
        state.discountPercent = 0;
        state.couponCode = '';
        
        // Reset forms inputs
        document.getElementById('checkout-main-form').reset();
        
        // Sync layout
        this.updateCartUI();

        // Navigate
        this.navigateTo('success');
        this.showToast("تم إرسال طلبك وتسجيل الفاتورة بنجاح!", "success");
    }



    subscribeNewsletter() {
        const emailInput = document.getElementById('newsletter-email');
        if (emailInput && emailInput.value.trim()) {
            this.showToast(`تم إرسال اشتراكك لـ (${emailInput.value.trim()}) بنجاح!`, "success");
            emailInput.value = '';
        } else {
            this.showToast("يرجى إدخال بريد إلكتروني صالح", "error");
        }
    }

    handleContactSubmit(event) {
        event.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const msg = document.getElementById('contact-msg').value;

        this.showToast(`شكراً لك يا ${name}. تم إرسال رسالتك وسيتواصل معك خبير عطور قريباً.`, "success");
        document.getElementById('contact-form-submit').reset();
    }
}

// Instantiate App
const app = new ScentHouseApp();

// Wait for DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

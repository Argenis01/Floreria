/* ══════════════════════════════════════
   FLORERÍA BELLA — Vanilla JS
══════════════════════════════════════ */

const WA = "https://wa.me/521234567890";

/* ── SVG Icons ── */
const ICONS = {
  leaf:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  cart:     `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  msg:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>`,
  minus:    `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>`,
  plus:     `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  plus16:   `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  trash:    `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  x:        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  chevron:  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  chevron14:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  instagram:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  mappin:   `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mappin14: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock:    `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  phone:    `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  phone14:  `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  send:     `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  truck:    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect width="7" height="7" x="14" y="10" rx="1"/><path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M17 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/></svg>`,
  star:     `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  award:    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  bag:      `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
};

/* ── Products ── */
const PRODUCTS = [
  { id:1,  name:"Ramo de Rosas Rojas",    price:450, desc:"24 rosas rojas seleccionadas a mano, envueltas en papel kraft premium.",              img:"images/rosa.jpg",      cat:"Ramos",    tag:"Popular"   },
  { id:2,  name:"Bouquet Primaveral",      price:520, desc:"Explosión de colores vibrantes con flores de temporada y follaje fresco.",             img:"images/hero.jpg",            cat:"Ramos"                      },
  { id:3,  name:"Ramo de Peonías",         price:720, desc:"Elegancia pura. Peonías rosadas y blancas con un aroma embriagador.",                 img:"images/peonies.jpg",    cat:"Ramos",    tag:"Exclusivo" },
  { id:4,  name:"Ramo de Tulipanes",       price:420, desc:"Tulipanes holandeses en tonos pastel, perfectos para cualquier ocasión.",             img:"images/sunflowers.jpg", cat:"Ramos"                      },
  { id:5,  name:"Mini Bouquet",            price:220, desc:"Pequeño pero encantador. Flores mixtas ideales para un detalle espontáneo.",           img:"images/rosa.jpg",      cat:"Ramos"                      },
  { id:6,  name:"Arreglo de Girasoles",    price:380, desc:"Luz y alegría en un jarrón rústico. Girasoles frescos que iluminan cualquier espacio.",img:"images/sunflowers.jpg", cat:"Arreglos"                  },
  { id:7,  name:"Arreglo Tropical",        price:600, desc:"Exótico y llamativo. Aves del paraíso, monsteras y flores tropicales.",               img:"images/tropical.jpg",   cat:"Arreglos", tag:"Nuevo"     },
  { id:8,  name:"Arreglo de Orquídeas",    price:950, desc:"Belleza duradera y exótica. Perfectas para un regalo elegante de larga vida.",        img:"images/peonies.jpg",    cat:"Arreglos", tag:"Premium"   },
  { id:9,  name:"Centro de Mesa",          price:750, desc:"El toque perfecto para reuniones. Flores mixtas en un arreglo horizontal estilizado.", img:"images/sunflowers.jpg", cat:"Arreglos"                  },
  { id:10, name:"Rosas en Caja Terciopelo",price:890, desc:"Lujo y sofisticación. Rosas premium en una elegante caja de terciopelo.",             img:"images/box.jpg",        cat:"Cajas",    tag:"Popular"   },
  { id:11, name:"Caja Corazón Mixta",      price:680, desc:"Mezcla romántica de flores frescas en una caja con forma de corazón.",                img:"images/rosa.jpg",      cat:"Cajas"                      },
  { id:12, name:"Flor de Noche Buena",     price:280, desc:"Símbolo mexicano de celebración. Perfecta para festejos y decoración del hogar.",     img:"images/sunflowers.jpg", cat:"Flores"                    },
  { id:13, name:"Orquídea en Maceta",      price:320, desc:"Planta viva de orquídea en maceta decorativa. Un regalo que dura meses.",             img:"images/peonies.jpg",    cat:"Flores"                    },
  { id:14, name:"Girasoles Sueltos x5",    price:150, desc:"Cinco girasoles frescos para que tú elijas cómo disfrutarlos.",                       img:"images/sunflowers.jpg", cat:"Flores"                    },
];

/* ── State ── */
let cart = [];
let activeCat = "Todos";

/* ── Helpers ── */
const fmt = n => "$" + n.toLocaleString("es-MX");
const $ = id => document.getElementById(id);
const cartTotal = () => cart.reduce((s, i) => s + i.price * i.qty, 0);
const cartCount = () => cart.reduce((s, i) => s + i.qty, 0);

/* ── Cart UI ── */
function openCart()  { document.body.classList.add("cart-open"); }
function closeCart() { document.body.classList.remove("cart-open"); }

function updateCartBadge() {
  const n = cartCount();
  const badge = $("nav-cart-count");
  if (badge) { badge.textContent = n; badge.classList.toggle("hidden", n === 0); }
  const drawerBadge = $("cart-count-badge");
  if (drawerBadge) { drawerBadge.textContent = n; drawerBadge.classList.toggle("hidden", n === 0); }
  const heroCartBtn = $("hero-cart-btn");
  if (heroCartBtn) heroCartBtn.textContent = n > 0 ? `Mi carrito (${n})` : "Mi carrito";
}

function updateCartFooter() {
  const footer = $("cart-footer");
  if (!footer) return;
  const n = cartCount();
  footer.classList.toggle("hidden", n === 0);
  const totalEl = $("cart-total-amount");
  if (totalEl) totalEl.textContent = fmt(cartTotal());
  const waBtn = $("whatsapp-order-btn");
  if (waBtn) waBtn.href = buildMsg();
}

function renderCartItems() {
  const el = $("cart-items");
  if (!el) return;
  if (cart.length === 0) {
    el.innerHTML = `<div class="cart-empty">${ICONS.bag}<p>Carrito vacío</p><small>Añade flores para comenzar</small></div>`;
  } else {
    el.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"></div>
        <div class="cart-item-info">
          <div class="cart-item-top">
            <p class="cart-item-name">${item.name}</p>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Eliminar">${ICONS.trash}</button>
          </div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${fmt(item.price * item.qty)}</span>
            <div class="cart-qty">
              <button class="qty-btn" onclick="changeQty(${item.id}, -1)">${ICONS.minus}</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${item.id}, 1)">${ICONS.plus}</button>
            </div>
          </div>
        </div>
      </div>`).join("");
  }
  updateCartFooter();
  updateCartBadge();
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const exists = cart.find(i => i.id === id);
  if (exists) cart = cart.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i);
  else cart = [...cart, { ...product, qty: 1 }];
  renderCartItems();
  renderProducts();
  // Flash "Agregado" on card button
  const btn = document.querySelector(`[data-add-id="${id}"]`);
  if (btn) {
    btn.classList.add("just-added");
    btn.innerHTML = "&#10003; Agregado";
    setTimeout(() => { renderProducts(); }, 1400);
  }
}

function changeQty(id, delta) {
  cart = cart.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0);
  renderCartItems();
  renderProducts();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCartItems();
  renderProducts();
}

function clearCart() {
  cart = [];
  renderCartItems();
  renderProducts();
}

function buildMsg() {
  if (!cart.length) return WA;
  const lines = cart.map(i => `• ${i.qty}x ${i.name} (${fmt(i.price * i.qty)})`).join("\n");
  return `${WA}?text=${encodeURIComponent(`Hola! Quisiera hacer el siguiente pedido:\n\n${lines}\n\nTotal: ${fmt(cartTotal())}\n\n¿Pueden confirmarlo?`)}`;
}

/* ── Products ── */
function renderProducts() {
  const grid = $("products-grid");
  if (!grid) return;
  const filtered = activeCat === "Todos" ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);
  grid.innerHTML = filtered.map(p => {
    const inCart = cart.find(i => i.id === p.id);
    const tagHtml = p.tag ? `<span class="product-tag">${p.tag}</span>` : "";
    const ctaHtml = inCart
      ? `<div class="qty-controls">
           <button class="qty-btn" onclick="changeQty(${p.id}, -1)">${ICONS.minus}</button>
           <span class="qty-label">${inCart.qty} en carrito</span>
           <button class="qty-btn plus" onclick="changeQty(${p.id}, 1)">${ICONS.plus}</button>
         </div>`
      : `<button class="add-btn" data-add-id="${p.id}" onclick="addToCart(${p.id})">${ICONS.plus16} Añadir al carrito</button>`;
    return `
      <div class="product-card">
        <div class="product-img-wrap">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          ${tagHtml}
          <span class="product-price-pill">${fmt(p.price)}</span>
        </div>
        <div class="product-body">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          ${ctaHtml}
        </div>
      </div>`;
  }).join("");
}

function filterCat(btn, cat) {
  activeCat = cat;
  document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  renderProducts();
}

/* ── Navbar scroll ── */
window.addEventListener("scroll", () => {
  const nav = $("navbar");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCartItems();
});

/* ============================================================
   PARI MANUFACTURERS & TRADERS INC. — MAIN SCRIPT
   ============================================================ */

const WHATSAPP_NUMBER = '13435760774';
const EMAIL = 'paricorporation.export@gmail.com';

/* ---------- PRODUCT DATA ---------- */
const productData = [
  ['HD Deli 8oz','Premium round · 225 ml / 8 oz','','Containers','deli.jpg','HD DELI 8OZ'],
  ['HD Deli 12oz','Premium round · 300 ml / 12 oz','','Containers','deli.jpg','HD DELI 12OZ'],
  ['HD Deli 16oz','Premium round · 450 ml / 16 oz','','Containers','deli.jpg','HD DELI 16OZ'],
  ['HD Deli 24oz','Premium round · 600 ml / 24 oz','','Containers','deli.jpg','HD DELI 24OZ'],
  ['HD Deli 32oz','Premium round · 900 ml / 32 oz','','Containers','deli.jpg','HD DELI 32OZ'],
  ['Round Container RO 16oz · White','Round PP container · white','','Containers','round-white.jpg','PP-CONT-ROUND-B6'],
  ['Round Container RO 24oz · White','Round PP container · white','','Containers','round-white.jpg','PP-CONT-ROUND-B7'],
  ['Round Container RO 48oz · White','Round PP container · white','','Containers','round-white.jpg','PP-CONT-ROUND-B9'],
  ['Round Container RO 16oz · Black','Round PP container · black','','Containers','round-black.jpg','PP-CONT-ROUND-W6'],
  ['Round Container RO 24oz · Black','Round PP container · black','','Containers','round-black.jpg','PP-CONT-ROUND-W7'],
  ['Round Container RO 48oz · Black','Round PP container · black','','Containers','round-black.jpg','PP-CONT-ROUND-B9'],
  ['Rectangular Container RE 16oz','Rectangular food container','','Containers','rectangular-small.jpg','PP-CONT-RECT-D16'],
  ['Rectangular Container RE 24oz','Rectangular food container','','Containers','rectangular-medium.jpg','PP-CONT-RECT-D24'],
  ['Rectangular Container RE 28oz','Rectangular food container','','Containers','rectangular-medium.jpg','PP-CONT-RECT-D28'],
  ['Rectangular Container RE 58oz','Large rectangular food container','','Containers','rectangular.jpg','PP-CONT-RECT-D58'],
  ['PP Rect 2-Compartment 32oz','Two-compartment rectangular container','','Containers','rectangular.jpg','PP RECT 2COM-32'],
  ['Portion Cup 2oz with Lid','70 mm portion cup with lid','','Cups & Lids','portion-cups.jpg','PP-CUP-PORT2'],
  ['Portion Cup 4oz with Lid','Portion cup with lid','','Cups & Lids','portion-cups.jpg','PP-CUP-PORT4'],
  ['Soup Cup 12oz','350 ml / 12 oz soup cup','','Cups & Lids','soup-cups.jpg','PP-SOUP-P12'],
  ['Soup Cup 16oz','500 ml / 16 oz soup cup','','Cups & Lids','soup-cups.jpg','PP-SOUP-P16'],
  ['Soup Cup Paper Lid','Paper lid for soup cups','','Cups & Lids','soup-cups.jpg','PP-SOUP-LID'],
  ['Double Wall Coffee Cup 8oz','Double-wall hot cup','','Cups & Lids','coffee-cups.jpg','PP-COFCUP-P8'],
  ['Sipper Lid 8/10oz','Sipper lid · PS','','Cups & Lids','coffee-cups.jpg','PP-COFCUP-LID8/10'],
  ['Double Wall Coffee Cup 10oz','Double-wall hot cup','','Cups & Lids','coffee-cups.jpg','PP-COFCUP-P10'],
  ['Double Wall Coffee Cup 12oz','Double-wall hot cup','','Cups & Lids','coffee-cups.jpg','PP-COFCUP-P12'],
  ['Sipper Lid 10/12oz','Sipper lid · PS','','Cups & Lids','coffee-cups.jpg','PP-COFCUP-LID12'],
  ['Kraft Paper Bag #2','Kraft paper bag','','Paper Bags','paper-bags.jpg','PP-BAG-#2'],
  ['Kraft Paper Bag #3','Kraft paper bag','','Paper Bags','paper-bags.jpg','PP-BAG-#3'],
  ['Kraft Paper Bag #4','Kraft paper bag','','Paper Bags','paper-bags.jpg','PP-BAG-#4'],
  ['Kraft Paper Bag #5','Kraft paper bag','','Paper Bags','paper-bags.jpg','PP-BAG-#5'],
  ['Kraft Paper Bag #6','Kraft paper bag','','Paper Bags','paper-bags.jpg','PP-BAG-#6'],
  ['Kraft Paper Bag #8','Kraft paper bag','','Paper Bags','paper-bags.jpg','PP-BAG-#8'],
  ['Aluminium Container 7in with Lid','7-inch aluminium container with lid','','Containers','aluminium.jpg','PP-CONT-ROUND-AL7'],
  ['Aluminium Container 9in with Lid','9-inch aluminium container with lid','','Containers','aluminium.jpg','PP-CONT-ROUND-AL9'],
  ['PET Cup 12oz','12 oz PET cup','','Cups & Lids','pet-cups.jpg','PP-CUP-PET12'],
  ['PET Cup 16oz','16 oz PET cup','','Cups & Lids','pet-cups.jpg','PP-CUP-PET16'],
  ['Kraft Bag · Twisted Handle 8 × 4.5 × 10in','Kraft bag with twisted handles','','Paper Bags','bags.jpg','PP-BAG-TH8410'],
  ['Kraft Bag · Twisted Handle 10 × 5 × 13in','Kraft bag with twisted handles','','Paper Bags','bags.jpg','PP-BAG-TH10513'],
  ['Kraft Bag · Twisted Handle 10 × 7 × 12in','Kraft bag with twisted handles','','Paper Bags','bags.jpg','PP-BAG-TH10712'],
  ['Kraft Bag · Twisted Handle 13 × 7 × 17in','Kraft bag with twisted handles','','Paper Bags','bags.jpg','PP-BAG-TH13717'],
  ['Kraft Bag · Twisted Handle 14 × 10 × 16in','Kraft bag with twisted handles','','Paper Bags','bags.jpg','PP-BAG-TH141016'],
  ['Kraft Bag · Twisted Handle 18 × 7 × 17in','Kraft bag with twisted handles','','Paper Bags','bags.jpg','PP-BAG-TH18717'],
  ['Kraft Bag · Handle-Free 10 × 7 × 12in','Handle-free kraft bag','','Paper Bags','paper-bags.jpg','PP-BAG-HF10712'],
  ['Kraft Bag · Handle-Free 13 × 7 × 17in','Handle-free kraft bag','','Paper Bags','paper-bags.jpg','PP-BAG-HF13717'],
  ['Bagasse Clamshell 9 × 9in','Bagasse clamshell food container','','Eco Range','eco.jpg','PP-ECO-BG99'],
  ['Bagasse Clamshell 9 × 6in','Bagasse clamshell food container','','Eco Range','eco.jpg','PP-ECO-BG96']
];

const imgPath = 'assets/products/';

/* ---------- PRODUCT CARD ---------- */
function productCard(p) {
  return `<article class="product-card reveal" data-category="${p[3].toLowerCase()}" data-search="${(p[0]+' '+p[1]+' '+p[5]).toLowerCase()}">
    <div class="product-photo">
      <img loading="lazy" src="${imgPath + p[4]}" alt="${p[0]} packaging product">
    </div>
    <div class="product-info">
      <div class="product-topline">
        <div>
          <h3>${p[0]}</h3>
          <span class="sku">${p[5]}</span>
        </div>
      </div>
      <p class="product-desc">${p[1]}</p>
      <div class="product-bottom"><span>${p[2]}</span><a class="product-enquire" href="contact.html?product=${encodeURIComponent(p[0])}">Contact for pricing ↗</a></div>
    </div>
  </article>`;
}

/* ---------- CATALOGUE ---------- */
function initCatalog() {
  const grid = document.querySelector('#catalog-grid');
  if (!grid) return;

  grid.innerHTML = productData.map(productCard).join('');
  grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

  const search = document.querySelector('#product-search');
  let filter = 'all';

  function apply() {
    if (!grid.querySelector('.product-card')) grid.innerHTML = productData.map(productCard).join('');
    const q = (search?.value || '').trim().toLowerCase();
    let count = 0;
    grid.querySelectorAll('.product-card').forEach(card => {
      const ok = (filter === 'all' || card.dataset.category === filter) && card.dataset.search.includes(q);
      card.style.display = ok ? '' : 'none';
      if (ok) count++;
    });
    const label = document.querySelector('#catalog-count');
    if (label) label.textContent = `Showing ${count} of ${productData.length} catalogue items`;
    let empty = grid.querySelector('.empty-state');
    if (count === 0) {
      if (!empty) {
        empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.textContent = 'No products match your search. Try another product name or category.';
        grid.appendChild(empty);
      }
    } else empty?.remove();
  }

  document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    filter = b.dataset.filter;
    apply();
  }));

  search?.addEventListener('input', apply);
}



/* ---------- REVIEW CAROUSEL: illustrative sample cards, not published customer claims ---------- */
function initReviewCarousel(){
  const track=document.querySelector('[data-review-track]');
  const viewport=document.querySelector('[data-review-viewport]');
  if(!track||!viewport) return;
  const cards=[...track.children];
  if(cards.length<2) return;
  let index=0, timer=null;
  const step=()=>{
    const card=cards[0];
    const style=getComputedStyle(track);
    const gap=parseFloat(style.columnGap||style.gap)||18;
    const cardWidth=card.getBoundingClientRect().width;
    index=(index+1)%cards.length;
    track.style.transform=`translateX(-${index*(cardWidth+gap)}px)`;
    if(index===0) track.style.transition='transform .55s cubic-bezier(.22,1,.36,1)';
  };
  const start=()=>{if(!timer && !matchMedia('(prefers-reduced-motion: reduce)').matches) timer=setInterval(step,2800)};
  const stop=()=>{clearInterval(timer);timer=null};
  viewport.addEventListener('mouseenter',stop); viewport.addEventListener('mouseleave',start);
  viewport.addEventListener('focusin',stop); viewport.addEventListener('focusout',start);
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
  window.addEventListener('resize',()=>{index=0;track.style.transition='none';track.style.transform='translateX(0)'});
  start();
}
/* ---------- INIT ON DOM READY ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-enter');

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });

  document.querySelectorAll('.nav a').forEach(a => {
    if (a.pathname === location.pathname ||
        (location.pathname.endsWith('/') && a.getAttribute('href') === 'index.html'))
      a.classList.add('active');
    if (a.closest('.nav')) a.addEventListener('click', () => nav.classList.remove('open'));
  });

  window.addEventListener('scroll',
    () => header?.classList.toggle('scrolled', window.scrollY > 12),
    { passive: true }
  );

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  initCatalog();
  initReviewCarousel();
});

// ═══════════════════════════════════════════════════════════
// 15 TA KOFE TURI VA MAVJUD MAQOLALAR JAMLANGAN INTEGRATSION DATA
// ═══════════════════════════════════════════════════════════
const blogPosts = [
  {
    id: 1,
    title: "Espresso: Klassik Shot Mukammalligi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "3 min o'qish",
    excerpt: "Har qanday kofening asosi bo'lgan to'q va zich espressoning barcha tayyorlanish texnikasi va sirlari.",
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80",
    ingredients: "7-9g maydalangan kofe doni, 30ml toza filtrlangan suv.",
    content: `<p>Kofe portafiltirga zichlab presslanadi va kofe mashinasida 9 bar yuqori bosim ostida 25 soniya davomida stakanga suziladi. Natijada ustida oltin-jigarrang "krema" qatlami bo'lgan, ta'mi o'ta zich va aromatga boy espresso hosil bo'ladi.</p>`
  },
  {
    id: 2,
    title: "Cappuccino: Ko'pik va Balans San'ati",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "4 min o'qish",
    excerpt: "Sutli kofelar ichida eng mashhuri bo'lgan quyuq va mayin italyancha Cappuccino retsepti.",
    img: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&q=80",
    ingredients: "1 shot yangi espresso, 120ml toza sut.",
    content: `<p>Espresso shoti tayyorlanadi va stakanga quyiladi. Keyin sut bug' naychasi yordamida 65°C gacha isitiladi va ko'pirtiriladi. Tayyor quyuq sut ko'pigi espresso ustiga aylanma harakat bilan ehtiyotkorlik bilan quyiladi.</p>`
  },
  {
    id: 3,
    title: "Caffe Latte: Mayin va Kreativ Sutli Ichimlik",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "4 min o'qish",
    excerpt: "Yumshoq ta'm chiziqlari va ustidagi yupqa mayin ko'pigi bilan ajralib turuvchi an'anaviy Latte.",
    img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=80",
    ingredients: "1 shot espresso, 180ml issiq sut, 1 sm yupqa sut ko'pigi.",
    content: `<p>Avval espresso shoti tayyorlanadi. Sut 65°C gacha isitiladi va minimal ko'pik hosil qilinadi. Issiq sut espresso ustiga sekin quyiladi va eng ustida yupqa, mayin ko'pik qatlami hosil qilinadi. Ko'pincha yuzasiga chiroyli latte-art bezaklari chiziladi.</p>`
  },
  {
    id: 4,
    title: "Americano: Kuchli Ta'mning Yumshoq Toliqishi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "3 min o'qish",
    excerpt: "Espresso achchiqligini xush ko'rmaydiganlar uchun suv bilan boyitilgan klassik ichimlik.",
    img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=600&q=80",
    ingredients: "1 yoki 2 shot yangi tayyorlangan espresso, 100ml qaynoq toza suv.",
    content: `<p>Tayyorlangan achchiq espresso shoti katta stakanga quyiladi va ustiga qaynoq toza suv qo'shiladi. Bu jarayon espressoning o'ta o'tkir kislotaliligini va achchiqligini sezilarli darajada yumshatadi.</p>`
  },
  {
    id: 5,
    title: "Caramel Macchiato: Shirin Karamel Shodligi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "5 min o'qish",
    excerpt: "Vanil va karamel qatlamlarining kofe bilan ideal uyg'unlashuvidan hosil bo'lgan desert kofe.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    ingredients: "Espresso, 15ml vanil siropi, ko'pirtirilgan issiq sut, shirin karamel sousi.",
    content: `<p>Stakanga avval vanil siropi solinadi. Ustidan ko'pirtirilgan issiq sut quyiladi. Keyin espresso sekin-asta sutning ustidan quyiladi (bunda chiroyli rang qatlamlari ko'rinadi). Eng yuqorisiga karamel sousi bilan spiral chiziqlar tortiladi.</p>`
  },
  {
    id: 6,
    title: "Caffe Mocha: Shokolad va Qaymoq Simfoniyasi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "5 min o'qish",
    excerpt: "Haqiqiy shokolad ishqibozlari va kofeni shirin holda sevuvchilar uchun mukammal tanlov.",
    img: "https://images.unsplash.com/photo-1572286258217-215cf8e7320d?w=600&q=80",
    ingredients: "Espresso, 20ml quyuq shokolad siropi, issiq sut, ko'pirtirilgan quyuq shirin qaymoq.",
    content: `<p>Shokolad siropi espresso bilan to'liq aralashtiriladi. Issiq ko'pirtirilgan sut ustiga quyiladi. Eng ustiga shokoladli ko'pirtirilgan qaymoq joylanadi va estetik bezatiladi.</p>`
  },
  {
    id: 7,
    title: "Flat White: Ristrettoning Barxrur Kuchliligi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "4 min o'qish",
    excerpt: "Avstraliyada ommalashgan, kam ko'pikli lekin kuchliroq sutli kofe ta'mini beruvchi ichimlik.",
    img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80",
    ingredients: "2 shot quyuq ristretto kofesi, 120ml mikrokopinli mayin sut.",
    content: `<p>Ristretto shoti tayyorlanadi (espressoga qaraganda quyuqroq). Sut bug' naychasi orqali 60-65°C gacha isitilib, mikro-ko'pik hosil qilinadi va sekinlik bilan kofe ustiga quyiladi. Cappuccinodan farqi — ko'pik deyarli bo'lmaydi va kofe ta'mi ancha o'tkir seziladi.</p>`
  },
  {
    id: 8,
    title: "Irish Coffee: Issiq Kofe va Viski Uyg'unligi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "5 min o'qish",
    excerpt: "Shakar, issiq kofe va muzdek qaymoq qatlamlaridan iborat aristokratik kofe retsepti.",
    img: "https://images.unsplash.com/photo-1609086190120-b6fae47e5a77?w=600&q=80",
    ingredients: "80ml issiq kofe, 40ml Irish viski siropi, 1 choy qoshiq jigarrang shakar, sovuq yangi qaymoq.",
    content: `<p>Issiq kofe stakanga quyiladi. Jigarrang shakar va Irish viski siropi qo'shib aralashtiriladi. Eng ustiga qoshiq orqali ehtiyotkorlik bilan sovuq qaymoq qatlami joylashtiriladi. Ichganda qaymoq orasidan issiq kofe o'tishi lozim.</p>`
  },
  {
    id: 9,
    title: "Affogato: Espresso va Muzqaymoq To'qnashuvi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "3 min o'qish",
    excerpt: "Muzdek shirinlik va qaynoq kofein uyg'unligidan yaratilgan mashhur Italiya deserti.",
    img: "https://images.unsplash.com/photo-1617611413946-eb0c8fe2ec0f?w=600&q=80",
    ingredients: "1 sharik muzdek vanilli muzqaymoq, 1 shot issiq yangi espresso.",
    content: `<p>Keng og'izli finjonga bitta sharik muzdek vanilli muzqaymoq joylashtiriladi. Dasturxonga tortishdan aynan 5 soniya oldin ustidan qaynoq espresso shoti quyiladi. Bu jarayon muzqaymoqning tez erib ketishini oldini oladi.</p>`
  },
  {
    id: 10,
    title: "Cold Brew: Uzoq Vaqt Davomida Ivitilgan Sovuq Kofe",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "6 min o'qish",
    excerpt: "Issiqlik ishlatmasdan, sovuq suvda 16 soat davomida tayyorlanadigan yozgi tetiklashtiruvchi ichimlik.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    ingredients: "Yirik maydalangan kofe donlari, sovuq toza suv (1:8 nisbatda).",
    content: `<p>Kofe donlari yirik maydalanadi va sovuq suv bilan aralashtiriladi. Idish qopqog'i yopilib, xona haroratida 16 soat davomida ivitiladi. Tayyor bo'lgach qog'oz filtrdan o'tkazib tozalanadi va muz bo'laklari bilan sovuq holda tortiladi.</p>`
  },
  {
    id: 11,
    title: "Frappé: Ko'pirtirilgan Muzdek Gretsiya Brendi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "4 min o'qish",
    excerpt: "Eruvchan kofening muz va shakar bilan mikserda qattiq ko'pik holiga keltirilgan ajoyib yozgi turi.",
    img: "https://images.unsplash.com/photo-1572490122747-3f3fb5c231d8?w=600&q=80",
    ingredients: "2 choy qoshiq eruvchan kofe, shakar, 30ml muzdek suv, muz kubiklari, 50ml sut.",
    content: `<p>Eruvchan kofe, shakar va muzdek suv mikserga solinadi va qattiq ko'pik hosil bo'lguncha ko'pirtiriladi. Stakanga muz kubiklari va sut solinadi. Eng ustidan tayyor ko'pik quyilib, kokteyl tayog'i (somon) bilan tortiladi.</p>`
  },
  {
    id: 12,
    title: "Macchiato: Espressodagi Kichik Sut Dog'i",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "3 min o'qish",
    excerpt: "Italyancha 'Macchia' ya'ni belgi ma'nosini anglatuvchi espresso ustidagi mayin belgi.",
    img: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600&q=80",
    ingredients: "1 shot espresso, 1 qoshiq quyuq sut ko'pigi.",
    content: `<p>Klassik espresso shoti tayyorlanadi va finjonga quyiladi. Keyin uning aynan markaziy qismiga bir qoshiq quyuq sut ko'pigi 'dog'' ko'rinishida qo'yib qo'yiladi. Espressoning kuchini silliqlashga xizmat qiladi.</p>`
  },
  {
    id: 13,
    title: "Ristretto: Eng Qisqa va To'yingan Kofe Shoti",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "3 min o'qish",
    excerpt: "Espressodan ikki barobar kam suv bilan siqib olinadigan shirin-nordon ta'mli kofe.",
    img: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=600&q=80",
    ingredients: "7-9g tanlangan kofe, 15ml suv.",
    content: `<p>Espressoga qaraganda kamroq suv va qisqa vaqt (15 soniya) davomida filtrlanadi. Natijada juda quyuq, kuchli, shirin-nordon aromatli kofe hosil bo'ladi. Nordonlik va shirinlik balansi yuqori bo'ladi.</p>`
  },
  {
    id: 14,
    title: "Vienna Coffee: Avstriya Qirollik An'anasi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "4 min o'qish",
    excerpt: "Sut o'rniga qalin va shirin qaymoq qatlami bilan bezatiladigan Vena kofesi.",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    ingredients: "2 shot espresso, ko'pirtirilgan quyuq shirin qaymoq, shokolad kukuni.",
    content: `<p>Ikki shot espresso katta finjonga tayyorlanadi. Sut o'rniga ko'pirtirilgan quyuq qaymoq qatlami espresso ustiga ehtiyotkorlik bilan joylanadi. Eng ustiga shokolad kukuni yoki dolchin sepiladi.</p>`
  },
  {
    id: 15,
    title: "Cortado: Kofe va Sutning Teng Huquqliligi",
    cat: "retsept",
    catLabel: "Klassik Retseptlar",
    readTime: "3 min o'qish",
    excerpt: "Ispaniyalik baristalarning sevimli ixtirosi — kislotalilikni sut bilan teng kesish uslubi.",
    img: "https://images.unsplash.com/photo-1596078844010-c8f1f93e4d91?w=600&q=80",
    ingredients: "1 shot espresso, 1 shot bug'da isitilgan yumshoq sut (1:1 o'lchov nisbatida).",
    content: `<p>Espresso shoti tayyorlanadi. Keyin espressoning kuchli kislotaliligini va achchiqligini muvozanatlash uchun unga teng miqdorda bug'da isitilgan, lekin ko'pirtirilmagan issiq sut qo'shiladi. Cortado ispanchadan 'kesish' degan ma'noni beradi.</p>`
  },
  {
    id: 16,
    title: "Espresso Sirlari: Mukammal Shot Tayyorlash",
    cat: "maslahat",
    catLabel: "Barista Maslahatlari",
    readTime: "5 min o'qish",
    excerpt: "Uyda professional sifatli espresso tayyorlashning barcha nozik jihatlarini o'rganing — tampon bosimidan tortib suv haroratigacha.",
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80",
    ingredients: "Professional kofe mashinasi, grinder, barista ko'nikmasi.",
    content: `<p><strong>Tampon (Tamping) bosimi:</strong> Professional baristalar aynan 20-22 kg bosim qo'llaydi. Bu suvning kofe orqali bir tekis o'tishini ta'minlaydi.</p><p><strong>Suv harorati:</strong> Ideal harorat 91-93°C ni tashkil etadi. Juda issiq suv kofeni kuydiradi va achchiq ta'm beradi.</p>`
  },
  {
    id: 17,
    title: "Kofe va Sog'liq: Ilmiy Haqiqatlar",
    cat: "madaniyat",
    catLabel: "Kofe Madaniyati",
    readTime: "7 min o'qish",
    excerpt: "Kofening sog'liqqa ta'siri haqida ilm-fan nima deydi? Miflarni faktlardan ajrating va kunlik me'yoringizni biling.",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
    ingredients: "Ilmiy tadqiqotlar natijalari, Shifokor tavsiyalari.",
    content: `<p>Ilmiy tadqiqotlar kofeni o'rtacha miqdorda iste'mol qilish (kuniga 2-4 piyola) Parkinson kasalligini 32-60% ga, II toifa diabet xavfini 23-50% ga kamaytirishi mumkinligini ko'rsatadi.</p><p>Kuniga 400mg dan ortiq kofein esa aksincha qalb urishi tezlashishi va uyqusizlikka sabab bo'ladi.</p>`
  },
  {
    id: 18,
    title: "Latte Art: Sutda Rasmlar Chizishni O'rganing",
    cat: "maslahat",
    catLabel: "Barista Maslahatlari",
    readTime: "6 min o'qish",
    excerpt: "Sut ko'pigidan yurak, barglar va qushlar chizish san'ati. Boshlang'ich darajadan professional darajagacha bosqichma-bosqich yo'riqnoma.",
    img: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&q=80",
    ingredients: "Pitcher (Sut idishi), to'liq yog'li sovuq sut, espresso.",
    content: `<p>Sut bug' naychasi yuzasiga 45° burchakda tutiladi va aylantiruvchi harakat bilan mikrokopik holatga keltiriladi (60-65°C). Finjonni biroz qiyshaytirib turib, sut idishi pastga yaqinlashtiriladi va yurak shakli kesiladi. Amaliyot eng muhim kalit hisoblanadi.</p>`
  }
];

// ═══════════════════════════════════════════════════════════
// TOAST BILDIRISHNOMALAR
// ═══════════════════════════════════════════════════════════
function showToast(msg, icon = 'fa-circle-check') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ═══════════════════════════════════════════════════════════
// MODAL FUNKSIYALARI
// ═══════════════════════════════════════════════════════════
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
function handleOverlayClick(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal('blog-modal');
});

// ═══════════════════════════════════════════════════════════
// BLOGNI EKRAHGA RENDERING QILISH
// ═══════════════════════════════════════════════════════════
function renderBlog(posts) {
  const grid = document.getElementById('blog-grid');
  const noRes = document.getElementById('no-results');
  const cards = grid.querySelectorAll('.blog-card');
  cards.forEach(c => c.remove());

  if (posts.length === 0) {
    noRes.style.display = 'block';
    return;
  }
  noRes.style.display = 'none';

  posts.forEach(p => {
    const div = document.createElement('div');
    div.className = 'blog-card';
    div.innerHTML = `
      <div class="blog-img-wrap">
        <img class="blog-img" src="${p.img}" alt="${p.title}" loading="lazy">
      </div>
      <div class="blog-body">
        <div class="blog-meta">
          <span class="blog-tag">${p.catLabel}</span>
          <span class="blog-read-time">⏱️ ${p.readTime}</span>
        </div>
        <h3 class="blog-card-title">${p.title}</h3>
        <p class="blog-excerpt">${p.excerpt}</p>
        <div class="blog-footer">
          <button class="btn-read" onclick="openBlogModal(${p.id})">BATAFSIL O'QISH</button>
          <div class="share-btns">
            <button class="share-btn" title="Telegramda ulashish" onclick="shareTelegram('${encodeURIComponent(p.title)}')"><i class="fa-brands fa-telegram"></i></button>
            <button class="share-btn" title="Havolani nusxalash" onclick="copyLink('${p.id}')"><i class="fa-solid fa-link"></i></button>
          </div>
        </div>
      </div>
    `;
    grid.insertBefore(div, document.getElementById('no-results'));
  });
}

// JONLI QIDIRUV VA FILTRLASH (LIVE SEARCH & TABS)
function filterBlog() {
  const query = document.getElementById('blog-search').value.toLowerCase();
  const activeTab = document.querySelector('.filter-tab.active').dataset.cat;
  
  const filtered = blogPosts.filter(p => {
    const matchCat = activeTab === 'all' || p.cat === activeTab;
    const matchQuery = !query || p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query) || p.ingredients.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });
  renderBlog(filtered);
}

document.getElementById('filter-tabs').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-tab')) return;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  filterBlog();
});

// ULASHISH FUNKSIYALARI
function shareTelegram(title) {
  showToast('Telegramga havola tayyorlandi!', 'fa-telegram');
  const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${title}`;
  window.open(url, '_blank');
}
function copyLink(id) {
  navigator.clipboard.writeText(window.location.href + '#blog-' + id).catch(() => {});
  showToast('Havola buferga nusxalandi!', 'fa-link');
}

// BROWSERDA DETALLASHGAN MODAL OYNASINI OCHISH
function openBlogModal(id) {
  const p = blogPosts.find(b => b.id === id);
  if (!p) return;
  document.getElementById('bm-img').src = p.img;
  document.getElementById('bm-img').alt = p.title;
  document.getElementById('bm-cat').textContent = p.catLabel;
  document.getElementById('bm-title').textContent = p.title;
  document.getElementById('bm-meta').textContent = `⏱️ ${p.readTime}`;
  document.getElementById('bm-ingredients').textContent = p.ingredients;
  document.getElementById('bm-content').innerHTML = p.content;
  openModal('blog-modal');
}

// NAVIGATSIYA INTERAKTIVLIGI
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const icon = document.getElementById('hamburger-icon');
  nav.classList.toggle('open');
  icon.className = nav.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
function closeMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const icon = document.getElementById('hamburger-icon');
  nav.classList.remove('open');
  icon.className = 'fa-solid fa-bars';
}

// ASSOSIY YUKLANISH STARTI
renderBlog(blogPosts);

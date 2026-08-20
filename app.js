// ============================================================
//  TARIM TAKVİMİ — UYGULAMA MANTIĞI (app.js)
//  Veri: window.URUNLER, window.TIBBI, window.SU, window.BBCH,
//        window.GDD, window.GUBRE_PROGRAM, window.HASTALIK_DB,
//        window.ASAMA_TABLO, window.GRUPLAR, window.AYLAR
//  Bu dosya tarayıcıda çalışır; Node/build gerektirmez.
// ============================================================

document.addEventListener('DOMContentLoaded', function(){

// ---------- YARDIMCILAR ----------
// Metin içindeki etken madde ve gübre isimlerini yakalayıp <span class="chip"> haline getirir.
// İki tür chip: "etken" (pestisit etken maddesi) ve "gubre" (gübre/besin).
// Uzun isimler önce gelmeli (örn. "amonyum sülfat" > "amonyum").

const ETKEN = [
  // Fungisitler
  "propikonazol","tebukonazol","protiokonazol","difenokonazol","azoksistrobin",
  "metalaksil","mancozeb","klorotalonil","dimetomorf","siazofamid","mesotrion",
  "triazol","strobilurin",
  // İnsektisitler / akarisitler
  "deltametrin","alfa-sipermetrin","alfa sipermetrin","sipermetrin","beyaz yağ",
  // Herbisitler
  "tribenuron-metil","tribenuron metil","pinoksaden","klodinafop","trifluralin",
  "s-metolaklor","metolaklor","metribuzin","fenmedifam","metamitron",
  "2,4-d","2,4-D","mcpa","MCPA",
  // Genel gruplar
  "bakır","kükürt","antibiyotik"
];

const GUBRE = [
  "amonyum sülfat","amonyum sulfat","üan","ÜAN","dap","DAP",
  "kompoze 20.20.0","kompoze 18.46.0","20.20.0","18.46.0","15.15.15","12.12.17",
  "kompoze","üre","potasyum","fosfor","azot","magnezyum","kalsiyum","çinko","bor","demir",
  "saf n","saf N","p-k","P-K","n-p-k","N-P-K","p2o5","P2O5",
  "çiftlik gübresi","organik gübre","iz element","amino asit"
];

function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// Uzunluğa göre sırala (uzun eşleşmeler önce)
function hazirla(liste){
  return liste
    .map(x=>x)
    .sort((a,b)=>b.length-a.length)
    .map(term=>({ term, re: new RegExp('(?<![\\wğüşıöçĞÜŞİÖÇ-])'+escRe(term)+'(?![\\wğüşıöçĞÜŞİÖÇ])','giu') }));
}
function escRe(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }

const ETKEN_R = hazirla(ETKEN);
const GUBRE_R = hazirla(GUBRE);

// Metni işaretle. Çakışmayı önlemek için pozisyon bazlı işaretleme.
function isaretle(metin){
  const bulunan = []; // {start, end, tip, text}
  function tara(regexler, tip){
    for(const {re} of regexler){
      re.lastIndex = 0;
      let m;
      while((m = re.exec(metin)) !== null){
        const start = m.index, end = start + m[0].length;
        // çakışma kontrolü: bu aralık zaten işaretlenmiş mi?
        if(!bulunan.some(b => start < b.end && end > b.start)){
          bulunan.push({ start, end, tip, text: m[0] });
        }
        if(m[0].length===0){ re.lastIndex++; }
      }
    }
  }
  tara(ETKEN_R, 'etken');
  tara(GUBRE_R, 'gubre');
  bulunan.sort((a,b)=>a.start-b.start);

  let out = '', pos = 0;
  for(const b of bulunan){
    out += esc(metin.slice(pos, b.start));
    out += `<span class="chip chip-${b.tip}">${esc(b.text)}</span>`;
    pos = b.end;
  }
  out += esc(metin.slice(pos));
  return out;
}

// Hastalık ve zararlı isimlerini metinden yakalar (muhtemel hastalık satırı için).
// Her biri: yakalanacak terim + görünecek kısa ad. Uzun önce.

const HASTALIK = [
  // Mantar hastalıkları
  { re:/sarı pas|kahverengi pas|taç pas[ıi]|boru pas[ıi]|\bpas\b/gi, ad:"Pas" },
  { re:/mildiyö|plasmopara|geç yanıklık|phytophthora/gi, ad:"Mildiyö / Geç yanıklık" },
  { re:/külleme|erysiphe|uncinula|sphaerotheca/gi, ad:"Külleme" },
  { re:/karaleke|venturia/gi, ad:"Karaleke" },
  { re:/monil[iy]a|çiçek yanıklığı/gi, ad:"Monilya" },
  { re:/cercospora|yaprak lekesi/gi, ad:"Yaprak lekesi / Cercospora" },
  { re:/antraknoz|colletotrichum|ascochyta|gnomonia|marssonina/gi, ad:"Antraknoz" },
  { re:/yaprak kıvırcıklığı|taphrina/gi, ad:"Yaprak kıvırcıklığı" },
  { re:/yaprak delen|coryneum|çil hastalığı/gi, ad:"Yaprak delen (çil)" },
  { re:/septoria/gi, ad:"Septoria" },
  { re:/fusarium|başak yanıklığı|kök çürüklüğü/gi, ad:"Fusarium / kök çürüklüğü" },
  { re:/rhynchosporium|ağ lekesi|net blotch|çizgili yaprak/gi, ad:"Arpa yaprak lekeleri" },
  { re:/yanıklık \(pyricularia\)|pyricularia|\bblast\b|boyun yanıklığı|boğum yanıklığı/gi, ad:"Çeltik yanıklığı (blast)" },
  { re:/kın yanıklığı|rhizoctonia/gi, ad:"Kın yanıklığı / Rhizoctonia" },
  { re:/sclerotinia|beyaz çürüklük/gi, ad:"Beyaz çürüklük (Sclerotinia)" },
  { re:/botrytis|kurşuni küf|gri küf|ekşi çürüklük/gi, ad:"Kurşuni küf (Botrytis)" },
  { re:/alternarya|alternaria|erken yanıklık/gi, ad:"Erken yanıklık (Alternaria)" },
  { re:/ateş yanıklığı|erwinia/gi, ad:"Ateş yanıklığı (Erwinia)" },
  { re:/bakteriyel yanıklık|xanthomonas/gi, ad:"Bakteriyel yanıklık" },
  { re:/ölü kol|eutypa|botryosphaeria/gi, ad:"Ölü kol" },
  { re:/orobanş|canavar otu/gi, ad:"Orobanş (canavar otu)" },
  { re:/şarka|plum pox/gi, ad:"Şarka virüsü" },
  { re:/kanser\b/gi, ad:"Dal kanseri" },
  // Zararlılar
  { re:/süne[- ]?kımıl|\bsüne\b|\bkımıl\b/gi, ad:"Süne / Kımıl" },
  { re:/elma iç kurdu|ceviz iç kurdu|iç kurdu|cydia pomonella|carpocapsa/gi, ad:"İç kurdu (Cydia)" },
  { re:/mısır kurdu|ostrinia|koçan kurdu/gi, ad:"Mısır / koçan kurdu" },
  { re:/salkım güvesi|lobesia/gi, ad:"Salkım güvesi" },
  { re:/şeftali güvesi|anarsia|doğu meyve güvesi|cydia molesta/gi, ad:"Meyve güveleri (Anarsia)" },
  { re:/yeşil kurt|helicoverpa/gi, ad:"Yeşil kurt (Helicoverpa)" },
  { re:/fındık kurdu|curculio|balaninus/gi, ad:"Fındık kurdu" },
  { re:/badem iç kurdu|eurytoma/gi, ad:"Badem iç kurdu" },
  { re:/patates böceği|leptinotarsa/gi, ad:"Patates böceği" },
  { re:/patates güvesi|phthorimaea/gi, ad:"Patates güvesi" },
  { re:/armut psillidi|cacopsylla|psillid/gi, ad:"Armut psillidi" },
  { re:/kırmızıörümcek|kırmızı örümcek|akar\b/gi, ad:"Kırmızıörümcek (akar)" },
  { re:/yaprak biti/gi, ad:"Yaprak biti" },
  { re:/koşnil/gi, ad:"Koşnil" },
  { re:/kokarca|palomena/gi, ad:"Kokarca (Palomena)" },
  { re:/drosophila suzukii|sirke sineği/gi, ad:"Sirke sineği (D. suzukii)" },
  { re:/tel kurdu/gi, ad:"Tel kurdu" },
  { re:/bozkurt/gi, ad:"Bozkurt" },
  { re:/spodoptera|çizgili yaprak kurdu/gi, ad:"Çizgili yaprak kurdu" },
  { re:/pancar piresi|toprak piresi|pancar güvesi/gi, ad:"Pancar zararlıları" },
  { re:/yonca hortumlu|hypera|yonca zınnı/gi, ad:"Yonca zararlıları" },
  { re:/thrips|thripsi/gi, ad:"Thrips" },
  { re:/darıcan|echinochloa|kirpi darısı/gi, ad:"Darıcan (yabancı ot)" },
  { re:/nematod/gi, ad:"Nematod" },
  { re:/zuruf sineği|rhagoletis/gi, ad:"Zuruf/meyve sineği" }
];

// Bir metinden muhtemel hastalık/zararlı adlarını çıkar (tekrarsız, sırayı koru)
function hastalikCikar(metinler){
  const birlesik = metinler.filter(Boolean).join('  ');
  const bulunan = [];
  for(const h of HASTALIK){
    h.re.lastIndex = 0;
    if(h.re.test(birlesik)){
      if(!bulunan.includes(h.ad)) bulunan.push(h.ad);
    }
  }
  return bulunan;
}

// ---------- ÜRETİM FONKSİYONLARI ----------

// Grup ekle
window.GRUPLAR.tibbi = { ad:"Tıbbi & Aromatik Bitkiler", renk:"#2E7D6F" };
// Tüm ürünler
const HEPSI = [...window.URUNLER, ...window.TIBBI];

const KAT = {
  toprak:{ad:"Toprak/Ekim",ikon:"▚",sinif:"toprak"},
  gubre:{ad:"Gübre",ikon:"◈",sinif:"gubre"},
  ilac:{ad:"Hastalık/İlaç",ikon:"⊗",sinif:"ilac"},
  su:{ad:"Su",ikon:"◟",sinif:"su"},
  bakim:{ad:"Bakım/Aşı",ikon:"✂",sinif:"bakim"},
  hasat:{ad:"Hasat",ikon:"❖",sinif:"hasat"}
};
const KAT_SIRA = ["toprak","gubre","ilac","su","bakim","hasat"];
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// Muhtemel hastalık satırı (o ayın ilac+bakim metninden)
// Muhtemel hastalık satırı — etiketler TIKLANABİLİR (detay penceresi açar)
function hastalikSatiri(veri, urunAd){
  const bulunan = hastalikCikar([veri.ilac, veri.bakim]);
  if(bulunan.length===0) return '';
  const etiketler = bulunan.map(h=>{
    const varDb = !!window.HASTALIK_DB[h];
    return varDb
      ? `<button type="button" class="hst-chip tiklanir" data-hst="${esc(h)}" data-urun="${esc(urunAd||'')}" title="Detay: etken madde ve kültürel önlemler">${esc(h)}<span class="hst-ok">›</span></button>`
      : `<span class="hst-chip">${esc(h)}</span>`;
  }).join('');
  return `<div class="hst-satir"><span class="hst-baslik">⚠ Muhtemel hastalık/zararlı <em>(tıkla → ilaç + önlem)</em></span><div class="hst-liste">${etiketler}</div></div>`;
}

// AYLIK FENNİ GÜBRE bloğu
function gubreBlok(urunAd, ay){
  const p = window.GUBRE_PROGRAM[urunAd];
  if(!p || !p.aylar[ay]) return '';
  const kayitlar = p.aylar[ay].map(k=>{
    let doz = '';
    if(k.sulu || k.kuru){
      doz = `<div class="gb-doz-ikili">
        ${k.sulu?`<span class="gb-doz gb-sulu"><b>Sulu:</b> ${esc(k.sulu)}</span>`:''}
        ${k.kuru?`<span class="gb-doz gb-kuru"><b>Kuru:</b> ${esc(k.kuru)}</span>`:''}
      </div>`;
    } else if(k.doz){
      doz = `<div class="gb-doz-tek">${esc(k.doz)}</div>`;
    }
    return `<div class="gb-kayit">
      <div class="gb-ad">${esc(k.gubre)}</div>
      ${doz}
      ${k.sekil?`<div class="gb-sekil">${esc(k.sekil)}</div>`:''}
      ${k.not?`<div class="gb-not">${esc(k.not)}</div>`:''}
    </div>`;
  }).join('');
  return `<div class="gubre-blok"><span class="gb-baslik">◈ Bu ay atılacak gübre</span>${kayitlar}</div>`;
}

// Özet rozet (etken+gübre)
function ozetRozet(veri){
  const hepsi = KAT_SIRA.map(k=>veri[k]).filter(Boolean).join('  ');
  const imli = isaretle(hepsi);
  const set = new Map();
  const re = /<span class="chip chip-(etken|gubre)">(.*?)<\/span>/g;
  let m;
  while((m=re.exec(imli))!==null){
    const key = m[2].toLocaleLowerCase('tr');
    if(!set.has(key)) set.set(key,{text:m[2],tip:m[1]});
  }
  if(set.size===0) return '';
  let out='<div class="rozet-serit">';
  for(const {text,tip} of set.values()) out+=`<span class="chip chip-${tip} chip-lg">${text}</span>`;
  return out+'</div>';
}

function hucreIc(veri, urunAd, ay){
  const dolu = KAT_SIRA.filter(k=>veri[k]);
  if(dolu.length===0) return null;
  let ic='';
  // window.BBCH dönem rozeti (en üstte)
  const bb = window.BBCH[urunAd];
  if(bb && bb.aylar && bb.aylar[ay] && bb.aylar[ay]!=='—'){
    ic += `<div class="bbch-satir"><span class="bbch-et">BBCH</span><span class="bbch-mt">${esc(bb.aylar[ay])}</span></div>`;
  }
  ic += hastalikSatiri(veri, urunAd); // muhtemel hastalık
  ic += gubreBlok(urunAd, ay); // aylık fenni gübre programı
  for(const k of dolu){
    const K=KAT[k];
    ic += `<div class="is k-${K.sinif}" data-kat="${k}"><span class="is-et"><span class="ik">${K.ikon}</span>${K.ad}</span><span class="is-mt">${isaretle(veri[k])}</span></div>`;
  }
  ic += ozetRozet(veri);
  return ic;
}

// Ürün başlığındaki toplam gübre özeti
function gubreOzet(ad){
  const p = window.GUBRE_PROGRAM[ad]; if(!p||!p.toplam) return '';
  return `<div class="gb-ozet"><span class="gb-ozet-bas">◈ Yıllık gübre ihtiyacı</span><span class="gb-ozet-mt">${esc(p.toplam)}</span></div>`;
}

// Ürün başlığındaki window.BBCH anahtar dönem referansı
function bbchReferans(ad){
  const bb = window.BBCH[ad]; if(!bb) return '';
  let satir = bb.anahtar.map(a=>`<span class="bbch-ref-oge"><b>${esc(a.kod)}</b> ${esc(a.ad)}</span>`).join('');
  return `<details class="bbch-ref"><summary><span class="bbch-ref-bas">🌱 BBCH anahtar dönemler</span><span class="bbch-ref-olcek">${esc(bb.olcek)}</span></summary><div class="bbch-ref-liste">${satir}</div></details>`;
}

// ---- TABLO GÖRÜNÜMÜ ----
function suRozet(ad){
  const s = window.SU[ad]; if(!s) return '';
  return `<div class="su-kutu"><span class="su-bg">💧 Toplam mevsimlik su</span><span class="su-mm">${s.mm} mm</span><span class="su-alt">(${s.m3da} m³/da)</span><div class="su-kritik"><b>Kritik dönem:</b> ${esc(s.kritik)}</div><div class="su-kurak"><b>Kurak yıl:</b> ${esc(s.kurak)}</div></div>`;
}



// ---------- İÇERİK ÜRETİMİ ----------
let govde='', sonGrup=null;
HEPSI.forEach((u,i)=>{
  if(u.grup!==sonGrup){
    const g=window.GRUPLAR[u.grup];
    govde+=`<tr class="grup-satir" data-grup-baslik="${u.grup}"><th colspan="13" style="--g:${g.renk}"><span class="grup-nokta"></span>${esc(g.ad)}</th></tr>`;
    sonGrup=u.grup;
  }
  const g=window.GRUPLAR[u.grup];
  let hucreler='';
  for(const ay of window.AYLAR){
    const ic = hucreIc(u.aylar[ay]||{}, u.ad, ay);
    hucreler += ic ? `<td class="hucre" data-ay="${ay}">${ic}</td>` : `<td class="bos" data-ay="${ay}"><span class="tire">·</span></td>`;
  }
  govde+=`<tr class="urun-satir" id="urun-${i}" data-grup="${u.grup}" data-ad="${esc(u.ad.toLowerCase())}" style="--g:${g.renk}">
    <th class="urun-hd" scope="row"><span class="urun-ad">${esc(u.ad)}</span><span class="urun-ozet">${esc(u.ozet)}</span>${suRozet(u.ad)}${gubreOzet(u.ad)}${bbchReferans(u.ad)}</th>
    ${hucreler}</tr>`;
});

// ---- AY GÖRÜNÜMÜ ----
// Her ay için: o ay veri dolu olan ürünler kartlar halinde
let ayGorunum='';
window.AYLAR.forEach((ay,ai)=>{
  let kartlar='';
  HEPSI.forEach((u,i)=>{
    const veri = u.aylar[ay]||{};
    const ic = hucreIc(veri, u.ad, ay);
    if(!ic) return;
    const g=window.GRUPLAR[u.grup];
    kartlar += `<div class="ay-kart" data-grup="${u.grup}" data-ad="${esc(u.ad.toLowerCase())}" style="--g:${g.renk}">
      <div class="ay-kart-bas"><span class="ay-kart-grup">${esc(g.ad)}</span><h4>${esc(u.ad)}</h4></div>
      <div class="ay-kart-ic">${ic}</div></div>`;
  });
  ayGorunum += `<section class="ay-panel" data-ay="${ay}" ${ai===0?'':'hidden'}>
    <div class="ay-panel-bas"><span class="ay-panel-no">${String(ai+1).padStart(2,'0')}</span><h3>${ay}</h3><span class="ay-panel-say"></span></div>
    <div class="ay-kartlar">${kartlar}</div></section>`;
});

let navGruplar='';
for(const [key,g] of Object.entries(window.GRUPLAR)){
  navGruplar+=`<button class="filtre-grup" data-grup="${key}" style="--g:${g.renk}"><span class="nokta"></span>${esc(g.ad)}</button>`;
}
let katFiltre='';
for(const k of KAT_SIRA) katFiltre+=`<button class="filtre-kat aktif" data-kat="${k}"><span class="ik">${KAT[k].ikon}</span>${KAT[k].ad}</button>`;
let ayBaslik='';
window.AYLAR.forEach((a,i)=>{ ayBaslik+=`<th class="ay-hd" data-ay="${a}"><span class="ay-no">${String(i+1).padStart(2,'0')}</span>${a}</th>`; });
let aySecenek = window.AYLAR.map((a,i)=>`<button class="ay-sec-btn ${i===0?'aktif':''}" data-ay="${a}">${a}</button>`).join('');

// ---- AŞAMA TABLOSU PANELİ ----
function asamaIlacHucre(ilaclar){
  if(!ilaclar || ilaclar.length===0) return '<span class="at-tire">–</span>';
  return ilaclar.map(i=>`<div class="at-ilac-oge"><span class="at-ilac-etken">${isaretle(i.etken)}</span><span class="at-ilac-ticari">${esc(i.ticari)}</span></div>`).join('');
}
function asamaKontrol(k){
  if(!k||k.length===0) return '<span class="at-tire">–</span>';
  return k.map(x=>`<div class="at-kontrol-oge">${esc(x)}</div>`).join('');
}
function atBos(v){ return (v && v!=='—') ? isaretle(v) : '<span class="at-tire">–</span>'; }

function asamaTablosu(ad, u, no){
  const satirlar = u.asamalar.map(a=>`
    <tr>
      <td class="at-asama">${esc(a.asama)}</td>
      <td class="at-donem">${esc(a.donem)}</td>
      <td>${atBos(a.islem)}</td>
      <td class="at-gubre">${atBos(a.gubre)}</td>
      <td class="at-sulama">${atBos(a.sulama)}</td>
      <td class="at-hastalik">${atBos(a.hastalik)}</td>
      <td class="at-ilac">${asamaIlacHucre(a.ilac)}</td>
      <td class="at-kontrol">${asamaKontrol(a.kontrol)}</td>
    </tr>`).join('');
  const n = u.notlar||{};
  return `<article class="at-urun" data-ad="${esc(ad.toLowerCase())}">
    <div class="at-bas"><span class="at-no">${no}</span><h3>${esc(ad)} Yetiştiriciliği</h3><span class="at-bas-et">— Ana Tablo</span></div>
    ${u.ozet?`<p class="at-ozet">${esc(u.ozet)}</p>`:''}
    <div class="at-sar">
      <table class="at-tablo">
        <thead><tr>
          <th>Aşama</th><th>Dönem</th><th>Yapılacak İşlemler</th><th>Gübreleme</th><th>Sulama</th><th>Hastalık-Zararlı Mücadelesi</th><th>Kullanılacak İlaçlar (Örnek)</th><th>Kontrol Notu</th>
        </tr></thead>
        <tbody>${satirlar}</tbody>
      </table>
    </div>
    <div class="at-notlar">
      <h4>Özet İlaç &amp; Bilgi Notları</h4>
      <ul>
        ${n.herbisit?`<li><b>Yabancı Ot İlaçları (Herbisitler):</b> ${isaretle(n.herbisit)}</li>`:''}
        ${n.fungisit?`<li><b>Mantar İlaçları (Fungisitler):</b> ${isaretle(n.fungisit)}</li>`:''}
        ${n.insektisit?`<li><b>Böcek İlaçları (İnsektisitler):</b> ${isaretle(n.insektisit)}</li>`:''}
        ${n.tohum?`<li><b>Tohum İlaçları:</b> ${isaretle(n.tohum)}</li>`:''}
      </ul>
      <p class="at-uyari">⚠ Ticari adlar <b>örnektir</b>; ruhsat ve piyasa değişir. Kullanmadan önce <b>bku.tarimorman.gov.tr</b> üzerinden o ürün-zararlı için ruhsatlı olduğunu, dozu ve son ilaçlama–hasat aralığını (PHI) doğrulayın.</p>
    </div>
  </article>`;
}

// aşama tablosu paneli: üstte ürün seçici + seçilen ürünün tablosu
const asamaUrunler = Object.keys(window.ASAMA_TABLO);
const asamaSecenekler = asamaUrunler.map((ad,i)=>`<option value="${i}">${esc(ad)}</option>`).join('');
const asamaTablolar = asamaUrunler.map((ad,i)=>`<div class="at-kap" data-i="${i}" ${i===0?'':'hidden'}>${asamaTablosu(ad, window.ASAMA_TABLO[ad], i+1)}</div>`).join('');
const asamaPanel = `
<div class="at-giris">
  <h3>Aşama Bazlı Yetiştiricilik Tablosu</h3>
  <p>Her ürünün fenolojik <b>aşamasına göre</b> (toprak hazırlığından hasada) yapılacak işlem, gübre, sulama, hastalık mücadelesi ve örnek ilaçlar. Ay yerine <b>gelişim aşaması</b> eksen alınır — bölgeye/yıla göre tarih kaysa da aşama sırası değişmez.</p>
  <div class="at-secici">
    <label for="atSec">Ürün seç:</label>
    <select id="atSec">${asamaSecenekler}</select>
  </div>
</div>
<div id="atTablolar">${asamaTablolar}</div>`;
function gddKart(m, tip){
  const asamalar = m.asamalar.map(a=>`<tr><td class="gdd-deger">${esc(a.gdd)}</td><td class="gdd-olay">${esc(a.olay)}</td></tr>`).join('');
  const urunEt = (m.urunler&&m.urunler.length)
    ? `<div class="gdd-urunler">${m.urunler.map(u=>`<span class="gdd-urun-chip">${esc(u)}</span>`).join('')}</div>` : '';
  return `<article class="gdd-kart ${tip}">
    <header class="gdd-kart-bas">
      <h4>${esc(m.ad)}</h4>
      <div class="gdd-meta"><span><b>Baz sıcaklık:</b> ${esc(m.baz)}</span><span><b>Başlangıç:</b> ${esc(m.baslangic)}</span></div>
      ${urunEt}
    </header>
    <table class="gdd-tablo"><tbody>${asamalar}</tbody></table>
    ${m.not?`<p class="gdd-not">${esc(m.not)}</p>`:''}
  </article>`;
}
const gddZararli = window.GDD.zararli.filter(m=>m.asamalar.length>1).map(m=>gddKart(m,'z')).join('');
const gddBitki   = window.GDD.bitki.map(m=>gddKart(m,'b')).join('');
const sogukSatir = window.GDD.soguklama.degerler.map(d=>`<tr><td>${esc(d.urun)}</td><td class="gdd-deger">${esc(d.saat)} saat</td></tr>`).join('');

const gddPanel = `
<div class="gdd-giris">
  <h3>Gün-Derece (GDD) ile Zamanlama</h3>
  <p>BBCH <b>hangi dönemde</b> olduğunu söyler; GDD <b>o döneme ne zaman gelineceğini</b> hesaplar. Böcek ve bitki gelişimi takvime değil <b>sıcaklık birikimine</b> bağlıdır — sıcak yıl erken, soğuk yıl geç olur.</p>
  <div class="gdd-formul">
    <span class="gdd-formul-bas">Günlük GDD</span>
    <code>GDD = ( (T<sub>maks</sub> + T<sub>min</sub>) ÷ 2 ) − T<sub>baz</sub></code>
    <span class="gdd-formul-not">Sonuç negatifse 0 sayılır. Birikim = günlük değerlerin toplamı.</span>
  </div>
  <div class="gdd-uyari"><b>Birim uyarısı:</b> Uluslararası kaynakların çoğu °F tabanlıdır (base 50 °F). Burada değerler <b>°C-gün (baz 10 °C)</b> olarak verilmiş, parantezde °F karşılığı yazılmıştır. Dönüşüm: <b>°C-gün = °F-gün ÷ 1,8</b></div>
</div>

<!-- HESAPLAYICI -->
<section class="hesap">
  <h4>GDD Hesaplayıcı</h4>
  <p class="hesap-alt">Günlük en yüksek/en düşük sıcaklığı girip ekleyin; birikim toplanır. Hedefe ulaşınca uyarır.</p>
  <div class="hesap-satir">
    <label>Baz sıcaklık (°C)<input type="number" id="hBaz" value="10" step="0.5"></label>
    <label>Hedef GDD (°C-gün)<input type="number" id="hHedef" value="130" step="5"></label>
  </div>
  <div class="hesap-satir">
    <label>T-maks (°C)<input type="number" id="hMax" placeholder="örn. 24" step="0.1"></label>
    <label>T-min (°C)<input type="number" id="hMin" placeholder="örn. 11" step="0.1"></label>
    <button id="hEkle" class="hesap-btn">+ Günü ekle</button>
    <button id="hSifirla" class="hesap-btn ikincil">Sıfırla</button>
  </div>
  <div class="hesap-sonuc">
    <div class="hesap-kutu"><span class="hesap-et">Bugünün GDD'si</span><span class="hesap-deger" id="hGunluk">—</span></div>
    <div class="hesap-kutu vurgu"><span class="hesap-et">Toplam birikim</span><span class="hesap-deger" id="hToplam">0</span></div>
    <div class="hesap-kutu"><span class="hesap-et">Gün sayısı</span><span class="hesap-deger" id="hGun">0</span></div>
  </div>
  <div class="hesap-bar"><div class="hesap-bar-ic" id="hBar"></div></div>
  <p class="hesap-durum" id="hDurum">Hedefe <b>130</b> °C-gün kaldı.</p>
  <ul class="hesap-gecmis" id="hGecmis"></ul>
</section>

<h4 class="gdd-baslik">🐛 Zararlı modelleri <span>(biofix = tuzakta ilk sürekli yakalama)</span></h4>
<div class="gdd-izgara">${gddZararli}</div>

<h4 class="gdd-baslik">🌱 Bitki gelişim modelleri</h4>
<div class="gdd-izgara">${gddBitki}</div>

<h4 class="gdd-baslik">❄ Soğuklama ihtiyacı <span>(0–7,2 °C arası saat toplamı)</span></h4>
<div class="gdd-soguk">
  <p>${esc(window.GDD.soguklama.aciklama)}</p>
  <table class="gdd-tablo"><tbody>${sogukSatir}</tbody></table>
  <p class="gdd-not">${esc(window.GDD.soguklama.not)}</p>
</div>`;




// ---- DOM'A YAZ ----
document.querySelector('#govde').innerHTML = govde;
document.querySelector('#gorunum-tablo thead tr').insertAdjacentHTML('beforeend', ayBaslik);
document.querySelector('#gorunum-ay').insertAdjacentHTML('afterbegin', '<div class="ay-sec-serit">'+aySecenek+'</div>');
document.querySelector('.ay-sec-serit').insertAdjacentHTML('afterend', ayGorunum);
document.querySelector('#gorunum-gdd').innerHTML = gddPanel;
document.querySelector('#gorunum-asama').innerHTML = asamaPanel;
// grup + kategori filtreleri
const grupHepsiBtn = document.querySelector('.filtre-grup[data-grup="__hepsi"]');
grupHepsiBtn.insertAdjacentHTML('afterend', navGruplar);
document.querySelectorAll('.kontrol-satir')[2].insertAdjacentHTML('beforeend', katFiltre);


// ---------- OLAY YÖNETİMİ ----------
const arama=document.getElementById('arama');
const satirlar=Array.from(document.querySelectorAll('.urun-satir'));
const grupSatirlari=Array.from(document.querySelectorAll('.grup-satir'));
const ayKartlari=Array.from(document.querySelectorAll('.ay-kart'));
const bosUyari=document.getElementById('bosUyari');
let grupFiltre='__hepsi';const katPasif=new Set();

function uygula(){
  const q=arama.value.trim().toLowerCase();let gorunen=0;const aktif=new Set();
  satirlar.forEach(s=>{
    const adU=!q||s.dataset.ad.includes(q);
    const gU=grupFiltre==='__hepsi'||s.dataset.grup===grupFiltre;
    const g=adU&&gU;s.style.display=g?'':'none';if(g){gorunen++;aktif.add(s.dataset.grup);}
  });
  grupSatirlari.forEach(g=>{g.style.display=aktif.has(g.dataset.grupBaslik)?'':'none';});
  bosUyari.style.display=gorunen===0?'block':'none';
  // ay kartları
  ayKartlari.forEach(k=>{
    const adU=!q||k.dataset.ad.includes(q);
    const gU=grupFiltre==='__hepsi'||k.dataset.grup===grupFiltre;
    k.style.display=(adU&&gU)?'':'none';
  });
  guncelleAySayi();
}
arama.addEventListener('input',uygula);
document.querySelectorAll('.filtre-grup').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.filtre-grup').forEach(x=>x.classList.remove('aktif'));
  b.classList.add('aktif');grupFiltre=b.dataset.grup;uygula();
}));
const style=document.createElement('style');document.head.appendChild(style);
function katUygula(){let css='';katPasif.forEach(k=>{css+=`.is[data-kat="${k}"]{display:none}`;});style.textContent=css;}
document.querySelectorAll('.filtre-kat').forEach(b=>b.addEventListener('click',()=>{
  const k=b.dataset.kat;
  if(katPasif.has(k)){katPasif.delete(k);b.classList.add('aktif');}else{katPasif.add(k);b.classList.remove('aktif');}
  katUygula();
}));

// sekme geçişi
const gT=document.getElementById('gorunum-tablo'),gA=document.getElementById('gorunum-ay');
const sT=document.getElementById('sekmeTablo'),sA=document.getElementById('sekmeAy'),ipucu=document.getElementById('ipucu');
const mobilIpucu=document.getElementById('mobilIpucu');
const gG=document.getElementById('gorunum-gdd'),sG=document.getElementById('sekmeGdd');
const gAs=document.getElementById('gorunum-asama'),sAs=document.getElementById('sekmeAsama');
const kontrolEl=document.querySelector('.kontrol');
function sekmeSec(hangi){
  gT.style.display = hangi==='t'?'':'none';
  gA.style.display = hangi==='a'?'block':'none';
  gG.style.display = hangi==='g'?'block':'none';
  gAs.style.display = hangi==='s'?'block':'none';
  [sT,sA,sG,sAs].forEach(b=>b.classList.remove('aktif'));
  ({t:sT,a:sA,g:sG,s:sAs})[hangi].classList.add('aktif');
  // filtre çubuğu sadece tablo/ay görünümünde
  if(kontrolEl) kontrolEl.style.display = (hangi==='g'||hangi==='s') ? 'none' : '';
  ipucu.style.display = hangi==='t' ? '' : 'none';
  if(mobilIpucu) mobilIpucu.style.display = (hangi==='t'&&mobil()) ? 'block' : 'none';
}
sT.addEventListener('click',()=>sekmeSec('t'));
sA.addEventListener('click',()=>sekmeSec('a'));
sG.addEventListener('click',()=>sekmeSec('g'));
sAs.addEventListener('click',()=>sekmeSec('s'));

// aşama tablosu ürün seçici
const atSec=document.getElementById('atSec');
if(atSec){
  atSec.addEventListener('change',()=>{
    const i=atSec.value;
    document.querySelectorAll('#atTablolar .at-kap').forEach(k=>{
      k.hidden = (k.dataset.i!==i);
    });
  });
}

// mobil akordeon: ürün başlığına dokun → ayları aç/kapat
function mobil(){return window.matchMedia('(max-width:760px)').matches;}
document.querySelectorAll('.urun-hd').forEach(hd=>{
  hd.addEventListener('click',(e)=>{
    if(!mobil())return;                       // sadece mobilde akordeon
    // su kutusu içindeki metin seçimini engelleme; yine de aç/kapat
    hd.closest('.urun-satir').classList.toggle('acik');
  });
});
// arama yapılınca eşleşen ürünleri mobilde otomatik aç
const _uygula=uygula;
function guncelleMobilIpucu(){
  if(mobilIpucu)mobilIpucu.style.display=(mobil()&&gT.style.display!=='none')?'block':'none';
}
window.addEventListener('resize',guncelleMobilIpucu);
guncelleMobilIpucu();

// ay seçimi
const ayPanelleri=Array.from(document.querySelectorAll('.ay-panel'));
document.querySelectorAll('.ay-sec-btn').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.ay-sec-btn').forEach(x=>x.classList.remove('aktif'));
  b.classList.add('aktif');
  const ay=b.dataset.ay;
  ayPanelleri.forEach(p=>{p.hidden=(p.dataset.ay!==ay);});
  guncelleAySayi();
}));
function guncelleAySayi(){
  ayPanelleri.forEach(p=>{
    if(p.hidden)return;
    const gorunur=Array.from(p.querySelectorAll('.ay-kart')).filter(k=>k.style.display!=='none').length;
    const say=p.querySelector('.ay-panel-say');if(say)say.textContent=gorunur+' ürün';
  });
}
guncelleAySayi();
// ===== HASTALIK DETAY PENCERESİ =====
const HASTALIK_DB = window.HASTALIK_DB;
(function(){
  const ortu=document.getElementById('hdOrtu');
  const kapat=document.getElementById('hdKapat');
  if(!ortu) return;
  const el=id=>document.getElementById(id);
  let sonOdak=null;

  function ac(ad, urun){
    const d=HASTALIK_DB[ad];
    if(!d) return;
    sonOdak=document.activeElement;
    // ürüne özel katman var mı?
    const ozel = (d.uruneOzel && urun && d.uruneOzel[urun]) ? d.uruneOzel[urun] : null;
    el('hdAd').textContent=ad;
    el('hdTur').textContent=(ozel&&ozel.tur)||d.tur||'';
    el('hdBilimsel').textContent=(ozel&&ozel.bilimsel)||d.bilimsel||'';
    // ürün bağlamı rozeti
    const baglamEl=el('hdBaglam');
    if(baglamEl){
      if(urun){ baglamEl.textContent='🌿 '+urun+' için'; baglamEl.hidden=false; }
      else { baglamEl.hidden=true; }
    }
    // ürüne özel uyarı (etmen farklıysa)
    const uyariEl=el('hdOzelUyari');
    if(uyariEl){
      if(ozel&&ozel.uyari){ uyariEl.textContent='⚠ '+ozel.uyari; uyariEl.hidden=false; }
      else { uyariEl.hidden=true; }
    }
    el('hdBelirti').textContent=(ozel&&ozel.belirti)||d.belirti||'—';
    el('hdZaman').textContent=(ozel&&ozel.zaman)||d.zaman||'—';
    const etkenListe=(ozel&&ozel.etken)||d.etken||[];
    el('hdEtken').innerHTML=etkenListe.map(e=>'<span class="hd-etken-chip">'+e+'</span>').join('');
    const kultListe=(ozel&&ozel.kulturel)||d.kulturel||[];
    el('hdKulturel').innerHTML=kultListe.map(k=>'<li>'+k+'</li>').join('');
    ortu.hidden=false;
    document.body.style.overflow='hidden';
    kapat.focus();
  }
  function kapatPencere(){
    ortu.hidden=true;
    document.body.style.overflow='';
    if(sonOdak&&sonOdak.focus) sonOdak.focus();
  }
  // olay delegasyonu: tüm tıklanabilir hastalık etiketleri
  document.addEventListener('click',e=>{
    const b=e.target.closest('.hst-chip.tiklanir');
    if(b){ e.preventDefault(); ac(b.dataset.hst, b.dataset.urun); return; }
  });
  kapat.addEventListener('click',kapatPencere);
  ortu.addEventListener('click',e=>{ if(e.target===ortu) kapatPencere(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&!ortu.hidden) kapatPencere(); });
})();

// ===== GDD HESAPLAYICI =====
(function(){
  const el=id=>document.getElementById(id);
  const baz=el('hBaz'),hedef=el('hHedef'),tmax=el('hMax'),tmin=el('hMin');
  const ekle=el('hEkle'),sifirla=el('hSifirla');
  const oGunluk=el('hGunluk'),oToplam=el('hToplam'),oGun=el('hGun');
  const bar=el('hBar'),durum=el('hDurum'),gecmis=el('hGecmis');
  if(!ekle) return;
  let toplam=0, gunler=[];
  function yenile(sonGunluk){
    const h=parseFloat(hedef.value)||0;
    oGunluk.textContent = sonGunluk==null?'—':sonGunluk.toFixed(1);
    oToplam.textContent = toplam.toFixed(1);
    oGun.textContent = gunler.length;
    const yuzde = h>0 ? Math.min(100,(toplam/h)*100) : 0;
    bar.style.width = yuzde+'%';
    const tamam = h>0 && toplam>=h;
    bar.classList.toggle('tamam',tamam);
    durum.classList.toggle('tamam',tamam);
    durum.innerHTML = h<=0 ? 'Hedef GDD girin.'
      : tamam ? '✓ Hedefe ulaşıldı! ('+toplam.toFixed(1)+' / '+h+' °C-gün) — uygulama penceresi açık.'
      : 'Hedefe <b>'+(h-toplam).toFixed(1)+'</b> °C-gün kaldı. (%'+yuzde.toFixed(0)+')';
    gecmis.innerHTML = gunler.map((g,i)=>'<li>'+(i+1)+'. gün: +'+g.toFixed(1)+'</li>').reverse().join('');
  }
  ekle.addEventListener('click',()=>{
    const mx=parseFloat(tmax.value), mn=parseFloat(tmin.value), b=parseFloat(baz.value);
    if(isNaN(mx)||isNaN(mn)){ durum.textContent='Lütfen Tmaks ve Tmin girin.'; return; }
    if(mn>mx){ durum.textContent='Tmin, Tmaks değerinden büyük olamaz.'; return; }
    let g=((mx+mn)/2)-(isNaN(b)?10:b);
    if(g<0) g=0;
    toplam+=g; gunler.push(g);
    tmax.value=''; tmin.value=''; tmax.focus();
    yenile(g);
  });
  sifirla.addEventListener('click',()=>{ toplam=0; gunler=[]; yenile(null); });
  hedef.addEventListener('input',()=>yenile(null));
  [tmax,tmin].forEach(i=>i.addEventListener('keydown',e=>{ if(e.key==='Enter') ekle.click(); }));
  yenile(null);
})();

}); // DOMContentLoaded

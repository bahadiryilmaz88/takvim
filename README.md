# Tarım Takvimi — Ayrık Dosya Yapısı

Bu uygulama **build gerektirmez**. `index.html`'i doğrudan tarayıcıda açman yeterli.
Özellik eklerken sadece ilgili dosyaya dokun; diğerleri etkilenmez.

## Dosya yapısı

```
app/
├── index.html          → HTML iskeleti (başlık, sekmeler, konteynerler)
├── styles.css          → TÜM görünüm (renk, düzen, mobil, baskı)
├── app.js              → TÜM mantık (render + sekme/modal/filtre/hesaplayıcı)
└── data/               → VERİ (her biri window.X olarak yüklenir)
    ├── veri.js             → URUNLER, GRUPLAR, AYLAR (24 tarla ürünü)
    ├── tibbi_verisi.js     → TIBBI (15 tıbbi/aromatik bitki)
    ├── su_verisi.js        → SU (mevsimlik su ihtiyacı)
    ├── bbch_verisi.js      → BBCH (fenolojik dönem kodları)
    ├── gdd_verisi.js       → GDD (gün-derece modelleri)
    ├── gubre_program.js    → GUBRE_PROGRAM (aylık gübre dozları)
    ├── hastalik_db.js      → HASTALIK_DB (48 hastalık: etken+önlem)
    └── asama_tablo.js      → ASAMA_TABLO (39 ürün aşama tablosu)
```

## Ne nerede? (özellik eklerken)

| Değiştirmek istediğin                    | Dokunacağın dosya         |
|------------------------------------------|---------------------------|
| Bir ürünün ayı/işlemi/dozu               | `data/veri.js` veya `data/tibbi_verisi.js` |
| Su ihtiyacı rakamı                       | `data/su_verisi.js`       |
| BBCH kodu                                | `data/bbch_verisi.js`     |
| GDD eşiği/modeli                         | `data/gdd_verisi.js`      |
| Aylık gübre programı                     | `data/gubre_program.js`   |
| Hastalık detayı (etken/önlem)            | `data/hastalik_db.js`     |
| Aşama tablosu (satır/ilaç)               | `data/asama_tablo.js`     |
| Renk, yazı tipi, boşluk, mobil görünüm   | `styles.css`              |
| Yeni buton/sekme, davranış, hesaplama    | `app.js`                  |
| Sayfa başlığı, sabit metinler            | `index.html`              |

## Yeni ürün eklemek
1. `data/veri.js` (veya tibbi) içine ürün nesnesini ekle.
2. İstersen `su_verisi.js`, `bbch_verisi.js`, `gubre_program.js`, `asama_tablo.js`
   içine aynı ürün adıyla kayıt ekle (yoksa o bölüm boş görünür, hata vermez).
3. `index.html`'i yenile — otomatik görünür.

## Notlar
- Veri dosyalarındaki ürün adları **birebir aynı** olmalı (eşleştirme ada göre).
- Tarayıcı `file://` ile açıldığında çalışır; sunucu gerekmez.
- Tüm içerik `app.js` içindeki fonksiyonlarca sayfa yüklenince üretilir.

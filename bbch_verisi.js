// bbch_verisi.js — tarayıcı verisi (otomatik üretildi)
window.BBCH = {
  "Buğday": {
    "olcek": "Tahıl (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "21-29",
        "ad": "Kardeşlenme"
      },
      {
        "kod": "30-39",
        "ad": "Sapa kalkma (31: ilk boğum)"
      },
      {
        "kod": "37-39",
        "ad": "Bayrak yaprak"
      },
      {
        "kod": "51-59",
        "ad": "Başaklanma"
      },
      {
        "kod": "61-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-77",
        "ad": "Tane dolumu (süt–hamur olum)"
      },
      {
        "kod": "87-89",
        "ad": "Sarı/tam olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "21-29 (kardeşlenme, kışlama)",
      "Şubat": "25-29 (kardeşlenme sonu)",
      "Mart": "29-31 (kardeşlenme sonu–sapa kalkma başı)",
      "Nisan": "31-39 (sapa kalkma–bayrak yaprak)",
      "Mayıs": "51-69 (başaklanma–çiçeklenme)",
      "Haziran": "71-87 (tane dolumu–sarı olum)",
      "Temmuz": "89-99 (tam olum–hasat)",
      "Ağustos": "89-99 (hasat sonu)",
      "Eylül": "—(ekim öncesi)",
      "Ekim": "00-11 (ekim–çıkış)",
      "Kasım": "11-21 (yaprak gelişimi–kardeşlenme başı)",
      "Aralık": "21-25 (kardeşlenme, kışa giriş)"
    }
  },
  "Arpa": {
    "olcek": "Tahıl (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "21-29",
        "ad": "Kardeşlenme"
      },
      {
        "kod": "30-39",
        "ad": "Sapa kalkma"
      },
      {
        "kod": "49-59",
        "ad": "Başak çıkışı"
      },
      {
        "kod": "61-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-77",
        "ad": "Tane dolumu"
      },
      {
        "kod": "87-89",
        "ad": "Olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "21-29 (kardeşlenme, kışlama)",
      "Şubat": "25-29",
      "Mart": "29-31 (sapa kalkma başı)",
      "Nisan": "31-39 (sapa kalkma–bayrak yaprak)",
      "Mayıs": "49-69 (başak çıkışı–çiçeklenme)",
      "Haziran": "71-87 (tane dolumu–olum)",
      "Temmuz": "89-99 (hasat)",
      "Ağustos": "89-99 (hasat sonu)",
      "Eylül": "—(ekim öncesi)",
      "Ekim": "00-11 (ekim–çıkış)",
      "Kasım": "11-21",
      "Aralık": "21-25 (kışa giriş)"
    }
  },
  "Yulaf": {
    "olcek": "Tahıl (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "21-29",
        "ad": "Kardeşlenme"
      },
      {
        "kod": "30-39",
        "ad": "Sapa kalkma"
      },
      {
        "kod": "51-59",
        "ad": "Salkım çıkışı"
      },
      {
        "kod": "61-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-77",
        "ad": "Tane dolumu (hasıl için 71-75)"
      },
      {
        "kod": "87-89",
        "ad": "Olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "21-29 (kışlık, kardeşlenme)",
      "Şubat": "25-29 / yazlık: ekim öncesi",
      "Mart": "00-13 (yazlık ekim–çıkış)",
      "Nisan": "21-31 (kardeşlenme–sapa kalkma)",
      "Mayıs": "31-59 (sapa kalkma–salkım çıkışı)",
      "Haziran": "61-77 (çiçeklenme–tane dolumu)",
      "Temmuz": "87-99 (olum–hasat)",
      "Ağustos": "89-99 (hasat sonu)",
      "Eylül": "—(güzlük ekim hazırlığı)",
      "Ekim": "00-11 (güzlük ekim–çıkış)",
      "Kasım": "11-21",
      "Aralık": "21-25"
    }
  },
  "Yonca": {
    "olcek": "Yem baklagili (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme (tesis)"
      },
      {
        "kod": "20-29",
        "ad": "Yan sürgün / yeniden sürme"
      },
      {
        "kod": "30-39",
        "ad": "Sap uzaması"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma (biçim başlangıcı)"
      },
      {
        "kod": "60-65",
        "ad": "Çiçeklenme (%10 çiçekte biçim)"
      },
      {
        "kod": "71-79",
        "ad": "Bakla oluşumu (tohumluk)"
      }
    ],
    "aylar": {
      "Ocak": "00 / 90-97 (kış durgunluğu)",
      "Şubat": "20-21 (uyanma öncesi)",
      "Mart": "20-30 (yeniden sürme–sap uzaması)",
      "Nisan": "30-51 (sap uzaması–tomurcuk)",
      "Mayıs": "51-65 (tomurcuk–çiçek, 1-2. biçim)",
      "Haziran": "30-65 (biçim döngüsü)",
      "Temmuz": "30-65 (biçim döngüsü)",
      "Ağustos": "30-65 (biçim döngüsü)",
      "Eylül": "30-65 (son biçimler)",
      "Ekim": "20-30 (yeniden sürme, dinlenme)",
      "Kasım": "90-93 (kışa hazırlık)",
      "Aralık": "93-97 (durgunluk)"
    }
  },
  "Korunga": {
    "olcek": "Yem baklagili (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme (tesis)"
      },
      {
        "kod": "20-29",
        "ad": "Yeniden sürme"
      },
      {
        "kod": "30-39",
        "ad": "Sap uzaması"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme (%50 çiçekte biçim)"
      },
      {
        "kod": "71-89",
        "ad": "Tohum oluşumu–olum"
      }
    ],
    "aylar": {
      "Ocak": "90-97 (durgunluk)",
      "Şubat": "20-21 (uyanma öncesi)",
      "Mart": "20-30 (yeniden sürme)",
      "Nisan": "30-51 (sap uzaması–tomurcuk)",
      "Mayıs": "60-69 (çiçeklenme, 1. biçim)",
      "Haziran": "30-69 (2. biçim / tohum)",
      "Temmuz": "81-89 (tohum olumu)",
      "Ağustos": "90-93 (yaz durgunluğu)",
      "Eylül": "20-30 (yeniden sürme)",
      "Ekim": "20-30",
      "Kasım": "90-93",
      "Aralık": "93-97"
    }
  },
  "Fiğ": {
    "olcek": "Yem baklagili / bakla (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "30-39",
        "ad": "Sap uzaması"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-79",
        "ad": "Bakla oluşumu (ot hasadı: 65-75)"
      },
      {
        "kod": "81-89",
        "ad": "Tohum olumu"
      }
    ],
    "aylar": {
      "Ocak": "13-21 (güzlük, kışlama)",
      "Şubat": "21-29",
      "Mart": "00-13 (yazlık ekim) / 30-39 (güzlük)",
      "Nisan": "30-51 (sap uzaması–tomurcuk)",
      "Mayıs": "60-75 (çiçeklenme–bakla, ot hasadı)",
      "Haziran": "71-85 (bakla–tohum dolumu)",
      "Temmuz": "85-89 (tohum olumu, hasat)",
      "Ağustos": "89-99 (hasat sonu)",
      "Eylül": "—(güzlük ekim hazırlığı)",
      "Ekim": "00-11 (güzlük ekim–çıkış)",
      "Kasım": "11-19",
      "Aralık": "13-21 (kışa giriş)"
    }
  },
  "Ayçiçeği": {
    "olcek": "Ayçiçeği (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "12-19",
        "ad": "Yaprak gelişimi (6-8 yaprak: üst gübre)"
      },
      {
        "kod": "51-59",
        "ad": "Tabla oluşumu (tabla görünür)"
      },
      {
        "kod": "61-69",
        "ad": "Çiçeklenme (tozlaşma)"
      },
      {
        "kod": "71-79",
        "ad": "Tane dolumu"
      },
      {
        "kod": "81-89",
        "ad": "Olgunlaşma (87-89: hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—(ekim öncesi)",
      "Şubat": "—",
      "Mart": "—(ekim hazırlığı)",
      "Nisan": "00-12 (ekim–çıkış)",
      "Mayıs": "12-19 (yaprak gelişimi, 6-8 yaprak)",
      "Haziran": "51-61 (tabla oluşumu–çiçeklenme başı)",
      "Temmuz": "61-79 (çiçeklenme–tane dolumu)",
      "Ağustos": "81-87 (olgunlaşma)",
      "Eylül": "87-99 (hasat)",
      "Ekim": "99 (hasat sonu)",
      "Kasım": "—",
      "Aralık": "—"
    }
  },
  "Mısır — Danelik": {
    "olcek": "Mısır (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "12-19",
        "ad": "Yaprak gelişimi (6-8 yaprak: 1. üst gübre)"
      },
      {
        "kod": "30-39",
        "ad": "Sap uzaması (boğaz doldurma)"
      },
      {
        "kod": "51-59",
        "ad": "Tepe püskülü çıkışı"
      },
      {
        "kod": "61-69",
        "ad": "Çiçeklenme–koçan püskülü (KRİTİK)"
      },
      {
        "kod": "71-79",
        "ad": "Tane dolumu (süt olum)"
      },
      {
        "kod": "83-89",
        "ad": "Hamur–fizyolojik olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—",
      "Mart": "—(ekim hazırlığı)",
      "Nisan": "00-12 (ekim–çıkış)",
      "Mayıs": "12-19 (6-8 yaprak)",
      "Haziran": "30-51 (sap uzaması–püskül öncesi)",
      "Temmuz": "61-71 (püskül–tozlaşma–tane bağlama)",
      "Ağustos": "73-83 (süt–hamur olum)",
      "Eylül": "85-89 (fizyolojik olum, hasat)",
      "Ekim": "89-99 (hasat)",
      "Kasım": "99 (ikinci ürün hasadı)",
      "Aralık": "—"
    }
  },
  "Mısır — Çerezlik/Cin": {
    "olcek": "Mısır (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "12-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Tepe püskülü"
      },
      {
        "kod": "61-69",
        "ad": "Çiçeklenme (izolasyon kritik)"
      },
      {
        "kod": "71-79",
        "ad": "Tane dolumu"
      },
      {
        "kod": "87-89",
        "ad": "Tam olum (nem %14-16)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—",
      "Mart": "—",
      "Nisan": "00-12 (ekim–çıkış)",
      "Mayıs": "12-19",
      "Haziran": "30-51",
      "Temmuz": "61-73 (püskül–tane dolumu)",
      "Ağustos": "75-85",
      "Eylül": "87-89 (tam olum, hasat)",
      "Ekim": "89-99 (hasat–kurutma)",
      "Kasım": "—",
      "Aralık": "—"
    }
  },
  "Mısır — Silajlık": {
    "olcek": "Mısır (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "12-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Tepe püskülü"
      },
      {
        "kod": "61-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "75-83",
        "ad": "SİLAJ HASADI (süt çizgisi 1/2-2/3, KM %30-35)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—",
      "Mart": "—",
      "Nisan": "00-12 (ekim–çıkış)",
      "Mayıs": "12-19",
      "Haziran": "30-51 / ikinci ürün: 00-12",
      "Temmuz": "61-73",
      "Ağustos": "75-83 (silaj hasadı)",
      "Eylül": "83-85 / ikinci ürün gelişimi",
      "Ekim": "75-83 (ikinci ürün silaj hasadı)",
      "Kasım": "83 (geç hasat)",
      "Aralık": "—"
    }
  },
  "Kuru Fasulye": {
    "olcek": "Fasulye (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme (KRİTİK: su stresi çiçek döker)"
      },
      {
        "kod": "71-79",
        "ad": "Bakla gelişimi"
      },
      {
        "kod": "81-89",
        "ad": "Tane dolumu–olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—",
      "Mart": "—(ekim hazırlığı)",
      "Nisan": "00-09 (erkenci ekim)",
      "Mayıs": "00-19 (ana ekim–yaprak gelişimi)",
      "Haziran": "51-65 (tomurcuk–çiçeklenme)",
      "Temmuz": "65-79 (çiçeklenme–bakla dolumu)",
      "Ağustos": "81-87 (tane dolumu–olum)",
      "Eylül": "87-99 (hasat)",
      "Ekim": "99",
      "Kasım": "—",
      "Aralık": "—"
    }
  },
  "Nohut": {
    "olcek": "Nohut/baklagil (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-79",
        "ad": "Bakla oluşumu (yeşil kurt kritik)"
      },
      {
        "kod": "81-89",
        "ad": "Tane olumu (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "13-21 (kışlık, kışlama)",
      "Şubat": "21-29 (kışlık)",
      "Mart": "00-13 (yazlık ekim–çıkış)",
      "Nisan": "13-19 (yaprak gelişimi)",
      "Mayıs": "51-65 (tomurcuk–çiçeklenme)",
      "Haziran": "65-79 (çiçeklenme–bakla)",
      "Temmuz": "81-87 (tane olumu)",
      "Ağustos": "89-99 (hasat)",
      "Eylül": "99 (hasat sonu)",
      "Ekim": "00-09 (kışlık ekim)",
      "Kasım": "09-13 (kışlık çıkış)",
      "Aralık": "13-21 (kışlama)"
    }
  },
  "Patates": {
    "olcek": "Patates (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Sürgün gelişimi–çıkış"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "31-39",
        "ad": "Ana sürgün uzaması (boğaz doldurma)"
      },
      {
        "kod": "40-49",
        "ad": "YUMRU OLUŞUMU (kritik)"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme (yumru şişme)"
      },
      {
        "kod": "91-97",
        "ad": "Yaprak sararma–kuruma (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "00 (tohumluk sürgünlendirme)",
      "Şubat": "00-01 (yeşillendirme)",
      "Mart": "00-09 (erkenci dikim–çıkış)",
      "Nisan": "00-19 (ana dikim–yaprak gelişimi)",
      "Mayıs": "31-45 (sürgün uzaması–yumru oluşumu)",
      "Haziran": "51-69 (tomurcuk–çiçeklenme, yumru şişme)",
      "Temmuz": "69-89 (yumru dolumu)",
      "Ağustos": "91-95 (yaprak sararma, hasat)",
      "Eylül": "95-99 (ana hasat)",
      "Ekim": "99 (hasat sonu)",
      "Kasım": "—",
      "Aralık": "—(depolama)"
    }
  },
  "Pirinç (Çeltik)": {
    "olcek": "Çeltik (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "21-29",
        "ad": "Kardeşlenme"
      },
      {
        "kod": "30-39",
        "ad": "Sapa kalkma"
      },
      {
        "kod": "41-49",
        "ad": "Gebecik (booting)"
      },
      {
        "kod": "51-59",
        "ad": "Başaklanma (boyun yanıklığı KRİTİK)"
      },
      {
        "kod": "61-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-89",
        "ad": "Tane dolumu–olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—(tava hazırlığı)",
      "Mart": "—(tava hazırlığı)",
      "Nisan": "—(tava/su hazırlığı)",
      "Mayıs": "00-13 (ekim–çıkış)",
      "Haziran": "21-39 (kardeşlenme–sapa kalkma)",
      "Temmuz": "41-61 (gebecik–başaklanma–çiçeklenme)",
      "Ağustos": "71-83 (tane dolumu, süt-hamur)",
      "Eylül": "87-89 (sarı olum, su boşaltma)",
      "Ekim": "89-99 (hasat)",
      "Kasım": "99",
      "Aralık": "—"
    }
  },
  "Şeker Pancarı": {
    "olcek": "Şeker pancarı (BBCH 00-49)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi (tekleme)"
      },
      {
        "kod": "31-39",
        "ad": "Sıra kapanması"
      },
      {
        "kod": "41-49",
        "ad": "KÖK ŞİŞME (şeker birikimi)"
      },
      {
        "kod": "49",
        "ad": "Hasat olgunluğu (söküm)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—(toprak hazırlığı)",
      "Mart": "—(ekim hazırlığı)",
      "Nisan": "00-12 (ekim–çıkış)",
      "Mayıs": "12-19 (yaprak gelişimi, tekleme)",
      "Haziran": "19-33 (yaprak–sıra kapanması)",
      "Temmuz": "35-45 (kök şişme başlangıcı)",
      "Ağustos": "45-47 (kök şişme, şeker birikimi)",
      "Eylül": "47-49 (olgunlaşma)",
      "Ekim": "49 (ana söküm)",
      "Kasım": "49 (geç söküm, don öncesi)",
      "Aralık": "—"
    }
  },
  "Fındık": {
    "olcek": "Fındık (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–tomurcuk kabarma"
      },
      {
        "kod": "60-69",
        "ad": "ÇİÇEKLENME (Ocak-Şubat, kışın)"
      },
      {
        "kod": "71-79",
        "ad": "Meyve gelişimi (zuruf)"
      },
      {
        "kod": "75-79",
        "ad": "İç dolum (KRİTİK su/fındık kurdu)"
      },
      {
        "kod": "81-89",
        "ad": "Olgunlaşma (zuruf kahverengi, hasat)"
      }
    ],
    "aylar": {
      "Ocak": "60-65 (ÇİÇEKLENME)",
      "Şubat": "65-69 (çiçeklenme sonu)",
      "Mart": "07-11 (tomurcuk patlama–yaprak)",
      "Nisan": "11-19 (yaprak gelişimi)",
      "Mayıs": "71-73 (meyve tutumu–zuruf gelişimi)",
      "Haziran": "73-77 (meyve büyüme–iç bağlama)",
      "Temmuz": "77-81 (iç dolum)",
      "Ağustos": "85-89 (olgunlaşma, hasat başı)",
      "Eylül": "89-92 (ana hasat)",
      "Ekim": "92-97 (yaprak dökümü)",
      "Kasım": "97-00 (dinlenmeye giriş)",
      "Aralık": "00-51 (dinlenme, çiçek öncesi)"
    }
  },
  "Ceviz": {
    "olcek": "Ceviz (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–tomurcuk patlama"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak açımı"
      },
      {
        "kod": "61-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-79",
        "ad": "Meyve gelişimi"
      },
      {
        "kod": "75-79",
        "ad": "İç dolum (KRİTİK su)"
      },
      {
        "kod": "85-89",
        "ad": "Zuruf çatlama (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme)",
      "Şubat": "00-01 (dinlenme sonu)",
      "Mart": "01-09 (tomurcuk kabarma–patlama)",
      "Nisan": "10-19 / 61-65 (yaprak açımı–çiçeklenme)",
      "Mayıs": "69-71 (çiçek sonu–meyve tutumu)",
      "Haziran": "73-75 (meyve büyüme)",
      "Temmuz": "77-79 (iç dolum)",
      "Ağustos": "81-85 (iç sertleşme–olgunlaşma)",
      "Eylül": "87-89 (zuruf çatlama, hasat)",
      "Ekim": "89-92 (hasat sonu–yaprak dökümü)",
      "Kasım": "93-97 (yaprak dökümü)",
      "Aralık": "00 (dinlenme)"
    }
  },
  "Badem": {
    "olcek": "Sert çekirdekli (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–tomurcuk kabarma"
      },
      {
        "kod": "51-59",
        "ad": "Çiçek tomurcuğu (don riski)"
      },
      {
        "kod": "60-69",
        "ad": "ÇİÇEKLENME (Şubat, çok erken)"
      },
      {
        "kod": "71-79",
        "ad": "Meyve gelişimi"
      },
      {
        "kod": "81-85",
        "ad": "İç sertleşme"
      },
      {
        "kod": "87-89",
        "ad": "Kavlıca çatlama (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "00-51 (dinlenme–tomurcuk kabarma)",
      "Şubat": "57-65 (ÇİÇEKLENME, geç don riski)",
      "Mart": "65-71 (çiçek sonu–meyve tutumu)",
      "Nisan": "71-73 (meyve gelişimi)",
      "Mayıs": "75-79 (meyve dolumu)",
      "Haziran": "81-85 (iç sertleşme)",
      "Temmuz": "85-87 (olgunlaşma)",
      "Ağustos": "87-89 (kavlıca çatlama, hasat)",
      "Eylül": "89-92 (hasat sonu)",
      "Ekim": "93-95 (yaprak dökümü)",
      "Kasım": "97-00",
      "Aralık": "00 (dinlenme)"
    }
  },
  "Elma": {
    "olcek": "Yumuşak çekirdekli (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00",
        "ad": "Dinlenme"
      },
      {
        "kod": "53",
        "ad": "Tomurcuk patlama"
      },
      {
        "kod": "54",
        "ad": "Fare kulağı"
      },
      {
        "kod": "57",
        "ad": "PEMBE TOMURCUK (karaleke kritik)"
      },
      {
        "kod": "65",
        "ad": "TAM ÇİÇEK (ateş yanıklığı riski)"
      },
      {
        "kod": "69",
        "ad": "Taç yaprak dökümü"
      },
      {
        "kod": "71-79",
        "ad": "Meyve tutumu–gelişimi (iç kurdu)"
      },
      {
        "kod": "87-89",
        "ad": "Hasat olgunluğu"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme, budama)",
      "Şubat": "00-01 (tomurcuk kabarma öncesi)",
      "Mart": "01-53 (kabarma–tomurcuk patlama)",
      "Nisan": "54-69 (fare kulağı–pembe tomurcuk–TAM ÇİÇEK–taç dökümü)",
      "Mayıs": "71-73 (meyve tutumu, seyreltme)",
      "Haziran": "74-77 (meyve büyüme)",
      "Temmuz": "77-81 (meyve şişme)",
      "Ağustos": "81-87 (olgunlaşma, erkenci hasat)",
      "Eylül": "87-89 (ana hasat)",
      "Ekim": "89-92 (geççi hasat)",
      "Kasım": "93-97 (yaprak dökümü)",
      "Aralık": "97-00 (dinlenme)"
    }
  },
  "Armut": {
    "olcek": "Yumuşak çekirdekli (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00",
        "ad": "Dinlenme"
      },
      {
        "kod": "53",
        "ad": "Tomurcuk patlama"
      },
      {
        "kod": "56-57",
        "ad": "Beyaz tomurcuk"
      },
      {
        "kod": "65",
        "ad": "TAM ÇİÇEK (ateş yanıklığı KRİTİK)"
      },
      {
        "kod": "69",
        "ad": "Taç yaprak dökümü"
      },
      {
        "kod": "71-79",
        "ad": "Meyve gelişimi (psillid)"
      },
      {
        "kod": "87-89",
        "ad": "Hasat olgunluğu"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme, budama)",
      "Şubat": "00-01",
      "Mart": "01-53 (kabarma–patlama, psillid)",
      "Nisan": "54-69 (tomurcuk–TAM ÇİÇEK–taç dökümü)",
      "Mayıs": "71-73 (meyve tutumu)",
      "Haziran": "74-77 (meyve büyüme)",
      "Temmuz": "77-81 (meyve şişme)",
      "Ağustos": "81-87 (erkenci hasat)",
      "Eylül": "87-89 (ana hasat)",
      "Ekim": "89-92 (geççi hasat)",
      "Kasım": "93-97 (yaprak dökümü)",
      "Aralık": "97-00"
    }
  },
  "Kayısı": {
    "olcek": "Sert çekirdekli (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00",
        "ad": "Dinlenme"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuk kabarma (GEÇ DON riski)"
      },
      {
        "kod": "60-65",
        "ad": "ÇİÇEKLENME (monilya KRİTİK)"
      },
      {
        "kod": "69",
        "ad": "Taç yaprak dökümü"
      },
      {
        "kod": "71-79",
        "ad": "Meyve gelişimi"
      },
      {
        "kod": "81-89",
        "ad": "Olgunlaşma (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme, budama)",
      "Şubat": "00-51 (tomurcuk kabarma)",
      "Mart": "57-69 (ÇİÇEKLENME, geç don + monilya)",
      "Nisan": "71-73 (meyve tutumu)",
      "Mayıs": "75-79 (meyve hızlı büyüme)",
      "Haziran": "81-87 (olgunlaşma, erkenci hasat)",
      "Temmuz": "87-89 (ana hasat)",
      "Ağustos": "91-92 (hasat sonrası, göz oluşumu)",
      "Eylül": "92-93",
      "Ekim": "93-97 (yaprak dökümü)",
      "Kasım": "97-00",
      "Aralık": "00 (dinlenme)"
    }
  },
  "Şeftali": {
    "olcek": "Sert çekirdekli (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00",
        "ad": "Dinlenme"
      },
      {
        "kod": "01-53",
        "ad": "Tomurcuk kabarma (kıvırcıklık ilacı SON şans)"
      },
      {
        "kod": "57",
        "ad": "Pembe tomurcuk"
      },
      {
        "kod": "65",
        "ad": "TAM ÇİÇEK"
      },
      {
        "kod": "69",
        "ad": "Taç yaprak dökümü (seyreltme)"
      },
      {
        "kod": "71-79",
        "ad": "Meyve gelişimi (güve)"
      },
      {
        "kod": "81-89",
        "ad": "Olgunlaşma (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme, budama)",
      "Şubat": "00-53 (tomurcuk kabarma — KIVIRCIKLIK bakır zamanı)",
      "Mart": "57-69 (pembe tomurcuk–TAM ÇİÇEK)",
      "Nisan": "71-73 (meyve tutumu, seyreltme)",
      "Mayıs": "74-77 (meyve büyüme)",
      "Haziran": "77-85 (meyve şişme, erkenci hasat)",
      "Temmuz": "87-89 (ana hasat)",
      "Ağustos": "87-89 (geççi çeşit hasadı)",
      "Eylül": "89-92 (hasat sonu)",
      "Ekim": "93-95 (yaprak dökümü — bakır)",
      "Kasım": "97-00",
      "Aralık": "00 (dinlenme)"
    }
  },
  "Bağ / Asma (Üzüm)": {
    "olcek": "Asma (Lorenz 1994, BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-05",
        "ad": "Dinlenme–gözyaşı"
      },
      {
        "kod": "09-19",
        "ad": "Sürgün/yaprak gelişimi"
      },
      {
        "kod": "53-57",
        "ad": "Salkım görünür (mildiyö koruma başlangıcı)"
      },
      {
        "kod": "61-69",
        "ad": "ÇİÇEKLENME (en hassas dönem)"
      },
      {
        "kod": "71-79",
        "ad": "Koruk gelişimi (75: bezelye iriliği)"
      },
      {
        "kod": "81-85",
        "ad": "BEN DÜŞME (veraison)"
      },
      {
        "kod": "89",
        "ad": "Hasat olgunluğu"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme, KIŞ BUDAMASI)",
      "Şubat": "00-01 (budama sonu)",
      "Mart": "05-09 (gözyaşı–göz patlama)",
      "Nisan": "11-19 (sürgün/yaprak gelişimi, ilk ilaç)",
      "Mayıs": "53-61 (salkım görünür–çiçeklenme başı)",
      "Haziran": "65-75 (ÇİÇEKLENME–koruk, en yoğun program)",
      "Temmuz": "77-81 (tane büyüme–ben düşme öncesi)",
      "Ağustos": "83-89 (ben düşme–olgunlaşma, erkenci hasat)",
      "Eylül": "89 (ana hasat)",
      "Ekim": "89-92 (geççi hasat–yaprak dökümü)",
      "Kasım": "93-97 (yaprak dökümü)",
      "Aralık": "00 (dinlenme, budama)"
    }
  },
  "Üzümsü Meyveler (Böğürtlen/Ahududu/Yaban Mersini/Çilek)": {
    "olcek": "Üzümsü/çilek (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–sürgün başlangıcı"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "55-59",
        "ad": "Çiçek tomurcuğu (balon dönemi)"
      },
      {
        "kod": "60-69",
        "ad": "ÇİÇEKLENME (Botrytis KRİTİK)"
      },
      {
        "kod": "71-79",
        "ad": "Meyve gelişimi"
      },
      {
        "kod": "81-89",
        "ad": "Olgunlaşma–hasat (D. suzukii)"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme, budama)",
      "Şubat": "00-09 (budama sonu)",
      "Mart": "09-19 (sürgün–yaprak gelişimi, dikim)",
      "Nisan": "19-57 (yaprak–çiçek tomurcuğu)",
      "Mayıs": "60-69 (ÇİÇEKLENME, Botrytis)",
      "Haziran": "71-85 (meyve gelişimi–hasat başı)",
      "Temmuz": "87-89 (ana hasat, D. suzukii)",
      "Ağustos": "87-89 (geççi/sonbahar çeşit hasadı)",
      "Eylül": "89-92 (hasat sonu)",
      "Ekim": "92-95 (yaprak dökümü)",
      "Kasım": "97-00 (kışa hazırlık)",
      "Aralık": "00 (dinlenme)"
    }
  },
  "Lavanta": {
    "olcek": "Aromatik çalı (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–sürgün başlangıcı"
      },
      {
        "kod": "30-39",
        "ad": "Sürgün uzaması"
      },
      {
        "kod": "51-59",
        "ad": "Başak/tomurcuk oluşumu"
      },
      {
        "kod": "60-65",
        "ad": "ÇİÇEKLENME (%50 açık: yağ hasadı)"
      },
      {
        "kod": "67-69",
        "ad": "Çiçek sonu (kuru çiçek kalitesi düşer)"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme)",
      "Şubat": "00-09 (budama)",
      "Mart": "09-19 (sürgün–yaprak)",
      "Nisan": "30-39 (sürgün uzaması)",
      "Mayıs": "51-57 (tomurcuk oluşumu)",
      "Haziran": "60-65 (çiçeklenme, hasat başı)",
      "Temmuz": "65-69 (TAM ÇİÇEK, ana hasat)",
      "Ağustos": "69-91 (hasat sonrası budama)",
      "Eylül": "91-93",
      "Ekim": "93-97",
      "Kasım": "97-00",
      "Aralık": "00 (dinlenme)"
    }
  },
  "Kekik": {
    "olcek": "Aromatik (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–sürgün"
      },
      {
        "kod": "30-39",
        "ad": "Sürgün uzaması"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma"
      },
      {
        "kod": "60-65",
        "ad": "ÇİÇEKLENME BAŞI (karvakrol zirvede: hasat)"
      },
      {
        "kod": "69-89",
        "ad": "Çiçek sonu–tohum"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme)",
      "Şubat": "00-09 (budama)",
      "Mart": "09-19 (sürgün, tesis)",
      "Nisan": "30-39 (sürgün uzaması)",
      "Mayıs": "51-59 (tomurcuklanma)",
      "Haziran": "60-65 (çiçeklenme başı, 1. hasat)",
      "Temmuz": "65-69 (hasat/kurutma)",
      "Ağustos": "30-65 (2. biçim)",
      "Eylül": "91-93",
      "Ekim": "93-97",
      "Kasım": "97-00",
      "Aralık": "00"
    }
  },
  "Adaçayı": {
    "olcek": "Aromatik (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–sürgün"
      },
      {
        "kod": "30-39",
        "ad": "Sürgün uzaması"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma (yaprak drog hasadı)"
      },
      {
        "kod": "60-69",
        "ad": "ÇİÇEKLENME (uçucu yağ zirvede)"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme)",
      "Şubat": "00-09 (budama)",
      "Mart": "09-19 (sürgün, tesis)",
      "Nisan": "30-39",
      "Mayıs": "51-59 (tomurcuk, ilk hasat)",
      "Haziran": "60-69 (çiçeklenme, ana hasat)",
      "Temmuz": "69-30 (hasat/yeniden sürme)",
      "Ağustos": "30-60 (2. biçim)",
      "Eylül": "91-93",
      "Ekim": "93-97",
      "Kasım": "97-00",
      "Aralık": "00"
    }
  },
  "Nane": {
    "olcek": "Nane (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Rizom dinlenme–sürgün"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "30-39",
        "ad": "Sap uzaması"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma"
      },
      {
        "kod": "60-65",
        "ad": "ÇİÇEKLENME BAŞI (mentol zirvede: hasat)"
      }
    ],
    "aylar": {
      "Ocak": "00 (rizom dinlenme)",
      "Şubat": "00-09",
      "Mart": "09-19 (rizom dikimi–çıkış)",
      "Nisan": "19-30 (yaprak–sap uzaması)",
      "Mayıs": "31-51 (sap uzaması–tomurcuk)",
      "Haziran": "60-65 (çiçeklenme başı, 1. biçim)",
      "Temmuz": "30-65 (yeniden sürme–2. biçim)",
      "Ağustos": "30-65 (2-3. biçim)",
      "Eylül": "30-65 (son biçim)",
      "Ekim": "91-93 (rizom bölme)",
      "Kasım": "93-97",
      "Aralık": "00"
    }
  },
  "Fesleğen": {
    "olcek": "Fesleğen (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme (fidelik)"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi (taze hasat)"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma (çiçek koparma)"
      },
      {
        "kod": "60-69",
        "ad": "ÇİÇEKLENME (yağ için hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—(fidelik planı)",
      "Şubat": "00-09 (serada fidelik)",
      "Mart": "10-14 (fide büyütme)",
      "Nisan": "14-19 (fide dikimi)",
      "Mayıs": "19-30 (ana dikim–yaprak gelişimi)",
      "Haziran": "31-51 (taze hasat, uç alma)",
      "Temmuz": "51-65 (sürekli hasat / yağ için çiçek başı)",
      "Ağustos": "65-69 (tam çiçek, yağ hasadı)",
      "Eylül": "69-89 (son hasatlar)",
      "Ekim": "97 (ilk don, sezon sonu)",
      "Kasım": "—",
      "Aralık": "—"
    }
  },
  "Biberiye": {
    "olcek": "Aromatik çalı (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–sürgün"
      },
      {
        "kod": "30-39",
        "ad": "Sürgün uzaması (hasat)"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme (yağ hasadı)"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme)",
      "Şubat": "00-09 (budama)",
      "Mart": "09-30 (sürgün, tesis)",
      "Nisan": "30-60 (sürgün–ilkbahar çiçeklenme)",
      "Mayıs": "30-65 (sürgün hasadı)",
      "Haziran": "60-69 (çiçeklenme, yağ hasadı)",
      "Temmuz": "30-39 (sürgün hasadı)",
      "Ağustos": "30-39",
      "Eylül": "30-39",
      "Ekim": "91-93",
      "Kasım": "93-97",
      "Aralık": "00"
    }
  },
  "Oğulotu (Melisa)": {
    "olcek": "Aromatik (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–sürgün"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "30-39",
        "ad": "Sap uzaması"
      },
      {
        "kod": "51-59",
        "ad": "ÇİÇEK ÖNCESİ (aroma zirvede: hasat)"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme (aroma düşer)"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme)",
      "Şubat": "00-09",
      "Mart": "09-19 (sürgün, tesis)",
      "Nisan": "19-31 (yaprak–sap uzaması)",
      "Mayıs": "51-59 (çiçek öncesi, 1. hasat)",
      "Haziran": "59-65 (hasat)",
      "Temmuz": "30-59 (2. biçim)",
      "Ağustos": "30-59 (3. biçim)",
      "Eylül": "30-59 (son biçim)",
      "Ekim": "91-93 (kök bölme)",
      "Kasım": "93-97",
      "Aralık": "00"
    }
  },
  "Kimyon": {
    "olcek": "Şemsiyeli/baharat (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Şemsiye oluşumu"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme (külleme riski)"
      },
      {
        "kod": "71-89",
        "ad": "Tohum dolumu–olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—(toprak hazırlığı)",
      "Mart": "00-13 (ekim–çıkış)",
      "Nisan": "13-19 (yaprak gelişimi)",
      "Mayıs": "51-65 (şemsiye–çiçeklenme)",
      "Haziran": "71-85 (tohum dolumu)",
      "Temmuz": "87-99 (olum, hasat)",
      "Ağustos": "99",
      "Eylül": "—",
      "Ekim": "—",
      "Kasım": "—",
      "Aralık": "—"
    }
  },
  "Anason": {
    "olcek": "Şemsiyeli/baharat (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış (yavaş)"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Şemsiye oluşumu"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-89",
        "ad": "Tohum dolumu–olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—(toprak hazırlığı)",
      "Mart": "00-13 (ekim–çıkış)",
      "Nisan": "13-19 (yaprak gelişimi)",
      "Mayıs": "51-61 (şemsiye–çiçeklenme başı)",
      "Haziran": "65-79 (çiçeklenme–tohum bağlama)",
      "Temmuz": "81-87 (tohum dolumu)",
      "Ağustos": "89-99 (olum, hasat)",
      "Eylül": "99",
      "Ekim": "—",
      "Kasım": "—",
      "Aralık": "—"
    }
  },
  "Rezene": {
    "olcek": "Şemsiyeli/baharat (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Şemsiye oluşumu"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-89",
        "ad": "Tohum dolumu–olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "00 (çok yıllıkta dinlenme)",
      "Şubat": "00-09",
      "Mart": "00-13 (ekim/dikim–çıkış)",
      "Nisan": "13-19 (yaprak gelişimi)",
      "Mayıs": "51-61 (şemsiye–çiçek başı)",
      "Haziran": "65-79 (çiçeklenme–tohum bağlama)",
      "Temmuz": "81-87 (tohum dolumu)",
      "Ağustos": "89-99 (hasat)",
      "Eylül": "91-93",
      "Ekim": "93-97",
      "Kasım": "97-00",
      "Aralık": "00"
    }
  },
  "Çörekotu": {
    "olcek": "Çörekotu (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-89",
        "ad": "Kapsül dolumu–olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—(toprak hazırlığı)",
      "Mart": "00-13 (ekim–çıkış)",
      "Nisan": "13-19 (yaprak gelişimi)",
      "Mayıs": "51-65 (tomurcuk–çiçeklenme)",
      "Haziran": "71-85 (kapsül dolumu)",
      "Temmuz": "87-99 (olum, hasat)",
      "Ağustos": "99",
      "Eylül": "—",
      "Ekim": "—",
      "Kasım": "—",
      "Aralık": "—"
    }
  },
  "Kişniş": {
    "olcek": "Şemsiyeli/baharat (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme–çıkış"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi (taze hasat)"
      },
      {
        "kod": "51-59",
        "ad": "Şemsiye oluşumu (sıcakta erken: bolting)"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme"
      },
      {
        "kod": "71-89",
        "ad": "Tohum dolumu–olum (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—",
      "Şubat": "—(hazırlık)",
      "Mart": "00-13 (erken ekim–çıkış)",
      "Nisan": "13-19 (yaprak, taze hasat)",
      "Mayıs": "51-61 (şemsiye–çiçek; bolting riski)",
      "Haziran": "71-87 (tohum dolumu–olum)",
      "Temmuz": "89-99 (tohum hasadı)",
      "Ağustos": "—(sonbahar ekim planı)",
      "Eylül": "00-13 (sonbahar ekimi)",
      "Ekim": "13-19 (taze yaprak hasadı)",
      "Kasım": "13-19 (ılıman bölge)",
      "Aralık": "—"
    }
  },
  "Ihlamur": {
    "olcek": "Orman ağacı (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–tomurcuk patlama"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak açımı"
      },
      {
        "kod": "60-65",
        "ad": "ÇİÇEKLENME (hasat penceresi ÇOK KISA)"
      },
      {
        "kod": "67-69",
        "ad": "Çiçek sonu (drog kalitesi düşer)"
      },
      {
        "kod": "71-89",
        "ad": "Meyve gelişimi"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme, budama)",
      "Şubat": "00-01",
      "Mart": "01-09 (tomurcuk kabarma–patlama)",
      "Nisan": "10-19 (yaprak açımı)",
      "Mayıs": "51-59 (çiçek tomurcuğu)",
      "Haziran": "60-65 (ÇİÇEK HASADI — kısa pencere)",
      "Temmuz": "65-71 (geç bölge hasadı–çiçek sonu)",
      "Ağustos": "75-81 (meyve gelişimi)",
      "Eylül": "85-89",
      "Ekim": "92-95 (yaprak dökümü)",
      "Kasım": "95-97",
      "Aralık": "00 (dinlenme)"
    }
  },
  "Ekinezya": {
    "olcek": "Çok yıllık tıbbi (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Dinlenme–sürgün"
      },
      {
        "kod": "10-19",
        "ad": "Rozet/yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Tomurcuklanma"
      },
      {
        "kod": "60-69",
        "ad": "TAM ÇİÇEK (herba hasadı)"
      },
      {
        "kod": "91-97",
        "ad": "Yaprak kuruma (KÖK hasadı)"
      }
    ],
    "aylar": {
      "Ocak": "00 (dinlenme)",
      "Şubat": "00-09 (fidelik)",
      "Mart": "09-19 (fide dikimi–rozet)",
      "Nisan": "19-31 (yaprak gelişimi)",
      "Mayıs": "51-59 (tomurcuklanma)",
      "Haziran": "60-69 (TAM ÇİÇEK, herba hasadı)",
      "Temmuz": "65-69 (herba hasadı)",
      "Ağustos": "69-89 (geç hasat)",
      "Eylül": "89-91 (kök depolama)",
      "Ekim": "93-97 (KÖK HASADI)",
      "Kasım": "97-00",
      "Aralık": "00"
    }
  },
  "Kırmızıbiber (Baharatlık)": {
    "olcek": "Biber/patlıcangiller (BBCH 00-99)",
    "anahtar": [
      {
        "kod": "00-09",
        "ad": "Çimlenme (fidelik)"
      },
      {
        "kod": "10-19",
        "ad": "Yaprak gelişimi"
      },
      {
        "kod": "51-59",
        "ad": "Çiçek tomurcuğu"
      },
      {
        "kod": "60-69",
        "ad": "Çiçeklenme (su stresi çiçek döker)"
      },
      {
        "kod": "71-79",
        "ad": "Meyve gelişimi (Ca: çiçek burnu çürüklüğü)"
      },
      {
        "kod": "81-89",
        "ad": "Kızarma–olgunlaşma (hasat)"
      }
    ],
    "aylar": {
      "Ocak": "—(fidelik planı)",
      "Şubat": "00-09 (serada fidelik)",
      "Mart": "10-14 (fide büyütme)",
      "Nisan": "14-19 (fide hazır)",
      "Mayıs": "19-51 (dikim–çiçek tomurcuğu)",
      "Haziran": "60-71 (çiçeklenme–meyve tutumu)",
      "Temmuz": "73-81 (meyve dolumu)",
      "Ağustos": "85-87 (kızarma, hasat başı)",
      "Eylül": "87-89 (ana hasat)",
      "Ekim": "89-97 (son hasat, don)",
      "Kasım": "—",
      "Aralık": "—"
    }
  }
};


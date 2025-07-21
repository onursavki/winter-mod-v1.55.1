// ATS ve ETS2 Kış Modu Bağlantı Verileri
const modsData = {
    ats: [
        { title: "Reklamsız İndir", url: "https://www.fatfreecartpro.com/i/14f4h?card", description: "(Reklamsız indirme - 1$ maliyeti var. - Tüm eklentileri içerir.)" },
        { title: "Ücretsiz İndir", url: "https://sharemods.com/9140ydza3a5r/frosty_ats_v5_5.scs.html", description: "(Reklamlarla ücretsiz indirin.)" },
        
        // { isHeader: true, title: "Hata Düzeltme ve Geliştirmeler" }, // BAŞLIK
        // { title: "Geliştirilmiş Kar Yağışı", url: "https://sharemods.com/ypmy4tpi8w2k/frosty_v5_3_improved_snowfall_v2.scs.html", description: "(Frosty v5.3 için geliştirilmiş kar yağışı.)" },
        
        { isHeader: true, title: "İsteğe Bağlı Eklentiler" }, // BAŞLIK
        { title: "Donmuş Tekerlekler", url: "https://sharemods.com/hg41klm6pu61/frosty_wheels_5_5_ats.scs.html", description: "(Araç tekerleklerine buz ekler.)" },
        { title: "Temiz Yollar", url: "https://sharemods.com/tqm7yu9uc6ra/frosty_v5_5_ats_clean_roads.scs.html", description: "(Kar kaplamasını azaltır, daha temiz yollar sağlar.)" },
        { title: "Kış Fiziği", url: "https://sharemods.com/mxk2ktpzivsq/frosty_physics_ats_5_5.scs.html", description: "(Yolları biraz daha kaygan hale getirir.)" },
        
        { isHeader: true, title: "Diğer Paketler" }, // BAŞLIK
        { title: "Sezon Paketi", url: "https://www.fatfreecartpro.com/i/12dqe?card", description: "(İlkbahar, Yaz, Erken Sonbahar, Geç Sonbahar ve Kış'ı içerir - 2,99$ maliyeti var.)" }
    ],
    ets2: [
        { title: "Reklamsız İndir", url: "https://www.fatfreecartpro.com/i/14et3?card", description: "(Reklamsız indirme - 1$ maliyeti var. - Tüm eklentileri içerir.)" },
        { title: "Ücretsiz İndir", url: "https://sharemods.com/412fu2gcyz7u/frosty_v10_2.scs.html", description: "(Reklamlarla ücretsiz indirin.)" },
        
        // { isHeader: true, title: "Hata Düzeltme ve Geliştirmeler" }, // BAŞLIK
        // { title: "İyileştirme ve Düzeltme Paketi", url: "https://sharemods.com/nm9rfm8fgcqx/frosty_v10_improvements_fixes_pack_v2.scs.html", description: "(Frosty v10 için kar yağışı ve hata düzeltmeleri iyileştirildi.)" },
        
        { isHeader: true, title: "İsteğe Bağlı Eklentiler" }, // BAŞLIK
        { title: "Donmuş Tekerlekler", url: "https://sharemods.com/l30l2zfwrndy/frosty_wheels_10_2.scs.html", description: "(Araç tekerleklerine buz ekler.)" },
        { title: "Temiz Yollar", url: "https://sharemods.com/9uixps8lqrrz/frosty_v10_2_clean_roads.scs.html", description: "(Kar kaplamasını azaltır, daha temiz yollar sağlar.)" },
        { title: "Kış Fiziği", url: "https://sharemods.com/mqk7rzon4eb2/frosty_physics_10_2.scs.html", description: "(Yolları biraz daha kaygan hale getirir.)" },
        
        { isHeader: true, title: "Diğer Paketler" }, // BAŞLIK
        { title: "Sezon Paketi", url: "https://www.fatfreecartpro.com/i/12edw?card", description: "(İlkbahar, Yaz, Erken Sonbahar, Geç Sonbahar ve Kış'ı içerir - 2,99$ maliyeti var.)" }
    ]
};

// Versiyonları tanımla
const atsVersion = "5.5";
const ets2Version = "10.2";

// Oyun versiyonları
const atsGameVersion = "1.55";
const ets2GameVersion = "1.55";

// Dinamik başlıkları (h5) yerleştirme
const atsTitles = {
    atsFrosty: "frosty_ats_v5_5.scs",
    atsWinter: "frosty_heavy_winter_v5_5.scs",
    atsWheels: "frosty_wheels_5_5_ats.scs",
    atsClean: "frosty_v5_5_clean_roads.scs",
    atsPhysics: "frosty_physics_ats_5_5.scs"
};

const etsTitles = {
    etsFrosty: "frosty_v10_2.scs",
    etsWinter: "frosty_heavy_winter_v10_2.scs",
    etsWheels: "frosty_wheels_10_2.scs",
    etsClean: "frosty_v10_2_clean_roads.scs",
    etsPhysics: "frosty_physics_10_2.scs"
};

// h5 başlıklarını yerleştir
applyTitles(atsTitles);
applyTitles(etsTitles);

// Linkleri HTML yapısına dönüştüren fonksiyon
function createModLinks(containerId, modLinks, version) {
    const container = document.getElementById(containerId);
    const list = document.createElement('ul');

    modLinks.forEach(link => {
        if (link.isHeader) {
            const header = document.createElement('h5');
            header.textContent = link.title;
            header.classList.add('optional-header');
            list.appendChild(header);
        } else {
            const listItem = document.createElement('li');
            const paragraph = document.createElement('p');
            const linkElement = document.createElement('a');
            linkElement.href = link.url;

            // Tüm başlıklara "- v{version}" ekle
            linkElement.textContent = `${link.title} - v${version}`;
            linkElement.target = "_blank";

            paragraph.appendChild(linkElement);
            listItem.appendChild(paragraph);

            // Açıklama ekleme (varsa)
            if (link.description) {
                const description = document.createElement('small');
                description.textContent = link.description;
                description.style.display = "block";
                description.style.color = "#919191";
                listItem.appendChild(description);
            }

            list.appendChild(listItem);
        }
    });

    container.appendChild(list);
}

// ATS başlığına versiyon ekle
const atsTitle = document.querySelector("h2.ats-gameVersion");
if (atsTitle) {
    atsTitle.textContent += ` - v${atsGameVersion}`;
}

// ETS2 başlığına versiyon ekle
const ets2Title = document.querySelector("h2.ets-gameVersion");
if (ets2Title) {
    ets2Title.textContent += ` - v${ets2GameVersion}`;
}

// ATS ve ETS2 mod bağlantılarını HTML sayfasına ekle
createModLinks("atsContainer", modsData.ats, atsVersion);
createModLinks("ets2Container", modsData.ets2, ets2Version);

function applyTitles(titleMap) {
    for (const id in titleMap) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = titleMap[id];
        }
    }
}

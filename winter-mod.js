// ATS ve ETS2 Kış Modu Bağlantı Verileri
const modsData = {
    ats: [
        { title: "Reklamsız İndir", url: "https://www.fatfreecartpro.com/i/142dq?card", description: "(Reklamsız indirme - 1$ maliyeti var. - Tüm eklentileri içerir.)" },
        { title: "Ücretsiz İndir", url: "https://sharemods.com/z76cj621a3sr/frosty_ats_v5_3.scs.html", description: "(Reklamlarla ücretsiz indirin.)" },
        { isHeader: true, title: "Hata Düzeltme ve Geliştirmeler" }, // BAŞLIK
        { title: "Geliştirilmiş Kar Yağışı", url: "https://sharemods.com/ypmy4tpi8w2k/frosty_v5_3_improved_snowfall_v2.scs.html", description: "(Frosty v5.3 için geliştirilmiş kar yağışı.)" },
        { isHeader: true, title: "İsteğe Bağlı Eklentiler" }, // BAŞLIK
        { title: "Donmuş Tekerlekler", url: "https://sharemods.com/mnvunbcw2sf6/frosty_wheels_5_3_ats.scs.html", description: "(Araç tekerleklerine buz ekler.)" },
        { title: "Temiz Yollar", url: "https://sharemods.com/xeyg7q98l8xk/frosty_v5_3_ats_clean_roads.scs.html", description: "(Kar kaplamasını azaltır, daha temiz yollar sağlar.)" },
        { title: "Kış Fiziği", url: "https://sharemods.com/irvxqs0wrk6g/frosty_physics_ats_5_3.scs.html", description: "(Yolları biraz daha kaygan hale getirir.)" },
        { isHeader: true, title: "Diğer Paketler" }, // BAŞLIK
        { title: "Sezon Paketi", url: "https://www.fatfreecartpro.com/i/12dqe?card", description: "(İlkbahar, Yaz, Erken Sonbahar, Geç Sonbahar ve Kış'ı içerir - 2,99$ maliyeti var.)" }
    ],
    ets2: [
        { title: "Reklamsız İndir", url: "https://www.fatfreecartpro.com/i/149ut?card", description: "(Reklamsız indirme - 1$ maliyeti var. - Tüm eklentileri içerir.)" },
        { title: "Ücretsiz İndir", url: "https://sharemods.com/wnvjr6h8ujzr/frosty_v10_1.scs.html", description: "(Reklamlarla ücretsiz indirin.)" },
        // { isHeader: true, title: "Hata Düzeltme ve Geliştirmeler" }, // BAŞLIK
        // { title: "İyileştirme ve Düzeltme Paketi", url: "https://sharemods.com/nm9rfm8fgcqx/frosty_v10_improvements_fixes_pack_v2.scs.html", description: "(Frosty v10 için kar yağışı ve hata düzeltmeleri iyileştirildi.)" },
        { isHeader: true, title: "İsteğe Bağlı Eklentiler" }, // BAŞLIK
        { title: "Donmuş Tekerlekler", url: "https://sharemods.com/jybsnohhtvqj/frosty_wheels_10_1.scs.html", description: "(Araç tekerleklerine buz ekler.)" },
        { title: "Temiz Yollar", url: "https://sharemods.com/dk57mqhph7hu/frosty_v10_1_clean_roads.scs.html", description: "(Kar kaplamasını azaltır, daha temiz yollar sağlar.)" },
        { title: "Kış Fiziği", url: "https://sharemods.com/4y02p8qyudkk/frosty_physics_10_1.scs.html", description: "(Yolları biraz daha kaygan hale getirir.)" },
        { isHeader: true, title: "Diğer Paketler" }, // BAŞLIK
        { title: "Sezon Paketi", url: "https://www.fatfreecartpro.com/i/12edw?card", description: "(İlkbahar, Yaz, Erken Sonbahar, Geç Sonbahar ve Kış'ı içerir - 2,99$ maliyeti var.)" }
    ]
};

// Linkleri HTML yapısına dönüştüren fonksiyon
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

// Başlıklara versiyon eklemek için fonksiyon
function addVersionToHeader() {
    // ATS ve ETS başlıklarını class ile seç
    const atsHeader = document.querySelector('.ats');
    const etsHeader = document.querySelector('.ets');

    // Sabit versiyonları tanımla (mod versiyonlarından bağımsız)
    const atsVersion = "v1.53";  // Sabit ATS versiyonu
    const ets2Version = "v1.54";  // Sabit ETS versiyonu

    // Başlıkların sonuna versiyon ekle
    atsHeader.innerHTML = `American Truck Simulator <span class="version-text">- ${atsVersion}</span>`;
    etsHeader.innerHTML = `Euro Truck Simulator 2 <span class="version-text">- ${ets2Version}</span>`;
}

// Mod bağlantılarını da güncelle (mod versiyonları farklı olarak kalır)
createModLinks("atsContainer", modsData.ats, "5.3");
createModLinks("ets2Container", modsData.ets2, "10.1");

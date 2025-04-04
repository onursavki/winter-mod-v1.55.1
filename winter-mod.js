// ATS ve ETS2 Kış Modu Bağlantı Verileri
const modsData = {
    ats: [
        { title: "Ücretsiz İndir", url: "https://sharemods.com/z76cj621a3sr/frosty_ats_v5_3.scs.html", description: "(Reklamlarla ücretsiz indirin.)" },
        { title: "Reklamsız İndir", url: "https://www.fatfreecartpro.com/i/142dq?card", description: "(Reklamsız indirme - 1$ maliyeti var. - Tüm eklentileri içerir.)" },
        { isHeader: true, title: "Hata Düzeltme ve Geliştirmeler" },
        { title: "Geliştirilmiş Kar Yağışı", url: "https://sharemods.com/ypmy4tpi8w2k/frosty_v5_3_improved_snowfall_v2.scs.html", description: "(Frosty v5.3 için geliştirilmiş kar yağışı.)" },
        { isHeader: true, title: "İsteğe Bağlı Eklentiler" },
        { title: "Donmuş Tekerlekler", url: "https://sharemods.com/mnvunbcw2sf6/frosty_wheels_5_3_ats.scs.html", description: "(Araç tekerleklerine buz ekler.)" },
        { title: "Temiz Yollar", url: "https://sharemods.com/xeyg7q98l8xk/frosty_v5_3_ats_clean_roads.scs.html", description: "(Kar kaplamasını azaltır, daha temiz yollar sağlar.)" },
        { title: "Kış Fiziği", url: "https://sharemods.com/irvxqs0wrk6g/frosty_physics_ats_5_3.scs.html", description: "(Yolları biraz daha kaygan hale getirir.)" },
        { isHeader: true, title: "Diğer Paketler" },
        { title: "Sezon Paketi", url: "https://www.fatfreecartpro.com/i/12dqe?card", description: "(İlkbahar, Yaz, Erken Sonbahar, Geç Sonbahar ve Kış'ı içerir - 2,99$ maliyeti var.)" }
    ],
    ets2: [
        { title: "Ücretsiz İndir", url: "https://sharemods.com/ld93yqi0csxd/frosty_v10.scs.html", description: "(Reklamlarla ücretsiz indirin.)" },
        { title: "Reklamsız İndir", url: "https://www.fatfreecartpro.com/i/142kx?card", description: "(Reklamsız indirme - 1$ maliyeti var. - Tüm eklentileri içerir.)" },
        { isHeader: true, title: "Hata Düzeltme ve Geliştirmeler" },
        { title: "İyileştirme ve Düzeltme Paketi", url: "https://sharemods.com/nm9rfm8fgcqx/frosty_v10_improvements_fixes_pack_v2.scs.html", description: "(Frosty v10 için kar yağışı ve hata düzeltmeleri iyileştirildi.)" },
        { isHeader: true, title: "İsteğe Bağlı Eklentiler" },
        { title: "Donmuş Tekerlekler", url: "https://sharemods.com/i11l376hcfrg/frosty_wheels_10.scs.html", description: "(Araç tekerleklerine buz ekler.)" },
        { title: "Temiz Yollar", url: "https://sharemods.com/9uyf1vb03rh4/frosty_v10_clean_roads.scs.html", description: "(Kar kaplamasını azaltır, daha temiz yollar sağlar.)" },
        { title: "Kış Fiziği", url: "https://sharemods.com/04hpvibblpjf/frosty_physics_10.scs.html", description: "(Yolları biraz daha kaygan hale getirir.)" },
        { isHeader: true, title: "Diğer Paketler" },
        { title: "Sezon Paketi", url: "https://www.fatfreecartpro.com/i/12edw?card", description: "(İlkbahar, Yaz, Erken Sonbahar, Geç Sonbahar ve Kış'ı içerir - 2,99$ maliyeti var.)" }
    ]
};

// Linkleri HTML yapısına dönüştüren fonksiyon
function createModLinks(containerId, modLinks) {
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
            linkElement.textContent = link.title;
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

// ATS ve ETS2 mod bağlantılarını HTML sayfasına ekle
createModLinks("atsContainer", modsData.ats);
createModLinks("ets2Container", modsData.ets2);
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

            // Tüm başlıklara versiyonu ekle
            linkElement.textContent = `${link.title} v${version}`;
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

// Versiyonları tanımla
const atsVersion = "5.3";
const ets2Version = "10.1";

// ATS ve ETS2 mod bağlantılarını HTML sayfasına ekle
createModLinks("atsContainer", modsData.ats, atsVersion);
createModLinks("ets2Container", modsData.ets2, ets2Version);

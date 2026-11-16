

/**
 * 
 * @param {HTMLElement} parent 
 * @param {string} tagName 
 * @returns 
 */
function createChild(parent, tagName) {
    const child = document.createElement(tagName);
    parent.appendChild(child);
    return child;
}

async function appendFooter() {
    const body = document.getElementsByTagName("body")[0];
    const footer = document.createElement("footer");
    const footerContent = createChild(footer, "div");
    footerContent.textContent = "利用は自由です。";
    const license = createChild(footerContent, "a");
    license.href = "https://youtube.com/channel/UCwEMGDge-Oy6ubqcCBW6KyA?si=0bHFS4hIa3hxqifR";
    license.textContent = "からすYoutube";
    body.appendChild(footer);
}

/**
 * h2タグにaタグを挿入
 */
async function insertAtoH2() {
    const h1s = document.getElementsByTagName("h2");
    for(let h1 of h1s) {
        const text = h1.textContent;
        h1.textContent = "";
        const a = createChild(h1, "a");
        a.textContent = text;

        // IDをhrefへ
        a.href = "#" + h1.id;
    }
}


appendFooter();
insertAtoH2();
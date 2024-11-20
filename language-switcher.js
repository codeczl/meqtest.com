let currentLang = localStorage.getItem('lang') || 'zh';

function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateContent();
    updateLangButtons();
}

function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick.toString().includes(currentLang)) {
            btn.classList.add('active');
        }
    });
}

function updateContent() {
    // 更新所有带有 data-lang 属性的元素
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        const text = getNestedTranslation(translations[currentLang], key);
        if (text) element.textContent = text;
    });
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((p, c) => p && p[c], obj);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    updateLangButtons();
}); 
let semanticCore = {
    logo: {
        "ua": "Лого",
        "en": "Logo",
        "pl": "Logo",
        "jp": "ロゴ",
        "fr": "Logo",
        "lt": "Logotipas",
        "pt": "Logótipo",
        "es": "Logotipo",
        "hu": "Logó",
        "zh": "标志",
        "ar": "الشعار",
        "nl": "Logo"
    },
    home: {
        "ua": "Домашня",
        "en": "Home",
        "pl": "Strona główna",
        "jp": "ホーム",
        "fr": "Accueil",
        "lt": "Pagrindinis",
        "pt": "Início",
        "es": "Inicio",
        "hu": "Főoldal",
        "zh": "主页",
        "ar": "الصفحة الرئيسية",
        "nl": "Thuis"
    },
    about: {
        "ua": "Про нас",
        "en": "About",
        "pl": "O nas",
        "jp": "私たちについて",
        "fr": "À propos",
        "lt": "Apie mus",
        "pt": "Sobre",
        "es": "Acerca de",
        "hu": "Rólunk",
        "zh": "关于我们",
        "ar": "معلومات عنا",
        "nl": "Over ons"
    },
    contact: {
        "ua": "Контакти",
        "en": "Contact",
        "pl": "Kontakt",
        "jp": "お問い合わせ",
        "fr": "Contact",
        "lt": "Kontaktai",
        "pt": "Contacto",
        "es": "Contacto",
        "hu": "Kapcsolat",
        "zh": "联系我们",
        "ar": "اتصل بنا",
        "nl": "Contact"
    }
};


let allLang = ['en', 'ua'];
let lang = 'en';

ua.onclick = function () {
    lang = 'ua';
    changeURL();
}

en.onclick = function () {
    lang = 'en';
    changeURL();
}

function changeURL() {
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}
// changeURL();
function changeLanguage() {
    let hash = (window.location.hash).substring(1);
    console.log(hash);

    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    for (let key in semanticCore) {
        document.querySelector('.language-' + key).innerText = semanticCore[key][hash];
        console.log(key);
    }
}
changeLanguage();
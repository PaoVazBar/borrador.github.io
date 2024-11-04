document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang") || "es"; // Default to Spanish

    const translations = {
        es: {
            title: "Título en Español",
            content: "Este es un párrafo de ejemplo en español."
        },
        en: {
            title: "Title in English",
            content: "This is a sample paragraph in English."
        },
        fr: {
            title: "Titre en Français",
            content: "Ceci est un paragraphe d'exemple en français."
        }
    };

    document.getElementById("titulo").innerText = translations[lang].title;
    document.getElementById("contenido").innerText = translations[lang].content;
});
(() => {
    try {
        const saved = localStorage.getItem("tulaa-theme");
        if (saved) document.documentElement.dataset.theme = saved;
    } catch { }
    window.toggleTheme = function toggleTheme() {
        const current = document.documentElement.dataset.theme || "light";
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem("tulaa-theme", next); } catch { }
    };
})();
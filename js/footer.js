/* ==================================================
   Footer – Last updated from GitHub
================================================== */
(async function () {
    const el = document.getElementById("lastUpdated");
    if (!el) return;

    try {
        const res = await fetch(
            "https://api.github.com/repos/yilmazgokhan/yilmazgokhan.github.io/commits?per_page=1"
        );

        if (!res.ok) return;

        const data = await res.json();
        const date = new Date(data[0].commit.committer.date);

        const formatted = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

        el.textContent = `Last updated: ${formatted}`;
        el.hidden = false;
    } catch (e) {
        // fail silently
    }
})();

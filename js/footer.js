/* ==================================================
   Footer – Last updated (ETag-aware + fallback)
   ================================================== */
(async function () {
    const el = document.getElementById("lastUpdated");
    if (!el) return;

    const STORAGE_KEY_ETAG = "gh-last-updated-etag";
    const STORAGE_KEY_DATE = "gh-last-updated-date";

    const showDate = (date) => {
        el.textContent = `Last updated: ${date}`;
        el.hidden = false;
    };

    /* =========================
       0️⃣ Cached value (instant)
       ========================= */
    const cachedDate = localStorage.getItem(STORAGE_KEY_DATE);
    if (cachedDate) {
        showDate(cachedDate);
    }

    /* =========================
       1️⃣ Try GitHub API (ETag)
       ========================= */
    try {
        const headers = {};
        const cachedEtag = localStorage.getItem(STORAGE_KEY_ETAG);

        if (cachedEtag) {
            headers["If-None-Match"] = cachedEtag;
        }

        const res = await fetch(
            "https://api.github.com/repos/yilmazgokhan/yilmazgokhan.github.io/commits?per_page=1",
            {
                headers,
                cache: "no-store",
            }
        );

        /* 304 → not modified, cached value is valid */
        if (res.status === 304) {
            return;
        }

        if (res.ok) {
            const data = await res.json();
            const date = new Date(data[0].commit.committer.date);

            const formatted = date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            });

            showDate(formatted);

            const etag = res.headers.get("ETag");
            if (etag) {
                localStorage.setItem(STORAGE_KEY_ETAG, etag);
            }

            localStorage.setItem(STORAGE_KEY_DATE, formatted);
            return;
        }
    } catch (e) {
        // silent
    }

    /* =========================
       2️⃣ Fallback: build date
       ========================= */
    const meta = document.querySelector('meta[name="build-date"]');
    if (meta?.content && !cachedDate) {
        showDate(meta.content);
    }
})();



/* ==================================================
   Contact – Copy email to clipboard
   ================================================== */
document.querySelectorAll(".copy-email").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const email = btn.dataset.email;
        if (!email) return;

        try {
            await navigator.clipboard.writeText(email);
            btn.classList.add("copied");

            setTimeout(() => {
                btn.classList.remove("copied");
            }, 1500);
        } catch (e) {
            // fallback
            window.location.href = `mailto:${email}`;
        }
    });
});

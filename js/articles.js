"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("articlesList");
    if (!container) return;

    /* ==================================================
       DATA – Medium Articles
       First item = featured
       ================================================== */
    const articles = [
        {
            title: "Sending Data From Backend To Android - Huawei Push Kit vs. FCM",
            description: "How to send push notifications from backend to Android using FCM and Huawei Push Kit.",
            date: "Sep 2021",
            link: "https://medium.com/huawei-developers/sending-data-from-backend-to-android-huawei-push-kit-vs-fcm-android-and-server-side-4d80e4a2b910",
            featured: true
        },
        {
            title: "Git Usage & GitHub Operations (Beginner)",
            description: "Basics of GitHub, repositories, commits and pushing local projects.",
            date: "Apr 2022",
            link: "https://medium.com/huawei-developers/git-usage-github-operations-beginner-81a03a2909f6"
        },
        {
            title: "How to use Huawei In-App Comments Service",
            description: "Using Huawei In-App Comment Service in AppGallery Connect.",
            date: "Oct 2021",
            link: "https://medium.com/huawei-developers/how-to-use-huawei-in-app-comments-service-fbff1143876"
        },
        {
            title: "Huawei Game Service & Map Kit & Account Kit",
            description: "Using Huawei services with a simple Android game.",
            date: "May 2021",
            link: "https://medium.com/huawei-developers/huawei-game-service-map-kit-account-kit-i%CC%87l-bil-sample-app-part-1-b8713b9af377"
        },
        {
            title: "Huawei Ads with AdMob Mediation (Flutter)",
            description: "Integrating Huawei Ads into AdMob mediation with Flutter.",
            date: "Mar 2021",
            link: "https://medium.com/huawei-developers/how-to-use-huawei-ads-with-admob-mediation-flutter-8a3fc3bb1793"
        }
    ];

    /* ==================================================
       Render
       ================================================== */
    articles.forEach(article => {
        const item = document.createElement("article");
        item.className = `article-item${article.featured ? " article-featured" : ""}`;

        item.innerHTML = `
            <h3 class="article-title">
                <a href="${article.link}" target="_blank" rel="noopener">
                    ${article.title}
                </a>
            </h3>

            <p class="article-description">
                ${article.description}
            </p>

            <div class="article-meta">
                ${article.date}
            </div>
        `;

        container.appendChild(item);
    });

});

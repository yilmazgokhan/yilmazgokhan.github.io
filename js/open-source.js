"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("openSourceList");
    if (!container) return;

    /* ==================================================
       DATA – Featured Open Source Projects
       ================================================== */
    const projects = [
        {
            title: "Kotlin-MVVM-Base-Architecture",
            description:
                "A clean and scalable Android architecture template based on MVVM and Clean Architecture principles.",
            link: "https://github.com/yilmazgokhan/Kotlin-MVVM-Base-Architecture",
            tags: ["Kotlin", "MVVM", "Clean Architecture", "Android"]
        },
        {
            title: "Spring-Boot-Base-Architecture",
            description:
                "A base Spring Boot project demonstrating layered architecture, REST APIs, and best practices.",
            link: "https://github.com/yilmazgokhan/Spring-Boot-Base-Architecture",
            tags: ["Java", "Spring Boot", "REST", "Backend"]
        }
    ];

    /* ==================================================
       Render
       ================================================== */
    projects.forEach(project => {
        const item = document.createElement("div");
        item.className = "opensource-item";

        item.innerHTML = `
      <div class="opensource-header">
        <i class="fa fa-github"></i>
        <h3 class="opensource-title">
          <a href="${project.link}" target="_blank" rel="noopener">
            ${project.title}
          </a>
        </h3>
      </div>

      <p class="opensource-description">
        ${project.description}
      </p>

      <div class="opensource-tags">
        ${project.tags.map(tag =>
            `<span class="opensource-tag">${tag}</span>`
        ).join("")}
      </div>
    `;

        container.appendChild(item);
    });

});

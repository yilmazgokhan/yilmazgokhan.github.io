"use strict";

/* ==================================================
   Resume Timeline Module
   Purpose:
   - Render work experience & education timeline
   - Handle scroll-based fade-in animations
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==================================================
       DOM Reference
    -------------------------------------------------- */
    const timeline = document.getElementById("resumeTimeline");
    if (!timeline) return;


    /* ==================================================
       Timeline Data
       - Experience & education entries
    -------------------------------------------------- */
    const experience = [
        {
            company: "ICterra Information and Communication Technologies",
            role: "Android Developer",
            period: "Oct 2023 - Present",
            description: "Development of Android application",
            icon: "fa-briefcase"
        },
        {
            company: "Yapı Kredi Teknoloji",
            role: "Software Engineer",
            period: "Aug 2023 - Oct 2023",
            description: "Development of Android application",
            icon: "fa-briefcase"
        },
        {
            company: "ATP",
            role: "Software Engineer",
            period: "July 2022 - Aug 2023",
            description: "Development of Android application",
            icon: "fa-briefcase"
        },
        {
            company: "Huawei",
            role: "Software Engineer",
            period: "May 2020 - July 2022",
            description: "Development of several Android applications as open-source",
            icon: "fa-briefcase"
        },
        {
            company: "Ebebek",
            role: "Mobile Developer",
            period: "Oct 2019 - May 2020",
            description: "Bug fixing and maintenance of mobile applications",
            icon: "fa-briefcase"
        },
        {
            company: "Erciyes University",
            role: "Bachelor Degree – Computer Engineering",
            period: "2019",
            description: "Education",
            icon: "fa-graduation-cap",
            type: "education"
        }
    ];


    /* ==================================================
       Markup Builder
    -------------------------------------------------- */
    function createTimelineItem(item) {
        return `
			<div class="timeline-block ${item.type === "education" ? "education" : ""}">
				
				<div class="timeline-header">
					<h3>${item.role}</h3>
					<p>${item.period}</p>
				</div>

				<div class="timeline-ico">
					<i class="fa ${item.icon}"></i>
				</div>

				<div class="timeline-content">
					<h4>${item.company}</h4>
					<p>${item.description}</p>
				</div>

			</div>
		`;
    }


    /* ==================================================
       Timeline Rendering
    -------------------------------------------------- */
    function renderTimeline() {
        const fragment = document.createDocumentFragment();

        experience.forEach(item => {
            const wrapper = document.createElement("div");
            wrapper.innerHTML = createTimelineItem(item);
            fragment.appendChild(wrapper.firstElementChild);
        });

        timeline.appendChild(fragment);
    }


    /* ==================================================
       Scroll-based Fade-in Animation
    -------------------------------------------------- */
    function initScrollObserver() {
        const blocks = document.querySelectorAll(".timeline-block");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        blocks.forEach(block => observer.observe(block));
    }


    /* ==================================================
       Init
    -------------------------------------------------- */
    renderTimeline();
    initScrollObserver();

});

"use strict";

/* ==================================================
   Main JavaScript
   Purpose:
   - Handle small global interactions
   - Keep behavior lightweight & framework-free
   ================================================== */


/* ==================================================
   Smooth Scroll
   - Enables smooth scrolling for anchor links
   - Targets elements with `.smoothscroll` class
-------------------------------------------------- */
document.querySelectorAll(".smoothscroll").forEach(link => {
	link.addEventListener("click", event => {
		event.preventDefault();

		const targetSelector = link.getAttribute("href");
		const target = document.querySelector(targetSelector);

		if (!target) return;

		target.scrollIntoView({
			behavior: "smooth"
		});
	});
});


/* ==================================================
   Back To Top Button
   - Shows button after user scrolls down
   - Hides when near top of the page
-------------------------------------------------- */
const goTop = document.getElementById("go-top");

if (goTop) {
	window.addEventListener(
		"scroll",
		() => {
			goTop.style.display =
				window.scrollY >= 300 ? "block" : "none";
		},
		{ passive: true }
	);
}

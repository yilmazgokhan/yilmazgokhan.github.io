"use strict";

/* Smooth Scroll */
document.querySelectorAll(".smoothscroll").forEach(link => {
	link.addEventListener("click", e => {
		e.preventDefault();
		const target = document.querySelector(link.getAttribute("href"));
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	});
});

/* Back to Top */
const goTop = document.getElementById("go-top");
if (goTop) {
	window.addEventListener("scroll", () => {
		goTop.style.display = window.scrollY >= 300 ? "block" : "none";
	});
}

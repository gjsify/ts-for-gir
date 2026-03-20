/**
 * gi-docgen inherited member post-processor.
 *
 * TypeDoc's "Inherited" settings toggle hides elements with the
 * `tsd-is-inherited` CSS class. Our @category-based inherited members
 * don't have this class natively. This script adds it to all elements
 * within "Inherited from X" sections so the toggle works uniformly.
 */

function markInheritedSections() {
	const RE = /Inherited from /;

	// 1. Index sections: mark links within "Inherited from" headings
	document.querySelectorAll(".tsd-index-section").forEach((section) => {
		const h = section.querySelector("h3.tsd-index-heading");
		if (h && RE.test(h.textContent)) {
			section.querySelectorAll(".tsd-index-link").forEach((el) => {
				el.classList.add("tsd-is-inherited");
			});
		}
	});

	// 2. Detail member groups: mark the entire accordion + its members
	document.querySelectorAll(".tsd-member-group").forEach((details) => {
		const h = details.querySelector("summary h2");
		if (h && RE.test(h.textContent)) {
			details.classList.add("tsd-is-inherited");
			details.querySelectorAll(".tsd-panel.tsd-member").forEach((el) => {
				el.classList.add("tsd-is-inherited");
			});
		}
	});

	// 3. TOC navigation sections: mark the accordion + its links
	document.querySelectorAll(".tsd-page-navigation-section").forEach((details) => {
		const s = details.querySelector("summary");
		if (s && RE.test(s.textContent)) {
			details.classList.add("tsd-is-inherited");
			details.querySelectorAll("a").forEach((el) => {
				el.classList.add("tsd-is-inherited");
			});
		}
	});

	// 4. Trigger TypeDoc's index visibility update to hide empty sections
	if (window.app) {
		window.app.updateIndexVisibility();
	}
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", markInheritedSections);
} else {
	markInheritedSections();
}

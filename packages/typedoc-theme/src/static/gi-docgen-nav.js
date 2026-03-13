/**
 * gi-docgen navigation post-processor.
 *
 * TypeDoc's main.js builds the navigation into #tsd-nav-container.
 * This script watches that container via MutationObserver and splits
 * the " - vX.Y.Z" version suffix from module names, rendering the
 * version as a smaller <small class="gi-docgen-module-version"> element.
 */

function processNavItem(li) {
	const el = li.querySelector("a, span");
	if (!el) return;
	if (el.querySelector(".gi-docgen-module-version")) return; // already processed

	const text = el.textContent;
	const sepIdx = text.indexOf(" - ");
	if (sepIdx === -1) return;

	const name = text.slice(0, sepIdx);
	const version = text.slice(sepIdx + 3);

	el.textContent = "";
	el.appendChild(document.createTextNode(name));
	const small = document.createElement("small");
	small.className = "gi-docgen-module-version";
	small.textContent = version;
	el.appendChild(document.createTextNode(" "));
	el.appendChild(small);
}

function processNavContainer(container) {
	for (const li of container.querySelectorAll("li")) {
		processNavItem(li);
	}
}

function observeNav() {
	const container = document.getElementById("tsd-nav-container");
	if (!container) return;

	// Process items already present (e.g. if main.js already ran)
	processNavContainer(container);

	// Watch for items added/replaced by TypeDoc's main.js
	const observer = new MutationObserver(() => {
		processNavContainer(container);
	});
	observer.observe(container, { childList: true, subtree: true });
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", observeNav);
} else {
	observeNav();
}

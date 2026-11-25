const searchInput = document.querySelector("#week-search");
const weekCards = Array.from(document.querySelectorAll("[data-week-card]"));
const resultsCount = document.querySelector("#results-count");

if (searchInput && resultsCount && weekCards.length > 0) {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLocaleLowerCase("es");
        let visibleCount = 0;

        for (const card of weekCards) {
            const matches = card.textContent.toLocaleLowerCase("es").includes(query);
            card.hidden = !matches;
            visibleCount += Number(matches);
        }

        resultsCount.textContent = query
            ? `${visibleCount} ${visibleCount === 1 ? "resultado" : "resultados"}`
            : `${weekCards.length} semanas`;
    });
}
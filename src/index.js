// Function to fetch the meaning of a word
export async function fetchMeaning(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        return data[0].meanings[0].definitions[0].definition;
    } catch (error) {
        return "No definition found";
    }
}

// Function to handle mouse hover
export function handleHover(event, tooltip) {
    const word = event.target.textContent;

    // Fetch meaning and display in tooltip
    fetchMeaning(word).then(meaning => {
        tooltip.textContent = meaning;
        tooltip.style.display = 'block';
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });
}

// Function to hide the tooltip when mouse leaves
export function handleLeave(tooltip) {
    tooltip.style.display = 'none';
}

// Function to initialize hover events on words
export function initializeWordTooltips(selector, tooltipId) {
    const words = document.querySelectorAll(selector);
    const tooltip = document.getElementById(tooltipId);

    // Attach event listeners to each word
    words.forEach(word => {
        word.addEventListener('mouseenter', (event) => handleHover(event, tooltip));
        word.addEventListener('mouseleave', () => handleLeave(tooltip));
    });
}

// Utility function to get random integer between min and max (inclusive)
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns exercise object based on number
function getExercise(num) {
    if (num === 1) {
        return { name: 'Push-ups', image: 'gifs/pushups.gif' };
    } else if (num === 2) {
        return { name: 'Squats', image: 'gifs/squats.gif' };
    } else if (num === 3) {
        return { name: 'Pull-ups', image: 'gifs/pullups.gif' };
    } else {
        return { name: 'Crunches / Leg raises', image: 'gifs/crunches.gif' };
    }
}

// DOM elements cached for better readability (may be unused depending on markup)
const generateButton = document.getElementById('generateButton');
const repsDisplay = document.getElementById('repsDisplay');
const setsDisplay = document.getElementById('setsDisplay');
const variationDisplay = document.getElementById('variationDisplay');
const doneButton = document.getElementById('doneButton');

// Example listener if needed for future variants (kept for parity with g1/g2)
if (generateButton) {
    generateButton.addEventListener('click', function () {
        const reps = randomInteger(5, 20);
        const sets = randomInteger(2, 5);
        const exerciseNum = randomInteger(1, 4);
        const exercise = getExercise(exerciseNum);

        if (doneButton) {
            doneButton.style.display = 'block';
        }

        if (repsDisplay) repsDisplay.textContent = `Reps: ${reps}`;
        if (setsDisplay) setsDisplay.textContent = `Sets: ${sets}`;
        if (variationDisplay) variationDisplay.innerHTML = `
            <p>${exercise.name}</p>
            <img src="${exercise.image}" alt="${exercise.name}" style="max-width: 200px;">
        `;
    });
}



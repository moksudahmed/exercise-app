const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '588d7bde92mshc14e13ef524c0dcp1e7ea9jsn8952c1bf3c93',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

async function fetchExercises() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        const exerciseList = document.getElementById('exercise-list');

        data.forEach(exercise => {
            const exerciseContainer = document.createElement('div');
            exerciseContainer.classList.add('swiper-slide'); // Add the 'swiper-slide' class

            const card = document.createElement('div');
            card.classList.add('card');

            const exerciseName = document.createElement('h2');
            exerciseName.textContent = exercise.name;

            const exerciseGif = document.createElement('img');
            exerciseGif.src = exercise.gifUrl;
            exerciseGif.alt = exercise.name;

            const exerciseInstructions = document.createElement('p');
            exerciseInstructions.textContent = exercise.instructions.join('\n');

            card.appendChild(exerciseName);
            card.appendChild(exerciseGif);
            card.appendChild(exerciseInstructions);

            exerciseContainer.appendChild(card);
            exerciseList.appendChild(exerciseContainer);
        });

        // Initialize Swiper
        const swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            loop: true, // Enable loop mode for continuous navigation
        });
    } catch (error) {
        console.error(error);
    }
}

fetchExercises();

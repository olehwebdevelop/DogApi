const gallery = document.getElementById('gallery');
const loadMore = document.getElementById('loadMore');

async function loadPuppies(count = 6) {
    const promises = [];
    for (let i = 0; i < count; i++) {
        promises.push(fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json()));
    }

try {
    const results = await Promise.all(promises);
    results.forEach(data => {
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = 'Puppy';

        img.style.borderRadius = "12px";
        img.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
        img.style.transition = "transform 0.3s";
        img.style.cursor = "pointer";

        img.addEventListener('mouseover', () => img.style.transform = "scale(1.05)");
        img.addEventListener('mouseout', () => img.style.transform = "scale(1)");

        gallery.appendChild(img);
    });
} catch (err) {
    console.error('Помилка завантаження фоток:', err);
}
}

loadPuppies();

loadMore.addEventListener('click', () => {
    loadPuppies();
});
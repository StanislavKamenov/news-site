const apiKey = 'e6c55a7bc1bd45f9afa61d153cc56c43'; // Replace 'your_api_key' with your actual API key

async function getNews(category) {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    data.articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <button onclick="showDetails('${article.title}', '${article.content}')">Read More</button>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Функция за показване на допълнителни детайли за новината
function showDetails(title, content) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    modal.style.display = 'block';
}

// Затваряне на прозореца при клик извън него
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Извикване на функцията за зареждане на новини при зареждане на страницата
window.onload = function () {
    getNews('general');     // Зареждане на новини от категория 'general'
    getNews('business');    // Зареждане на новини от категория 'business'
    getNews('technology');  // Зареждане на новини от категория 'technology'
    getNews('entertainment'); // Зареждане на новини от категория 'entertainment'
    getNews('sports');      // Зареждане на новини от категория 'sports'
};

function updateNews() {
    getNews('general');     // Зареждане на новини от категория 'general'
    getNews('business');    // Зареждане на новини от категория 'business'
    getNews('technology');  // Зареждане на новини от категория 'technology'
    getNews('entertainment'); // Зареждане на новини от категория 'entertainment'
    getNews('sports');      // Зареждане на новини от категория 'sports'
}

setInterval(updateNews, 5 * 60 * 1000); // Актуализация на новините на всеки 5 минути (5 * 60 * 1000 милисекунди)


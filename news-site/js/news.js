const apiKey = 'e6c55a7bc1bd45f9afa61d153cc56c43'; // Replace 'your_api_key' with your actual API key

async function getNews(category) {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    if (data && data.articles) {
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
    } else {
        console.error('Unexpected response from API:', data);
    }
}



function showDetails(title, content) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    modal.style.display = 'block';
}


window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


window.onload = function () {
    getNews('general');     
    getNews('business');   
    getNews('technology');  
    getNews('entertainment'); 
    getNews('sports');    
};

function updateNews() {
    getNews('general');     
    getNews('business');   
    getNews('technology');  
    getNews('entertainment'); 
    getNews('sports');    
}

setInterval(updateNews, 5 * 60 * 1000); 


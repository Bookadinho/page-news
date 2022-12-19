const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

console.log(newsList)

searchForm.addEventListener("submit", retrive)

function retrive(e){

    if (input.value == ''){
        alert('Campo de pesquisa vazio')
        return
    }

    newsList.innerHTML = ''

    e.preventDefault();

    const apiKey = '4d55486417d549f5adc30aacb5ddc9c3'

    let topic = input.value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`


    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(article =>{
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li)
        });
    })

    console.log(topic)
}

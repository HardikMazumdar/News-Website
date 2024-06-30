
// const apiKey = 'ce4d6c2276e941288e0a7bebe179ae03';
const apiKey = '27a1f2998f1648639176d24e743c9e37';
let visible = false;
const mr = 'most recent';
display(mr,'Most Recent');
const input = document.querySelector(".text-in-navbar");
const button = document.querySelector(".search");
button.addEventListener('click', retrieve);
function retrieve(){
    if(input.value === ''){
        alert("No value in searchbox")
        return;}
        display(input.value,input.value);
    }
const mostRecentButton = document.getElementsByClassName("mostRecentButton")[0];
mostRecentButton.addEventListener('click',()=>{
    display('Most Recent','Most Recent');
})
const Politics = document.getElementsByClassName("Politics")[0];
Politics.addEventListener('click',()=>{
    display('Politics','Politics');
})
const Lifestyle = document.getElementsByClassName('Lifestyle')[0];
Lifestyle.addEventListener('click',()=>{
    display('Lifestyle','Lifestyle');
})
const Cricket = document.getElementsByClassName("Cricket")[0];
Cricket.addEventListener('click',()=>{
    display('Cricket','Cricket');
})
const Bollywood = document.getElementsByClassName('Bollywood')[0];
Bollywood.addEventListener('click',()=>{
    display('Bollywood','Bollywood')
})
function display(Query,heading)
{
    const row = document.getElementsByClassName("row mt-3 mb-3")[0];
    console.log(Query + "executed");
    document.querySelector(" .mostrecent .topics-bar h1").innerHTML = `${heading}`;
    let url = `https://newsapi.org/v2/everything?q=${Query}&apiKey=${apiKey}`;
    fetch(url).then((res) => { return res.json() }).then((data) => {
        row.innerHTML = '';
        for (article of data.articles) {
            if (article.title === '[Removed]')
                continue;
            else {
                const card = document.createElement('div');
                card.setAttribute('class', 'card h-150');
                const img = document.createElement('img');
                img.setAttribute('src', article.urlToImage);
                img.setAttribute('class', 'card-img-top');
                img.setAttribute('alt', '...');
                const cardBody = document.createElement('div');
                cardBody.setAttribute('class', 'card-body');
                const h3 = document.createElement('h3');
                h3.setAttribute('class', 'card-title');
                h3.textContent = article.title.substring(0, 50);
                const p = document.createElement('p');
                p.setAttribute('class', 'card-text');
                p.textContent = article.description.substring(0, 100) + " ..."
                const a = document.createElement('a');
                a.setAttribute('href', article.url);
                a.setAttribute('class', 'btn btn-primary btn-lg btn-block');
                a.setAttribute('target', '_blank');
                a.textContent = "Read";
                cardBody.appendChild(h3);
                cardBody.appendChild(p);
                cardBody.appendChild(a);
                card.appendChild(img);
                card.appendChild(cardBody);
                row.appendChild(card);
            }
        }
        })
}

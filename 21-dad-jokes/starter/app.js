const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


btn.addEventListener('click', function(){
    
  getJoke();
  // console.log(joke);
});

window.addEventListener("DOMContentLoaded", function () {
    getJoke();
});
const getJoke = async function(){
    //result.textContent='...';
    try {
        const response = await fetch(url, {
            headers: {
              Accept: 'application/json',
              'User-Agent': 'who would not try dad jokes',
            },
          });
          if (!response.ok) {
            throw new Error(' error');
          }
          const data = await response.json();
          result.textContent = data.joke;
          
    } catch (error) {
   result.textContent = 'Fel';
        
    } 
};

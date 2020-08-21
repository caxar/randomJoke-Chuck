const randomBtn = document.querySelector('.header-btn'),
      headerContent = document.querySelector('.header-content'),
      img = document.querySelector('.header-deg');


randomBtn.addEventListener('click', async () => {
    try {   
        const res = await fetch(`https://api.icndb.com/jokes/random?escape=javascript`);
        const data = await res.json();
        const joke = data.value.joke;
        displayData(joke);
    } catch {
        console.log(error);
    }
})

function displayData(data) {
    img.classList.add('rotate');
    headerContent.innerHTML = `<p>${data}</p>`;
    function delay() {
        img.classList.remove('rotate');
    }
    setTimeout(delay, 800);
}




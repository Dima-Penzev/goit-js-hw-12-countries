export default function getFetch(url, country, create, container) {
    fetch(url + country).then(r => r.json()).then((elem) => {
        console.log(elem);
        const item = create(elem);
        container.innerHTML = item;
    })
   
};


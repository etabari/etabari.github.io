fetch('https://www.genomeweb.com/section/rss/news')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
        const items = data.querySelectorAll("item");
        let jsonFeed = [];

        items.forEach(el => {
            let item = {
                title: el.querySelector("title").textContent,
                link: el.querySelector("link").textContent,
                description: el.querySelector("description").textContent,
                pubDate: el.querySelector("pubDate").textContent
            };
            jsonFeed.push(item);
        });

        console.log(jsonFeed);
        // Here, you can handle the jsonFeed as needed
    })
    .catch(error => console.error('Fetch error:', error));

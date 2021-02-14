let topAnimeList;

axios.get('https://api.jikan.moe/v3/top/anime/1/upcoming')
	.then(response => {
		console.log(response.data);
		if (response.data && response.data.top) {
			topAnimeList = response.data.top;

		const topList = document.getElementById('topList');

		topList.innerHTML = getAnimeListMarkdown(topAnimeList);

		function getAnimeListMarkdown(services) {

    	let resultMarkdown = '';

    	services.forEach(services => {
        resultMarkdown += 
        `<div class="card";>
  			<img src="${services.image_url}" class="card-img-top" alt="alt">
 			<div class="card-body">
    			<h5 class="card-title">${services.title}</h5>
    			<a href="${services.url}" class="btn btn-primary">Watch</a>
 			</div>
		</div>`;
    })

    return resultMarkdown;
}
			
		}
	})
	.catch(err => {
		console.error(err);
	})
	.then(() => {
		console.log('Nothing to do here');
	})


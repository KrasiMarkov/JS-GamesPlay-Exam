import { getAll, getRecentThree } from '../api/data.js';
import { html } from '../lib.js'


const homeTemplate = (recentGames) => html`
<section id="welcome-world">

 <div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
 </div>
 <img src="./images/four_slider_img01.png" alt="hero">

 <div id="home-page">
    <h1>Latest Games</h1>

    <!-- Display div: with information about every game (if any) -->
     <div id="games">
        ${recentGames.length == 0 
        ? html`<p class="no-articles">No games yet</p>`
        : recentGames.map(itemCard)}    
	</div>
 </div>
</section>`;

const itemCard = (game) => html`
<div class="game">
        <div class="image-wrap">
            <img src=${game.imageUrl}>
        </div>
        <h3>${game.title}</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="/details/${game._id}" class="btn details-btn">Details</a>
        </div>
</div>`;

export async function homePage(ctx) {
    const recentGames = await getRecentThree();
    ctx.render(homeTemplate(recentGames));    
}
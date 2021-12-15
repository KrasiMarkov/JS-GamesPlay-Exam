import { getAll, getRecentThree } from '../api/data.js';
import { html } from '../lib.js'

const homeTemplate = () => html`
  <section id="welcome-world">

<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">

<div id="home-page">
    <h1>Latest Games</h1>

    <!-- Display div: with information about every game (if any) -->
    <div class="game">
        <div class="image-wrap">
            <img src="./images/CoverFire.png">
        </div>
        <h3>Cover Fire</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="#" class="btn details-btn">Details</a>
        </div>
    </div>
    <div class="game">
        <div class="image-wrap">
            <img src="./images/ZombieLang.png">
        </div>
        <h3>Zombie Lang</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="#" class="btn details-btn">Details</a>
        </div>
    </div>
    <div class="game">
        <div class="image-wrap">
            <img src="./images/MineCraft.png">
        </div>
        <h3>MineCraft</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="#" class="btn details-btn">Details</a>
        </div>
    </div>

    <!-- Display paragraph: If there is no games  -->
    <p class="no-articles">No games yet</p>
</div>
</section>`;

// const homeTemplate = (recentGames) => html`
// <section id="welcome-world">

//  <div class="welcome-message">
//     <h2>ALL new games are</h2>
//     <h3>Only in GamesPlay</h3>
//  </div>
//  <img src="./images/four_slider_img01.png" alt="hero">

//  <div id="home-page">
//     <h1>Latest Games</h1>

//     Display div: with information about every game (if any) -->
//     <!-- <div id="games">
//         ${recentGames.length == 0 
//         ? html`<p class="no-articles">No games yet</p>`
//         : recentGames.map(itemCard)}    
// 	</div>
//  </div>
// </section>`;

// const itemCard = (game) => html`
// <div class="game">
//         <div class="image-wrap">
//             <img src=${game.imageUrl}>
//         </div>
//         <h3>${game.title}</h3>
//         <div class="rating">
//             <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
//         </div>
//         <div class="data-buttons">
//             <a href="/details/${game._id}" class="btn details-btn">Details</a>
//         </div>
// </div>`;

export function homePage(ctx) {
    ctx.render(homeTemplate());    
}
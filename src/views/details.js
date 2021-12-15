import { deleteById, getById } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';



const detailsTemplate = (game, isOwner, onDelete) => html`
<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl}/>
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">${game.summary}</p>


                ${isOwner 
                ? html`
                <a class="button" href="/edit/${game._id}">Edit</a>
                <button @click=${onDelete}  class="button">Delete</button>`
                : null}

                <!-- Bonus ( for Guests and Users )
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        <!-- <li class="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li class="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul> -->
                    <!-- Display paragraph: If there are no games in the database -->
                    <!-- <p class="no-comment">No comments.</p>
                </div>
            </div> -->

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            <!-- <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article> --> 

</section>`;


export async function detailsPage(ctx) {
    const game = await getById(ctx.params.id);

    const userData = getUserData();
    const isOwner = userData && game._ownerId == userData.id
    
    ctx.render(detailsTemplate(game, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete your game?');
        if (choice) {
            await deleteById(ctx.params.id);
            ctx.page.redirect('/');
        }
    }       
}
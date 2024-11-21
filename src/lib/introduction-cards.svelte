<script>
    export let data
    // import { Button } from '$lib/index.js';
</script>

<div class="card-containers">
    <article class="introduction-card">
        <picture>
            <img width="783" height="982" loading="lazy" src="{data.cardSlides[0].imageCard.url}" alt="{data.cardSlides[0].imageCardAltText}}" />
        </picture>
        <div class="card-content">
            <h2>{data.cardSlides[0].titleCard}</h2>
            <p>{data.cardSlides[0].paragraphCard}</p>
            <p>{data.cardSlides[0].paragraphCard2}</p>
            <a href="">bekijk de stekjes</a>
        </div>
    </article>
</div>

<style>
    img {
        object-fit: cover;
    }
    .introduction-card {
        width: 75%;
        height: 30em;
        border-radius: 1em;
        background-color: #f9e9c2;
        margin: 1em;
        padding: 2em;
    }

    a {
        width: 10em;
        height: 2em;
        padding: 0.5em;
        border-radius: 1em;
        color: #ffffff;
        text-decoration: none;
        background-color: #491B02;
    }
</style>
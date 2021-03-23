<script>
    export let keys;

    import { fade } from "svelte/transition";

    let showKeys = false;

    function toggleKeys() {
        showKeys = !showKeys;
    }
</script>

<style>

    .bolder {
        font-weight: 700;
    }

    .linkify {
        color: #d6d6d6;
        text-decoration: none;
        background-image: linear-gradient(#5a8dd9, #5a9ed9);
        background-size: 0% 0.1em;
        background-position-y: 100%;
        background-position-x: 0%;
        background-repeat: no-repeat;
        transition: background-size 0.2s ease-in-out;
        cursor: pointer;
    }

    .linkify:hover,
    .linkify:focus,
    .linkify:active {
        color: #d6d6d6;
        background-size: 100% 0.1em;
    }

    .linkify-2 {
        color: #d6d6d6;
        text-decoration: none;
        background-image: linear-gradient(rgb(212, 171, 54), rgb(226, 54, 24));
        background-size: 0% 0.1em;
        background-position-y: 100%;
        background-position-x: 0%;
        background-repeat: no-repeat;
        transition: background-size 0.2s ease-in-out;
        cursor: pointer;
    }

    .linkify-2:hover,
    .linkify-2:focus,
    .linkify-2:active {
        color: #d6d6d6;
        background-size: 100% 0.1em;
    }

    .small-txt {
        color: #9a9a9a;
        font-size: medium;
        font-weight: normal;
    }
</style>

<main class="bg-main monospaced text-white">
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        {#if !showKeys}
        <div id="main" class="col-sm-6">
			<h2 class="bolder"><a class="linkify" href="https://blog.n4o.xyz">blog</a></h2>
			<h2 class="bolder"><a class="linkify" href="https://shigoto.n4o.xyz">release</a></h2>
			<h3 class="bolder"><a class="linkify-2" href="https://ihateani.me" target="_blank">ihateani.me</a></h3>
			<hr />
            <h4 class="bolder">
                <span class="linkify-2" on:click={toggleKeys}>gpg keys</span>
            </h4>
			<!--sse--><h6>Contact: <a class="linkify" href="mailto:hi@n4o.xyz">hi@n4o.xyz</a></h6><!--/sse-->
        </div>
        {/if}
        {#if showKeys}
        <div id="keys-set" class="col-sm-6">
            <h4 class="bolder"><span class="linkify-2" on:click={toggleKeys}>&lt; go back</span></h4>
            <hr />
            {#each keys as {is_default, name, path}, i}
                <h3 class="bolder">
                    <a class="linkify" href="/keys/{path}" target="_blank">{name}</a>
                    {#if is_default}
                    <span class="small-txt"> [Default]</span>
                    {/if}
                </h3>
            {/each}
            <span class="small-txt">noaione &lt;noaione0809@gmail.com&gt;</span>
        </div>
        {/if}
    </div>
</main>
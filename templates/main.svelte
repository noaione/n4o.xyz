<script>
    export let keys;

    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let loaded = false;
    onMount(() => {
        setTimeout(() => loaded = true, 50)
    })

    let showed = "main";
    let extrasClass = "";
    function toggle(event, target) {
        showed = target;
        if (showed === "resume") {
            extrasClass = "m-2";
        } else {
            extrasClass = "";
        }
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

    .m-2 {
        margin: 0.5rem;
    }
</style>

{#if loaded}
<main class="bg-main monospaced text-white {extrasClass}" in:fade="{{ duration: 200 }}">
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        {#if showed === "main"}
        <div id="main" class="col-sm-6" in:fade>
			<h2 class="bolder"><a class="linkify" href="https://blog.n4o.xyz">blog</a></h2>
			<h2 class="bolder"><a class="linkify" href="https://shigoto.n4o.xyz">release</a></h2>
			<h3 class="bolder"><a class="linkify-2" href="https://ihateani.me" target="_blank">ihateani.me</a></h3>
			<hr />
            <h4 class="bolder">
                <span class="linkify-2" on:click={toggle.bind(toggle, "a", "keys")}>gpg keys</span>
                <span class="linkify-2" on:click={toggle.bind(toggle, "b", "resume")}>resume</span>
            </h4>
			<!--sse--><h6>Contact: <a class="linkify" href="mailto:hi@n4o.xyz">hi@n4o.xyz</a></h6><!--/sse-->
        </div>
        {/if}
        {#if showed === "keys"}
        <div id="keys-set" class="col-sm-6" in:fade>
            <h4 class="bolder"><span class="linkify-2" on:click={toggle.bind(toggle, "a", "main")}>&lt; go back</span></h4>
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
        {#if showed === "resume"}
        <div id="resume-set" class="col-sm-6" in:fade>
            <h4 class="bolder"><span class="linkify-2" on:click={toggle.bind(toggle, "a", "main")}>&lt; go back</span></h4>
            <h2 class="bolder">Aiman Maharana</h2>
            <h5><a class="linkify" href="mailto:hi@n4o.xyz">hi@n4o.xyz</a></h5>
            <h6><a class="linkify" href="https://n4o.xyz">https://n4o.xyz</a></h6>
            <h6><a class="linkify" href="https://github.com/noaione">GitHub</a></h6>
            <h6>Indonesia</h6>
            <h3 class="bolder">Experiences</h3>
            <p>TBW</p>
            <h3 class="bolder">Projects</h3>
            <h5><a class="linkify-2 bolder" href="https://github.com/naoTimesdev/naoTimes">naoTimes</a> - A Discord Bot written in Python to track Fansub/Project progress</h5>
            <h5><a class="linkify-2 bolder" href="https://github.com/ihateani-me/vtscheduler-ts">vtscheduler-ts</a> and <a class="linkify-2 bolder" href="https://github.com/ihateani-me/ihaapi-ts">ihaapi-ts</a> - A Multi-Function API mainly to track VTuber live stream</h5>
            <h5><a class="linkify-2 bolder" href="https://github.com/noaione/tesaurus-python">tesaurus-python</a> - A tools to get Indonesian Thesaurus</h5>
            <h3 class="bolder">DevStack</h3>
            <h5><b>languages: </b>python/python3, javascript/typescript</h5>
            <h5><b>databases: </b>mongodb, redis</h5>
            <h5><b>framework: </b>flask, nodejs, expressjs, graphql</h5>
            <h5><b>devops: </b>nginx, circleci, github-actions</h5>
            <h5><b>os: </b>windows, linux (ubuntu 16+, debian 9+, centos 7)</h5>
            <h3 class="bolder">Education</h3>
            <h5><b>Asia Pacific University, Malaysia</b> - 2020-Present -- Computer Science (Intelligent System) </h5>
        </div>
        {/if}
    </div>
</main>
{/if}
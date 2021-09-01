<script>
    export let keys;

    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import Experience from "./components/Experience.svelte";
    import DevStack from "./components/DevStack.svelte";
    import Project from "./components/Project.svelte";

    let loaded = false;
    onMount(() => {
        setTimeout(() => loaded = true, 50)
    })

    let showed = "main";
    let extrasClass = "";
    function toggle(target) {
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
                <span class="linkify-2" on:click={() => toggle("keys")}>gpg keys</span>
                <span class="linkify-2" on:click={() => toggle("resume")}>resume</span>
            </h4>
			<!--sse--><h6>Contact: <a class="linkify" href="mailto:hi@n4o.xyz">hi@n4o.xyz</a></h6><!--/sse-->
        </div>
        {/if}
        {#if showed === "keys"}
        <div id="keys-set" class="col-sm-6" in:fade>
            <h4 class="bolder"><span class="linkify-2" on:click={() => toggle("main")}>&lt; go back</span></h4>
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
            <h4 class="bolder"><span class="linkify-2" on:click={() => toggle("main")}>&lt; go back</span></h4>
            <h2 class="bolder">Aiman Maharana</h2>
            <h5><a class="linkify" href="mailto:hi@n4o.xyz">hi@n4o.xyz</a></h5>
            <h6><a class="linkify" href="https://n4o.xyz">https://n4o.xyz</a></h6>
            <h6><a class="linkify" href="https://github.com/noaione">GitHub</a></h6>
            <h6>Indonesia</h6>
            <h3 class="bolder">Experiences</h3>
            <p>TBW</p>
            <h3 class="bolder">Projects</h3>
            <Project name="naoTimes" url="https://github.com/naoTimesdev/naoTimes" description="A Discord Bot written in Python to track Fansub/Project progress" />
            <Project name="vtscheduler-ts" url="https://github.com/ihateani-me/vtscheduler-ts" description="A backend to track VTuber streams, utilizing multiple video platform API and MongoDB" />
            <Project name="ihaapi-ts" url="https://github.com/ihateani-me/ihaapi-ts" description="An API mainly focused on VTuber, utilizing vtscheduler-ts and GraphQL" />
            <Project name="tesaurus-python" url="https://github.com/noaione/tesaurus-python" description="A CLI/Python module to get Indonesian Thesaurus" />
            <h3 class="bolder">DevStack</h3>
            <DevStack title="languages">
                python/python3, javascript/typescript, c#
            </DevStack>
            <DevStack title="framework">
                flask, nodejs, expressjs, graphql, nextjs/reactjs
            </DevStack>
            <DevStack title="databases">
                mongodb, mysql, redis
            </DevStack>
            <DevStack title="devops">
                nginx, circleci, github-actions
            </DevStack>
            <DevStack title="os">
                windows, linux (ubuntu 16+, debian 9+)
            </DevStack>
            <h3 class="bolder">Education</h3>
            <h5><b>Asia Pacific University, Malaysia</b> - 2020-Present -- Computer Science (Intelligent System) </h5>
        </div>
        {/if}
    </div>
</main>
{/if}
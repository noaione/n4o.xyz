<script>
    export let name;
    export let start;
    export let end;
    
    if (typeof end !== "string") {
        end = "now";
    }
</script>

<div class="experience-container">
    <h5 style="font-weight: 700;">{name}</h5>
    <span>{start} - {end}</span>
    <div>
        <slot />
    </div>
</div>

<style>
    .experience-container {
        display: flex;
        flex-direction: column;
    }
</style>
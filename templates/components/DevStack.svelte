<script>
    export let title;

    title = title.toLowerCase();
    title += ": "
</script>

<h5>
    <b>{title}</b>
    <slot />
</h5>
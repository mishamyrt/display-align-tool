<script lang="ts">
    export let count = 7;
    export let width = 100;

    let columns = Array(count)
    $: {
        const center = Math.floor(count / 2)
        const step = center > 0
            ? 1 / (center + 1)
            : 0;
        columns = Array(count)
        for (let i = 0; i < count; i++) {
            if (i === center) {
                columns[i] = 1
            } else if (i > center) {
                columns[i] = (count - i) * step
            } else {
                columns[i] = (i + 1) * step
            }
        }
    }

</script>


<div class="container" style="--width: {width}px">
    {#each columns as opacity}
        <div class="column" style="--opacity: {opacity}" />
    {/each}
</div>

<style lang="scss">
    .container {
        height: 100vh;
        display: flex;
        justify-content: center;
        gap: var(--width);
        padding: 0 3cm;
    }

    .column {
        opacity: var(--opacity);
        background-color: rgba(128, 128, 128, 0.11);
        width: var(--width);
        height: 100vh;
        display: flex;
        position: relative;

        &::after {
            content: ' ';
            background-color: rgba(255, 255, 255, 0.63);
            width: 2px;
            height: 100%;
            position: absolute;
            left: calc(50% - 1px);
            top: 0;
        }
}
</style>
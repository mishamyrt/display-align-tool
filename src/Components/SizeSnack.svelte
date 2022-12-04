<script lang="ts">
    export let width: number
    export let visible: boolean = false
    const initialWidth = 100

    $: relativeSize = Math.floor(100 - (width - initialWidth))
</script>

<div class="container">
    <div class="snack {visible ? "__visible" : ""}">{relativeSize}%</div>
</div>

<style lang="scss">
    .container {
        position: absolute;
        width: 100%;
        left: 0;
        top: 70vh;
        display: flex;
        justify-content: center;
    }
    .snack {
        font-size: 40px;
        line-height: 40px;
        background: rgba(33, 33, 33, 0.58);
        box-shadow: 0px 6px 9px -5px rgba(0, 0, 0, 0.16);
        backdrop-filter: blur(8px);
        padding: 20px 30px;
        border-radius: 16px;
        opacity: 0;
        transition: opacity .3s ease-out;

        &.__visible {
            opacity: 1;
        }
    }
</style>
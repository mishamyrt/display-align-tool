<script lang="ts">
    const handleClick = () => window.open('./')
</script>

<button on:click={handleClick} class="button">
    <span class="plus">+</span>
    Добавить вкладку
</button>

<style lang="scss">
    .button {
        position: absolute;
        right: 30px;
        bottom: 30px;
        background: rgba(128, 128, 128, 0.11);
        color: rgba(255, 255, 255, 0.6);
        box-shadow: 0px 4px 18px -6px rgba(0, 0, 0, 0.38);
        border-radius: 8px;
        border: none;
        appearance: none;
        padding: 8px 10px;
        display: inline-flex;
        align-items: center;
        backdrop-filter: blur(16px);

    .plus {
        font-size: 18px;
        font-weight: 300;
        margin-right: 7px;
    }
}
</style>


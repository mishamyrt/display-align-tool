<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import NewTabButton from './Components/NewTabButton.svelte';
    import Ruller from './Components/Ruller.svelte'
    import SizeSnack from './Components/SizeSnack.svelte';

    let width = 100
    let count = 7;
    let snackVisible = false;
    let snackTimeout = 0

    function showSnack() {
        snackVisible = true
        if (snackTimeout) {
            window.clearTimeout(snackTimeout)
        }
        snackTimeout = window.setTimeout(() => {
            snackVisible = false
        }, 1000)
    }

    function handleKeys(e: KeyboardEvent) {
        switch (e.code) {
            case 'ArrowDown':
                if (width > 5) {
                    width -= 1
                }
                showSnack()
                break
            case 'ArrowUp':
                if (width < 300) {
                    width += 1
                }
                showSnack()
                break
            case 'ArrowLeft':
                if (count > 3) {
                    count -= 2
                }
                break
            case 'ArrowRight':
                if (count < 15) {
                    count += 2
                }
                break
        }
        console.log(e, { width, count })
    }

    onMount(() => document.addEventListener('keydown', handleKeys))
    onDestroy(() => document.removeEventListener('keydown', handleKeys))
</script>
<main>
    <Ruller bind:width bind:count />
    <SizeSnack bind:width bind:visible={snackVisible} />
    <NewTabButton />
</main>
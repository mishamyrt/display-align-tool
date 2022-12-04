<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import NewTabButton from './Components/NewTabButton.svelte';
    import Ruller from './Components/Ruller.svelte'
    import SizeSnack from './Components/SizeSnack.svelte';
    import { COLUMNS_DEFAULT, WIDTH_DEFAULT } from './App.constants';

    let snack: SizeSnack

    let width = WIDTH_DEFAULT
    let count = COLUMNS_DEFAULT;

    function handleKeys(e: KeyboardEvent) {
        switch (e.code) {
            case 'ArrowDown':
                if (width > 5) {
                    width -= 1
                }
                snack.show()
                break
            case 'ArrowUp':
                if (width < 300) {
                    width += 1
                }
                snack.show()
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
    }

    onMount(() => {
        // Loads values from URL
        const params = new URLSearchParams(window.location.search);
        if (params.has('width')) {
            width = parseInt(params.get('width'), 10)
        }
        if (params.has('count')) {
            count = parseInt(params.get('count'), 10)
        }
    })

    onMount(() => document.addEventListener('keydown', handleKeys))
    onDestroy(() => document.removeEventListener('keydown', handleKeys))
</script>
<main>
    <Ruller bind:width bind:count />
    <SizeSnack bind:this={snack} bind:value={width} />
    <NewTabButton />
</main>
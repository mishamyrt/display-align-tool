const COLUMNS_COUNT = 7

export function createRuller(node: HTMLDivElement) {
    const centerIndex = Math.floor(COLUMNS_COUNT / 2)
    for (let i = 0; i < COLUMNS_COUNT; i++) {
        const column = document.createElement('div')
        column.className = 'rullerColumn'
        if (i === centerIndex) {
            column.classList.add('__center')
        }
        node.appendChild(column)
    }
}
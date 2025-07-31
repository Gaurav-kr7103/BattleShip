export function clearPlayArea (selector) {
    const parent = document.querySelectorAll(`${selector} .cell`);
    parent.forEach((cell) => {
        cell.style.backgroundColor = "#ccc";
    })
}

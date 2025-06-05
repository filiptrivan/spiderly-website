export const copyToClipboard = (text: string): void => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    }
}
export async function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard
    .writeText(text)
    .then(() => console.log("Text copied to clipboard successfully!"))
    .catch((error) => console.error("Failed to copy text: ", error));
}

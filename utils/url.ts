export default function shortenURL(url: string) {
  const urlObject = new URL(url);
  return urlObject.hostname;
}

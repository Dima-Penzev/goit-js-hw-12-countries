export default function getFetch(url, country) {
  return fetch(url + country).then(r => r.json());
}

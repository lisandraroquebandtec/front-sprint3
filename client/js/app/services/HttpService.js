class HttpService {
  get(url) {
    return fetch(url)
      .then(r => r.json());
  }
}

export default class HttpService {

  buildUrl(url) {
    if (url) {
      return `${this._getHost()}${url}`;
    }

    return null;
  }

  get(url) {
    const request = new Request(this.buildUrl(url), {
      method: 'GET',
      headers: this._createHeader()
    });

    return fetch(request)
      .then(res => this._handleErrors(res))
      .then(res => res.json());
  }

  _createHeader() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return headers;
  }

  _getHost() {
    return 'http://localhost:4000';
  }

  _handleErrors(res) {
    if (res.ok) {
      return res;
    }
    return res.json().then(err => Promise.reject(err));
  }
}

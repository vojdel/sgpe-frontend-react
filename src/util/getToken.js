/**
 * getToken.
 *
 * @param {string} method
 * @param {string} url
 * @return {object}
 */
export const getToken = (method, url) => {
  const loggedToken = window.localStorage.getItem('loggedUser')
  const token = JSON.parse(loggedToken)

  const options = {
    method: method,
    url: url,
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: (loggedToken) ? `Bearer ${token.access_token}` : null
    }
  }
  return options
}

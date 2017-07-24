export function isValidUrl(url) {
  // Must comply to this format () means optional:
  // http(s)://(www.)domain.ext(/)(whatever follows)
  let regEx = /^((https?):\/\/|www\.)[^\s/$.?#].[^\s]*/;
  return regEx.test(url);
}

export function createFullUrl(req, url) {
  return `${req.protocol}://${req.hostname}:${getPort()}/${url}`;
}

function getPort() {
  return process.env.PORT || 8000;
}
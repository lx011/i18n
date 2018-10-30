/**
 * httpRequest
 * @param {String} uri 
 * @param {Function} callback 
 */
export default function (uri, cb) {
  var httpRequest
  if (window.XMLHttpRequest) {
    // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest()
  }

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false
  }
  httpRequest.onreadystatechange = handler
  httpRequest.open('GET', uri)
  httpRequest.send(null)

  function handler() {
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
      if(httpRequest.status === 200) {
        cb(JSON.parse(httpRequest.responseText))
      } else {
        console.error('There was a problem with the request.')
      }
    }
  }
}
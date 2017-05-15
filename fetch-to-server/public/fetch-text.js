
function onTextReady(text) {
  console.log(text);
}

function onResponse(response) {
  return response.text();
}

fetch('/hello?name=Victoria', { method: 'POST' })
    .then(onResponse)
    .then(onTextReady);

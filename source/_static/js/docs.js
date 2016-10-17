function load() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://webextensions-experiments.github.io/about/experiments/update.json", true);
  request.onreadystatechange = function () {
    if (request.readyState != 4 || request.status != 200) {
      return;
    }
    let json = JSON.parse(request.responseText);
    for (let elm of document.getElementsByClassName('reference external')) {
      var unescaped = unescape(elm.href.substring(7));
      if (json.addons.hasOwnProperty(unescaped)) {
        for (let update of json.addons[unescaped].updates) {
          let div = document.createElement('div');
          div.className = 'download';
          let link = document.createElement('a');
          link.href = update.update_link;
          link.innerText = '↓ Version ' +
            update.version + ', ' +
            update.data.signed ? '(signed)' : '(NOT signed)';
          div.appendChild(link);
          elm.parentNode.insertBefore(div, elm);
        }
      }
    }
  };

  request.send();
}

load();

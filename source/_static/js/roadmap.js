function addCard(element, card) {
  let wrapper = document.createElement('div');
  wrapper.className = 'trello-card';
  let link = document.createElement('a');
  link.href = card.url;
  link.innerText = card.name;
  wrapper.appendChild(link);
  element.parentNode.insertBefore(wrapper, element.nextSibling);
}

function addList(element, list) {
  if (list.name === 'Not going to happen') {
    return;
  }

  let wrapper = document.createElement('div');
  wrapper.className = 'trello-list';
  let title = document.createElement('h3');
  title.innerText = list.name;
  title.id = list.id;
  wrapper.appendChild(title);
  element.parentNode.insertBefore(wrapper, element.nextSibling);
}

function load() {
  var elm = document.getElementById('trello').getElementsByTagName('p')[0];

  let list_response = Trello.boards.get('PC9kB14s/lists');
  list_response.then((lists) => {
    for (let list of lists.reverse()) {
      addList(elm, list);
    }
  });

  let cards_response = Trello.boards.get('PC9kB14s/cards');
  cards_response.then((cards) => {
    for (let card of cards) {
      found = false;
      for (let labels of card.labels) {
        if (labels.name === 'Experiment') {
          found = true;
        }
      }
      if (!found) {
        continue;
      }

      addCard(document.getElementById(card.idList), card);
    }
  });
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    if (document.getElementById('roadmap')) {
      load();
    }
  }
};

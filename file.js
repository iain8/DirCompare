const electron = require('electron');
const fs = require('fs');
const path = require('path');

const lists = {
  A: {
    files: [],
    rival: 'B'
  },
  B: {
    files: [],
    rival: 'A'
  }
};

const openDialog = function() {
  const dir = electron.remote.dialog.showOpenDialog({
    buttonLabel: 'Choose',
    properties: ['openDirectory'],
    title: 'Select directory'
  });

  if (dir) {
    document.querySelector(`.list-${this.dataset.target}-dir`).innerHTML = dir[0];

    lists[this.dataset.target].files = listFiles(dir[0]).filter(e => {
      return lists[lists[this.dataset.target].rival].files.indexOf(e) === -1}
    );

    document.querySelector(`.list-${this.dataset.target}`).innerHTML = lists[this.dataset.target].files.join('');
  }
};

const listFiles = function(dir, list = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      list = listFiles(filePath, list);
    } else {
      list.push(`<tr><td>${file}</td><td></td><td></td></tr>`);
    }
  });

  return list;
};

document.querySelectorAll('.open-dialog').forEach(el => {
  el.addEventListener('click', openDialog.bind(el));
});
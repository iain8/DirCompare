const electron = require('electron');
const fs = require('fs');
const path = require('path');

const openDialog = function() {
  const dir = electron.remote.dialog.showOpenDialog({
    buttonLabel: 'Choose',
    properties: ['openDirectory'],
    title: 'Select directory'
  });

  if (dir) {
    document.querySelector(this.dataset.target + '-dir').innerHTML = dir[0];
    document.querySelector(this.dataset.target).innerHTML = listFiles(dir[0]).join('');
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
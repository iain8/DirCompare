import fs from 'fs';
import path from 'path';
import util from 'util';
import formatDate from 'date-fns/format';
import isToday from 'date-fns/is_today';
import React from 'react';
import FileListItem from '../components/file_list_item';

class FileReader {
  static parseFiles (otherState, pane, dir) {
    this.buildList(pane, dir[0]).filter(e => {
      return !otherState.some((file, index) => {
        if (this.isEqual(e.props, file.props)) {
          delete otherState[index];

          return false;
        }
      });
    });
  }

  /**
   * list the files TODO: test
   */
  static buildList (pane, dir, list = []) {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);

      if (fs.statSync(filePath).isDirectory()) {
        list = this.buildName(pane, filePath, list);
      } else {
        const stats = fs.statSync(filePath);
        const mtime = new Date(util.inspect(stats.mtime));
        const date = formatDate(mtime, isToday(mtime) ? 'HH:mm:ss' : 'DD-MM-YYYY');

        list.push(
          <FileListItem file={ file } date={ date } key={ `${pane}-${filePath}` } />
        );
      }
    });

    return list;
  }

  /**
   * If two files should be considered equal
   * 
   * @param string fileA First file
   * @param string fileB Second file
   */
  static isEqual (fileA, fileB) {
    return fileA.file === fileB.file 
      && fileA.date === fileB.date
      && fileA.size === fileB.size;
  }
}

export default FileReader;
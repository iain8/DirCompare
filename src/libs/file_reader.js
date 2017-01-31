import fs from 'fs';
import path from 'path';
import util from 'util';
import formatDate from 'date-fns/format';
import isToday from 'date-fns/is_today';
import React from 'react';
import filesize from 'filesize';
import FileListItem from '../components/file_list_item';

class FileReader {
  /**
   * TODO: test!
   */
  static parseFiles (otherState, pane, dir) {
    const fileList = this.buildList(pane, dir);

    if (otherState) {
      return fileList.filter(e => {
        const include = !otherState.length || !otherState.some((file, index) => {
          if (this.isEqual(e.props, file.props)) {
            delete otherState[index];

            return true;
          }
        });

        return include;
      });
    } else {
      return fileList;
    }
  }

  /**
   * Build a list of FileListItems representing the files in the directory
   * 
   * @param string pane The pane in which the dir is loaded (used for keys)
   * @param string dir Directory path
   * @param array list The list of FileListItems
   * 
   * @returns array List of FileListItems
   */
  static buildList (pane, dir, list = []) {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);

      if (fs.statSync(filePath).isDirectory()) {
        list = this.buildList(pane, filePath, list);
      } else {
        const stats = fs.statSync(filePath);
        const mtime = new Date(util.inspect(stats.mtime));
        const date = formatDate(mtime, isToday(mtime) ? 'HH:mm:ss' : 'DD-MM-YYYY');

        list.push(
          <FileListItem
            file={ file } 
            date={ date }
            size={ filesize(stats.size) } 
            key={ `${pane}-${filePath}` } />
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
   * 
   * @returns boolean If equal
   */
  static isEqual (fileA, fileB) {
    return fileA.file === fileB.file 
      && fileA.date === fileB.date
      && fileA.size === fileB.size;
  }
}

export default FileReader;
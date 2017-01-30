import { expect } from 'chai';
import { shallow } from 'enzyme';
import FileReader from '../src/libs/file_reader';

describe('file reader tests', () => {
  it('matches files with the same name, date and size', () => {
    const fileA = {
      file: 'test.txt',
      date: '2017-01-01',
      size: '1000'
    };

    const fileB = {
      file: 'test.txt',
      date: '2017-01-01',
      size: '1000'
    };

    expect(FileReader.isEqual(fileA, fileB)).to.be.true;

    fileB.file = 'test2.txt';

    expect(FileReader.isEqual(fileA, fileB)).to.be.false;

    fileB.file = 'test.txt';
    fileB.date = '2017-01-02';

    expect(FileReader.isEqual(fileA, fileB)).to.be.false;

    fileB.date = '2017-01-01';
    fileB.size = '2000';

    expect(FileReader.isEqual(fileA, fileB)).to.be.false;
  });
  
  it('builds a list of FileListItems from a directory', () => {
    const list = FileReader.buildList('A', __dirname + '/data/dir 1');

    expect(list).to.have.lengthOf(3);
    expect(list[0].props).to.include.keys('file', 'date', 'size');
  });
});

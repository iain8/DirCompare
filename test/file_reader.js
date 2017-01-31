import { expect } from 'chai';
import { shallow } from 'enzyme'; // TODO: do we need this?
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

    expect(list).to.have.lengthOf(4);
    expect(list[0].props).to.include.keys('file', 'date', 'size');
  });

  it('displays files not present in the other list', () => {
    const listA = FileReader.parseFiles([], 'A', __dirname + '/data/dir 2');
    const listB = FileReader.parseFiles(listA, 'B',  __dirname + '/data/dir 1');

    expect(listA).to.have.lengthOf(3);
    expect(listB).to.have.lengthOf(3);
    console.log(listA);
    console.log(listB);
    expect(listB[0].props.file).to.equal('3_not_present');
    expect(listB[1].props.file).to.equal('4_size');
  });
});

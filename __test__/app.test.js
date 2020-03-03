const fs = require('fs')
jest.mock('fs')
require('../app')
const files = require('../lib/files')


describe('files module', () => {
  describe('read()', () => {
    it('reads the contents of a file', () => {
      files.read('thing.txt')
        .then(results => {
          expect(Buffer.isBuffer(results)).toBeTruthy;
        })
    });
  });
  describe('write()', () => {
    it('can write to a file', () => {
      files.write('thing.txt', 'hello world')
        .then(() => {
          fs.readFile('thing.txt', (contents) => {
            expect(Buffer.isBuffer(contents)).toBeTruthy;
          })
        })
    });

  });
  //how do we test this?
  describe('convertBuffer()', () => {
    expect(files.convertBuffer('68 65 6c 6c 6f')).toEqual('48 45 4c 4c 4f')
  });
  describe('alter()', () => {
    it('can change the text', () => {
      files.alter('thing.txt')
        .then(() => {
          fs.readFile('thing.txt', { encoding: 'utf8' }, (contents) => {
            expect(contents).toEqual('HELLO')
          })
        })
    });
  });
});
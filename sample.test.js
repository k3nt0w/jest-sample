const sampleFunc = require('./sample');

describe('hoge', () => {
  test('word is undef and hoge is not undef', () => {
    const expected = false;
    const word = undefined;
    const hoge = 'hoge';
    const result = sampleFunc(word, hoge);
    expect(result).toEqual(expected);
  });

  // test('word is undef and hoge is undef', () => {
  //   const expected = false;
  //   const word = undefined;
  //   const hoge = undefined;
  //   const result = sampleFunc(word, hoge);
  //   expect(result).toEqual(expected);
  // });

  test('word is not undef and hoge is not undef', () => {
    const expected = false;
    const word = 'undefined';
    const hoge = 'undefined';
    const result = sampleFunc(word, hoge);
    expect(result).toEqual(expected);
  });
});

import {convertObjectToArray, convertToMap} from './app.helper';

describe('AppHelper', () => {

  it('should create a map from a list of strings', () => {
    const result = convertToMap('["milk", "eggs", "bread"]');

    expect(result).toEqual({
      milk: {name: 'milk', value: 'milk', selected: false},
      eggs: {name: 'eggs', value: 'eggs', selected: false},
      bread: {name: 'bread', value: 'bread', selected: false}
    });
  });

  it('should create a map to array', () => {
    const result = convertObjectToArray({1: 'aaa'});

    expect(result).toEqual(['aaa']);
  });
});

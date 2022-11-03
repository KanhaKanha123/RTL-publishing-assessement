import {formatData} from '../formatData';
import * as inputData from './test-input.data.json';
import * as outputData from './test-output.data.json';

describe('formatData.ts test', () => {

  test("formatData method should return correct data", async() => {
    const result= await formatData(inputData);
    expect(result).toEqual(outputData);
  });
});


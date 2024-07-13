import { parseClasses } from '../parsers'
//MOCKS
import mocks from '../mocks/parsers.mocks.json'

describe('Parsers', () => {
  test('Should return a string of classes from an array', () => {
    mocks.inputs.forEach((_input, i) => {
      const parserResult = parseClasses(_input)
      expect(parserResult).toEqual(mocks.outputs[i])
    })
  })
})

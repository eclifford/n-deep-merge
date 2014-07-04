var expect = require('chai').expect;
var deepmerge = require('../deep-merge');

describe("deep-merge", function() {
  it("should be able to merge properties", function() {
    var obj1 = {
      foo: 'foo'
    };

    var obj2 = {
      baz: 'baz'
    };

    var mergedObj = deepmerge(obj1, obj2);
    expect(mergedObj).to.deep.equal({
      foo: 'foo',
      baz: 'baz'
    });
  });

  it("should be able to merge objects", function() {
    var obj1 = {
      foo: {
        name: 'foo'
      }
    };

    var obj2 = {
      foo: {
        type: 'rubbish'
      }
    };

    var mergedObj = deepmerge(obj1, obj2);
    expect(mergedObj).to.deep.equal({
      foo: {
        name: 'foo',
        type: 'rubbish'
      }
    });
  });

  it("should be able to merge arrays", function() {
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];

    var mergedArrays = deepmerge(arr1, arr2);
    expect(mergedArrays).to.deep.equal([1, 2, 3, 4, 5, 6]);

    arr3 = [1, 4, 7];
    arr4 = [2, 4, 7];
    var mergedArrays2 = deepmerge(arr3, arr4);
    expect(mergedArrays2).to.deep.equal([1, 4, 7, 2]);
  });
});

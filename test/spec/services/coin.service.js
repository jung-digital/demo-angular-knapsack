'use strict';

describe('Services: CoinService', function () {
  beforeEach(module('appCoinReturn'));

  var CoinService;

  beforeEach(inject(function (_CoinService_) {
    CoinService = _CoinService_;
  }));

  it('returnChangeFor should properly return american denominations for $1.', function () {
    var result = CoinService.returnChangeFor([{value:25},{value:10},{value:5},{value:1}], 100);
    expect(result).toEqual([4,0,0,0]);
  });

  it('returnChangeFor should properly return american denominations for $0.99.', function () {
    var result = CoinService.returnChangeFor([{value:25},{value:10},{value:5},{value:1}], 99);
    expect(result).toEqual([3,2,0,4]);
  });

  it('returnChangeFor should properly return british denominations for $0.99.', function () {
    var result = CoinService.returnChangeFor([{value:200}, {value:100}, {value:50}, {value:20},{value:2},{value:1}], 99);
    expect(result).toEqual([0,0,1,2,4,1]);
  });

  it('returnChangeFor should properly return british denominations for $2.99.', function () {
    var result = CoinService.returnChangeFor([{value:200}, {value:100}, {value:50}, {value:20},{value:2},{value:1}], 299);
    expect(result).toEqual([1,0,1,2,4,1]);
  });

  it('returnChangeFor should properly throw an error when no arguments are provided.', function () {
    expect(function () {
      CoinService.returnChangeFor();
    }).toThrow();
  });

  it('returnChangeFor should properly throw an error when an invalid argument is provided.', function () {
    // bind() would normally be a cleaner implementation but was erroring using PhantomJS so used a closure instead.
    expect(function () {
      CoinService.returnChangeFor([]);
    }).toThrow();
    expect(function () {
      CoinService.returnChangeFor([0])
    }).toThrow();
  });
});

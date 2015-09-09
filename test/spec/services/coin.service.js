'use strict';

describe('Services: CoinService', function () {
  beforeEach(module('appCoinReturn'));

  var CoinService;

  beforeEach(inject(function (_CoinService_) {
    CoinService = _CoinService_;
  }));

  it('returnChangeFor should properly return american denominations for $1.', function () {
    var result = CoinService.returnChangeFor([{value:25},{value:10},{value:5},{value:1}], 100);
    expect(result[0]).toBe(4);
    expect(result[1]).toBe(0);
    expect(result[2]).toBe(0);
    expect(result[3]).toBe(0);
  });

  it('returnChangeFor should properly return american denominations for $0.99.', function () {
    var result = CoinService.returnChangeFor([{value:25},{value:10},{value:5},{value:1}], 99);
    expect(result[0]).toBe(3);
    expect(result[1]).toBe(2);
    expect(result[2]).toBe(0);
    expect(result[3]).toBe(4);
  });

  it('returnChangeFor should properly return british denominations for $0.99.', function () {
    var result = CoinService.returnChangeFor([{value:200}, {value:100}, {value:50}, {value:20},{value:2},{value:1}], 99);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(0);
    expect(result[2]).toBe(1);
    expect(result[3]).toBe(2);
    expect(result[4]).toBe(4);
    expect(result[5]).toBe(1);
  });

  it('returnChangeFor should properly return british denominations for $2.99.', function () {
    var result = CoinService.returnChangeFor([{value:200}, {value:100}, {value:50}, {value:20},{value:2},{value:1}], 299);
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(0);
    expect(result[2]).toBe(1);
    expect(result[3]).toBe(2);
    expect(result[4]).toBe(4);
    expect(result[5]).toBe(1);
  });

  it('returnChangeFor should properly throw an error when no arguments are provided.', function () {
    expect(CoinService.returnChangeFor.bind(CoinService)).toThrow();
  });

  it('returnChangeFor should properly throw an error when an invalid argument is provided.', function () {
    expect(CoinService.returnChangeFor.bind(CoinService, [])).toThrow();
    expect(CoinService.returnChangeFor.bind(CoinService, [0])).toThrow();
  });
});

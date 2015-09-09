'use strict';

describe('Services: CoinParseService', function () {
  beforeEach(module('appCoinReturn'));

  var CoinParseService;

  beforeEach(inject(function (_CoinParseService_) {
    CoinParseService = _CoinParseService_;
  }));

  it('parse should properly evaluate 99p', function () {
    expect(CoinParseService.parse('99p')).toBe(99);
  });

  it('parse should properly evaluate 200p', function () {
    expect(CoinParseService.parse('200p')).toBe(200);
  });

  it('parse should properly evaluate £1', function () {
    expect(CoinParseService.parse('£1')).toBe(100);
  });

  it('parse should properly evaluate £500.5', function () {
    expect(CoinParseService.parse('£500.5')).toBe(50050);
  });

  it('parse should properly error £500.5p', function () {
    expect(CoinParseService.parse('£500.5p')).toBe('Please do not provide lbs and pence.');
  });

  it('parse should properly error 500.5', function () {
    expect(CoinParseService.parse('500.5')).toBe(500.5);
  });

  it('parse should properly error ASDF', function () {
    expect(CoinParseService.parse('ASDFp')).toBe('Please provide a valid imperial currency.');
  });
});

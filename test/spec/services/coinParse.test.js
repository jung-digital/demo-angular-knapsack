'use strict';

describe('Services: CoinParseService', function () {
  beforeEach(module('appCoinReturn'));

  var CoinParseService;

  beforeEach(inject(function (_CoinParseService_) {
    CoinParseService = _CoinParseService_;
  }));

  it('parse should properly evaluate 4', function () {
    expect(CoinParseService.parse('4')).toBe(4);
  });

  it('parse should properly evaluate 85', function () {
    expect(CoinParseService.parse('85')).toBe(85);
  });

  it('parse should properly evaluate 197p', function () {
    expect(CoinParseService.parse('197p')).toBe(197);
  });

  it('parse should properly evaluate 2p', function () {
    expect(CoinParseService.parse('2p')).toBe(2);
  });

  it('parse should properly evaluate 1.87', function () {
    expect(CoinParseService.parse('1.87')).toBe(187);
  });

  it('parse should properly evaluate £1.23', function () {
    expect(CoinParseService.parse('£1.23')).toBe(123);
  });

  it('parse should properly evaluate 1.1', function () {
    expect(CoinParseService.parse('1.1')).toBe(110);
  });

  it('parse should properly evaluate £2', function () {
    expect(CoinParseService.parse('£2')).toBe(200);
  });

  it('parse should properly evaluate £10', function () {
    expect(CoinParseService.parse('£10')).toBe(1000);
  });

  it('parse should properly evaluate £1.87p', function () {
    expect(CoinParseService.parse('£1.87p')).toBe(187);
  });

  it('parse should properly evaluate £1p', function () {
    expect(CoinParseService.parse('£1p')).toBe(100);
  });

  it('parse should properly evaluate £1.p', function () {
    expect(CoinParseService.parse('£1.p')).toBe(100);
  });

  it('parse should properly evaluate 001.41p', function () {
    expect(CoinParseService.parse('001.41p')).toBe(141);
  });

  it('parse should properly evaluate 4.235p', function () {
    expect(CoinParseService.parse('4.235p')).toBe(424);
  });

  it('parse should properly evaluate £1.257422457p', function () {
    expect(CoinParseService.parse('£1.257422457p')).toBe(126);
  });

  it('parse should properly error ASDF', function () {
    expect(CoinParseService.parse('ASDFp')).toBe('Please provide a valid imperial currency.');
  });

  it('parse should properly error ""', function () {
    expect(CoinParseService.parse('')).toBe('Please enter a valid imperial currency. Empty is not allowed.');
  });

  it('parse should properly error 1x', function () {
    expect(CoinParseService.parse('1x')).toBe('Please provide a valid imperial currency.');
  });

  it('parse should properly error £1x.0p', function () {
    expect(CoinParseService.parse('£1x.0p')).toBe('Please provide a valid imperial currency.');
  });

  it('parse should properly error £p', function () {
    expect(CoinParseService.parse('£p')).toBe('Please provide a valid imperial currency.');
  });
});

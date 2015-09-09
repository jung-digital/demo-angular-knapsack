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

  it('parse should properly evaluate £2', function () {
    expect(CoinParseService.parse('£2')).toBe(200);
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

  it('parse should properly evaluate £500.5', function () {
    expect(CoinParseService.parse('£500.5')).toBe(50050);
  });

  it('parse should properly error £500.5p', function () {
    expect(CoinParseService.parse('£500.5p')).toBe('Please do not provide lbs and pence.');
  });

  it('parse should properly error 500.5', function () {
    expect(CoinParseService.parse('500.5')).toBe('Please provide a denomination.');
  });

  it('parse should properly error £1.257422457p', function () {
    expect(CoinParseService.parse('£1.257422457p')).toBe('126');
  });

  it('parse should properly error ASDF', function () {
    expect(CoinParseService.parse('ASDFp')).toBe('Please provide a valid imperial currency.');
  });
});

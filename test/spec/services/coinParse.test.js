'use strict';

describe('Services: CoinParseService', function () {
  beforeEach(module('appCoinReturn'));

  var CoinParseService;

  beforeEach(inject(function (_CoinParseService_) {
    CoinParseService = _CoinParseService_;
  }));

  it('parse should properly convert input text to pence', function () {
    expect(CoinParseService.test).toBe(true);
  });
});

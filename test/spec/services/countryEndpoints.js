'use strict';

describe('Service: countryEndpoints', function () {

  // load the service's module
  beforeEach(module('testAppApp'));

  // instantiate service
  var countryEndpoints;
  beforeEach(inject(function (_countryEndpoints_) {
    countryEndpoints = _countryEndpoints_;
  }));

  it('should do something', function () {
    expect(!!countryEndpoints).toBe(true);
  });

});

'use strict';

describe('Service: countryCrud', function () {

  // load the service's module
  beforeEach(module('testAppApp'));

  // instantiate service
  var countryCrud;
  beforeEach(inject(function (_countryCrud_) {
    countryCrud = _countryCrud_;
  }));

  it('should do something', function () {
    expect(!!countryCrud).toBe(true);
  });

});

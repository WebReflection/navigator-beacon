wru.test([
  {
    name: "main",
    test: function () {
      if (typeof navigator !== 'undefined') {
        wru.assert(typeof navigator.sendBeacon == 'function');
      }
    }
  }
]);

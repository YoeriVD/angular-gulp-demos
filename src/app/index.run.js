(function() {
  'use strict';

  angular
    .module('angularGulpDemos')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

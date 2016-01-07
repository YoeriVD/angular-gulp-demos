describe('Directive: feedback', function () {
    var $scope, $compile, $window;

    beforeEach(function () {
        module('angularGulpDemos.directives');
        inject(function (_$compile_, _$window_, $rootScope) {
            $compile = _$compile_;
            $window = _$window_;
            $scope = $rootScope.$new();

            spyOn($window, 'alert');
        });
    });

    xit('should send feedback to a web service', function () {
        // Arrange
        var element = $compile('<feedback></feedback>')($scope);
        var isolateScope = element.isolateScope();
 
        // Act
        isolateScope.feedback = { type: 'positive', message: 'super' };
        isolateScope.sendFeedback();
 
        // Assert
        expect($window.alert).toHaveBeenCalled();
    });

    xit('should support printing feedback to the console', function () {
        // Arrange
        var element = $compile('<feedback debug></feedback>')($scope);
        var isolateScope = element.isolateScope();
 
        // Act
        isolateScope.feedback = { type: 'positive', message: 'super' };
        isolateScope.sendFeedback();
 
        // Assert
        expect($window.alert).not.toHaveBeenCalled();
    });
    
    it('should send feedback to a web service (controller as)', function () {
        // Arrange
        var element = $compile('<feedback></feedback>')($scope);
        var controller = element.controller("feedback");
 
        // Act
        controller.feedback = { type: 'positive', message: 'super' };
        controller.sendFeedback();
 
        // Assert
        expect($window.alert).toHaveBeenCalled();
    });

    it('should support printing feedback to the console (controller as)', function () {
        // Arrange
        var element = $compile('<feedback debug></feedback>')($scope);
        var controller = element.controller("feedback");
 
        // Act
        controller.feedback = { type: 'positive', message: 'super' };
        controller.sendFeedback();
 
        // Assert
        expect($window.alert).not.toHaveBeenCalled();
    });
});



app.controller('registroController', $scope => {
    $scope.showPassword = false
    $scope.switchPassword = () => {
        $scope.showPassword = !$scope.showPassword
    }
    $scope.showpasswordConfirmation = false
    $scope.switchpasswordConfirmation = () => {
        $scope.showpasswordConfirmation = !$scope.showpasswordConfirmation
    }
    $scope.register = () => {
        window.location.replace('/app/views/inicio_de_sesion.html')
    }
    
    loaded()
})
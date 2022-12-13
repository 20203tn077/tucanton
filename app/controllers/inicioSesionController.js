app.controller('inicioSesionController', $scope => {
    $scope.showPassword = false
    $scope.switchPassword = () => {
        $scope.showPassword = !$scope.showPassword
    }
    $scope.login = () => {
        if ($scope.login.email === 'anapaupau@gmail.com') localStorage.setItem('session_user', JSON.stringify({
            name: 'Maria Andrea',
            surname: 'Copca',
            lastname: 'Hernandez',
            birthDate: new Date(),
            phoneNumber: '7778374827',
            location: 'Cuernavaca',
            email: 'anapaupau@gmail.com',
            picture: 'user1.jpg',
            role: 'Usuario',
            paymentMethods: [
                {
                    network: 'Visa',
                    type: 'Débito',
                    bank: 'BBVA',
                    number: '1287284728462957',
                    cvv: '374',
                    owner: 'Maria Andrea Copca Hernandez',
                    expires: '12/24'
                },
                {
                    network: 'Mastercard',
                    type: 'Débito',
                    bank: 'Citibanamex',
                    number: '3957395739483948',
                    cvv: '374',
                    owner: 'Maria Andrea Copca Hernandez',
                    expires: '12/25'
                },
                {
                    network: 'Mastercard',
                    type: 'Crédito',
                    bank: 'Nu',
                    number: '9642696487426864',
                    cvv: '374',
                    owner: 'Ana Paula Copca Hernandez',
                    expires: '06/25'
                },
                {
                    network: 'Mastercard',
                    type: 'Crédito',
                    bank: 'Banco Azteca',
                    number: '4629736489273928',
                    cvv: '374',
                    owner: 'Maria Andrea Copca Hernandez',
                    expires: '11/24'
                },
                {
                    network: 'Visa',
                    type: 'Crédito',
                    bank: 'BanCoppel',
                    number: '0101098023949238',
                    cvv: '374',
                    owner: 'Maria Andrea Copca Hernandez',
                    expires: '12/23'
                },
            ]
        }))
        else localStorage.setItem('session_user', JSON.stringify({
            name: 'Emmanuel Alexander',
            surname: 'Machado',
            lastname: 'Ambrocio',
            birthDate: new Date(),
            phoneNumber: '7773065982',
            location: 'Cuernavaca',
            email: 'alexander@gmail.com',
            picture: 'admin.jpg',
            role: 'Administrador',
            paymentMethods: [
                {
                    network: 'Visa',
                    bank: 'BBVA',
                    number: '1287284728462957',
                    cvv: '374',
                    owner: 'Emmanuel Alexander Machado Ambrocio'
                }
            ]
        }))
        window.location.replace('/app/views/inicio.html')
    }
    
    loaded()
})
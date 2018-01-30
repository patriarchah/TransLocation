//------------------------------------------------------------------------------------------------------------------------------------
//Alunos

app.controller('alunosCtrl', function ($scope, $location, $state, $firebaseArray, $ionicPopup) {
	var ref = firebase.database().ref('Alunos');
	$scope.alunos = $firebaseArray(ref);

	//Funcao de transição de templates
	$scope.go = function (path) {
		$location.path(path);
	};

	$scope.aluno = {
		nome: '', idade: '', financeiro: {
			mes1: 'Janeiro', mes2: 'Fevereiro', mes3: 'Março', mes4: 'Abril', mes5: 'Maio',
			mes6: 'Junho', mes7: 'Julho', mes8: 'Agosto', mes9: 'Setembro', mes10: 'Outubro', mes11: 'Novembro', mes12: 'Dezembro'
		},
		responsavel: '', escola: ''
	}
	$scope.cadastrar = function () {
		$scope.alunos.$add($scope.aluno);
		$scope.aluno = { nome: '', idade: '', responsavel: '', escola: '' };

		alert('Aluno Cadastrado com sucesso!')

		$state.go("alunos");
	};


	$scope.excluir = function (item) {
		$scope.alunos.$remove(item);
	}
})

//------------------------------------------------------------------------------------------------------------------------------------
//Motoristas

app.controller('motoristaCtrl', function ($scope, $location, $state, $firebaseArray, $ionicPopup, $rootScope) {
	var ref = firebase.database().ref('Motoristas');
	$scope.motoristas = $firebaseArray(ref);

	$scope.go = function (path) {
		$location.path(path);
	};

	$scope.motorista = { nome: '', idade: '', endereco: '', cpf: '' }

	$scope.cadastrar = function () {
		$scope.motoristas.$add($scope.motorista);
		$scope.motorista = { nome: '', idade: '', endereco: '', cpf: '' };
		alert('Motorista Cadastrado com sucesso!')
		$state.go("motoristas");
	};

	$scope.selecionado = function (moto) {
		$rootScope.moto = moto;
	}


	$scope.excluir = function (item) {
		$scope.motoristas.$remove(item);
		alert('Motorista Excluido!');
	}
})

//------------------------------------------------------------------------------------------------------------------------------------
//Login

app.controller('loginCtrl', function ($scope, $state, $ionicPopup, $location) {
	$scope.Email = { email: '' };
	$scope.Senha = { senha: '' };

	//Funcao de transição de templates
	$scope.go = function (path) {
		$location.path(path);
	};

	//Função para o cadastro de usuários
	$scope.cadastrarUsuario = function () {
		firebase.auth().createUserWithEmailAndPassword($scope.Email.email, $scope.Senha.senha)
			.then(function () {
				alert('Cadastro realizado com sucesso!');

				$state.go("login");
			})
			.catch(function (error) {
				console.error(error.code);
				console.error(error.message);
				alert('Falha ao cadastrar, verifique se os dados estão corretos.')
			});
	};

	//Função para autenticação de usuários
	$scope.autenticacao = function () {
		firebase.auth().signInWithEmailAndPassword($scope.Email.email, $scope.Senha.senha)
			.then(function () {
				$state.go("home")
			})
			.catch(function (error) {
				console.error(error.code);
				console.error(error.message);
				alert('Falha ao autenticar, verifique se os dados estão corretos.');
			});
	};

	//Função para LogOut de usuários
	$scope.logOut = function () {
		firebase.auth().signOut()
			.then(function () {
				alert('Sessão Finalizada')
				$state.go("login")
			}, function (error) {
				console.error(error);
			});
	};
})

//------------------------------------------------------------------------------------------------------------------------------------
//Funções do mapa 

var map;
var latLng;
app.controller('mapaCtrl', function ($scope, $state, $cordovaGeolocation, $location, $rootScope) {

	var options = { timeout: 10000, enableHighAccuracy: true };

	$cordovaGeolocation.getCurrentPosition(options).then(function (position) {

		latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

		var mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		map = new google.maps.Map(document.getElementById("map"), mapOptions);


	}, function (error) {
		alert("Localização Impossível");
	})


	$scope.addMarker = function () {
		marker = new google.maps.Marker({
			position: latLng,
			map: map,
			draggable: true,
			icon: 'img/marcador.png'
		});

	}
	$scope.go = function (path) {
		$location.path(path);
	};
})

//------------------------------------------------------------------------------------------------------------------------------------

app.controller('financeiroCtrl', function ($scope, $location, $state, $firebaseArray, $rootScope) {

	var ref = firebase.database().ref('Alunos');
	$scope.aluno = $firebaseArray(ref);

	//Funcao de transição de templates
	$scope.go = function (path) {
		$location.path(path);
	};


	$scope.selecionado = function (aluno) {
		$rootScope.alunos = aluno;
	}


})

//----------------------------------------------------------------------------------------------------------------------------------

app.controller('veiculosCtrl', function ($scope, $location, $state, $firebaseArray, $ionicPopup) {
	var ref = firebase.database().ref('Veiculo');
	$scope.veiculos = $firebaseArray(ref);

	//Funcao de transição de templates
	$scope.go = function (path) {
		$location.path(path);
	};


	$scope.veiculo = { modelo: '', marca: '' }
	$scope.cadastrar = function () {
		$scope.veiculos.$add($scope.veiculo);
		$scope.veiculo = { modelo: '', marca: '' };
		alert('Veiculo Cadastrado com sucesso!')
		$state.go("veiculos");
	};


	$scope.excluir = function (item) {
		$scope.veiculos.$remove(item);
	}
})

//------------------------------------------------------------------------------------------------------------------------------------


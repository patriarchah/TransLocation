app.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
	});

	$stateProvider.state('alunos', {
		url: '/alunos',
		templateUrl: 'templates/alunos.html',
		controller: 'alunosCtrl'
	})

	$stateProvider.state('cadastroAlunos', {
		url: '/cadastroAlunos',
		templateUrl: 'templates/cadastroAlunos.html',
		controller: 'alunosCtrl'
	})

	$stateProvider.state('motoristas', {
		url: '/motoristas',
		templateUrl: 'templates/motoristas.html',
		controller: 'motoristaCtrl'
	})

	$stateProvider.state('cadastroMotoristas', {
		url: '/cadastroMotoristas',
		templateUrl: 'templates/cadastroMotoristas.html',
		controller: 'motoristaCtrl'
	})

	$stateProvider.state('mapa', {
		url: '/mapa',
		templateUrl: 'templates/mapa.html',
		controller: 'mapaCtrl'

	})

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html'
	})

	$stateProvider.state('financeiro', {
		url: '/financeiro',
		templateUrl: 'templates/financeiro.html',
		controller: 'financeiroCtrl'
	})

	$stateProvider.state('alunosFinanceiro', {
		url: '/alunosFinanceiro',
		templateUrl: 'templates/alunosFinanceiro.html',
		controller: 'financeiroCtrl'
	})

	$stateProvider.state('veiculos', {
		url: '/veiculos',
		templateUrl: 'templates/veiculos.html',
		controller: 'veiculosCtrl'
	})

	$stateProvider.state('cadastroVeiculos', {
		url: '/cadastroVeiculos',
		templateUrl: 'templates/cadastroVeiculos.html',
		controller: 'veiculosCtrl'
	})

	$stateProvider.state('cadastroUsuarios', {
		url: '/cadastroUsuarios',
		templateUrl: 'templates/cadastroUsuarios.html',
		controller: 'loginCtrl'
	})

	$stateProvider.state('perfilMotoristas', {
		url: '/perfilMotoristas',
		templateUrl: 'templates/perfilMotoristas.html',
		controller: 'motoristaCtrl'
	})

	$stateProvider.state('homePrincipal', {
		url: '/homePrincipal',
		templateUrl: 'templates/homePrincipal.html'
	})

	$stateProvider.state('loginMotorista', {
		url: '/loginMotorista',
		templateUrl: 'templates/loginMotorista.html'
	})

	$stateProvider.state('loginAluno', {
		url: '/loginAluno',
		templateUrl: 'templates/loginAluno.html'
	})

	$stateProvider.state('mapaMoto', {
		url: '/mapaMoto',
		templateUrl: 'templates/mapaMoto.html',
		controller: 'mapaCtrl'
	})

	$stateProvider.state('mapaAluno', {
		url: '/mapaAluno',
		templateUrl: 'templates/mapaAluno.html',
		controller: 'mapaCtrl'
	})

	$urlRouterProvider.otherwise('/homePrincipal');

});
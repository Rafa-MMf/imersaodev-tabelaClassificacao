var ListaDeTimes = []

var jogador1 = {
  nome: 'Jogador 1',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
	partidas: 0
}

var jogador2 = {
  nome: 'Jogador 2',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
	partidas: 0  
}


ListaDeTimes.push(jogador1, jogador2)

function CalculaPontos(Time) {
  var pontos = (Time.vitorias * 3) + Time.empates
  return pontos }

function CalculaPartidas(Time) {
  var partidas = Time.vitorias + Time.empates + Time.derrotas
  return partidas }

function ExibirTimeNaTela(ListaDeTimes) {
	var html = ''
	for (i in ListaDeTimes) {
		var Time = ListaDeTimes[i]
		Time.pontos = CalculaPontos(Time)
		Time.partidas = CalculaPartidas(Time)
		
		html += '<tr><td>' + Time.nome + '</td>'
		html += '<td>' + Time.vitorias + '</td>'
		html += '<td>' + Time.empates + '</td>'
		html += '<td>' + Time.derrotas + '</td>'
		html += '<td>' + Time.pontos + '</td>'
		html += '<td>' + Time.partidas + '</td>'
		html += '<td><button onClick="AdicionarVitoria(' + i + ')">Vitória</button></td>'
			if (Time == ListaDeTimes[0]) {
				html += '<td rowspan=' + ListaDeTimes.length + ' scope="rowgroup"><button onClick="AdicionarEmpate(' + i + ')">Empate</button></td></tr>' }
	}
	var TabelaDosTimes = document.getElementById('TabelaDosTimes')
	TabelaDosTimes.innerHTML = html
}
ExibirTimeNaTela(ListaDeTimes)

function AdicionarVitoria(i) {
	var TimeVencedor = ListaDeTimes[i]
	TimeVencedor.vitorias++
	
	var ListaPerdedores = ListaDeTimes.filter(function(value, index, arr){ 
      return value != TimeVencedor})
	
	for (i in ListaPerdedores) {
		var TimePerdedor = ListaPerdedores[i]
		TimePerdedor.derrotas++
	}
	ExibirTimeNaTela(ListaDeTimes)
}

function AdicionarEmpate(i) {
	for (index in ListaDeTimes) {
		var Time = ListaDeTimes[index]
		Time.empates++
		ExibirTimeNaTela(ListaDeTimes)
	}
}

function AdicionarDerrota(i) {
	var TimePerdedor = ListaDeTimes[i]
	TimePerdedor.derrotas++
	exibirTimeNaTela(ListaDeTimes)
}

new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classeCriada: '',
		classeCriada2: '',
		perigo: true,
		cor: '',
		estilo: {
			width: '100px',
			height: '100px'
		},
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 1;
				this.width = `${valor}%`
				if(valor == 100) {
					clearInterval(temporizador)
				}
			}, 10);
		},
		setPerigo(event) {
			if(event.target.value == 'true') {
				this.perigo = true
			} else if(event.target.value == 'false') {
				this.perigo = false
			}
		}
	}
})

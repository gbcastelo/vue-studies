new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Alerta!')
        },
        changeValue(event) {
            return this.valor = event.target.value
        }
    }
})
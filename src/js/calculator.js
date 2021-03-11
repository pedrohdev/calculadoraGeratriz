class Calculator {
    constructor(){
        this.dizima = undefined
        this.periodo = undefined
        this.tipo = undefined
        this.getData()
    }

    getData(){
        document.querySelector('#calculate').onclick = () => {
            try {
                this.dizima = document.querySelector('#dizima').value
                this.periodo = document.querySelector('#casas').value

                this.filter(this.dizima)
                this.filter(this.periodo)

                let {numerador, denominador} = this.calc(this.dizima, this.periodo, '1')
                this.alert('success', 'Geratriz calculada com sucesso!')

                document.querySelector('#result').innerHTML = `<kbd style="font-size: 20pt;">Fração não simplificada: ${numerador}/${denominador}</kbd>`
            } catch (error) {
                this.alert('warning', error)
                document.querySelector('#result').innerHTML = ''
            }
            
        }

        document.querySelector('#clean').onclick = () => {

            this.dizima = document.querySelector('#dizima').value = ''
            this.periodo = document.querySelector('#casas').value = ''
            document.querySelector('#result').innerHTML = ''
            document.querySelector('#alert').innerHTML = ''
        }

    }

    filter(dizima){
        if(dizima == '' || dizima.trim(' ') == '' || !dizima || dizima == 0) {
            throw 'Preecha o campos acima!'
        }
    }

    alert(classe, msg){
        document.querySelector('#alert').innerHTML = `
        <div class="alert alert-${classe}" role="alert">
            ${msg}
        </div>
        `
    }

    arrayVerify(array) {
        const filtrado = array.filter((elem, pos, arr) => {
            return arr.indexOf(elem) == pos;
        });
    
        return filtrado.length === 1 || filtrado.length === array.length; 
    }

    calc(dizima, casasPeriodo, tipo){

        switch (tipo) {
            case '1':
                let result = Math.pow(10, casasPeriodo)
                result = result * dizima
                result = result - dizima
                result = Math.round(result)
                
                return {
                    numerador: result,
                    denominador: Math.pow(10, casasPeriodo) - 1
                }
            break;
        }
    }
}
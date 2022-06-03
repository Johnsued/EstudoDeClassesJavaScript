class cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;//resultado após saque pelo cliente de 200$
        }
    }
}


const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


console.log(contaCorrenteRicardo.saldo);//saldo inicial
contaCorrenteRicardo.saldo = 100;// atribuição de saldo positivo
console.log(contaCorrenteRicardo.saldo);//chamando saldo positivo
contaCorrenteRicardo.sacar(50);//resultado após saque de 50 reais do saldo de 100 reais...





console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteRicardo);

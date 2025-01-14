
    const NOME_HOTEL = 'Green Pine'
    var user = "";
    var senhaUser = 2678;
    var quarto = ["1-Livre", "2-Livre", "3-Livre", "4-Livre", "5-Ocupado", "6-Livre", "7-Ocupado", "8-Livre", "9-Livre", "10-Livre", "11-Livre", "12-Livre", "13-Livre", "14-Livre", "15-Livre", "16-Livre", "17-Livre", "18-Livre", "19-Livre", "20-Livre"];

    function start() {
        var user = prompt('Digite seu nome:');
        var senha = prompt('Digite sua senha:')
        if (senha === senhaUser){
            alert(`Bem vindo ao Hotel ${NOME_HOTEL}, ${user}. É um imenso prazer ter você por aqui`);
            inicio()
        } else {
            alert('Senha Inválida!')
            start()
        }
    }

    let escolha = parseInt(prompt('Selecione uma opção\n1.) Reserva de Quartos\n2.) Cadastro de Hóspedes\n3.) Abastecimento de Carros\n4.) Cadastro 15max|Pesquisa|Listagem\n5.) Sair'));
    switch (opcaoEscolha) {
            case 1:
                reserva_quartos();
                break;
    
            case 2:
                cadastro_hospedes();
                break;
    
            case 3:
                abastecer_carros();
                break;
    
            case 4:
                cadastro_pesquisa_listagem();
                break;
    
            case 5:
                sair()
                break;
    
            default:
                alert("Opção Inválida!")
                break;
        }
    

        function reserva_quartos (){
            alert(`Hotel ${NOME_HOTEL} - Reserva de Quartos`);
            var quartos = ["1-Livre", "2-Livre", "3-Livre", "4-Livre", "5-Livre", "6-Livre", "7-Livre", "8-Livre", "9-Livre", "10-Livre", "11-Livre", "12-Livre", "13-Livre", "14-Livre", "15-Livre", "16-Livre", "17-Livre", "18-Livre", "19-Livre", "20-Livre"];
            var valorDiaria = parseFloat(prompt("Digite o valor da diária: "))
            if (valorDiaria <=0 || isNAN(valorDiaria)) {
                alert("Valor Inválido!")
                reserva_quartos()
            } 
            var diasHosp = parseFloat(prompt("Digite a quantidade de dias de hospedagem: "))
            if (isNAN(diasHosp) || diasHosp > 30) {
                alert("Quantidade de dias não permitido!")
                reserva_quartos()
            }
            let nomeHospede = prompt("Digite o nome do Hóspede: ")
            alert(quartos)
            var quarto = parseInt(prompt("Qual o número do quarto? ")) - 1;
            if (quarto < 0 || quarto >= 20) {
                alert("Número inválido!");
                return reservas();
            }
            if (quartos[quarto] === "Ocupado!") {
                alert("Quarto indisponível!");
                return reservas();
            } else {
                quartos[quarto] = "Ocupado!";
                alert("Quarto reservado, obrigado " + user + "!");
            }

            var conta = valorDiaria * diasHosp;
            var confirmarReserva = prompt(`${user}, você confirma a hospedagem para ${nomeHospede} por dias dias para o quarto ${(quarto + 1)} por: R$ ${conta} reais? (S/N)`)
            if (confirmarReserva === 'N'){
                alert('Reserva cancelada!');
                reserva_quartos()
            } else {
                quartos[quarto][1] = 'ocupado';
                alert(`${user}, a reserva foi efetuada para ${nomeHospede}!`);
                alert(quarto);
                inicio()
        }
        }

        function cadastro_hospedes (){
            alert(`Hotel ${NOME_HOTEL} - Cadastro de Hóspedes`);
            var hospedes = [];
            let idadeHospede = prompt("Digite a idade Hóspede:")
            while (contagem) {
                const hospede = prompt("Digite o nome do Hóspede para cadastrá-lo ou'PARE' para finalizar: ");
                if (hospede && hospede.toUpperCase() !== "PARE") {
                if (isNaN(idadeHospede) || idadeHospede < 0){
                        alert('Idade invalida');
                    }       
                } else if(idadeHospede <= 6) {
                    hospedes.push({'Hospede':`${nomeHospede}`, 'Idade':`${idadeHospede}`, 'Tipo_Pagamento':'Gratuito', 'Valor_a_ser_pago':(valor_diaria - valor_diaria)});
                } else if(idadeHospede >= 65) {
                    hospedes.push({'Hospede':`${nomeHospede}`, 'Idade':`${idadeHospede}`, 'Tipo_Pagamento':'Meia', 'Valor_a_ser_pago':(valor_diaria / 2)})
                } else {
                    hospedes.push({'Hospede':`${nomeHospede}`, 'Idade':`${idadeHospede}`, 'Tipo_Pagamento':'Inteiro', 'Valor_a_ser_pago':(valor_diaria - 0)})
                }
        }

            let gratuidade = 0;
            for (hospede of hospedes){
            if (hospede.pagamento === 'Gratuito'){
                gratuidade++;
            }

            let meia = 0;
            for (hospede of hospedes){
                if (hospede.pagamento === 'Meia'){
                    meia++;
                }
            }

            let valor_total = 0;
            for (hospede of hospedes){
                valor_total += hospede.valorTotal;
            }

        }

        }


        function cadastro_pesquisa_listagem (){
            alert(`Hotel ${NOME_HOTEL} - Cadastro, Pesquisa e Listagem de Hóspedes`);

            let funcao = parseInt(prompt('Selecione uma opção\n1.) Cadastrar (max-15)\n2.) Pesquisar\n3.) Listar\n4.) Sair'));

            if (funcao === 1) {
                for (let i = 1; i > 15; i++) {
                    let nome = prompt('Digite o nome do hóspede: ');
                    let idade = parseInt(prompt('Digite a idade do hóspede: '));
                    let tipo = '';
                    let valor = 0;
                    if (idade <= 6) {
                        tipo = 'Gratuito';
                        valor = 0;
                    } else if (idade >= 60) {
                        tipo = 'Meia';
                        valor = valorDiaria / 2;
                    } else {
                        tipo = 'Inteiro';
                        valor = valorDiaria;
                    }
                    hospedes.push({nome: nome, idade: idade, tipo: tipo, valor: valor});
                }

            if (funcao === 2) {
                let nome = prompt('Digite o nome do hóspede que deseja pesquisar: ');
                let encontrado = false;
                for (hospede of hospedes) {
                    if (hospede.nome === nome) {
                        alert(`Nome: ${hospede.nome}\nIdade: ${hospede.idade}\nTipo: ${hospede.tipo}\nValor: ${hospede.valor}`);
                        encontrado = true;
                        break;
                    }
                }
                if (!encontrado) {
                    alert('Hóspede não encontrado');
                }
            }

            if (funcao === 3) {
                for (hospede of hospedes) {
                    alert(`Nome: ${hospede.nome}\nIdade: ${hospede.idade}\nTipo: ${hospede.tipo}\nValor: ${hospede.valor}`);
                }
            }

            if (funcao === 4) {
                sair();
        }
        }
        }

        function eventos(){
            alert(`Hotel ${NOME_HOTEL} - Eventos`);
            var eventos = [];
                    var convidados = parseInt(prompt("Digite a quantidade de convidados: "));
                    if (convidados > 350 || convidados < 0) {
                        alert("Número de convidados inválido!");
                        eventos();
                    } else if (convidados <= 220){
                        alert("Use o auditório Laranja (inclua mais 42 cadeiras)")
                    } else if (convidados > 220){
                        alert("Use o auditório Colorado")
                    }
                    alert("Agora vamos ver a agenda do evento")
                    agendarEvento();
        }

        function agendarEvento(){
            alert(`Hotel ${NOME_HOTEL} - Agendamento de Eventos`);
            var diasDispval = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];
            var diaEvento = prompt("Digite o dia do evento(segunda-domingo): ").toLowerCase();
            if (diasDispval.includes(diaEvento)){
                alert("Dia disponível!")
            } else {
                alert("Dia indisponível!")
                eventos();
            }
            var horaEvento = prompt("Digite a hora do evento: ");
            if (horaEvento >= 7 && horaEvento <= 23){
                alert("Horário disponível!")
            } else {
                alert("Horário indisponível!")
                eventos();
            }
            if (diaEvento === "sábado" || diaEvento === "domingo"){
                if (horaEvento >= 7 && horaEvento <= 15){
                    alert("Horário disponível!")
                } else {
                    alert("Horário indisponível!")
                    eventos();
                }
            }
            var nomeEmpresa = prompt("Digite o nome da empresa: ");
            alert(`Evento agendado com sucesso para ${nomeEmpresa} no dia ${diaEvento} às ${horaEvento} horas!`);

            var duracao_evento = parseInt(prompt("Digite a duração do evento: "));
            var valor_garcom = 10.5
            garcoms += Math.ceil(convidados / 12); 
            garcoms += Math.ceil(duracao_evento / 2);
            custoTotal = garcoms * valor_garcom * duracao_evento;
            alert(`São necessários ${garcoms} garçons por R$${custoTotal.toFixed(2)}`)
            buffetEvento()
        }   
        
           function buffetEvento() {
                let cafe = numConvidados * 0.2; 
                let agua = numConvidados * 0.5;
                let salgado = numConvidados * 7; 

                let custoCafe = cafe * 0.80;
                let custoAgua = agua * 0.40;
                let custoSalgado = (salgado / 100) * 34;

                alert(`Será necessário para o Buffet: Café: ${cafe} R$${custoCafe.toFixed(2)}\nÁgua: ${agua} R$${custoAgua.toFixed(2)}\nSalgado: ${salgado} R$${custoSalgado.toFixed(2)}`);
            
                var TotalBuffet = custoCafe + custoAgua + custoSalgados;

                alert(`
                    Detalhes do Evento
                    Empresa: ${nomeEmpresa}
                    Dia: ${dia} 
                    Hora: ${hora}
                    Duração: ${duracao} horas
                    Garçons: ${garçonsNecessarios}
                    Buffet: ${TotalBuffet}
                    Total: ${TotalBuffet + custoGarçons}
                    Auditorio: ${auditorio}	
                    `)

                 var confirmacao = prompt("Deseja confirmar o evento? (S/N)");
                if (confirmacao.toUpperCase() === "S") {
                    alert("Evento confirmado com sucesso!");
                   eventos.push({nomeEmpresa: nomeEmpresa, dia: dia, hora: hora, duracao: duracao, garçons: garçonsNecessarios, buffet: TotalBuffet, total: TotalBuffet + custoGarçons, auditorio: auditorio});
                    inicio();
                } else {
                    alert("Evento cancelado!"); 
                    inicio();
                }    
            }

            function abastecer_carros (){
                alert(`Hotel ${NOME_HOTEL} - Abastecimento de Carros`);
                function calcularMelhorPosto() {
                const obterPrecoCombustivel = (alcool, gasolina) => {
                        return alcool <= gasolina * 0.7 ? alcool : gasolina;
                    }
                
                const calcularCustoTotal = (precoCombustivel) => precoCombustivel * 42;

                var alcoolWayneoil = parseFloat(prompt("Digite o valor do litro de álcool da Wayne Oil: "))
                var gasolinaWayneoil = parseFloat(prompt("Digite o valor do litro de gasolina da Wayne Oil: "))
                var alcoolStarkpetrol = parseFloat(prompt("Digite o valor do litro de álcool da Stark Petrol: "))
                var gasolinaStarkpetrol = parseFloat(prompt("Digite o valor do litro de gasolina da Stark Petrol: "))

                let precoWayneOil = obterPrecoCombustivel(alcoolWayneoil, gasolinaWayneoil);
                let precoStarkPetrol = obterPrecoCombustivel(alcoolStarkpetrol, gasolinaStarkpetrol);

                let custoWayneOil = calcularCustoTotal(precoWayneOil);
                let custoStarkPetrol = calcularCustoTotal(precoStarkPetrol);

                var whole;
                if (custoWayneOil < custoStarkPetrol) {
                    whole = `É mais barato abastecer no posto Wayne Oil com o combustível escolhido.`;
                } else if (custoStarkPetrol < custoWayneOil) {
                    whole = `É mais barato abastecer no posto Stark Petrol com o combustível escolhido.`;
                } else {
                    whole = `Os preços são iguais nos dois postos.`;
                }
                    alert(whole);
                    inicio();
            }
}

            function manutencao(){
                alert(`Hotel ${NOME_HOTEL} - Manutenção de Ar Condicionado`);
                var empresaArCond = prompt("Digite o nome da empresa de ar condicionado: ");
                var valorManutencao = parseFloat(prompt("Digite o valor por aparelho: "));
                var qtdAparelho = parseInt(prompt("Digite a quantidade de aparelhos: "));

                var valorTotal = valorManutencao * qtdAparelho;

                var desconto = prompt("Qual a porcentagem de desconto? ");
                var qtdMinDesc = parseInt(prompt("Qual a quantidade mínima de aparelhos para desconto: "));

                var valorTotal = valorManutencao * qtdAparelho;
                if (qtdAparelho >= qtdMinDesc) {
                    valorTotal = valorTotal - (valorTotal * (desconto / 100));
                } 
                
                alert(`O serviço da empresa ${empresaArCond} para ${qtdAparelho} aparelhos custará R$${valorTotal.toFixed(2)}`);
                if (menorValor === null || valorManutencao < menorValor) {
                    menorValor = valorManutencao;
                    empresaMenorValor = nomeEmpresa;
                }

                var dadosNovos = prompt("Deseja informar novos dados? (S/N)");
                if (dadosNovos.toUpperCase() === "S") {
                    manutencao();
                } else {
                    alert("O orçamento de menor valor é o da empresa " + empresaArCond + " no valor de R$" + valorTotal.toFixed(2));
                    orcamento.push({empresa: empresaArCond, valor: valorTotal});
                    inicio();
                }
            }     

                function sair (){
                    var confirma = confirm('Você deseja sair?');
                        if (confirma) {
                        alert(`Muito obrigado e até logo, ${user}!`);
                            start()
                        } else {
                            inicio();
                        }
                }

                function erro (){
                    console.error("Ops! Algo deu errado! Escolha um número de 1 a 5");
                    inicio();
    }

        inicio();
let player = {
    nome: "Herói",
    ouro: 0,
    equipamentos: {
        espada: 1,
        escudo: 1,
        armadura: 1
    },
    
    getForca: function() {
        return this.equipamentos.espada + this.equipamentos.escudo + this.equipamentos.armadura;
    }
};

function loja() {
    alert(`Bem-vindo à Loja! \nSeu Ouro: ${player.ouro} \nForça Atual: ${player.getForca()}`);
    let escolha = prompt("O que deseja melhorar? (1-Espada, 2-Escudo, 3-Armadura) - Custo: 10 Ouro");
    
    if (player.ouro >= 10) {
        if (escolha === "1") player.equipamentos.espada++;
        else if (escolha === "2") player.equipamentos.escudo++;
        else if (escolha === "3") player.equipamentos.armadura++;
        else { alert("Opção inválida!"); return; }
        
        player.ouro -= 10;
        alert("Melhoria concluída!");
    } else {
        alert("Ouro insuficiente!");
    }
}

function rodarFase(fase) {
    let forcaNecessaria = fase * 3; 
    alert(`--- FASE ${fase} --- \nForça necessária para vencer: ${forcaNecessaria}`);
    
    while (true) {
        let acao = prompt("1-Lutar | 2-Ir à Loja | 3-Ver Status");
        
        if (acao === "1") {
            if (player.getForca() >= forcaNecessaria) {
                let recompensa = 30;
                player.ouro += recompensa;
                alert(`Vitória! Você ganhou ${recompensa} de ouro.`);
                return true;
            } else {
                alert("Você foi derrotado! Tente melhorar seus equipamentos.");
            }
        } else if (acao === "2") {
            loja();
        } else if (acao === "3") {
            alert(`Status: Espada(${player.equipamentos.espada}), Escudo(${player.equipamentos.escudo}), Armadura(${player.equipamentos.armadura}) | Ouro: ${player.ouro}`);
        }
    }
}


function iniciarJogo() {
    alert("Bem-vindo ao MiniRPG!");
    for (let i = 1; i <= 5; i++) {
        rodarFase(i);
    }
    alert("Parabéns! Você derrotou todos os desafios!");
}

iniciarJogo();

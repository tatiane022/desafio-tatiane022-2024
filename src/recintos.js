import { Animal } from "./animais.js";

class Recinto {
  constructor(numero, bioma, tamanhoTotal, qtdAnimailExist, nmAnimailExist) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanhoTotal = tamanhoTotal;
    this.qtdAnimailExist = qtdAnimailExist;
    this.nmAnimailExist = nmAnimailExist;
  }

  exibirDetalhes() {
    console.log(
      `ID: ${this.numero}, Nome: ${this.bioma}, Área: ${this.tamanhoTotal}, Quantidade de Animais: ${this.qtdAnimailExist}, Animal: ${this.nmAnimailExist}`
    );
  }

  recintosAtualList() {
    const recintos = [
      new Recinto(1, "savana", 10, 3, "MACACO"),
      new Recinto(2, "floresta", 5, 0, "vazio"),
      new Recinto(3, "savana e rio", 7, 1, "GAZELA"),
      new Recinto(4, "rio", 8, 0, "vazio"),
      new Recinto(5, "savana", 9, 1, "LEÃO"),
    ];
    return recintos;
  }

  analisarRecintos(nome, quantidade) {
        const animalClass = new Animal();

        var animaisList = animalClass.animaisList();

        const recintos = this.recintosAtualList();
        console.log("================================");
        recintos.forEach((recinto) => recinto.exibirDetalhes());
        console.log("================================");

        const animalBuscado = animaisList.find((animal) => animal.especie === nome);

        console.log("Especificaçao:");

        console.log(animalBuscado);

        var bioma = "";
        bioma = animalBuscado.bioma;
        var biomaEncontrado = [];
        var biomaExct = [];
        biomaExct = this.extrairPalavras(bioma);
        
        if (biomaExct.length > 1) {
            for (const bio of biomaExct) {
                var listAux = recintos.filter((recinto) =>
                    recinto.bioma.includes(bio)
                );
                for (const element of listAux) {
                    biomaEncontrado.push(element)
                }
            }
            
        }else{
            biomaEncontrado = recintos.filter((recinto) =>
            bioma.includes(recinto.bioma)
            );
        }

        var disp = false;
        var recintoDisp = [];
        var espacoRest = 0;

        for (const element of biomaEncontrado) {
          espacoRest = element.tamanhoTotal - element.qtdAnimailExist;

          if (espacoRest > (quantidade * animalBuscado.tamanho)) {
            disp = true;
            element.qtdAnimailExist = element.qtdAnimailExist + (quantidade * animalBuscado.tamanho);


            recintoDisp.push(element);
            if(nome === "MACACO" && element.nmAnimailExist === "LEÃO"){
                recintoDisp.pop();
            }
            if (nome !== element.nmAnimailExist && element.nmAnimailExist !== 'vazio') {
                element.qtdAnimailExist++
            }
            quantidade--;
          }

         
        }

        recintoDisp.sort((a, b) => a.numero - b.numero);

        if (disp == false) {
            console.log("recinto Indisponivel");
            return {
                erro: "Não há recinto viável",
            };
        }

        console.log("recinto disponivel");

        console.log(recintoDisp);

        var result = [];

        for (const elementResult of recintoDisp) {
            var rest = "Recinto " + elementResult.numero + " (espaço livre: " + (elementResult.tamanhoTotal - elementResult.qtdAnimailExist + " total: "+ elementResult.tamanhoTotal + ")" )
            result.push(rest)
        }

        return {
        recintosViaveis: result
        }
    };


    extrairPalavras(texto) {
        return this.filtrarPalavras(texto.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/));
    }

    filtrarPalavras(palavras) {
        return palavras.filter(palavra => palavra.length >= 3);
      }
}


export { Recinto as Recinto };

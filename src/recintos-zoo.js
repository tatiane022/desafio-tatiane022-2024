import { Animal } from "./animais.js";
import { Recinto } from "./recintos.js";

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    const animalClass = new Animal();

    if (!animalClass.validarHabilitacao(animal)) {
      return {
        erro: "Animal inválido",
      };
    }

    if (quantidade < 1) {
      return {
        erro: "Quantidade inválida",
      };
    }

    const recintoClass = new Recinto();

    return recintoClass.analisarRecintos(animal, quantidade);

  }
}

const zoo = new RecintosZoo();

// Chamando o método
// zoo.analisaRecintos("MACACO", 10);
// zoo.analisaRecintos("CROCODILO", 1);
zoo.analisaRecintos("MACACO", 2);

export { RecintosZoo as RecintosZoo };

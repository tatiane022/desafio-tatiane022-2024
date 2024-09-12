

class Animal {

  constructor(especie, tamanho, bioma) {
    this.especie = especie;
    this.tamanho = tamanho;
    this.bioma = bioma;
  }

  validarHabilitacao(nome) {
    var animais = [
      "LEAO",
      "LEOPARDO",
      "CROCODILO",
      "MACACO",
      "GAZELA",
      "HIPOPOTAMO",
    ];

    if (animais.includes(nome.toUpperCase())) {
      console.log(
        "O animal pertence ao grupo que o zoologico esta habilitado a manter."
      );
      return true;
    } else {
      return false;
    }
  }

  animaisList(){
    const animaisList = [
      new Animal("LEAO", 3, "savana"),
      new Animal("LEOPARDO", 2, "savana"),
      new Animal("CROCODILO", 3, "rio"),
      new Animal("MACACO", 1, "savana ou floresta"),
      new Animal("GAZELA", 2, "savana"),
      new Animal("HIPOPOTAMO", 4, "savana ou rio"),
    ];
    return animaisList;
  }

  

}

export { Animal as Animal };

import "mocha";
import { expect } from "chai";
import { Funko } from "../../src/classes/funko.js";
import { FunkoTypes } from "../../src/enums/funko_types.js";
import { FunkoGenres } from "../../src/enums/funko_genres.js";

describe("Funko class tests", () => {
  it("Funko constructor", () => {
    expect(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.VIDEOGAMES,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    ).to.be.instanceof(Funko);
    expect(
      () =>
        new Funko(
          -1,
          "Classic Sonic",
          "El mejor Funko de Sonic",
          FunkoTypes.POP,
          FunkoGenres.VIDEOGAMES,
          "Sonic The Hedgehog",
          1,
          true,
          "",
          50.99
        )
    ).to.throw("El ID de un Funko debe ser un entero positivo");
    expect(
      () =>
        new Funko(
          2.5,
          "Classic Sonic",
          "El mejor Funko de Sonic",
          FunkoTypes.POP,
          FunkoGenres.VIDEOGAMES,
          "Sonic The Hedgehog",
          1,
          true,
          "",
          50.99
        )
    ).to.throw("El ID de un Funko debe ser un entero positivo");
    expect(
      () =>
        new Funko(
          1,
          "Classic Sonic",
          "El mejor Funko de Sonic",
          FunkoTypes.POP,
          FunkoGenres.VIDEOGAMES,
          "Sonic The Hedgehog",
          -1,
          true,
          "",
          50.99
        )
    ).to.throw(
      "El número identificativo de un Funko debe ser un entero positivo"
    );
    expect(
      () =>
        new Funko(
          1,
          "Classic Sonic",
          "El mejor Funko de Sonic",
          FunkoTypes.POP,
          FunkoGenres.VIDEOGAMES,
          "Sonic The Hedgehog",
          2.5,
          true,
          "",
          50.99
        )
    ).to.throw(
      "El número identificativo de un Funko debe ser un entero positivo"
    );
    expect(
      () =>
        new Funko(
          1,
          "Classic Sonic",
          "El mejor Funko de Sonic",
          FunkoTypes.POP,
          FunkoGenres.VIDEOGAMES,
          "Sonic The Hedgehog",
          1,
          true,
          "",
          -50.99
        )
    ).to.throw("El valor de mercado de un Funko debe ser positivo");
  });

  it("ID property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.id).to.be.equal(1);
    funko.id = 5;
    expect(funko.id).to.be.equal(5);
    expect(() => (funko.id = -1)).to.throw(
      "El ID de un Funko debe ser un entero positivo"
    );
    expect(() => (funko.id = 2.5)).to.throw(
      "El ID de un Funko debe ser un entero positivo"
    );
  });

  it("Name property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.name).to.be.equal("Classic Sonic");
    funko.name = "Shadow";
    expect(funko.name).to.be.equal("Shadow");
  });

  it("Description property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.description).to.be.equal("El mejor Funko de Sonic");
    funko.description = "Un Funko de Sonic increíble";
    expect(funko.description).to.be.equal("Un Funko de Sonic increíble");
  });

  it("Type property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.type).to.be.equal(FunkoTypes.POP);
    funko.type = FunkoTypes.VYNIL_GOLD;
    expect(funko.type).to.be.equal(FunkoTypes.VYNIL_GOLD);
  });

  it("Genre property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.genre).to.be.equal(FunkoGenres.VIDEOGAMES);
    funko.genre = FunkoGenres.ANIMATION;
    expect(funko.genre).to.be.equal(FunkoGenres.ANIMATION);
  });

  it("Franchise property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.franchise).to.be.equal("Sonic The Hedgehog");
    funko.franchise = "Sega";
    expect(funko.franchise).to.be.equal("Sega");
  });

  it("Number property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.number).to.be.equal(1);
    funko.number = 23;
    expect(funko.number).to.be.equal(23);
    expect(() => (funko.number = -1)).to.throw(
      "El número identificativo de un Funko debe ser un entero positivo"
    );
    expect(() => (funko.number = 2.5)).to.throw(
      "El número identificativo de un Funko debe ser un entero positivo"
    );
  });

  it("Exclusive property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.exclusive).to.be.true;
    funko.exclusive = false;
    expect(funko.exclusive).to.be.false;
  });

  it("Special characteristics property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.characteristics).to.be.equal("");
    funko.characteristics = "Brilla en la oscuridad";
    expect(funko.characteristics).to.be.equal("Brilla en la oscuridad");
  });

  it("Value property", () => {
    const funko: Funko = new Funko(
      1,
      "Classic Sonic",
      "El mejor Funko de Sonic",
      FunkoTypes.POP,
      FunkoGenres.VIDEOGAMES,
      "Sonic The Hedgehog",
      1,
      true,
      "",
      50.99
    );

    expect(funko.value).to.be.equal(50.99);
    funko.value = 20.5;
    expect(funko.value).to.be.equal(20.5);
    expect(() => (funko.value = -1)).to.throw(
      "El valor de mercado de un Funko debe ser positivo"
    );
  });

  it("Function toString", () => {
    expect(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.VIDEOGAMES,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      ).toString()
    ).to.be.equal(
      "ID: 1\nNombre: Classic Sonic\nDescripción: El mejor Funko de Sonic\nTipo: Pop!\nGénero: Videojuegos\nFranquicia: Sonic The Hedgehog\nNúmero identificativo: 1\nExclusivo\nCaracterísticas especiales: \nValor de mercado: 50.99€\n"
    );
    expect(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.VIDEOGAMES,
        "Sonic The Hedgehog",
        1,
        false,
        "",
        50.99
      ).toString()
    ).to.be.equal(
      "ID: 1\nNombre: Classic Sonic\nDescripción: El mejor Funko de Sonic\nTipo: Pop!\nGénero: Videojuegos\nFranquicia: Sonic The Hedgehog\nNúmero identificativo: 1\nComún\nCaracterísticas especiales: \nValor de mercado: 50.99€\n"
    );
  });

  it("Function instanceFromCSVString", () => {
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Pop!",
        "Videojuegos",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.VIDEOGAMES,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    );
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Pop! Rides",
        "Videojuegos",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP_RIDES,
        FunkoGenres.VIDEOGAMES,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    );
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Vynil Soda",
        "Videojuegos",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.VYNIL_SODA,
        FunkoGenres.VIDEOGAMES,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    );
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Vynil Gold",
        "Videojuegos",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.VYNIL_GOLD,
        FunkoGenres.VIDEOGAMES,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    );
    expect(() =>
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Poppy",
        "Videojuegos",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.throw(
      "El tipo del Funko debe ser Pop!, Pop! Rides, Vynil Soda o Vynil Gold"
    );
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Pop!",
        "Animación",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.ANIMATION,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    );
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Pop!",
        "Anime",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.ANIME,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    );
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Pop!",
        "Películas y TV",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.MOVIES_AND_TV,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    );
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Pop!",
        "Música",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.MUSIC,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    );
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Pop!",
        "Deportes",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.SPORTS,
        "Sonic The Hedgehog",
        1,
        true,
        "",
        50.99
      )
    );
    expect(() =>
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Pop!",
        "Algo",
        "Sonic The Hedgehog",
        "1",
        "true",
        "",
        "50.99",
      ])
    ).to.throw(
      "El género del Funko debe ser Animación, Anime, Películas y TV, Música, Deportes o Videojuegos"
    );
    expect(
      Funko.instanceFromParams([
        "1",
        "Classic Sonic",
        "El mejor Funko de Sonic",
        "Pop!",
        "Videojuegos",
        "Sonic The Hedgehog",
        "1",
        "false",
        "",
        "50.99",
      ])
    ).to.be.eql(
      new Funko(
        1,
        "Classic Sonic",
        "El mejor Funko de Sonic",
        FunkoTypes.POP,
        FunkoGenres.VIDEOGAMES,
        "Sonic The Hedgehog",
        1,
        false,
        "",
        50.99
      )
    );
  });
});

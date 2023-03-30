import "mocha";
import { expect } from "chai";
import { FunkoCollection } from "../../src/collections/funko_collection.js";
import { Funko } from "../../src/classes/funko.js";
import { FunkoTypes } from "../../src/enums/funko_types.js";
import { FunkoGenres } from "../../src/enums/funko_genres.js";

describe("FunkoCollection class tests", () => {
  it("FunkoCollection constructor", () => {
    expect(new FunkoCollection([])).to.be.instanceof(FunkoCollection);
    expect(
      new FunkoCollection([
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
        ),
      ])
    ).to.be.instanceof(FunkoCollection);
  });

  it("show function", () => {
    const funko_collection: FunkoCollection = new FunkoCollection([
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
      ),
    ]);

    expect(funko_collection.show(1)).to.be.equal(
      "ID: 1\nNombre: Classic Sonic\nDescripción: El mejor Funko de Sonic\nTipo: Pop!\nGénero: Videojuegos\nFranquicia: Sonic The Hedgehog\nNúmero identificativo: 1\nExclusivo\nCaracterísticas especiales: \nValor de mercado: 50.99€\n"
    );
    expect(funko_collection.show(0)).to.be.equal("");
  });

  it("add function", () => {
    const funko_collection: FunkoCollection = new FunkoCollection([]);
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

    expect(funko_collection.show(1)).to.be.equal("");
    expect(funko_collection.add(funko)).to.be.true;
    expect(funko_collection.show(1)).to.be.equal(
      "ID: 1\nNombre: Classic Sonic\nDescripción: El mejor Funko de Sonic\nTipo: Pop!\nGénero: Videojuegos\nFranquicia: Sonic The Hedgehog\nNúmero identificativo: 1\nExclusivo\nCaracterísticas especiales: \nValor de mercado: 50.99€\n"
    );
    expect(funko_collection.add(funko)).to.be.false;
  });

  it("update function", () => {
    const funko_collection: FunkoCollection = new FunkoCollection([
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
      ),
    ]);

    expect(funko_collection.show(1)).to.be.equal(
      "ID: 1\nNombre: Classic Sonic\nDescripción: El mejor Funko de Sonic\nTipo: Pop!\nGénero: Videojuegos\nFranquicia: Sonic The Hedgehog\nNúmero identificativo: 1\nExclusivo\nCaracterísticas especiales: \nValor de mercado: 50.99€\n"
    );
    expect(
      funko_collection.update(
        new Funko(
          1,
          "Shadow",
          "El mejor Funko de Shadow",
          FunkoTypes.POP,
          FunkoGenres.VIDEOGAMES,
          "Sonic The Hedgehog",
          1,
          true,
          "",
          50.99
        )
      )
    ).to.be.true;
    expect(funko_collection.show(1)).to.be.equal(
      "ID: 1\nNombre: Shadow\nDescripción: El mejor Funko de Shadow\nTipo: Pop!\nGénero: Videojuegos\nFranquicia: Sonic The Hedgehog\nNúmero identificativo: 1\nExclusivo\nCaracterísticas especiales: \nValor de mercado: 50.99€\n"
    );
    expect(
      funko_collection.update(
        new Funko(
          2,
          "Shadow",
          "El mejor Funko de Shadow",
          FunkoTypes.POP,
          FunkoGenres.VIDEOGAMES,
          "Sonic The Hedgehog",
          1,
          true,
          "",
          50.99
        )
      )
    ).to.be.false;
  });

  it("remove function", () => {
    const funko_collection: FunkoCollection = new FunkoCollection([
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
      ),
    ]);

    expect(funko_collection.show(1)).to.be.equal(
      "ID: 1\nNombre: Classic Sonic\nDescripción: El mejor Funko de Sonic\nTipo: Pop!\nGénero: Videojuegos\nFranquicia: Sonic The Hedgehog\nNúmero identificativo: 1\nExclusivo\nCaracterísticas especiales: \nValor de mercado: 50.99€\n"
    );
    expect(funko_collection.remove(1)).to.be.true;
    expect(funko_collection.show(1)).to.be.equal("");
    expect(funko_collection.remove(1)).to.be.false;
  });

  it("list function", () => {
    const funko_collection: FunkoCollection = new FunkoCollection([]);

    expect(funko_collection.list()).to.be.equal(
      "--------------------------------\n"
    );
    funko_collection.add(
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
    expect(funko_collection.list()).to.be.equal(
      "--------------------------------\nID: 1\nNombre: Classic Sonic\nDescripción: El mejor Funko de Sonic\nTipo: Pop!\nGénero: Videojuegos\nFranquicia: Sonic The Hedgehog\nNúmero identificativo: 1\nExclusivo\nCaracterísticas especiales: \nValor de mercado: 50.99€\n--------------------------------\n"
    );
  });

  it("iterable", () => {
    const funko_collection: FunkoCollection = new FunkoCollection([
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
      ),
    ]);
    expect(
      [...funko_collection].filter((element) => element.id === 1).length
    ).to.be.eql(1);
  });
});

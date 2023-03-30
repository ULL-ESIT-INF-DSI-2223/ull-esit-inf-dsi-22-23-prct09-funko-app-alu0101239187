import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";
import { Funko } from "./classes/funko.js";
import { FunkoCollection } from "./collections/funko_collection.js";
import { FunkoGenres } from "./enums/funko_genres.js";
import { FunkoTypes } from "./enums/funko_types.js";

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

yargs(hideBin(process.argv))
  .command(
    "add",
    "Añade un Funko",
    {
      user: {
        description: "Usuario",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Nombre",
        type: "string",
        demandOption: true,
      },
      description: {
        description: "Descripción",
        type: "string",
        demandOption: true,
      },
      type: {
        description: "Tipo",
        type: "string",
        demandOption: true,
      },
      genre: {
        description: "Género",
        type: "string",
        demandOption: true,
      },
      franchise: {
        description: "Franquicia",
        type: "string",
        demandOption: true,
      },
      number: {
        description: "Número",
        type: "number",
        demandOption: true,
      },
      exclusive: {
        description: "Exclusivo",
        type: "boolean",
        demandOption: true,
      },
      characteristics: {
        description: "Características especiales",
        type: "string",
      },
      value: {
        description: "Valor de mercado",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      let type: FunkoTypes = FunkoTypes.POP;
      switch (argv.type.toLowerCase()) {
        case "pop!":
          type = FunkoTypes.POP;
          break;
        case "pop! rides":
          type = FunkoTypes.POP_RIDES;
          break;
        case "vynil soda":
          type = FunkoTypes.VYNIL_SODA;
          break;
        case "vynil gold":
          type = FunkoTypes.VYNIL_GOLD;
          break;
        default:
          console.log(
            "El tipo del Funko debe ser Pop!, Pop! Rides, Vynil Soda o Vynil Gold"
          );
          process.exit();
      }

      let genre: FunkoGenres = FunkoGenres.ANIMATION;
      switch (argv.genre.toLowerCase()) {
        case "animación":
          genre = FunkoGenres.ANIMATION;
          break;
        case "anime":
          genre = FunkoGenres.ANIME;
          break;
        case "películas y tv":
          genre = FunkoGenres.MOVIES_AND_TV;
          break;
        case "música":
          genre = FunkoGenres.MUSIC;
          break;
        case "deportes":
          genre = FunkoGenres.SPORTS;
          break;
        case "videojuegos":
          genre = FunkoGenres.VIDEOGAMES;
          break;
        default:
          console.log(
            "El género del Funko debe ser Animación, Anime, Películas y TV, Música, Deportes o Videojuegos"
          );
          process.exit();
      }

      if (argv.characteristics !== undefined) {
        try {
          add(
            argv.user,
            new Funko(
              argv.id,
              argv.name,
              argv.description,
              type,
              genre,
              argv.franchise,
              argv.number,
              argv.exclusive,
              argv.characteristics,
              argv.value
            )
          );
        } catch (error) {
          console.log(error.message);
        }
      } else {
        try {
          add(
            argv.user,
            new Funko(
              argv.id,
              argv.name,
              argv.description,
              type,
              genre,
              argv.franchise,
              argv.number,
              argv.exclusive,
              "",
              argv.value
            )
          );
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  )
  .command(
    "update",
    "Actualiza un Funko",
    {
      user: {
        description: "Usuario",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Nombre",
        type: "string",
        demandOption: true,
      },
      description: {
        description: "Descripción",
        type: "string",
        demandOption: true,
      },
      type: {
        description: "Tipo",
        type: "string",
        demandOption: true,
      },
      genre: {
        description: "Género",
        type: "string",
        demandOption: true,
      },
      franchise: {
        description: "Franquicia",
        type: "string",
        demandOption: true,
      },
      number: {
        description: "Número",
        type: "number",
        demandOption: true,
      },
      exclusive: {
        description: "Exclusivo",
        type: "boolean",
        demandOption: true,
      },
      characteristics: {
        description: "Características especiales",
        type: "string",
      },
      value: {
        description: "Valor de mercado",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      let type: FunkoTypes = FunkoTypes.POP;
      switch (argv.type.toLowerCase()) {
        case "pop!":
          type = FunkoTypes.POP;
          break;
        case "pop! rides":
          type = FunkoTypes.POP_RIDES;
          break;
        case "vynil soda":
          type = FunkoTypes.VYNIL_SODA;
          break;
        case "vynil gold":
          type = FunkoTypes.VYNIL_GOLD;
          break;
        default:
          console.log(
            "El tipo del Funko debe ser Pop!, Pop! Rides, Vynil Soda o Vynil Gold"
          );
          process.exit();
      }

      let genre: FunkoGenres = FunkoGenres.ANIMATION;
      switch (argv.genre.toLowerCase()) {
        case "animación":
          genre = FunkoGenres.ANIMATION;
          break;
        case "anime":
          genre = FunkoGenres.ANIME;
          break;
        case "películas y tv":
          genre = FunkoGenres.MOVIES_AND_TV;
          break;
        case "música":
          genre = FunkoGenres.MUSIC;
          break;
        case "deportes":
          genre = FunkoGenres.SPORTS;
          break;
        case "videojuegos":
          genre = FunkoGenres.VIDEOGAMES;
          break;
        default:
          console.log(
            "El género del Funko debe ser Animación, Anime, Películas y TV, Música, Deportes o Videojuegos"
          );
          process.exit();
      }

      if (argv.characteristics !== undefined) {
        try {
          update(
            argv.user,
            new Funko(
              argv.id,
              argv.name,
              argv.description,
              type,
              genre,
              argv.franchise,
              argv.number,
              argv.exclusive,
              argv.characteristics,
              argv.value
            )
          );
        } catch (error) {
          console.log(error.message);
        }
      } else {
        try {
          update(
            argv.user,
            new Funko(
              argv.id,
              argv.name,
              argv.description,
              type,
              genre,
              argv.franchise,
              argv.number,
              argv.exclusive,
              "",
              argv.value
            )
          );
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  )
  .command(
    "remove",
    "Elimina un Funko",
    {
      user: {
        description: "Usuario",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      remove(argv.user, argv.id);
    }
  )
  .command(
    "read",
    "Muestra un Funko",
    {
      user: {
        description: "Usuario",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      read(argv.user, argv.id);
    }
  )
  .command(
    "list",
    "Lista los Funkos del usuario",
    {
      user: {
        description: "Usuario",
        type: "string",
        demandOption: true,
      },
    },
    (argv) => {
      list(argv.user);
    }
  )
  .help().argv;

function toFileString(funko: Funko): string {
  return `${funko.id}\n${funko.name}\n${funko.description}\n${funko.type}\n${funko.genre}\n${funko.franchise}\n${funko.number}\n${funko.exclusive}\n${funko.characteristics}\n${funko.value}€\n`;
}

function add(user: string, funko: Funko): void {
  if (funko_collection.add(funko)) {
    fs.writeFile(`${user}.txt`, toFileString(funko), () => {
      console.log("File helloworld.txt has just been created");
    });
    console.log(`Funko añadido a la colección de ${user}`);
  } else {
    console.log(`Este Funko ya existe en la colección de ${user}`);
  }
  console.log(funko_collection.list());
}

function update(user: string, funko: Funko): void {
  if (funko_collection.update(funko)) {
    console.log(`Funko actualizado en la colección de ${user}`);
  } else {
    console.log(`Este Funko no existe en la colección de ${user}`);
  }
  console.log(funko_collection.list());
}

function remove(user: string, id: number): void {
  if (funko_collection.delete(id)) {
    console.log(`Funko eliminado de la colección de ${user}`);
  } else {
    console.log(`Este Funko no existe en la colección de ${user}`);
  }
  console.log(funko_collection.list());
}

function read(user: string, id: number): void {
  const output: string = funko_collection.show(id);
  if (output !== "") {
    console.log(output);
  } else {
    console.log(`Este Funko no existe en la colección de ${user}`);
  }
}

function list(user: string): void {
  const output: string = funko_collection.list();
  if (output !== "") {
    console.log(output);
  } else {
    console.log(`El usuario ${user} no tiene ningún Funko registrado`);
  }
}

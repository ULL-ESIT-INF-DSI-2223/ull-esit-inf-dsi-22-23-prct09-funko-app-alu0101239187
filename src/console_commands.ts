import chalk from "chalk";
import fs from "fs";
import { Funko } from "./classes/funko.js";
import { FunkoGenres } from "./enums/funko_genres.js";
import { FunkoTypes } from "./enums/funko_types.js";

/**
 * Adds a new Funko to a user's collection
 * @param user User to add the Funko to
 * @param funko Funko to add to the user's collection
 */
export function add(user: string, funko: Funko): void {
  try {
    readFile(`funko_collections/${user}/${funko.id}.json`);
    console.log(chalk.red(`Este Funko ya existe en la colección de ${user}`));
  } catch (error) {
    try {
      if (!fs.existsSync(`funko_collections/${user}`)) {
        console.log(chalk.green(`Registrando al usuario ${user}`));
        fs.mkdirSync(`funko_collections/${user}`);
      }
      if (writeFile(`funko_collections/${user}/${funko.id}.json`, funko)) {
        console.log(chalk.green(`Funko añadido a la colección de ${user}`));
      }
    } catch (dir_error) {
      console.log(chalk.red(`Ha ocurrido un error creando el directorio`));
    }
  }
}

/**
 * Updates a Funko from a user's collection
 * @param user User to update the Funko from
 * @param funko Funko to update from the user's collection
 */
export function update(user: string, funko: Funko): void {
  try {
    if (fs.existsSync(`funko_collections/${user}`)) {
      readFile(`funko_collections/${user}/${funko.id}.json`);
      if (writeFile(`funko_collections/${user}/${funko.id}.json`, funko)) {
        console.log(
          chalk.green(`Funko actualizado en la colección de ${user}`)
        );
      }
    } else {
      console.log(
        chalk.red(`El usuario ${user} no tiene ningún Funko registrado`)
      );
    }
  } catch (error) {
    console.log(chalk.red(`Este Funko no existe en la colección de ${user}`));
  }
}

/**
 * Removes a Funko from a user's collection
 * @param user User to remove the Funko from
 * @param id ID of the Funko to remove
 */
export function remove(user: string, id: number): void {
  try {
    if (fs.existsSync(`funko_collections/${user}`)) {
      fs.unlinkSync(`funko_collections/${user}/${id}.json`);
      console.log(chalk.green(`Funko eliminado de la colección de ${user}`));
    } else {
      console.log(
        chalk.red(`El usuario ${user} no tiene ningún Funko registrado`)
      );
    }
  } catch (error) {
    console.log(chalk.red(`Este Funko no existe en la colección de ${user}`));
  }
}

/**
 * Shows the information of a Funko from a user's collection
 * @param user User to show the Funko from
 * @param id ID of the Funko to show
 */
export function read(user: string, id: number): void {
  try {
    if (fs.existsSync(`funko_collections/${user}`)) {
      const funko: Funko = readFile(`funko_collections/${user}/${id}.json`);
      printFunko(funko);
    } else {
      console.log(
        chalk.red(`El usuario ${user} no tiene ningún Funko registrado`)
      );
    }
  } catch (error) {
    console.log(chalk.red(`Este Funko no existe en la colección de ${user}`));
  }
}

/**
 * Lists all the Funkos from a user's collection
 * @param user User to list the Funkos from
 */
export function list(user: string): void {
  try {
    fs.readdirSync(`funko_collections/${user}`).forEach((file) => {
      const funko: Funko = readFile(`funko_collections/${user}/${file}`);
      console.log(chalk.white("--------------------------------"));
      printFunko(funko);
    });
    console.log(chalk.white("--------------------------------"));
  } catch (error) {
    console.log(
      chalk.red(`El usuario ${user} no tiene ningún Funko registrado`)
    );
  }
}

/**
 * Reads a Funko collection from a file
 * @param path Path to the file
 * @returns The Funko collection in the file
 */
function readFile(path: string): Funko {
  const data: string = fs.readFileSync(path).toString();
  const json_object = JSON.parse(data);

  let type: FunkoTypes;
  switch (json_object._type.toLowerCase()) {
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
      throw new Error(
        "El tipo del Funko debe ser Pop!, Pop! Rides, Vynil Soda o Vynil Gold"
      );
  }
  let genre: FunkoGenres;
  switch (json_object._genre.toLowerCase()) {
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
      throw new Error(
        "El género del Funko debe ser Animación, Anime, Películas y TV, Música, Deportes o Videojuegos"
      );
  }
  return new Funko(
    json_object._id,
    json_object._name,
    json_object._description,
    type,
    genre,
    json_object._franchise,
    json_object._number,
    json_object._exclusive,
    json_object._characteristics,
    json_object._value
  );
}

/**
 * Writes a Funko collection in a file
 * @param path Path to the file
 * @param funko_collection Funko collection to write
 * @param error_message Error message to display in case of failure
 */
function writeFile(path: string, funko: Funko) {
  try {
    fs.writeFileSync(path, JSON.stringify(funko, null, 2));
    return true;
  } catch (error) {
    console.log(
      chalk.red("Ha ocurrido un error durante la escritura del fichero")
    );
  }
  return false;
}

/**
 * Shows the info of a Funko
 * @param funko Funko to show
 */
function printFunko(funko: Funko): void {
  console.log(
    chalk.white(
      `ID: ${funko.id}\nNombre: ${funko.name}\nDescripción: ${funko.description}\nTipo: ${funko.type}\nGénero: ${funko.genre}\nFranquicia: ${funko.franchise}\nNúmero identificativo: ${funko.number}`
    )
  );
  if (funko.exclusive) {
    console.log(chalk.green("Exclusivo"));
  } else {
    console.log(chalk.red("Común"));
  }
  console.log(
    chalk.white(`Características especiales: ${funko.characteristics}`)
  );

  if (funko.value < 15) {
    console.log(
      chalk.white(`Valor de mercado: `) + chalk.red(funko.value.toFixed(2))
    );
  } else if (funko.value < 25) {
    console.log(
      chalk.white(`Valor de mercado: `) + chalk.yellow(funko.value.toFixed(2))
    );
  } else if (funko.value < 40) {
    console.log(
      chalk.white(`Valor de mercado: `) + chalk.green(funko.value.toFixed(2))
    );
  } else {
    console.log(
      chalk.white(`Valor de mercado: `) + chalk.cyan(funko.value.toFixed(2))
    );
  }
}

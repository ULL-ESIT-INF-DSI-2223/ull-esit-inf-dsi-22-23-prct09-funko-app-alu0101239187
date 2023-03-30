import fs from "fs";
import { Funko } from "./classes/funko.js";
import { FunkoCollection } from "./collections/funko_collection.js";

/**
 * Adds a new Funko to a user's collection
 * @param user User to add the Funko to
 * @param funko Funko to add to the user's collection
 */
export function add(user: string, funko: Funko): void {
  let user_collection: FunkoCollection = new FunkoCollection([]);
  try {
    user_collection = readFile(`funko_collections/${user}.csv`);
  } catch (error) {
    console.log(`Registrando nuevo usuario ${user}`);
  }
  if (user_collection.add(funko)) {
    if (
      writeFile(
        `funko_collections/${user}.csv`,
        user_collection,
        "Ha ocurrido un error durante la escritura del fichero"
      )
    ) {
      console.log(`Funko añadido a la colección de ${user}`);
    }
  } else {
    console.log(`Este Funko ya existe en la colección de ${user}`);
  }
}

/**
 * Updates a Funko from a user's collection
 * @param user User to update the Funko from
 * @param funko Funko to update from the user's collection
 */
export function update(user: string, funko: Funko): void {
  try {
    const user_collection = readFile(`funko_collections/${user}.csv`);
    if (user_collection.update(funko)) {
      if (
        writeFile(
          `funko_collections/${user}.csv`,
          user_collection,
          "Ha ocurrido un error durante la escritura del fichero"
        )
      ) {
        console.log(`Funko actualizado en la colección de ${user}`);
      }
    } else {
      console.log(`Este Funko no existe en la colección de ${user}`);
    }
  } catch (error) {
    console.log(`El usuario ${user} no tiene ningún Funko registrado`);
  }
}

/**
 * Removes a Funko from a user's collection
 * @param user User to remove the Funko from
 * @param id ID of the Funko to remove
 */
export function remove(user: string, id: number): void {
  try {
    const user_collection = readFile(`funko_collections/${user}.csv`);
    if (user_collection.remove(id)) {
      if (
        writeFile(
          `funko_collections/${user}.csv`,
          user_collection,
          "Ha ocurrido un error durante la escritura del fichero"
        )
      ) {
        console.log(`Funko eliminado de la colección de ${user}`);
      }
    } else {
      console.log(`Este Funko no existe en la colección de ${user}`);
    }
  } catch (error) {
    console.log(`El usuario ${user} no tiene ningún Funko registrado`);
  }
}

/**
 * Shows the information of a Funko from a user's collection
 * @param user User to show the Funko from
 * @param id ID of the Funko to show
 */
export function read(user: string, id: number): void {
  try {
    const user_collection: FunkoCollection = readFile(`funko_collections/${user}.csv`);
    const output: string = user_collection.show(id);
    if (output !== "") {
      console.log(output);
    } else {
      console.log(`Este Funko no existe en la colección de ${user}`);
    }
  } catch (error) {
    console.log(`El usuario ${user} no tiene ningún Funko registrado`);
  }
}

/**
 * Lists all the Funkos from a user's collection
 * @param user User to list the Funkos from
 */
export function list(user: string): void {
  try {
    const user_collection: FunkoCollection = readFile(`funko_collections/${user}.csv`);
    const output: string = user_collection.list();
    if (output !== "") {
      console.log(output);
    } else {
      console.log(`El usuario ${user} no tiene ningún Funko registrado`);
    }
  } catch (error) {
    console.log(`El usuario ${user} no tiene ningún Funko registrado`);
  }
}

/**
 * Reads a Funko collection from a file
 * @param path Path to the file
 * @returns The Funko collection in the file
 */
export function readFile(path: string): FunkoCollection {
  const funkos: Funko[] = [];
  const lines: string[] = fs.readFileSync(path).toString().split("\n");
  lines.forEach((line) => {
    if (line !== "") {
      funkos.push(Funko.instanceFromCSVString(line));
    }
  });
  return new FunkoCollection(funkos);
}

/**
 * Writes a Funko collection in a file
 * @param path Path to the file
 * @param funko_collection Funko collection to write
 * @param error_message Error message to display in case of failure
 */
export function writeFile(
  path: string,
  funko_collection: FunkoCollection,
  error_message: string
) {
  let text = "";
  [...funko_collection].forEach((funko) => {
    text += funko.CSVStringify();
  });

  try {
    fs.writeFileSync(path, text);
    return true;
  } catch (error) {
    console.log(error_message);
  }
  return false;
}

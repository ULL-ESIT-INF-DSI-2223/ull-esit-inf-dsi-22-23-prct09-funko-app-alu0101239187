import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Funko } from "./classes/funko.js";
import { add, update, remove, read, list } from "./console_commands.js";

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
      let params = "";
      if (argv.characteristics !== undefined) {
        params =
          argv.id +
          "," +
          argv.name.replace(/[\n,]/g, "") +
          "," +
          argv.description.replace(/[\n,]/g, "") +
          "," +
          argv.type.replace(/[\n,]/g, "") +
          "," +
          argv.genre.replace(/[\n,]/g, "") +
          "," +
          argv.franchise.replace(/[\n,]/g, "") +
          "," +
          argv.number +
          "," +
          argv.exclusive +
          "," +
          argv.characteristics.replace(/[\n,]/g, "") +
          "," +
          argv.value;
      } else {
        params =
          argv.id +
          "," +
          argv.name.replace(/[\n,]/g, "") +
          "," +
          argv.description.replace(/[\n,]/g, "") +
          "," +
          argv.type.replace(/[\n,]/g, "") +
          "," +
          argv.genre.replace(/[\n,]/g, "") +
          "," +
          argv.franchise.replace(/[\n,]/g, "") +
          "," +
          argv.number +
          "," +
          argv.exclusive +
          ",," +
          argv.value;
      }
      try {
        add(argv.user, Funko.instanceFromCSVString(params));
      } catch (error) {
        console.log(error.message);
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
      let params = "";
      if (argv.characteristics !== undefined) {
        params =
          argv.id +
          "," +
          argv.name.replace(/[\n,]/g, "") +
          "," +
          argv.description.replace(/[\n,]/g, "") +
          "," +
          argv.type.replace(/[\n,]/g, "") +
          "," +
          argv.genre.replace(/[\n,]/g, "") +
          "," +
          argv.franchise.replace(/[\n,]/g, "") +
          "," +
          argv.number +
          "," +
          argv.exclusive +
          "," +
          argv.characteristics.replace(/[\n,]/g, "") +
          "," +
          argv.value;
      } else {
        params =
          argv.id +
          "," +
          argv.name.replace(/[\n,]/g, "") +
          "," +
          argv.description.replace(/[\n,]/g, "") +
          "," +
          argv.type.replace(/[\n,]/g, "") +
          "," +
          argv.genre.replace(/[\n,]/g, "") +
          "," +
          argv.franchise.replace(/[\n,]/g, "") +
          "," +
          argv.number +
          "," +
          argv.exclusive +
          ",," +
          argv.value;
      }
      try {
        update(argv.user, Funko.instanceFromCSVString(params));
      } catch (error) {
        console.log(error.message);
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

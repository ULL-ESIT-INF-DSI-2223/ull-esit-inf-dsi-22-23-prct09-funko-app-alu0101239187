import { Stringable } from "../interfaces/stringable";
import { FunkoTypes } from "../enums/funko_types";
import { FunkoGenres } from "../enums/funko_genres";

export class Funko implements Stringable {
    constructor (private _id: number, private _name: string, private _description: string, private _type: FunkoTypes, private _genre: FunkoGenres, private _franchise: string, private _number: number, private _exclusive: boolean, private _characteristics: string, private _value: number) {
        if (_id % 1 !== 0 || _id < 0) {
            throw new Error("El ID de un Funko debe ser un entero positivo");
        }
        if (_number % 1 !== 0 || _number < 0) {
            throw new Error("El número identificativo de un Funko debe ser un entero positivo");
        }
        if (_value < 0) {
            throw new Error("El valor de mercado de un Funko debe ser positivo");
        }
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        if (id % 1 !== 0 || id < 0) {
            throw new Error("El ID de un Funko debe ser un entero positivo");
        }
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get type(): FunkoTypes {
        return this._type;
    }

    set type(type: FunkoTypes) {
        this._type = type;
    }

    get genre(): FunkoGenres {
        return this._genre;
    }

    set genre(genre: FunkoGenres) {
        this._genre = genre;
    }

    get franchise(): string {
        return this._franchise;
    }

    set franchise(franchise: string) {
        this._franchise = franchise;
    }

    get number(): number {
        return this._number;
    }

    set number(number: number) {
        if (number % 1 !== 0 || number < 0) {
            throw new Error("El número identificativo de un Funko debe ser un entero positivo");
        }
        this._number = number;
    }

    get exclusive(): boolean {
        return this._exclusive;
    }

    set exclusive(exclusive: boolean) {
        this._exclusive = exclusive;
    }

    get characteristics(): string {
        return this._characteristics;
    }

    set characteristics(characteristics: string) {
        this._characteristics = characteristics;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        if (value < 0) {
            throw new Error("El valor de mercado de un Funko debe ser positivo");
        }
        this._value = value;
    }

    public toString(): string {
        if (this._exclusive) {
            return `ID: ${this._id}\nNombre: ${this._name}\nDescripción: ${this._description}\nTipo: ${this._type}\nGénero: ${this._genre}\nFranquicia: ${this._franchise}\nNúmero identificativo: ${this._number}\nExclusivo\nCaracterísticas especiales: ${this._characteristics}\nValor de mercado: ${this._value}€\n`
        } else {
            return `ID: ${this._id}\nNombre: ${this._name}\nDescripción: ${this._description}\nTipo: ${this._type}\nGénero: ${this._genre}\nFranquicia: ${this._franchise}\nNúmero identificativo: ${this._number}\nComún\nCaracterísticas especiales: ${this._characteristics}\nValor de mercado: ${this._value}€\n`
        }
    }
}
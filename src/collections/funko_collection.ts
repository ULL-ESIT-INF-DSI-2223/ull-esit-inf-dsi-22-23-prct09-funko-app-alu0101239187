import { Funko } from "../classes/funko.js";

export class FunkoCollection {
  constructor(private _elements: Funko[]) {}

  public add(new_funko: Funko): boolean {
    if (
      this._elements.filter((funko) => funko.id === new_funko.id).length > 0
    ) {
      return false;
    }
    this._elements.push(new_funko);
    return true;
  }

  public update(updated_funko: Funko): boolean {
    let index = -1;
    this._elements.forEach((funko, i) => {
      if (funko.id === updated_funko.id) {
        index = i;
      }
    });
    if (index > -1) {
      this._elements[index] = updated_funko;
      return true;
    }
    return false;
  }

  public delete(funko_id: number): boolean {
    let index = -1;
    this._elements.forEach((funko, i) => {
      if (funko.id === funko_id) {
        index = i;
      }
    });
    if (index > -1) {
      this._elements.splice(index, 1);
      return true;
    }
    return false;
  }

  public list(): string {
    let output = "--------------------------------\n";
    this._elements.forEach(
      (funko) =>
        (output += funko.toString() + "--------------------------------\n")
    );
    return output;
  }

  public show(funko_id: number): string {
    const funko = this._elements.filter((funko) => funko.id === funko_id)[0];
    if (funko !== undefined) {
      return funko.toString();
    }
    return "";
  }
}

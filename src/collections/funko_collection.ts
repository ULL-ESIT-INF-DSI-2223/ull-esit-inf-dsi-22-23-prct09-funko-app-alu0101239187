import { Funko } from "../classes/funko.js";

export class FunkoCollection implements Iterable<Funko> {
  /**
   * Constructor of the class FunkoCollection
   * @param _elements Elements of the collection
   */
  constructor(private _elements: Funko[]) {}

  /**
   * Adds a Funko to the collection
   * @param new_funko Funko to add to the collection
   * @returns true if the Funko was added, false otherwise
   */
  public add(new_funko: Funko): boolean {
    if (
      this._elements.filter((funko) => funko.id === new_funko.id).length > 0
    ) {
      return false;
    }
    this._elements.push(new_funko);
    return true;
  }

  /**
   * Updates a Funko from the collection
   * @param updated_funko Funko to update in the collection
   * @returns true if the Funko was updated, false otherwise
   */
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

  /**
   * Removes a Funko from the collection
   * @param funko_id ID of the Funko to remove
   * @returns true if the Funko was removed, false otherwise
   */
  public remove(funko_id: number): boolean {
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

  /**
   * Returns a string with the information of all the Funkos in the collection
   * @returns String with the information of all the Funkos in the collection
   */
  public list(): string {
    let output = "--------------------------------\n";
    this._elements.forEach(
      (funko) =>
        (output += funko.toString() + "--------------------------------\n")
    );
    return output;
  }

  /**
   * Returns a string with the information of one Funko of the collection
   * @param funko_id ID of the Funko to show
   * @returns String with the information of the Funko
   */
  public show(funko_id: number): string {
    const funko = this._elements.filter((funko) => funko.id === funko_id)[0];
    if (funko !== undefined) {
      return funko.toString();
    }
    return "";
  }

  /**
   * Implementation of Symbol.iterator to make the collection iterable
   * @returns An iterator of the collection
   */
  [Symbol.iterator](): Iterator<Funko> {
    return this._elements.values();
  }
}

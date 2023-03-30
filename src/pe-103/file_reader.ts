import { readFileSync } from "fs";

export type BackpackData = {
  max_weight: number;
  profit: number[];
  weight: number[];
};

export abstract class FileReader {
  /**
   * Constructor of the abstract class FileReader
   * @param file_name The name of the file to read
   */
  constructor(protected file_name: string) {}

  /**
   * Reads a file to obtain the backpack problem data
   * @returns The backpack problem data in a file
   */
  public process() {
    let text = "";

    try {
      text = readFileSync(this.file_name).toString();
    } catch (err) {
      console.log(err.message);
    }
    const output: BackpackData = this.processText(text);
    return output;
  }

  /**
   * Process a text to obtain the backpack problem data
   * @param text The backpack problem data
   */
  protected abstract processText(text: string): BackpackData;
}

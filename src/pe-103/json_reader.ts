import { BackpackData, FileReader } from "./file_reader.js";

class JSONReader extends FileReader {
  /**
   * Constructor of the class JSONReader
   * @param file_name The name of the JSON file to read
   */
  constructor(protected file_name: string) {
    super(file_name);
  }

  protected processText(text: string) {
    // Not implemented

    const output: BackpackData = {
      max_weight: 0,
      profit: [],
      weight: [],
    };
    return output;
  }
}

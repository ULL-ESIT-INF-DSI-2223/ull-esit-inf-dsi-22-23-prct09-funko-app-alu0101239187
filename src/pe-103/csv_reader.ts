import { BackpackData, FileReader } from "./file_reader.js";

export class CSVReader extends FileReader {
  /**
   * Constructor of the class CSVReader
   * @param file_name The name of the CSV file to read
   */
  constructor(protected file_name: string) {
    super(file_name);
  }

  /**
   * Process a text to obtain the backpack problem data
   * @param text The backpack problem data
   */
  protected processText(text: string) {
    const lines: string[] = text.split("\n");
    const output: BackpackData = {
      max_weight: 0,
      profit: [],
      weight: [],
    };

    output.max_weight = +lines[0];
    for (let index = 2; index < 2 + +lines[1]; index++) {
      const line: string[] = lines[index].split(",");
      output.profit.push(+line[0]);
      output.weight.push(+line[1]);
    }
    return output;
  }
}

console.log(new CSVReader("file.csv").process());

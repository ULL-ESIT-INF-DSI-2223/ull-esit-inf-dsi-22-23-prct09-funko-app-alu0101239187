import "mocha";
import { expect } from "chai";
import { CSVReader } from "../../src/pe-103/csv_reader.js";
import { BackpackData } from "../../src/pe-103/file_reader.js";

describe("CSVReader class tests", () => {
  it("CSVReader constructor", () => {
    expect(new CSVReader("file.csv")).to.be.instanceof(CSVReader);
  });

  it("process function", () => {
    const reader: CSVReader = new CSVReader("file.csv");
    const data: BackpackData = {
      max_weight: 40,
      profit: [10, 10, 5, 14, 33],
      weight: [20, 30, 40, 5, 4],
    };

    expect(reader.process()).to.be.eql(data);
    expect(new CSVReader("x.csv").process()).to.be.eql({
      max_weight: 0,
      profit: [],
      weight: [],
    });
  });
});

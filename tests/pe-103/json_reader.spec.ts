import "mocha";
import { expect } from "chai";
import { JSONReader } from "../../src/pe-103/json_reader.js";
import { BackpackData } from "../../src/pe-103/file_reader.js";

describe("JSONReader class tests", () => {
  it("JSONReader constructor", () => {
    expect(new JSONReader("file.json")).to.be.instanceof(JSONReader);
  });

  it("process function", () => {
    const reader: JSONReader = new JSONReader("file.json");
    const data: BackpackData = {
      max_weight: 0,
      profit: [],
      weight: [],
    };
    expect(reader.process()).to.be.eql(data);
  });
});

import { MysqlClient } from "src/core/Typeorm";
import { createFixture } from "src/fixture/ExampleFixture";
import { ExampleModel } from "src/model/ExampleModel";

export class Service {
  constructor() {}

  public async start() {
    for (let index = 0; index < 50; index++) {
      const test = [];
      for (let index = 0; index < 1000; index++) {
        test.push(createFixture(index));
      }
      const fixtureRepository = MysqlClient.getRepository(ExampleModel);
      await fixtureRepository.save(test);
      console.log("end");
    }
    console.log("real ends");
    return {};
  }
}

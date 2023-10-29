import { faker } from "@faker-js/faker";
import { ExampleModel } from "src/model/ExampleModel";

faker.locale = "ko";
export interface ExampleFixture {
  id: string;
  userId: string;
  phoneNumber: string;
  email: string;
  comapnyName: string;
  name: string;
}

const dummyUlid = (() => {
  const dummy = [];
  for (let index = 0; index < 1000; index++) {
    dummy.push(faker.datatype.uuid());
  }
  return dummy;
})();

export const createFixture = (i: number) => {
  const data = new ExampleModel();
  data.id = faker.datatype.uuid();
  data.userId = dummyUlid[i % 1000];
  data.name = faker.name.lastName() + faker.name.firstName();
  data.companyName = faker.company.name();
  data.phoneNumber = faker.phone.number();
  data.email = faker.internet.email();
  return data;
};

import { faker } from '@faker-js/faker';

export function createRandomCard() {
  return {
    _id: faker.string.uuid(),
    image: faker.image.url(),
    title: faker.lorem.sentence(5),
    category: faker.lorem.word(),
    description: faker.food.description(),
    // createdAt: faker.date.past(),
    // updatedAt: faker.date.recent(),
  };
}

export const cards = faker.helpers.multiple(createRandomCard, {
  count: 5
});

console.log(cards);

// <Card>
//   <CardHeader>
//     <img src={MenuImg} alt='menu image' />
//     <CardTitle>{CTitle}</CardTitle>
//     <CardDescription>Card Description</CardDescription>
//   </CardHeader>
//   <CardContent>
//     <p>Card Content</p>
//   </CardContent>
// </Card>

// export function createRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// });

// console.log(users);

// console.log(createRandomUser());

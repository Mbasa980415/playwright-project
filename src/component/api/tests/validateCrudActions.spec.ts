import test, {expect}  from '@fixtures/baseAPI.fixture'

let createdUserId: string;



test('Create user', async ({regresApiCrud}) => {

  const res = await regresApiCrud.createUser('Alice', 'Engineer');
  expect(res).toHaveProperty('id');
  createdUserId = res.id;
  console.log(createdUserId);
});

test('Get user id', async ({regresApiCrud}) =>{
  const response = await regresApiCrud.getUser(7);

  expect(response.name).toBe("Apple MacBook Pro 16");
})
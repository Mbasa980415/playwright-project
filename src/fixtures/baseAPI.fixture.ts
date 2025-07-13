import { test as baseTest, request, APIRequestContext } from "@playwright/test";
import { RegresApiCrud } from "@api/page/regresAPI.page";

const test = baseTest.extend<{
  apiRequestContext: APIRequestContext;
  regresApiCrud: RegresApiCrud;

}>({
  apiRequestContext: async ({}, use) => {


    const context = await request.newContext({
      baseURL: process.env.BASE_URL!,
      extraHTTPHeaders: {
        'Content-Type': "application/json",
        'x-api-key': process.env.API_KEY!
      },
    });

    await use(context);
    await context.dispose();
  },
  regresApiCrud: async ({ apiRequestContext }, use) => {
    const crud = new RegresApiCrud(apiRequestContext);
    await use(crud);
  },
});

export default test;
export const expect = test.expect;
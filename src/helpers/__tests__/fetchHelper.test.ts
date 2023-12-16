import FetchHelper from "../fetchHelper";
import { assert, test } from "vitest";

test("FetchHelper - GET request", async () => {
  const fetchHelper = new FetchHelper("https://dummyjson.com/products");
  const response = await fetchHelper.get<{ products: any[] }>("");

  assert.equal(response.status, 200);
  assert.isNotNull(response.data.products);
});

test("FetchHelper - GET request", async () => {
  const fetchHelper = new FetchHelper("https://dummyjson.com/products/1");
  const response = await fetchHelper.get<{ products: any[] }>("");

  assert.equal(response.status, 200);
  assert.isNotNull(response.data.products);
});

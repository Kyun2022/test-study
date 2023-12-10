const someApi = {
  create: async (name) => {
    //処理
    return { id: "foo" };
  },
  search: async (name) => {
    //処理
    return false;
  },
};

const createUser = async ({ name, agreeTerms }) => {
  if (!agreeTerms) {
    throw new Error("利用規約に同意していません");
  }

  const hasUser = await someApi.search(name);
  if (hasUser) {
    throw new Error("同じ名前のユーザーが存在します");
  }

  const res = await someApi.create(name);
  return { id: res.id };
};

test("ユーザー作成が成功した場合、idを返す", async () => {
  const id = "foo";
  const name = "きゅん";
  const agreeTerms = true;
  const create = jest.spyOn(someApi, "create").mockImplementation(() => {
    return { id };
  });

  const search = jest.spyOn(someApi, "search").mockImplementation(() => {
    return false;
  });

  const res = await createUser({ name, agreeTerms });

  expect(create).toHaveBeenCalledTimes(1);
  expect(create).toHaveBeenCalledWith(name);
  expect(search).toHaveBeenCalledTimes(1);
  expect(search).toHaveBeenCalledWith(name);
  expect(res.id).toBe(id);
});

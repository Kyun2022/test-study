const getTheme = () => {
  const time = new Date().getHours();
  console.log(time);
  if (6 <= time && time < 18) {
    return "light";
  }
  return "dark";
};

// describe("getTheme()", () => {
//   test("22時の場合は'dark'を返す", () => {
//     const theme = getTheme();
//     expect(theme).toBe("dark");
//   });

//   test("14時の場合は'light'を返す", () => {
//     const theme = getTheme();
//     expect(theme).toBe("light");
//   });
// });

describe("getThemeが正しく動作するか", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("22時の場合は'dark'を返す", () => {
    const mockDate = new Date(2022, 0, 10, 22);
    jest.spyOn(global, "Date").mockReturnValue(mockDate);
    const theme = getTheme();
    expect(theme).toBe("dark");
  });

  test("14時の場合は'light'を返す", () => {
    const mockDate = new Date(2022, 0, 10, 14);
    jest.spyOn(global, "Date").mockReturnValue(mockDate);
    const theme = getTheme();
    expect(theme).toBe("light");
  });
});

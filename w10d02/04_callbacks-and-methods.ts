interface Author {
  penName: string;
  books: string[];
  writeBook: (title: string, numPages: number) => boolean;
}

const higherOrderFunc = (callback: (bool: boolean) => string) => {};

higherOrderFunc((bool: boolean): string => {
  return "hello";
});
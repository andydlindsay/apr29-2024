interface Container<T> {
  name: string;
  contents: T;
  // arr?: another[];
  // myFunc?: () => another;
}

const stringContainer: Container<string> = {
  name: 'string container',
  contents: 'also a string'
};

const numberContainer: Container<number> = {
  name: 'number container',
  contents: 42,
};
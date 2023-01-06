// // type ToArray<T> = T extends Array<unknown> ? T : T[];
// //
// type ToArray<T> = [T] extends [Array<unknown>] ? T : T[];
// type Foo = ToArray<string | number>;
// const foo: Foo = [1, 2, 3, '4'];

// //
// let circle = { kind: 'circle' as const, radius: 1.0 };
// let shape: { kind: 'circle' | 'rect' } = circle;

//
type NamedCircle = {
  radius: number;
  name?: string;
};

const circle: NamedCircle = { radius: 1.0, name: 'yeah' } satisfies NamedCircle;
console.log(circle.name.length);

// Promise에서 포장되지 않은 타입을 가져옵니다.
// T가 Promise가 아니라면 결과는 달라지지 않습니다.
type ResolvedPromise<T> = T extends Promise<infer U> ? U : T;
type t = ResolvedPromise<Promise<string>>; // t: string

// 배열 T의 평탄화된 타입을 가져옵니다.
// T가 배열이 아니라면 결과는 달라지지 않습니다.
type Flatten<T> = T extends Array<infer E> ? Flatten<E> : T;
type e = Flatten<number[][]>; // e: number

const aa = (a: number) => a;
type BB = Parameters<typeof aa>;
type CC = ReturnType<typeof aa>;
const bb: BB = [1];
const cc: CC = 2;

//
type ContentTypes = 'news' | 'blog' | 'video';
type ContentFactory<Config extends Record<ContentTypes, boolean>> = {
  [k in string & keyof Config as Config[k] extends true
    ? `create${Capitalize<k>}`
    : never]: () => Record<string, unknown>;
};

const config = {
  news: true,
  blog: true,
  video: false,
} satisfies Record<ContentTypes, boolean>;

type Factory = ContentFactory<typeof config>;

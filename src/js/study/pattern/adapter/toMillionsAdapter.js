// 더 간단한 예를 통해 동일한 개념을 시각화할 수 있다. 도시 배열과 해당 도시 중 가장 많은 거주민 수를 반환하는 함수가 있다고 가정한다.
// 배열에 있는 거주민의 수는 백만 단위지만, 백만 단위로 들어오지 않는 거주민 데이터를 새로운 도시로 추가해야 한다.
// 먼저 백만단위로 전환이 필요하다.

// 도시 배열
const citiesHabitantsInMillions = [
  { city: 'London', habitants: 8.9 },
  { city: 'Rome', habitants: 2.8 },
  { city: 'New york', habitants: 8.8 },
  { city: 'Paris', habitants: 2.1 },
];

// 추가할 도시
const BuenosAires = {
  city: 'Buenos Aires',
  habitants: 3100000,
};

// 백만 단위로 변경시켜줄 adapter 함수
const toMillionsAdapter = (city) => {
  city.habitants = parseFloat((city.habitants / 1000000).toFixed(1));
};

// adapter 함수를 활용해서 도시 추가
citiesHabitantsInMillions.push(toMillionsAdapter(BuenosAires));

const mostHabitantsInMillions = () => {
  return Math.max(...citiesHabitantsInMillions.map((city) => city.habitants));
};

console.log(mostHabitantsInMillions()); // 8.9

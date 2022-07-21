var id_list = ["muzi", "frodo", "apeach", "neo"];
var report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
var k = 2;

const isOverlapBan = (attackReport, attack, ban) => {
  return Object.entries(attackReport).find(([exAttack, exBans]) => {
    return (
      exAttack === attack && (exBans as string[]).find((exBan) => exBan === ban)
    );
  });
};

function solution(a, b, c) {
  let attackReport = {};
  let banCntReport = {};

  report.forEach((D, i) => {
    const [attack, ban] = D.split(" ");
    if (isOverlapBan(attackReport, attack, ban)) {
      return;
    }

    attackReport[attack] = attackReport[attack]
      ? [...attackReport[attack], ban]
      : [ban];

    banCntReport[ban] = banCntReport[ban] ? banCntReport[ban] + 1 : 1;
  });

  const bans = Object.entries(banCntReport)
    .filter(([id, banCnt]) => banCnt >= k)
    .map(([entries]) => entries[0]);

  const finish = Object.entries(attackReport).map(
    ([attackId, reportedList]) => {
      const attacks = (reportedList as string[]).filter((D) => {
        return bans.find((ban) => ban === D);
      });
      return { [attackId]: attacks.length };
    }
  );

  const answer = id_list.map((id) => {
    const result = finish.find((D) => {
      return Object.keys(D)[0] === id;
    });
    return result ? Object.values(result)[0] : 0;
  });

  return answer;
}

solution(1, 1, 1);

export {};

// var id_list = ["muzi", "frodo", "apeach", "neo"];
//
//     var report = [
//       "muzi frodo",
//       "apeach frodo",
//       "frodo neo",
//       "muzi neo",
//       "apeach muzi",
//     ];
//
//     k = 2;

//   return [2, 1, 1, 0];

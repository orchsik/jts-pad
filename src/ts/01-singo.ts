// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// [O]

const isOverlapBan = (attackReport, attack, ban) => {
  return Object.entries(attackReport).find(([exAttack, exBans]) => {
    return (
      exAttack === attack && (exBans as string[]).find((exBan) => exBan === ban)
    );
  });
};

function solution(id_list, report, k) {
  let attackReport = {};
  let reportedCnt = {};

  report.forEach((D, i) => {
    const [attack, ban] = D.split(" ");
    if (isOverlapBan(attackReport, attack, ban)) {
      return;
    }

    attackReport[attack] = attackReport[attack]
      ? [...attackReport[attack], ban]
      : [ban];

    reportedCnt[ban] = reportedCnt[ban] ? reportedCnt[ban] + 1 : 1;
  });

  const banIds = Object.entries(reportedCnt)
    .filter(([id, cnt]) => cnt >= k)
    .map(([id, cnt]) => id);

  const attackCntInfo = Object.entries(attackReport).map(
    ([attackId, reportedIds]) => {
      const attacks = (reportedIds as string[]).filter((reportedId) => {
        return banIds.find((banId) => banId === reportedId);
      });
      return { [attackId]: attacks.length };
    }
  );

  const answer = id_list.map((id) => {
    const result = attackCntInfo.find((D) => {
      return Object.keys(D)[0] === id;
    });
    return result ? Object.values(result)[0] : 0;
  });

  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;
solution(id_list, report, k);

export { solution };

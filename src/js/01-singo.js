function solution(id_list, report, k) {
  var id_list = ["muzi", "frodo", "apeach", "neo"];
  var report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ];
  var k = 2;

  var answer = [];
  return [2, 1, 1, 0];
}

module.exports = {
  solution,
};

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

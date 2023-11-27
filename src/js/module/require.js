function require(moduleName) {
  console.log(`Require invoked for module: ${moduleName}`);
  const id = require.resolve(moduleName);

  const cachedModule = require.cache[id];
  if (cachedModule) {
    return cachedModule.exports;
  }

  // 모듈 메타데이터
  const module = {
    id,
    exports: {},
  };

  // 캐시 업데이트
  require.cache[id] = module;

  // 모듈 로드
  loadModule(id, module, require);

  // 익스포트된 모듈 반환
  return module.exports;
}
require.cache = {};
require.resolve = (moduleName) => {
  /* 모듈이름으로 id로 불리게 되는 모듈의 전체경로를 찾아냄(resolve) */
};

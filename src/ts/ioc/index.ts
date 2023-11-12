import normalPenaltyContainer from './constants/ioc_config';
import SERVICE_IDENTIFIER from './constants/identifier';
import { PenaltyManager } from './interface/PenaltyManager.interface';

// const randomMatcher = new RandomMatcher();
// const normalMemberDataSource = new NormalMemberDataSource();
// const normalPenaltyManager = new NormalPenaltyManager(
//   randomMatcher,
//   normalMemberDataSource
// );

const normalPenaltyManager = normalPenaltyContainer.get<PenaltyManager>(
  SERVICE_IDENTIFIER.PENALTY_MANAGER
);
normalPenaltyManager.organize();

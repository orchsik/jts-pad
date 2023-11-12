import 'reflect-metadata';
import { Container } from 'inversify';

import SERVICE_IDENTIFIER from './identifier';
import NormalMemberDataSource from '../NormalMemberDataSource';
import NormalPenaltyManager from '../NormalPenaltyManager';
import RandomMatcher from '../RandomMatcher';

const normalPenaltyContainer = new Container();

normalPenaltyContainer
  .bind(SERVICE_IDENTIFIER.MEMBER_DATA_SOURCE)
  .to(NormalMemberDataSource);
normalPenaltyContainer.bind(SERVICE_IDENTIFIER.MATCHER).to(RandomMatcher);
normalPenaltyContainer
  .bind(SERVICE_IDENTIFIER.PENALTY_MANAGER)
  .to(NormalPenaltyManager);

export default normalPenaltyContainer;

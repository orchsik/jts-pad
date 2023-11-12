import { inject, injectable } from 'inversify';
import {
  Matcher,
  Member,
  MemberDataSource,
  PenaltyManager,
} from './interface/PenaltyManager.interface';
import SERVICE_IDENTIFIER from './constants/identifier';

@injectable()
export default class NormalPenaltyManager implements PenaltyManager {
  matcher: Matcher;
  memberDataSource: MemberDataSource;
  members: Member[];

  constructor(
    @inject(SERVICE_IDENTIFIER.MATCHER)
    matcher: Matcher,
    @inject(SERVICE_IDENTIFIER.MEMBER_DATA_SOURCE)
    memberDataSource: MemberDataSource
  ) {
    this.matcher = matcher;
    this.memberDataSource = memberDataSource;
    this.members = this.memberDataSource.retrieve();
  }

  organize() {
    const sortedMembers = this.matcher.execute(this.members);
    console.log('Choosed - ', sortedMembers[0].name);
  }
}

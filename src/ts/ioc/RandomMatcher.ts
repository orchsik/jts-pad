import { injectable } from 'inversify';
import { Matcher, Member } from './interface/PenaltyManager.interface';

@injectable()
export default class RandomMatcher implements Matcher {
  execute(members: Member[]): Member[] {
    members.sort(() => Math.random() - 0.5);
    return members;
  }
}

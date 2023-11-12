import { injectable } from 'inversify';
import { Member, MemberDataSource } from './interface/PenaltyManager.interface';

@injectable()
export default class NormalMemberDataSource implements MemberDataSource {
  retrieve(): Member[] {
    return [
      {
        name: 'Choi',
        group: 'SERVER',
      },
      {
        name: 'Kim',
        group: 'SERVER',
      },
      {
        name: 'Kang',
        group: 'ANDROID',
      },
      {
        name: 'Lee',
        group: 'iOS',
      },
      {
        name: 'Park',
        group: 'WEB',
      },
    ];
  }
}

const MAX_MEMBER_COUNT = 8;

class FieldManager {
  addMember(members: Member[], member: Member) {
    if (members.some((m) => m.id === member.id)) {
      throw Error('이미 존재하는 멤버입니다.');
    }
    if (members.length >= MAX_MEMBER_COUNT) {
      throw Error('파티가 꽉 찼습니다.');
    }
    members.push(member);
  }

  partiIsAlive(members: Member[]) {
    return members.some((member) => member.isAlive());
  }
}

class SpecialEventManager {
  addMember(members: Member[], member: Member) {
    members.push(member);
  }
}

class BattleManager {
  membersAreAlive(members: Member[]) {
    return members.some((member) => member.isAlive());
  }
}

export {};

class Member {
  id: string;
  isAlive() {
    return true;
  }
}

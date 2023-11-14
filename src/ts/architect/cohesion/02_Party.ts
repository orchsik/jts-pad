class Party {
  private readonly members: Member[] = [];
  private readonly MAX_MEMBER_COUNT = 8;

  constructor(members: Member[] = []) {
    this.members = members;
  }

  add(newMember: Member) {
    const adding = [newMember];
    return new Party(adding);
  }

  isAlive() {
    this.members.some((member) => member.isAlive());
  }

  exists(member: Member) {
    this.members.some((m) => m.id === member.id);
  }

  isFull() {
    this.members.length >= this.MAX_MEMBER_COUNT;
  }
}

export {};

class Member {
  id: string;
  isAlive() {
    return true;
  }
}

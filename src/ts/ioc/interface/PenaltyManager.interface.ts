export interface Member {
  name: string;
  group: string;
}

export interface MemberDataSource {
  retrieve(): Member[];
}

export interface Matcher {
  execute(members: Member[]): Member[];
}

export interface PenaltyManager {
  members: Member[];
  organize(): void;
}

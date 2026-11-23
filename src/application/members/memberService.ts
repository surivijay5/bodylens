import type { Member } from '../../shared/types/member';
import { MemberRepository } from '../../data/indexeddb/repositories/memberRepository';
export class MemberService { constructor(private readonly repository = new MemberRepository()) {} list(): Promise<Member[]> { return this.repository.getAll(); } save(member: Member): Promise<void> { return this.repository.put(member); } }

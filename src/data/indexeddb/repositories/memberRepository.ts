import type { Member } from '../../../shared/types/member';
import { IndexedDbRepository } from './indexedDbRepository';
export class MemberRepository extends IndexedDbRepository<Member> { constructor() { super('members'); } }

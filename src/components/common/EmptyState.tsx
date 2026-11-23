import { ArrowUpRight, ScanLine } from 'lucide-react';
import { Link } from 'react-router-dom';
export function EmptyState({title='Your history starts here',body='Import a Cult Smart Scale Pro report to see your measurements, trends, and comparisons.',action=true}:{title?:string;body?:string;action?:boolean}) { return <div className="empty-state"><div className="empty-icon"><ScanLine size={22}/></div><h3>{title}</h3><p>{body}</p>{action && <Link className="button-primary" to="/import">Import a report <ArrowUpRight size={15}/></Link>}</div>; }

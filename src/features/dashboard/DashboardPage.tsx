import { ArrowUpRight, CalendarDays, ChevronRight, Plus, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/common/PageHeader';
import { EmptyState } from '../../components/common/EmptyState';
import { LoadState } from '../../components/common/LoadState';
import { useMeasurements } from '../../application/measurements/useMeasurements';
import { latestMetrics } from '../../application/dashboard/dashboardMetrics';
function formatValue(value:number|null, unit:string) { return value === null ? '—' : `${value.toFixed(1)}${unit ? ` ${unit}` : ''}`; }
export function DashboardPage() { const {items,error}=useMeasurements();
 return <><PageHeader eyebrow="PERSONAL OVERVIEW" title="Your body, in context." description="A clear view of your measurements over time." action={<Link to="/import" className="button-primary"><Plus size={16}/> Import report</Link>}/>
 {items===null ? <LoadState error={error ?? undefined}/> : items.length===0 ? <><div className="welcome-strip"><div className="welcome-symbol"><Sparkles size={18}/></div><div><strong>A private space for your measurement history.</strong><span>Import a report to begin exploring your data.</span></div><span className="welcome-end">LOCAL BY DESIGN</span></div><EmptyState/></> : <>
 <section className="dashboard-intro"><div><div className="eyebrow">ACTIVE MEMBER</div><h2>{items[0].profileSnapshot.name}</h2></div><Link to="/history" className="text-link">View history <ArrowUpRight size={14}/></Link></section>
 <div className="section-heading"><div><span className="eyebrow">LATEST MEASUREMENT</span><h2>At a glance</h2></div><span className="date-label"><CalendarDays size={14}/>{new Date(items[0].measuredAt).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}</span></div>
 <div className="metric-grid">{latestMetrics(items[0]).map((metric,index)=><article className={`metric-card ${index===0?'featured':''}`} key={metric.label}><div className="metric-top"><span>{metric.label}</span><span className="metric-glyph">{['↕','◉','◌','⌁','▦'][index]}</span></div><div className="metric-value">{formatValue(metric.value,metric.unit)}</div><div className="metric-caption">Cult Report</div></article>)}</div>
 <section className="panel latest-panel"><div className="panel-heading"><div><span className="eyebrow">RECENT CONTEXT</span><h2>Measurement history</h2></div><Link to="/history" className="text-link">All history <ChevronRight size={14}/></Link></div><div className="measurement-row"><span className="timeline-dot"/><div><strong>{items[0].profileSnapshot.name}</strong><small>{new Date(items[0].measuredAt).toLocaleString()}</small></div><span className="row-value">{formatValue(items[0].bodyComposition.weightKg,'kg')}</span><Link aria-label="Open latest measurement" to={`/measurements/${items[0].id}`} className="row-open"><ChevronRight size={17}/></Link></div>{items.length===1&&<p className="subtle-note">Add another measurement to see changes and trends.</p>}</section>
 </>}
 </>;
}

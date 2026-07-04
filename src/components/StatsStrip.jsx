/**
 * Stats Strip component for home page 
 * Maps through an array of objects and lists their values in a stylized way 
 */
import '../styles/StatsStrip.css';

const stats = [
    { value: "30 yrs", label: "experience" },
    { value: "Veteran", label: "owned" },
    { value: "Custom", label: "orders welcome" },
];

const StatsStrip = () => {
    return (
        <div className="stats-strip">
            {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}

export default StatsStrip;
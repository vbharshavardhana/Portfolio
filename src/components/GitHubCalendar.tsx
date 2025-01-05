import { useEffect, useRef } from 'react';

export default function GitHubCalendar() {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css';
    document.head.appendChild(link);

    script.onload = () => {
      // @ts-ignore - GitHub calendar is loaded globally
      if (calendarRef.current && window.GitHubCalendar) {
        // @ts-ignore
        window.GitHubCalendar(calendarRef.current, "aashutoshrathi", {
          responsive: true,
          tooltips: true,
          global_stats: false,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        My GitHub Calendar
        <span role="img" aria-label="calendar">📅</span>
      </h2>
      <div 
        ref={calendarRef}
        className="calendar bg-[#1D2528] p-4 rounded-lg"
        style={{
          '--color-calendar-graph-day-bg': '#1D2528',
          '--color-calendar-graph-day-L1-bg': '#196127',
          '--color-calendar-graph-day-L2-bg': '#239a3b',
          '--color-calendar-graph-day-L3-bg': '#2fcb53',
          '--color-calendar-graph-day-L4-bg': '#39d353',
          '--color-calendar-graph-day-border-radius': '2px'
        } as React.CSSProperties}
      >
        <style>{`
          .calendar .contrib-column {
            display: none;
          }
          .calendar .float-left.text-gray {
            display: none;
          }
          .calendar {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
          .calendar .width-full > .float-left {
            display: none;
          }
          .calendar .js-calendar-graph {
            padding-top: 0;
          }
        `}</style>
      </div>
    </div>
  );
}
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    GitHubCalendar: any;
  }
}

export default function GitHubCalendarComponent() {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create and append the GitHub calendar script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Create and append the GitHub calendar stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css';
    document.head.appendChild(link);

    // Initialize the GitHub calendar after the script has loaded
    script.onload = () => {
      if (calendarRef.current && window.GitHubCalendar) {
        window.GitHubCalendar(calendarRef.current, "vbharshavardhana", {
          responsive: true,
          tooltips: true,
          global_stats: false,
        });
      }
    };

    // Cleanup the script and link on component unmount
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white flex items-center gap-2">
        My GitHub Calendar
        <span role="img" aria-label="calendar">📅</span>
      </h2>
      <div
        ref={calendarRef}
        className="calendar"
        style={{
          '--color-calendar-graph-day-bg': 'transparent',
          '--color-calendar-graph-day-L1-bg': '#196127',
          '--color-calendar-graph-day-L2-bg': '#239a3b',
          '--color-calendar-graph-day-L3-bg': '#2fcb53',
          '--color-calendar-graph-day-L4-bg': '#39d353',
          '--color-calendar-graph-day-border-radius': '4px',
        } as React.CSSProperties}
      />
    </div>
  );
}

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
        window.GitHubCalendar(calendarRef.current, "aashutoshrathi", {
          responsive: true,  // Make it responsive
          tooltips: true,    // Show tooltips on hover
          global_stats: false, // Hide global stats
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
      />
    </div>
  );
}

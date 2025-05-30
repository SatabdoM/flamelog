export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 5) return 'just now';
  if (seconds < 60) return `${seconds} seconds ago`;
  if (seconds < 120) return '1 minute ago';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 7200) return '1 hour ago';
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 172800) return '1 day ago';
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;

  // Format as actual date for anything older than 1 week
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear() % 100;
  const ordinal =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
          ? 'rd'
          : 'th';

  return `${day}${ordinal} ${month}, ${year}`;
}

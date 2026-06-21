import { NPM_DOWNLOADS_FALLBACK } from '../constants/nav-links';
import { formatCompactNumber } from './format-compact-number';

interface NpmDownloadsCounterProps {
  time?: 'last-week' | 'last-day' | 'last-month';
  packageName?: string;
}

async function fetchMonthlyDownloads({ time, packageName }: NpmDownloadsCounterProps) {
  try {
    const req = await fetch(`https://api.npmjs.org/downloads/point/${time}/${packageName}`, {
      next: { revalidate: 60 * 60 * 24 },
      signal: AbortSignal.timeout(2000),
    });
    if (req.ok) {
      const { downloads } = await req.json();
      return downloads;
    }
    return NPM_DOWNLOADS_FALLBACK;
  } catch (error) {
    return NPM_DOWNLOADS_FALLBACK;
  }
}

async function getNpmDownloads({
  time = 'last-month',
  packageName = 'spiderly',
}: NpmDownloadsCounterProps) {
  const downloads = await fetchMonthlyDownloads({ time, packageName });
  const formatedNumber = formatCompactNumber(Number(downloads));
  return formatedNumber;
}

export default getNpmDownloads;

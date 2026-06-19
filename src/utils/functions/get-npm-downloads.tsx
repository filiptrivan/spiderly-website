import { formatCompactNumber } from './format-compact-number';

interface NpmDownloadsCounterProps {
  time?: 'last-week' | 'last-day' | 'last-month';
  packageName?: string;
}

async function fetchMonthlyDownloads({ time, packageName }: NpmDownloadsCounterProps) {
  const req = await fetch(`https://api.npmjs.org/downloads/point/${time}/${packageName}`);
  const { downloads } = await req.json();
  return downloads;
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

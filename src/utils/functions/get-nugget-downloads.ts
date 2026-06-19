import { formatCompactNumber } from './format-compact-number';

export async function fetchTotalDownloadsOnNuget({ packageName }: { packageName: string }) {
  const res = await fetch(`https://azuresearch-usnc.nuget.org/query?q=packageid:${packageName}`);
  const data = await res.json();

  return formatCompactNumber(data.data[0]?.totalDownloads);
}

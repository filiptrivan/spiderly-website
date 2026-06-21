import { NUGET_DOWNLOADS_FALLBACK } from '../constants/nav-links';
import { formatCompactNumber } from './format-compact-number';

async function fetchTotalDownloadsOnNuget({ packageName }: { packageName: string }) {
  try {
    const res = await fetch(`https://azuresearch-usnc.nuget.org/query?q=packageid:${packageName}`, {
      next: { revalidate: 60 * 60 * 24 },
      signal: AbortSignal.timeout(2000),
    });

    if (res.ok) {
      const data = await res.json();
      const downloads = data.data[0]?.totalDownloads;
      return downloads !== '' ? Number(downloads) : NUGET_DOWNLOADS_FALLBACK;
    } else {
      return NUGET_DOWNLOADS_FALLBACK;
    }
  } catch {
    return NUGET_DOWNLOADS_FALLBACK;
  }
}

export async function getNugetDownloads() {
  const downloads = await fetchTotalDownloadsOnNuget({ packageName: 'spiderly.shared' });
  return formatCompactNumber(downloads);
}

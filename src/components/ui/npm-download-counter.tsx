interface NpmDownloadsCounterProps {
  time?: 'last-week' | 'last-day' | 'last-month';
  packageName?: string;
}

async function fetchMonthlyDownloads({ time, packageName }: NpmDownloadsCounterProps) {
  const req = await fetch(`https://api.npmjs.org/downloads/point/${time}/${packageName}`);
  const { downloads } = await req.json();
  return downloads;
}

async function NpmDownloadCounter({
  time = 'last-month',
  packageName = 'spiderly',
}: NpmDownloadsCounterProps) {
  const downloads = await fetchMonthlyDownloads({ time, packageName });
  const formatedNumber = new Intl.NumberFormat('en-us').format(downloads);
  return <p className="text-sm text-muted-foreground">{formatedNumber} monthly downloads</p>;
}

export default NpmDownloadCounter;

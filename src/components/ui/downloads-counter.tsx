interface DownloadsCounterProps {
  time?: 'last-week' | 'last-day' | 'last-month';
  packageName?: string;
}

async function fetchMonthlyDownloadsOnNpm({ time, packageName }: DownloadsCounterProps) {
  const req = await fetch(`https://api.npmjs.org/downloads/point/${time}/${packageName}`);
  const { downloads } = await req.json();
  return downloads;
}

async function fetchTotalDownloadsOnNuget({ packageName }: { packageName: string }) {
  const res = await fetch(`https://azuresearch-usnc.nuget.org/query?q=packageid:${packageName}`);
  const data = await res.json();

  return data.data[0]?.totalDownloads;
}

async function fetchAndFormatTotalCounts() {
  const npmDownloads = await fetchMonthlyDownloadsOnNpm({
    time: 'last-month',
    packageName: 'spiderly',
  });
  const nugetDownloads = await fetchTotalDownloadsOnNuget({ packageName: 'spiderly.shared' });
  const total = Number(npmDownloads) + Number(nugetDownloads);

  const formatedTotal = new Intl.NumberFormat('en-us').format(total);
  return formatedTotal;
}

async function DownloadCounter({
  time = 'last-month',
  packageName = 'spiderly',
}: DownloadsCounterProps) {
  const totalDownloads = await fetchAndFormatTotalCounts();

  return <p className="text-sm text-muted-foreground">{totalDownloads} monthly downloads</p>;
}

export default DownloadCounter;

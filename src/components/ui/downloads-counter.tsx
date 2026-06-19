import getNpmDownloads from '@/utils/functions/get-npm-downloads';
import { fetchTotalDownloadsOnNuget } from '@/utils/functions/get-nugget-downloads';
import Image from 'next/image';

interface PackageManagerProps {
  icon: string;
  packageManagerName: string;
  timeInterval: 'Last Month' | 'All Time' | 'Yesterday' | 'Last Year';
  downloads: Promise<string> | string;
  iconClassName?: string;
}

async function DownloadsCounter() {
  const npmDownloads = getNpmDownloads({ time: 'last-month' });
  const nugetDownloads = await fetchTotalDownloadsOnNuget({ packageName: 'spiderly.shared' });
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 justify-center mt-12">
      <PackageManager
        icon={'/icons/npm-logo.svg'}
        packageManagerName="node package manager"
        downloads={npmDownloads}
        timeInterval="Last Month"
        iconClassName="scale-75"
      />
      <PackageManager
        icon={'/icons/nuget-logo.svg'}
        packageManagerName="Nuget"
        downloads={nugetDownloads}
        timeInterval="All Time"
      />
    </div>
  );
}

function PackageManager({
  icon,
  packageManagerName,
  timeInterval,
  downloads,
  iconClassName,
}: PackageManagerProps) {
  return (
    <div className="flex gap-x-3 p-3 bg-linear-to-r from-violet-500/10 to-fuchsia-500/10 rounded-lg">
      <Image src={icon} alt={packageManagerName} width={65} height={30} className={iconClassName} />
      <div className="px-3 border-l border-muted-foreground">
        <p className="text-xs text-muted-foreground ">{timeInterval}</p>
        <p className="text-base font-medium bg-linear-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
          {downloads} downloads
        </p>
      </div>
    </div>
  );
}

export { DownloadsCounter, PackageManager };

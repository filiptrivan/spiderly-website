import { Star } from 'lucide-react';

interface GitHubStarsBadgeProps {
  stars: number;
}

const GitHubStarsBadge = ({ stars }: GitHubStarsBadgeProps) => {
  return (
    <>
      <Star className="size-4 mr-2" />
      Star on GitHub
      <span className="ml-2 px-2 py-0.5 bg-muted rounded-full text-xs font-semibold">{stars}</span>
    </>
  );
};

export default GitHubStarsBadge;

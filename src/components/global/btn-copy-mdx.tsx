'use client';
import { CopyCheck } from 'lucide-react';
import { Button } from '../ui/button';

function BtnCopyMdx({ mdxString }: { mdxString: string }) {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(mdxString).catch(() => {
      console.log('Failed to copy link.');
    });
  };
  return (
    <Button
      onClick={handleCopyToClipboard}
      variant={'ghost'}
      className="text-left gap-x-2 justify-start text-sm hover:bg-transparent"
      size={'sm'}
    >
      <CopyCheck size={16} /> Copy Markdown
    </Button>
  );
}

export default BtnCopyMdx;

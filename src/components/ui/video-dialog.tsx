'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { PlayIcon } from 'lucide-react';
import { useState } from 'react';

export const VideoDialogButton = () => {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  return (
    <>
      <Button variant={'subtle'} onClick={() => setIsVideoDialogOpen(true)}>
        <PlayIcon className="w-4 h-4 mr-2" />
        Spiderly in 2 Minutes
      </Button>

      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="max-w-5xl border-0 p-2">
          <VisuallyHidden>
            <DialogTitle>Spiderly in 2 Minutes</DialogTitle>
          </VisuallyHidden>
          <div className="relative w-full pt-[56.25%] mt-10">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/_CPHzD6x5sY"
              title="Spiderly in 2 Minutes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

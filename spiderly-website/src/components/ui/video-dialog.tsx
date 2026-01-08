'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PlayIcon } from 'lucide-react';
import { useState } from 'react';

export const VideoDialogButton = () => {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  return (
    <>
      <Button variant={'subtle'} onClick={() => setIsVideoDialogOpen(true)}>
        <PlayIcon className="w-4 h-4 mr-2" />
        Spiderly in 120 Seconds
      </Button>

      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Spiderly in 120 Seconds</DialogTitle>
          </DialogHeader>
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/_CPHzD6x5sY"
              title="Spiderly in 120 Seconds"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

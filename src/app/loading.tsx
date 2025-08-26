import { Gavel } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Gavel className="h-16 w-16 animate-pulse text-primary" />
        <p className="text-lg font-semibold text-primary">Loading...</p>
      </div>
    </div>
  );
}

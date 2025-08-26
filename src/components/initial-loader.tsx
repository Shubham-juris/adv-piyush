"use client";

import { useState, useEffect } from 'react';
import { Gavel } from 'lucide-react';

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we've shown the loader before in this session
    if (sessionStorage.getItem("initialLoaderShown")) {
      setLoading(false);
      return;
    }

    // Hide the loader after a delay and mark it as shown for the session
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("initialLoaderShown", "true");
    }, 1500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-out animate-fade-out">
      <div className="flex flex-col items-center gap-4">
        <Gavel className="h-16 w-16 animate-pulse text-primary" />
        <p className="text-lg font-semibold text-primary">Loading...</p>
      </div>
    </div>
  );
}

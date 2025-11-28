'use client';

import dynamic from 'next/dynamic';

const Terminal = dynamic(() => import('./components/Terminal'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="text-green-500 font-mono">Initializing terminal...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Terminal />
    </div>
  );
}

"use client";

export default function OfflinePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black min-h-screen">
      <main className="flex flex-col items-center justify-center py-32 px-16 gap-8 text-center">
        <div className="text-6xl">📡</div>
        <h1 className="text-4xl font-bold text-black dark:text-white">
          You're Offline
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
          It looks like you've lost internet connection. But don't worry! You can
          still browse pages you've already visited.
        </p>
        <div className="mt-8 space-y-4">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Go Back
          </button>
          <a
            href="/"
            className="block px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            Home
          </a>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-8">
          Queued requests will be sent when you're back online
        </p>
      </main>
    </div>
  );
}

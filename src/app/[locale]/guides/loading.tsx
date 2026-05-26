export default function GuidesLoading() {
  return (
    <div className="animate-pulse">
      <SiteHeaderPlaceholder />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-container-xl px-6">
          {/* Heading area */}
          <div className="mb-8">
            <div className="h-6 w-32 rounded bg-[var(--border)] mb-6" />
            <div className="h-9 w-1/2 rounded bg-[var(--border)] mb-4" />
            <div className="h-5 w-1/3 rounded bg-[var(--border)] mb-10" />
          </div>
          {/* Guide cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-[var(--border)] p-6 space-y-3">
                <div className="h-5 w-3/4 rounded bg-[var(--border)]" />
                <div className="h-4 w-full rounded bg-[var(--border)]" />
                <div className="h-4 w-2/3 rounded bg-[var(--border)]" />
                <div className="h-3 w-1/3 rounded bg-[var(--border)] mt-2" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function SiteHeaderPlaceholder() {
  return (
    <div className="fixed top-0 inset-x-0 z-[200] h-16 bg-[var(--bg-surface)] border-b border-[var(--border)]" />
  );
}

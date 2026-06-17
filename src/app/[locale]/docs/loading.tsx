export default function DocsLoading() {
  return (
    <div className="flex gap-8 animate-pulse">
      {/* Content skeleton */}
      <div className="flex-1 min-w-0 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 w-16 rounded bg-[var(--border)]" />
          <div className="h-4 w-2 rounded bg-[var(--border)]" />
          <div className="h-4 w-20 rounded bg-[var(--border)]" />
        </div>
        {/* Title */}
        <div className="h-9 w-2/3 rounded bg-[var(--border)] mb-4" />
        {/* Subtitle */}
        <div className="h-5 w-1/2 rounded bg-[var(--border)] mb-8" />
        {/* Body lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded bg-[var(--border)] mb-3"
            style={{ width: `${80 - (i % 3) * 10}%` }}
          />
        ))}
        {/* Code block placeholder */}
        <div className="h-32 rounded-lg bg-[var(--border)] mt-6 mb-6" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded bg-[var(--border)] mb-3"
            style={{ width: `${85 - (i % 2) * 15}%` }}
          />
        ))}
      </div>
      {/* TOC skeleton */}
      <div className="hidden xl:block w-52 shrink-0 py-8">
        <div className="h-4 w-24 rounded bg-[var(--border)] mb-4" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-3 rounded bg-[var(--border)] mb-3" style={{ width: `${70 - i * 8}%` }} />
        ))}
      </div>
    </div>
  );
}

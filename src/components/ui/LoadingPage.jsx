import { Spinner } from "@heroui/react";

export default function LoadingPage({
  type = "spinner",
  count = 6,
}) {
  // Global Spinner
  if (type === "spinner") {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <Spinner
          size="lg"
          color="warning"
          className="scale-150"
        />

        <h2 className="mt-6 text-2xl font-bold text-[#1B2430]">
          Fable
        </h2>

        <p className="mt-2 text-sm tracking-wide text-[#B08D57]">
          Loading...
        </p>
      </div>
    );
  }

  // Ebook Card Skeleton
  if (type === "ebooks") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 bg-white animate-pulse"
          >
            <div className="h-56 w-full rounded-lg bg-zinc-200" />

            <div className="mt-4 space-y-3">
              <div className="h-5 w-3/4 bg-zinc-200 rounded" />
              <div className="h-4 w-1/2 bg-zinc-200 rounded" />
              <div className="h-4 w-full bg-zinc-200 rounded" />
              <div className="h-4 w-5/6 bg-zinc-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Table Skeleton
  if (type === "table") {
    return (
      <div className="rounded-xl border bg-white p-4">
        <div className="space-y-4">
          {[...Array(count)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-5 gap-4 animate-pulse"
            >
              <div className="h-10 bg-zinc-200 rounded" />
              <div className="h-10 bg-zinc-200 rounded" />
              <div className="h-10 bg-zinc-200 rounded" />
              <div className="h-10 bg-zinc-200 rounded" />
              <div className="h-10 bg-zinc-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
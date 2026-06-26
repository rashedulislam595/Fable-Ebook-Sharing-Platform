import { FiTrendingUp } from "react-icons/fi";

export default function SalesNotFound() {
  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4EFE5]">
          <FiTrendingUp
            size={28}
            className="text-[#B08D57]"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#1B2430]">
          No Sales Yet
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          Your sales history will appear here once readers start purchasing
          your ebooks.
        </p>

        <div className="mt-8 inline-flex items-center rounded-full border border-[#E3DDCB] bg-[#FAF7F0] px-4 py-2 text-xs font-medium text-[#6B6354]">
          Revenue records are currently empty
        </div>

      </div>
    </div>
  );
}
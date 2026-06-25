import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

export default function NoManageEbookFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mb-6">
        <FiBookOpen className="text-orange-500" size={36} />
      </div>

      <h2 className="text-2xl font-bold text-[#1B2430] mb-2">
        No Ebooks Found
      </h2>

      <p className="text-zinc-500 max-w-md mb-8">
        There are currently no ebooks available in the system. Once writers
        publish their books, they will appear here for management and review.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-[#1B2430] text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Button({ path }: { path: string }) {
  return (
    <Link href={`/your-dynamic-path/${encodeURIComponent(path)}`}>
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-gradient-to-tr from-yellow-600 mt-10 to-yellow-300 px-3 py-2 text-sm font-semibold text-black"
      >
        Ask your Queries
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </Link>
  );
}

export default Button;

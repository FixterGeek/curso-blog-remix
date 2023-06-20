import { Link } from "@remix-run/react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import "dayjs/locale/es-mx";

dayjs.extend(relativeTime);
dayjs.locale("es-mx");

export const BlogCard = ({
  title,
  slug,
  cover,
  createdAt,
}: {
  createdAt: string | Date;
  cover?: string;
  slug: string;
  title: string | null;
}) => {
  return (
    <Link
      to={`${slug}`}
      className="bg-gradient-to-r from-slate-600 to-slate-800 text-white p-4 rounded-md hover:ring-indigo-500 hover:ring transition-all flex items-center gap-4 min-w-full"
    >
      <img
        src={cover}
        alt="cover"
        className="rounded-sm object-cover max-w-xs"
      />
      <div>
        <h3 className="text-2xl"> {title}</h3>
        <span className="font-thin text-sm text-gray-300">
          {dayjs(createdAt).from(new Date())}
        </span>
      </div>
    </Link>
  );
};

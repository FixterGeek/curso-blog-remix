import { Link } from "@remix-run/react";

export const PostCard = ({
  title,
  id,
}: {
  id: string;
  title: string | null;
}) => {
  return (
    <Link
      to={`${id}/edit`}
      className="p-4 rounded-md border border-indigo-500 w-[300px] hover:ring-indigo-500 hover:ring "
    >
      {title}
    </Link>
  );
};

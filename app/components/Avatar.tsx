import type { User } from "@prisma/client";

export default function Avatar({
  author,
  date = new Date(),
}: {
  date: Date;
  author: User;
}) {
  const { picture, name } = author;
  return (
    <div className="flex gap-2 items-center">
      <img
        className="border-4 border-indigo-500 rounded-full max-w-[60px] bg-indigo-200"
        src={picture}
        alt="avatar"
      />
      <div>
        <p>{name}</p>
        <p className="font-medium text-xs py-1">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

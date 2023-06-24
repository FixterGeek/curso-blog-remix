export const getBasicMetaData = ({
  title = "blissmo blog",
  description = "Aprende algo nuevo hoy.",
  extra = [
    {
      property: "og:image",
      content: "https://avatars.githubusercontent.com/u/7883990?v=4",
    },
    {
      property: "og:url",
      content: "https://curso-blog-remix.netlify.app/blog",
    },
  ],
}: {
  title?: string;
  description?: string;
  extra?: { property: string; content: string }[];
} = {}) => {
  return [
    {
      title,
    },
    { name: "description", content: description },
    {
      property: "og:title",
      content: title,
    },

    ...extra,
  ];
};

import { BlogPostType } from "@/app/_Types/blogPostType";

export const BlogCard = ({ data }: { data: BlogPostType }) => {
  return (
    <div className=" w-60 bg-white cursor-pointer">
      <div>
        {data.coverImageUrl != "" ? (
          <img
            src={data.coverImageUrl}
            className="object-cover h-[90px] w-[100%]  "
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className="p-8 ">
        <div>
          <p className=" line-clamp-2">{data.title}</p>
        </div>
        <div>
          <p className=" line-clamp-3 text-slate-500 text-xs">{data.brief}</p>
        </div>
      </div>
    </div>
  );
};

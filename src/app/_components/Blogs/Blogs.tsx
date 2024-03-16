import useFetchBlogs from "@/app/_Hooks/useFetchBlogs";
import { BentoGrid, BentoGridItem } from "../Bento-Grid";
import { BlogPostType } from "../../_Types/blogPostType";
import { BlogCard } from "./BlogCard";
const Blogs = () => {
  const { blogsData } = useFetchBlogs();
  console.log(blogsData);
  return (
    <>
      {/* <BentoGrid>
        {blogsData.map((data: BlogPostType, i) => {
          return (
            <BentoGridItem
              title={data.title}
              description={data.brief}
              icon={"icons"}
            />
          );
        })}
      </BentoGrid> */}

      <div
        id="blogsSection"
        className="flex-col h-max flex flex-1 flex-wrap gap-8 justify-center items-center"
      >
        <div className="flex flex-row items-center gap-2 bg-white rounded-full w-fit px-2 py-2">
          <img src="/star.svg" color="white" width={"27px"} />
          <h1 className=" font-semibold text-3xl">Articles </h1>
        </div>
        {/* <h1 className="text-white font-semibold text-3xl">Articles</h1> */}

        <div className=" h-max flex flex-1 flex-wrap gap-8 justify-center items-center">
          {blogsData.map((data: BlogPostType, i: number) => {
            return <BlogCard data={data} key={i} />;
          })}
          <BlogCard
            data={{
              brief: "on HashNode",
              coverImageUrl: "",
              id: "",
              slug: "",
              className: "",
              title: "Explore More",
              url: "",
            }}
            key={99}
          />
        </div>
      </div>
    </>
  );
};

export default Blogs;

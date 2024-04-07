import useFetchBlogs from "@/app/_Hooks/useFetchBlogs";
import { BentoGrid, BentoGridItem } from "../Bento-Grid";
import { BlogPostType } from "../../_Types/blogPostType";
import { BlogCard } from "./BlogCard";
import Heading from "../Heading";
const Blogs = () => {
  const { blogsData } = useFetchBlogs();
  // console.log(blogsData);
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
        <Heading title="Article" initialPoint={550} initialMarkup={3} />
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

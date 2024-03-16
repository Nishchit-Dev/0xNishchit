"use client";

import { useEffect, useState } from "react";
import { json } from "stream/consumers";

const HashNodeApi = "https://gql.hashnode.com/";
const userId = "64574d4030be1a2397aa5cb5";
const userName = "0xNishchit";

const PostQuery = `{
    user(username: "0xNishchit") {
        id
        username
        name
    }
    publication(id: "64574d4030be1a2397aa5cb5") {
        id
        title
        displayTitle
        url
        canonicalURL
        posts(first: 100) {
            totalDocuments
            edges {
                node {
                    id
                    slug
                    title
                    url
                    brief
                    coverImage {
                        url
                    }
                }
            }
        }
    }
}`;

const useFetchBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await fetch(HashNodeApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: PostQuery,
        }),
      }).then(async (result) => {
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await result.json();
        const postsData = data.data.publication.posts.edges.map(
          (edge: any, index: number) => {
            const { id, slug, title, url, brief, coverImage } = edge.node;
            const coverImageUrl = coverImage ? coverImage.url : null;

            return {
              id,
              slug,
              title,
              className: index % 3 === 0 ? "md:col-span-2" : "md:col-span-1",
              url,
              brief,
              coverImageUrl,
            };
          }
        );
        // console.log(postsData);
        setBlogsData(postsData);
      });
    })();
  }, []);

  return { blogsData };
};

export default useFetchBlogs;

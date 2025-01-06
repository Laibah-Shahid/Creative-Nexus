import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the post by ID
  const post = blogdata.find((post) => post.id === parseInt(id));

  // If the post is not found, show a fallback message
  if (!post) {
    return (
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <Title title="Post Not Found" className="title-bg" />
            <p>The blog post you are looking for does not exist or has been removed.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={`Learn more about "${post.title}". Discover tips, tricks, and insights.`}
        />
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          {/* Post Title and Date */}
          <div className="heading-title">
            <TitleSm title={`TIPS & TRICKS / ${post.date || "Unknown Date"}`} />
            <br />
            <br />
            <Title title={post.title} className="title-bg" />

            {/* Post Cover Image */}
            <div className="img py">
              <Image
                src={post.cover || "/placeholder-image.jpg"}
                alt={post.title || "Placeholder Image"}
                layout="responsive"
                width={800}
                height={400}
                className="round"
              />
            </div>

            {/* Post Description */}
            <div className="desc">
              <TitleSm title="Phasellus at magna - elit tristique lacinia. Integer a justo vitae arcu fermentum consequat." />
              <p className="desc-p">
                Nulla iaculis convallis fermentum. Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper. Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.
              </p>
              <p className="desc-p">
                Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper.
              </p>
              <p className="desc-p">
                Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.
              </p>
            </div>
          </div>

          {/* Banner */}
          <Banner />

          {/* Additional Content */}
          <div className="heading-title">
            <div className="desc">
              <TitleSm title="Integer a justo vitae arcu fermentum..." />
              <p className="desc-p">
                Phasellus nec tempor neque. In nec finibus lorem, in aliquet risus. Proin elit elit, cursus vel vulputate at, volutpat quis metus. Praesent at blandit tellus.
              </p>
              <p className="desc-p">
                Morbi finibus velit erat, a pulvinar lacus mollis sit amet. Nulla iaculis convallis fermentum. Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper! Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.
              </p>
              <p className="desc-p">
                Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper.
              </p>
              <p className="desc-p">
                Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;

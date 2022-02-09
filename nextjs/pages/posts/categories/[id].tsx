import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import Layout from "../../../components/layout";
import utilStyles from "../../../styles/utils.module.css";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Date from "../../../components/Date";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPath: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

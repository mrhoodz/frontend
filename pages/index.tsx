import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./style.module.scss";
import Prime from "./_firstpage";
// const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import { GraphQLClient, gql } from "graphql-request";

export default function Home({ data }: any) {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Prime data={data} />
    </>
  );
}



export async function getServerSideProps(context: any) {


  const x = await axios.post("http://localhost:3000/api/postTest", {
    slug: "barricades",
  });

  // console.log("wassup my guy")

  // const serviceResponse = await axios.get("http://localhost:3000/api/postTest");

  // console.log(serviceResponse)
  return {
    props: {
      data: x.data,
    },
  };
}
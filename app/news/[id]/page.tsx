// "use client";
import useSWR from "swr";
import Image from "next/image";

type microCmsResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};

async function getData(id: string) {
  const res = await fetch(`https://mtaobflz22.microcms.io/api/v1/news/${id}`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY ?? "",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home({ params }: { params: { id: string } }) {
  // const { data: response, error } = useSWR(
  //   `https://mtaobflz22.microcms.io/api/v1/news/${params.id}`,
  //   fetcher
  // );

  const data = await getData(params.id);
  console.log(params.id);
  console.log(data);

  return (
    <>
      <div>hello {params.id}</div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

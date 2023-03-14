import Head from "next/head";
import { Banner, Tabs, Trending } from "@/components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setMenu, setError } from "../Redux/menu";

export default function Home({ apiKey }) {
  const { foodType } = useSelector((state) => state.foodType);

  // const [recipess, setRecipess] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${foodType}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "=");
        dispatch(setMenu(data));
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  }, [apiKey, dispatch, foodType]);

  return (
    <>
      <Head>
        <title>Foodpals</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tab-logo.svg" />
      </Head>
      <main>
        <Banner />
        <Tabs />
      </main>
    </>
  );
}

//Fetch api

// const getStaticProps = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_APP_SEARCH_QUERY}{foodtype}&number=20&apiKey=${process.env.NEXT_APP_API_KEY}`
//   );
//   const recipes = await res.json();

//   return {
//     props: {
//       recipes,
//     },
//   };
// };

export const getServerSideProps = async () => {
  return {
    props: {
      apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
    },
  };
};

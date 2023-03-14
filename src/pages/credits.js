import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { Gify } from "public";

const credits = () => {
  return (
    <>
      <Head>
        <title>Credits</title>
        <link rel="icon" href="/tab-logo.svg" />
      </Head>

      <div className="credits" style={{ height: "100vh" }}>
        <div
          className="container text-center flex flex-col justify-center items-center"
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
        >
          <Image src={Gify} alt="Thanks GIF" />

          <p>
            Huge thanks to the following for allowing me to use their free
            resources! 🙏🤲
          </p>
          <ul>
            <li>
              <Link
                href="https://spoonacular.com/food-api"
                className="text-blue-800 underline"
              >
                Spoonacular
              </Link>{" "}
              for the API used
            </li>

            <li>
              Images from &nbsp;
              <Link
                href="https://www.pexels.com/"
                className="text-blue-800 underline"
              >
                Pexels
              </Link>
              &nbsp;and&nbsp;
              <Link
                href="https://www.freepik.com/"
                className="text-blue-800 underline"
              >
                Freepik
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default credits;

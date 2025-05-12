import "../styles/globals.css";

//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // optional: regular, medium, bold
});


export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

import "@/styles/globals.css";
import "../../configureAmplify";
import Navbar from "./components/navbar";

export default function App({ Component, pageProps }) {
  const style = {
    content: "py-8 px-16 bg-slage-100"
  }
  return (
    <div>
      <Navbar />
      <div className={style.content}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

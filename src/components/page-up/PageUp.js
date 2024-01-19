import { useEffect, useState } from "react";
import "./page-up.scss";

const PageUp = () => {
  const [pageUpHidden, setPageUpHidden] = useState(true);

  useEffect(() => {
    const onScrollPage = () => {
      const pageHeight = document.documentElement.scrollHeight;
      if (window.scrollY > pageHeight - pageHeight / 3) {
        setPageUpHidden(false);
      } else {
        setPageUpHidden(true);
      }
    };
    window.addEventListener("scroll", onScrollPage);
    return () => window.removeEventListener("scroll", onScrollPage);
  }, []);

  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className={`page-up ${pageUpHidden ? "" : "show"}`}
    ></div>
  );
};

export default PageUp;

import { useEffect, useState } from "react";
import "./page-up.scss";

const PageUp = () => {
  const [pageUpHidden, setPageUpHidden] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", onScrollPage);
    return () => window.removeEventListener("scroll", onScrollPage);
  }, []);

  const onScrollPage = () => {
    const pageHeight = document.documentElement.scrollHeight;
    if (window.scrollY > pageHeight - pageHeight / 1.5) {
      setPageUpHidden(false);
    } else {
      setPageUpHidden(true);
    }
  };

  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className={`page-up ${pageUpHidden ? "" : "show"}`}
    ></div>
  );
};

export default PageUp;

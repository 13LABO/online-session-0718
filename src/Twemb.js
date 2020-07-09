import React from "react";

let isLoadwidgets = false;
const Twemb = () => {
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
  return (
    <>
      　
      <p>
        公式Twitterにて今回のオンライン合同説明会・北海道の就活情報を発信中です！
      </p>
      <div className="twitter">
        <a
          className="twitter-timeline"
          data-width="100%"
          data-height="600"
          data-theme="Light"
          data-chrome="noheadernofooternoborders"
          href="https://twitter.com/13labo_career?ref_src=twsrc%5Etfw"
        ></a>
      </div>
    </>
  );
};

export default Twemb;

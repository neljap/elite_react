import React from "react";

const UserTradeBin = () => {
  return (
    <>
      <div>
        <h1>Personal Trading Chart</h1>
        <div className="w-100 bg-dark my-5" style={{ height: "500px" }}>
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_cd3c4&symbol=BINANCE%3ABTCUSD&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&studies=%5B%5D&theme=dark&style=9&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.account.deepmargins.com&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABTCUSD#%7B%22page-uri%22%3A%22www.account.deepmargins.com%2Foverview%22%7D"
            frameborder="0"
            className="w-100 h-100"
          ></iframe>
        </div>
      </div>
      <div className="bg-dark">
        <div className="container bg-dark">
          <h4 className="text-success font-extrabold text-center all-subheaders">
            Forex Market Fundamental Data
          </h4>
          <div className="w-100" style={{ height: "500px" }}>
            <iframe
              src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22www.account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22www.account.deepmargins.com%2Foverview%22%7D"
              frameborder="0"
              className="w-100 h-100 bg-dark"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTradeBin;

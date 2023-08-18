import React from 'react'

const UserTradeBin = () => {
  return (
    <div>
        <h1>Personal Trading Chart</h1>
        <div className='w-100 bg-dark my-5' style={{height: '500px'}}>
            <iframe src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_cd3c4&symbol=BINANCE%3ABTCUSD&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&studies=%5B%5D&theme=dark&style=9&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.account.deepmargins.com&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABTCUSD#%7B%22page-uri%22%3A%22www.account.deepmargins.com%2Foverview%22%7D" frameborder="0" className='w-100 h-100'></iframe>
        </div>
    </div>
  )
}

export default UserTradeBin
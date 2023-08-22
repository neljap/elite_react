import React from 'react'

const UserFxData = () => {
  return (
    <div className='bg-dark'>
      <div className='container bg-dark'>
        <h4 className='text-light text-success font-extrabold text-center'>Forex Market Fundamental Data</h4>
        <div className='w-100' style={{height: '500px'}}>
            <iframe src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22www.account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22www.account.deepmargins.com%2Foverview%22%7D" frameborder="0" className='w-100 h-100 bg-dark'></iframe>
        </div>
    </div>  
    </div>
    
  )
}

export default UserFxData
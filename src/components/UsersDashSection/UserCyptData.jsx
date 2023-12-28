import '../../App.css'

const UserCyptData = () => {
  return (
    <div className='bg-dark'>
      <div className='container bg-dark'>
        <h4 className='text-success all-subheaders font-extrabold text-center pt-5 pb-3'>Cryptocurrency Prices</h4>
        <div className='w-100' style={{height: '500px'}}>
            <iframe src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22www.account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D" frameborder="0" className='w-100 h-100 bg-dark'></iframe>
        </div>
    </div>  
    </div>
  )
}

export default UserCyptData
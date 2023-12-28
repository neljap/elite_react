import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const ReCaptha = ({onChange}) => {
    const siteKey = process.env.REACT_APP_RECAP_SITE_KEY
  return (
    <div>
        <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
        />
    </div>
  )
}

export default ReCaptha
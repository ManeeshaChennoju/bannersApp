import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <div>
      <h1 className="heading"> {headerText} </h1>
      <p className="para"> {description}</p>
      <button type="button" className="button">
        Show More
      </button>
    </div>
  )
}

export default BannerCardItem

const Button = props => {
  const {className, buttonName} = props
  return <button className={`button ${className}`}>{buttonName}</button>
}

const element = (
  <div className='button-element-container'>
    <div className='contentContainer'>
      <h1 className='buttonHeading'>SocialButtons</h1>
      <div className='buttonContainer'>
        <Button className='like-button' buttonName='Like' />
        <Button className='comment-button' buttonName='Comment' />
        <Button className='share-button' buttonName='Share' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisteredContext from '../../context/RegisteredContext'

import {
  HomeContainer,
  HomeTitle,
  HomeDescription,
  Image,
  Name,
  Topic,
  Button,
} from './styledComponents'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <RegisteredContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)
        return (
          <div>
            <Header />

            {isRegistered === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeTitle>Welcome to Meetup</HomeTitle>
                <HomeDescription>Please register for the topic</HomeDescription>
                <Link to="/register">
                  <Button onClick={onRegister}>Register</Button>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisteredContext.Consumer>
  )
}
export default Home

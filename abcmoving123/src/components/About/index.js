import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About =() => {

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['ABOUT','.','US','.']}
                        idx={15}
                    />
                </h1>
                <h2>Established in 2022 as a not yet another Black-Owned trucking company,<br/> But THE "New Kids on The Block." 
                Whatever your freight needs are, We've got you.</h2>
            </div>
        </div>
    )
}


export default About
import Navbarr from "../Navbarr";

const Bio = () => {

    const person = {
        name: 'Yerin Baek',
        birthdate: 'June 26, 1997 (age 25)',
        education: 'Hanlim Multi Art School',
        ocupation: 'Singer-songwriter',
        bio: 'hey'
    };

    return (
        <div>
            <Navbarr />
            <h2>Baek Ye-rin (백예린)</h2>
            <p>Born: {person.birthdate}</p>
            <p>Birth place: Taepyeong-dong, Jung-gu, Daejeon, South Korea </p>
            <p>Education: {person.education}</p>
            <p>Ocupation: {person.ocupation}</p>
            <p>Bio: Baek Yerin (백예린; or Yerin Baek) is a South Korean singer-songwriter and producer under Blue Vinyl. She is a member of the co-ed band The Volunteers and former half of the duo 15&.
                She made her solo debut on November 30, 2015 with the mini album Frank.</p>
            <div className='videos'>
                <iframe src="https://www.youtube.com/embed/cQuqs2LrXbo"
            
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                /> 
                </div>
        </div>
    )
}

export default Bio;
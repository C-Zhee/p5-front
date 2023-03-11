import Navbarr from "../Navbarr";
import './Bio.css';
import Corey from "../assets/Corey.jpg"
import Tour from "../assets/Tour.jpeg"
import jyp from "../assets/jyp.png"

const Bio = () => {

    const person = {
        name: 'Yerin Baek',
        birthdate: 'June 26, 1997 (age 25)',
        education: 'Hanlim Multi Art School',
        ocupation: 'Singer-songwriter',
        bio: 'hey'
    };

    return (
        <div className='bio-container'>
            <Navbarr />
            <h2 className='title'>Baek Ye-rin (백예린)</h2>
            <h3  className='title'>Born: {person.birthdate}</h3>
            <h3 className='title'>Birth place: Taepyeong-dong, Jung-gu, Daejeon, South Korea </h3>
            <h3 className='title'>Education: {person.education}</h3>
            <h3 className='title'>Bio: Baek Yerin (백예린; or Yerin Baek) is a South Korean singer-songwriter and producer under Blue Vinyl. She is a member of the co-ed band The Volunteers and former half of the duo 15&.
                She made her solo debut on November 30, 2015 with the mini album Frank.</h3>
            <div className='video-container'>
                <iframe src="https://www.youtube.com/embed/cQuqs2LrXbo"
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
            </div> <br/> <br/>
            <h1>Discography</h1> <br/>
            <h3 className='title'>2007–2012: Pre-debut
                Baek Yerin first appeared on a 2007 episode of the television show Star King. Following her appearance, she auditioned and became a trainee at JYP Entertainment</h3>
            <div className='video-container'>
                <iframe src="https://www.youtube.com/embed/fqZt57y-8ms"
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
            </div>
            <h3 className="title">On September 27, 2012, JYP announced Baek Yerin would be debuting as part of a duo alongside Jamie (then known as Park Jimin) called 15&.The duo officially debuted on October 5 with the digital single "I Dream".

                Baek Yerin made her solo debut on November 30, 2015 with her first mini album Frank.

                On September 14, 2018, she debuted as a member of the co-ed rock band The Volunteers with the digital single "Violet".</h3>
            <div className='video-container'>
                <iframe src="https://www.youtube.com/embed/lnM-PQwLxC0"
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
            </div>
            <h3 className="title">2019: Departure from JYP Entertainment, 15&'s disbandment, launch of Blue Vinyl
                On September 13, 2019, Baek Yerin announced via her Instagram account she would be leaving JYP Entertainment after 12 years. Thus, 15& effectively disbanded.

                In the same Instagram post, Baek Yerin revealed her plans to launch her own independent music label. On November 6, her independent label, Blue Vinyl, was officially launched. Her first single under the label, "Popo (How Deep Is Your Love?)" was released on November 22.</h3>
            <img src ={jyp} className="centered"/> <br/> <br/> <br/> <br/>
            <h3 className="title"> Winter 2022: NA TOURRR!</h3> <br/> <br/>
            <img src={Tour} className="centered"/>
            <div className='video-container'>
                <iframe src=" https://www.youtube.com/embed/xWZRGEzXVWM"
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
            </div>
            <div className='video-container'>
                <iframe src="  https://www.youtube.com/embed/y1aTSs4WMeA"
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
            </div>


           

            <img src={Corey} className="centered" />
        </div>

        // https://www.youtube.com/watch?v=lnM-PQwLxC0&ab_channel=JYPEntertainment
    )
}

export default Bio;
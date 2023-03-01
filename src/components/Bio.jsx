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
            <h2>{person.name}</h2>
            <p>Born: {person.birthdate}</p>
            <p>education: {person.education}</p>
            <p>ocupation: {person.ocupation}</p>
            <p>bio: {person.bio}</p>
        </div>
    )
}

export default Bio;
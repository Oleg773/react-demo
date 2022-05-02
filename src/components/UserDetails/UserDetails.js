import {Button} from "../Button/Button";

export const UserDetails = ({user}) =>{
    const {id, name, username, email, phone, website, address:{street, city, zipcode}} = user
    return(
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
            <div>website:{website}</div>
            <div>street:{street}</div>
            <div>city:{city}</div>
            <div>zipcode:{zipcode}</div>
            <br/>
            <Button to={'posts'}>Get Posts</Button>
        </div>
    )
}
//
// "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "address": {
//     "street": "Dayna Park",
//         "suite": "Suite 449",
//         "city": "Bartholomebury",
//         "zipcode": "76495-3109",
//         "geo": {
//         "lat": "24.6463",
//             "lng": "-168.8889"
//     }
// },
// "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//     "name": "Yost and Sons",
//         "catchPhrase": "Switchable contextually-based project",
//         "bs": "aggregate real-time technologies"
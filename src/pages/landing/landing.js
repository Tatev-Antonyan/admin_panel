import { useNavigate } from "react-router"


export const Landing = () => {

const navigate = useNavigate()

const handleNavigate = () => {
    navigate('/login')
}

    return(
        <div className={"landing_container"}>
         <div><button onClick={handleNavigate}>Login</button>
         <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p></div>
         <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p></div>
         <div><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p></div>
        </div>
    )
}
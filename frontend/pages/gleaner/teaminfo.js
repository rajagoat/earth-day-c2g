import Navbar from "../../components/Navbar";
import UserCards from "../../components/userCards";

const TeamInfo = () => {
    return (


        <div>
            <Navbar />
            <div className="container" > 
            <div className='grid-item1' > <UserCards /></div>
            <div className='grid-item2' > <UserCards /></div>
            <div className='grid-item3' > <UserCards /></div>  
  
                
            </div>
            

        </div>
    );
}

export default TeamInfo;
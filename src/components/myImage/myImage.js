import awais_dp from "../../assets/images/Awais_Dp.jpeg";

export default function MyImage() {

    return (
     <div className="profile-picture-main"> 
        <div className="profile-picture"> <img src={awais_dp} alt="profile-pic" ></img> </div>
     </div>
    );
  }
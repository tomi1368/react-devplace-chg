import "./Info.scss"


const Info = ({ info }) => {
  return (
  <div className="info">
      <img className="info-img" src={info.image}/>
      <h3>{info.name}</h3>
      <h3>{info.species}</h3>
      <h3>{info.status}</h3>
  </div>
  )
};

export default Info;

import axios from './axios'
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Latest_Launches() {
    const url="/launches/latest"
    const title ='Latest Launch';
    const [launchList,setLaunchList] = React.useState()
    React.useEffect(()=>{
        async function fetchData(){
            const data = await axios.get(url);
            setLaunchList(data.data)
            console.log(data.data)
        }
        fetchData()
    },[])
    return (
        <>
        <div>
            <h1>this is latest launches </h1>
            </div>
            <div className='row'>
                {
                    (title === 'Latest Launch' || title === 'Next Launch') && (
                        <div className="col-sm">
                        <div className="card" style={{width: "18rem"}}>
  <img src={launchList?.links?.patch?.small} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{launchList?.name}</h5>
    <p className="card-text">{launchList?.details}</p>
    <a href={launchList?.links?.article} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
                    )
                }
                {   
                    (title === 'Past Launches' || title === 'Upcoming Launches') && (
                    
                    launchList?.map(launch => (
                        <div className="col-sm">
                        <div className="card" style={{width: "18rem"}}>
  <img src={launch.links.patch.small} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{launch.name}</h5>
    <p className="card-text">{launch.details}</p>
    <a href={launch.links.article} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
                    )))
                }
            </div>
        </>
    )
}

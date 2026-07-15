import Map from '../assets/images/map.jpg';

export function Body(){
    return (
        <>
            <div>
                <div className='w-full h-[70vh]'>
                    <img src={Map} 
                     alt="Map Icon"
                     className="w-full h-full object-cover" 
                     />
                </div>
                <p> Your Current Bus Stop is : Bus stop name  dd for change bus stop<br />
                    Estimated time of arrival of current bus/Crowd level :  <button>book tickets?</button><br />
                    Estimated time of arrival of next bus/ Crowd level :   <button>book tickets?</button><br />

                </p>
            </div>
        </>
    )
}
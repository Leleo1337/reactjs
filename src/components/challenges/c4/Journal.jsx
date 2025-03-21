import markerIcon from '../../../assets/challenges/c4/marker.png' 

export default function Component(props){
    return(
        <>  
            <div className='border-b border-gray-200 '>
                <div className='flex flex-col md:gap-4 pt-4 md:flex-row'>
                    <div title={props.contentData.img.alt} style={{ backgroundImage: `url(${props.contentData.img.src})` }} className='w-full h-46 sm:h-60 md:h-40 mb-4 bg-center bg-cover md:w-36 rounded-md shrink-0 shadow-sm'></div>
                    <div className='flex flex-col pt-1'>
                        <div className='flex items-center justify-between md:justify-start md:gap-3'>
                            <div className='flex items-center gap-1'>
                                <img src={markerIcon} alt="Marker" className='w-2 h-3'/>
                                <p className='text-xs font-light tracking-widest text-gray-900 font-inter'>{props.contentData.country}</p>
                            </div>
                            <a href={props.contentData.googleMapsLink} target='_blank' className='text-[10px] text-gray-400 underline'>View on Google Maps</a>
                        </div>
                        <h1 className='pt-2 text-xl font-bold'>{props.contentData.title}</h1>
                        <p className='text-xs font-semibold tracking-tighter text-gray-500'>{props.contentData.date}</p>
                        <p className='pt-2 pb-4 tracking-tighter text-gray-600 font-inter'>{props.contentData.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

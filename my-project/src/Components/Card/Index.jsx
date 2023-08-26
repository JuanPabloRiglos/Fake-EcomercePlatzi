/* eslint-disable react/prop-types */
function Card({data : item}){
    console.log('en Card')
    console.log(item)
   
    return(
        <div className="bg-white cursor-pointer w-43 h-50 rounded-lg">
        <figure className='relative mb-3 w-full h-4/5'>
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"> {item.category} </span>
            <img className='w-full h-full object-cover rounded-lg' src={`${item.image}`} alt={`${item.title}`}/>
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>➕</div>
        </figure>
        <p  className='flex justify-between'>
        <span  className=" text-sm font-light"> {item.title}</span>
        <span  className=" text-sm font-medium "> {item.price} </span>
      </p>
        </div>
    )
}
export default Card
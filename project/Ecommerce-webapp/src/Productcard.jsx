

let Productcard=({obj})=>{
    let {title,thumbnail,price,category,rating,description}=obj;
    return(
        <div className="card w-96 bg-base-100 shadow-xl m-2 bg-base-content justify-around">
        <figure>
          <img
            src={thumbnail}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">{title}</div>
          </h2>
          <p className="text-black">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-black">{category}</div>
            <div className="badge badge-outline text-black">{rating}</div>
            <div className="badge badge-outline bg-black text-white font-bold p-4">${price}</div>
            <button className="bg-black text-white p-4 rounded-2xl"> Add </button>
          </div>
        </div>
      </div>
    )
}

export default Productcard;
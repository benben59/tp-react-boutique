import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoryCard({title, description, image}) {
  return (
  <>
    <div>
      <div className="col-6">
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={image} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button href="#" className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
    </div>
  </>
  );
}

export default CategoryCard;

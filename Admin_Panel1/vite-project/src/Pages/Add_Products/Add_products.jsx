import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add_products = () => {
  const [animals_list, setanimals_list] = useState([]);
  //api calling
  const fetchlist12 = async () => {
    const response = await axios.get('http://localhost:4000/api/main/list');
    console.log(response.data);
    if (response.data.success) {
      setanimals_list(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }
  useEffect(() => {
    fetchlist12();

  }, [])
  return (
 <div className="container my-4">
      <h1 className="mb-4 text-center">Live Stock Animals</h1>
      <div className="row">
        {animals_list.map((animal, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="animated-card card h-100 shadow border-0">
              <div className="card-body">
                <h5 className="card-title text-primary"><strong>Name: </strong>{animal.fullName}</h5>
                <h6 className="card-subtitle mb-2 text-muted"><strong>Types of Breed: </strong>{animal.breedType}</h6>
                <p className="card-text">
                  <strong>Age:</strong> {animal.age}<br />
                  <strong>Weight:</strong> {animal.weight}<br />
                  <strong>Milk Production:</strong> {animal.milkProduction}<br />
                  <strong>Vaccinated:</strong> {animal.vaccinated}<br />
                  <strong>Pregnancy:</strong> {animal.pregnancyStatus}<br />
                  <strong>Email:</strong> {animal.email}<br />
                  <strong>Phone:</strong> {animal.gender}<br />
                  <strong>Address:</strong> {animal.address}<br />
                  <strong>Horse Present:</strong> {animal.horsPresent}<br />
                  <strong>Exchange/Refund:</strong> {
                    animal.exchangeOffer === 'Yes' ? 'Exchange' :
                    animal.refundRequested === 'Yes' ? 'Refund' : 'None'
                  }
                </p>
                {animal.mapLocation && (
                  <a
                    href={animal.mapLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    View on Map
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Add_products

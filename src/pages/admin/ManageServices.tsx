
import { useState } from "react";
import "./ManageServices.css";

interface Service {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  duration:string;
  image:string;
}

const ManageServices = () => {
  // Load services from localStorage
  const [services, setServices] = useState<Service[]>(() => {
    const storedServices = localStorage.getItem("services");

    if (storedServices) {
      return JSON.parse(storedServices);
    }

    return [];
  });

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Add new service
  const addService = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !category || !price || !description) {
      alert("Please fill all fields");
      return;
    }

    const newService: Service = {
      id: Date.now(),
      name: name,
      category: category,
      price: Number(price),
      description: description,
      duration: "1 hour",
      image: "https://via.placeholder.com/300",
    };

    const updatedServices = [...services, newService];

    setServices(updatedServices);

    localStorage.setItem(
      "services",
      JSON.stringify(updatedServices)
    );

    // Clear form
    setName("");
    setCategory("");
    setPrice("");
    setDescription("");

    alert("Service added successfully!");
  };

  // Delete service
  const deleteService = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedServices = services.filter(
      (service) => service.id !== id
    );

    setServices(updatedServices);

    localStorage.setItem(
      "services",
      JSON.stringify(updatedServices)
    );
  };

  return (
    <div className="manage-services-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>Manage Services</h1>
        <p>Add and manage your services</p>
      </div>

      {/* Add Service Form */}
      <div className="service-form-card">
        <h2>Add New Service</h2>

        <form onSubmit={addService}>

          <div className="form-group">
            <label>Service Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter service name"
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <input
              type="text"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              placeholder="Example: Cleaning"
            />
          </div>

          <div className="form-group">
            <label>Price</label>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Enter service description"
            />
          </div>

          <button type="submit">
            Add Service
          </button>
        </form>
      </div>

      {/* Services List */}
      <div className="services-list">
        <h2>Available Services</h2>

        {services.length === 0 ? (
          <p>No services available.</p>
        ) : (
          <div className="service-grid">

            {services.map((service) => (
              <div
                className="service-item"
                key={service.id}
              >
                <h3>{service.name}</h3>

                <p>
                  <strong>Category:</strong>{" "}
                  {service.category}
                </p>

                <p>
                  <strong>Price:</strong> ₹
                  {service.price}
                </p>

                <p>
                  {service.description}
                </p>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteService(service.id)
                  }
                >
                  Delete
                </button>
              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
};

export default ManageServices;


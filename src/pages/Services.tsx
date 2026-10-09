import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { services as defaultServices, type Service } from "../data/services";
import "./Services.css";
import Navbar from "../components/Navbar";

const Services = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get admin-added services from localStorage
  const savedServices = localStorage.getItem("services");

  const adminServices: Service[] = savedServices
    ? JSON.parse(savedServices)
    : [];

  // Combine default services and admin services
  const allServices: Service[] = [...defaultServices, ...adminServices];

  // Remove duplicate services
  const uniqueServices = allServices.filter(
    (service, index, self) =>
      index === self.findIndex((item) => item.id === service.id),
  );

  // Search + category filter
  const filteredServices = uniqueServices.filter((service) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      searchText === "" ||
      service.name.toLowerCase().includes(searchText) ||
      service.category.toLowerCase().includes(searchText) ||
      service.description.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "" ||
      service.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [
    ...new Set(uniqueServices.map((service) => service.category)),
  ];

  // Clear search and filter
  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("");
  };

  return (
    <>
    <Navbar/>
      <div className="services-page">
        {/* Header */}
        <div className="services-header">
          <h1>Our Services</h1>

          <p>Choose the best service for your needs</p>
        </div>

        {/* Search + Category */}
        <div className="services-filter">
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Result count */}
        <div className="search-result">
          <p>
            {filteredServices.length} service
            {filteredServices.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Services */}
        {filteredServices.length === 0 ? (
          <div className="no-services">
            <h2>No Services Found</h2>

            <p>Try searching for another service, category, or description.</p>

            <button onClick={clearFilters}>Clear Search</button>
          </div>
        ) : (
          <div className="services-grid">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Services;

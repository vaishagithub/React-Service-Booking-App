
import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import "./Home.css";
import Navbar from "../components/Navbar";

const categories = ["All", ...new Set(services.map((service) => service.category))];

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Book Trusted Services</h1>

            <p>
              Professional services at your doorstep.
              <br />
              Easy booking, trusted professionals.
            </p>

            <div className="search-box">
              <span>🔎</span>

              <input
                type="text"
                placeholder="Search for a service..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearch("")}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="category-section">
          <div className="section-container">
            <h2>Browse Categories</h2>

            <div className="category-list">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    selectedCategory === category
                      ? "category-btn active"
                      : "category-btn"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <div className="section-container">
            <div className="services-heading">
              <div>
                <h2>Popular Services</h2>
                <p>{filteredServices.length} services available</p>
              </div>
            </div>

            {filteredServices.length > 0 ? (
              <div className="service-grid">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div>🔍</div>
                <h3>No services found</h3>
                <p>Try searching for another service or category.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
  
}

export default Home;


import React, { useState, useEffect } from 'react';
import { databases } from '../lib/appwrite'; // Importa databases do appwrite.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [expandedProductId, setExpandedProductId] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log("Fetching products...");
        const response = await databases.listDocuments('675403060025cac807cf', '675403960039fd1b3992');
        console.log("Products fetched:", response.documents);
        setProducts(response.documents);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message);
      }
    }
    fetchProducts();
  }, []);

  const toggleExpand = (id) => {
    setExpandedProductId(expandedProductId === id ? null : id);
  };

  return (
    <Container className="container">
      <Row>
        <Col>
          <h2 className="my-4">Trending now</h2>
        </Col>
      </Row>
      <Row>
        {error && (
          <Col>
            <p className="error-message">Error: {error}</p>
          </Col>
        )}
        {products.length === 0 && !error ? (
          <Col>
            <p className="no-products-message">No products available.</p>
          </Col>
        ) : (
          products.map(product => (
            <Col key={product.$id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {expandedProductId === product.$id ? product.description : (
                      <p>{product.description}</p>
                    )}
                    <strong>${product.price.toFixed(2)}</strong>
                  </Card.Text>
                  {product.description.length > 100 && (
                    <span onClick={() => toggleExpand(product.$id)} className="read-more">
                      {expandedProductId === product.$id ? 'Read Less' : 'Read More'}
                    </span>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Products;

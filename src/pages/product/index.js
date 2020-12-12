import React, { useEffect, useState } from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  CardImg
} from 'reactstrap';
import { productService } from '../../services';
import { Loading } from '../../components';
import './style.css';

const Product = () => {
  const [productDataLoading, setProductDataLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = 'Products';
    setProductDataLoading(true);
    productService
      .product()
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProductDataLoading(false);
      });
    // console.log(data);
  }, []);

  const listProduct = data.map((product) => {
    const category = product.categories.join(',');
    const product_image = product.variants[0].images[0].large_url;
    return (
      <Col sm="12" key={product.id}>
        <Card body>
        {/* <CardImg width="100%" source={`${product_image}`} alt="Card image cap" /> */}
          <CardSubtitle tag="h5" className="promo mb-2 text-muted">
            {product.display_promo_price_percentage}  OFF
          </CardSubtitle>
          <CardTitle tag="h4" className="text-uppercase">
            {product.brand.name}
          </CardTitle>
          <CardSubtitle tag="p" className="mb-2 text-muted">
            {`Category : ${category}`}
          </CardSubtitle>
          <CardText>
            {product.name}
          </CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {product.description}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {product.slug}
          </CardSubtitle>
          <CardText>Netto : {product.display_unit }</CardText>
          <CardSubtitle tag="h6" className="normal-price mb-2 text-muted">
            {product.display_normal_price}
          </CardSubtitle>
          <CardSubtitle tag="h5" className="price mb-2 text-muted discount">
            {`${product.display_price} - (${product.display_unit_price})`}
          </CardSubtitle>
        </Card>
      </Col>
    );
  });

  return (
    <div className="container">
      <h2 className="text-danger mb-3 text-center">Product Special Discount 12:12</h2>
      {productDataLoading ? (
        <Loading />
      ) : (
        <Row>{listProduct}</Row>
      )}
    </div>
  );
};

export default Product;

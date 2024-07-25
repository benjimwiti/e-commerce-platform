import { Col, Row } from 'react-bootstrap'
import { useGetProductsQuery } from '../hooks/productHooks';
import { Helmet } from 'react-helmet-async';
import { ApiError } from '../types/ApiError';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import ProductItem from '../components/ProductItem';


export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery()
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (  
    <Row>
      <Helmet>
        <title>PrimeStore</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
      </Col>
      )
      )}
    </Row>
)
}
import products from '../vschoolProducts';

function Product(props) {
  return (
    <div className="product-card">
      <img src={props.product.img} alt="" width="100%" />
      <div class="product-card-body">
        <h3>{props.product.name}</h3>
        <p>
          {props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} - {props.product.description}
        </p>
      </div>
    </div>
  );
}

export default Product;

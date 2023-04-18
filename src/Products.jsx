export default function Products(props) {
  const { title, price, description, image } = props;
  return (
    <div>
      <h4> {title} </h4>
      <img alt="" src={image} width={100} />
      <p> {description} </p>
      <p>
        {" "}
        <b>${price} </b>
      </p>
      <button onClick={() => props.deleteProduct(props.i)}>
        {" "}
        DELETE_PRODUCT
      </button>
    </div>
  );
}

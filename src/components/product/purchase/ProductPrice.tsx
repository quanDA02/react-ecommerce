type Props = {
  className: string;
  price: number;
  quantity: number;
};

export default function ProductPrice({ className, price, quantity }: Props) {
  return <p className={className}>${price * quantity}</p>;
}

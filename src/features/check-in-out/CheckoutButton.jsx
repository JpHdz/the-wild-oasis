import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";
function CheckoutButton({ bookingId }) {
  const { checkOut, isChekingOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkOut(bookingId)}
      disabled={isChekingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;

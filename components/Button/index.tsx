import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "react-bootstrap";

interface ButtonProps extends BaseButtonProps {}

export default function Button(props: ButtonProps) {
  return <BaseButton {...props} />;
}

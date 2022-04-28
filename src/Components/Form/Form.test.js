import { render } from "@testing-library/react";
import Form from "./Form";

it("should match component snapshot", () => {
  const { container } = render(<Form />);

  expect(container).toMatchSnapshot();
});

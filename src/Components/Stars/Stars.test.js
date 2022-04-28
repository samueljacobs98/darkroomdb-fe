import { render } from "@testing-library/react";
import Stars from "./Stars";

it("should match component snapshot", () => {
  const { container } = render(<Stars rating={1} />);

  expect(container).toMatchSnapshot();
});

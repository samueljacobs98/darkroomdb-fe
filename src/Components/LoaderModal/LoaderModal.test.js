import { render } from "@testing-library/react";
import LoaderModal from "./LoaderModal";

it("should match component snapshot", () => {
  const { container } = render(<LoaderModal />);

  expect(container).toMatchSnapshot();
});

import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";

it("should match component snapshot", () => {
  const { container } = render(<Sidebar basicFilter={() => {}} />);
  expect(container).toMatchSnapshot();
});

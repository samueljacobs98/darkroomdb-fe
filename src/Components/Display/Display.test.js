import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import filmData from "../../assets/mockdata/filmData";
import Display from "./Display";

it("should match component snapshot", () => {
  const { container } = render(
    <MemoryRouter>
      <Display data={filmData} />;
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});

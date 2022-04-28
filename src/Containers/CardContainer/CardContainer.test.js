import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CardContainer from "./CardContainer";
import filmData from "../../assets/mockdata/filmData";

it("should match component snapshot", () => {
  const { container } = render(
    <MemoryRouter>
      <CardContainer filmData={filmData} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

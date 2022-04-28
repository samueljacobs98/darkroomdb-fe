import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";

it("should match component snapshot", () => {
  const { container } = render(
    <MemoryRouter>
      <Card film={{ filmId: 1, name: "name" }} />;
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});

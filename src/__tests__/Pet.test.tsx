import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { StaticRouter } from "react-router-dom/server"; //router for the dom
import Pet from "../Pet";

test("displays a default thumbnail", async () => {
  const pet = render(
    <StaticRouter location={""}>
      <Pet name="" animal="" breed="" images={[]} location="" id={0} />,
    </StaticRouter>,
  );

  const petThumbnail = (await pet.findByTestId(
    "thumbnail",
  )) as HTMLImageElement;
  expect(petThumbnail.src).toContain("none.jpg");
  pet.unmount();
});

test("displays a non-default thumbnail", async () => {
  const pets = render(
    <StaticRouter location={""}>
      <Pet name="" animal="" breed="" images={["2.jpg"]} location="" id={0} />,
    </StaticRouter>,
  );

  const petThumbnail = (await pets.findByTestId(
    "thumbnail",
  )) as HTMLImageElement;
  expect(petThumbnail.src).toContain("2.jpg");

  pets.unmount();
});

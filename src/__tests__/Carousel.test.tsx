import { expect, test } from "vitest";
import Carousel from "../Carousel";
import { render } from "@testing-library/react";

test("lets users click on thumbnails to make them the hero", async () => {
  const images = ["1.jpg", "2.jpg", "3.jpg"];
  const carousel = render(<Carousel images={images} />);
  const hero = (await carousel.findByTestId("hero")) as HTMLImageElement;
  expect(hero.src).toContain(images[0]);

  for (const [index, image] of images.entries()) {
    const thumb = await carousel.findByTestId(`thumbnail${index}`);
    //TODO: find how can you solve this challenge!!!
    await thumb.click();
    expect(hero.src).toContain(image);
    expect(Array.from(thumb.classList)).toContain("active");
  }

  carousel.unmount();
});

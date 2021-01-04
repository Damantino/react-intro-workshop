import { render } from "@testing-library/react";
import Greeter from "../components/Greeter";

describe("iteration-05", () => {
  it("Should set the document title to the name when mounted", () => {
    const { unmount } = render(
      <Greeter name="Assembler" emoji="🖐" />
    );
    expect(document.title).toBe("Hello Assembler 🖐");
    unmount();
    expect(document.title).toBe("Bye Assembler 🖐");
  });

  it("Should set the document title to the name when rerendered", () => {
    const { rerender } = render(<Greeter name="Assembler" emoji="🖐" />);
    rerender(<Greeter name="Jane Doe" emoji="🖐" />);
    expect(document.title).toBe("Hello Jane Doe 🖐");
  });
});

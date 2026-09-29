import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

const back = vi.fn();
const push = vi.fn();
vi.mock("next/navigation", () => ({ useRouter: () => ({ back, push }) }));

// navigationHistory keeps module-level state, so load a fresh copy per test.
async function setup() {
  vi.resetModules();
  const history = await import("@/lib/navigationHistory");
  const { BackButton } = await import("./BackButton");
  return { history, BackButton };
}

describe("BackButton", () => {
  beforeEach(() => {
    back.mockClear();
    push.mockClear();
  });

  it("goes to the fallback page when the site was opened on this page", async () => {
    const { history, BackButton } = await setup();
    history.recordPathname("/courses/build-digital-asset");
    render(<BackButton fallbackHref="/courses" />);

    await userEvent.click(screen.getByRole("button", { name: "Back" }));

    expect(push).toHaveBeenCalledWith("/courses");
    expect(back).not.toHaveBeenCalled();
  });

  it("goes back in history after navigating within the site", async () => {
    const { history, BackButton } = await setup();
    history.recordPathname("/courses");
    history.recordPathname("/courses/build-digital-asset");
    render(<BackButton fallbackHref="/courses" />);

    await userEvent.click(screen.getByRole("button", { name: "Back" }));

    expect(back).toHaveBeenCalledOnce();
    expect(push).not.toHaveBeenCalled();
  });

  it("ignores repeat records of the first page (e.g. effects re-running)", async () => {
    const { history } = await setup();
    history.recordPathname("/creators/purepearl-studio");
    history.recordPathname("/creators/purepearl-studio");
    expect(history.canGoBackInApp()).toBe(false);
  });
});

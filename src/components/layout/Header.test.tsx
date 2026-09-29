import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { server } from "@/test/mocks/server";
import { HeaderBar } from "./HeaderBar";

const refresh = vi.fn();
let pathname = "/";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh }),
  usePathname: () => pathname,
}));

const user = { name: "Jamie Davis", email: "jamie@example.com" };

describe("HeaderBar", () => {
  beforeEach(() => {
    pathname = "/";
    refresh.mockClear();
  });

  it("renders the primary nav links to real pages", () => {
    render(<HeaderBar user={null} />);
    const nav = screen.getByRole("navigation", { name: /primary/i });
    expect(nav).toHaveTextContent("Home");
    expect(screen.getByRole("link", { name: "Courses" })).toHaveAttribute("href", "/courses");
    expect(screen.getByRole("link", { name: "Creators" })).toHaveAttribute("href", "/creators");
  });

  it("marks the current page in the nav", () => {
    pathname = "/courses";
    render(<HeaderBar user={null} />);
    expect(screen.getByRole("link", { name: "Courses" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
  });

  it("renders auth links when signed out", () => {
    render(<HeaderBar user={null} />);
    expect(screen.getByRole("link", { name: /sign in/i })).toHaveAttribute("href", "/login");
    expect(screen.getByRole("link", { name: /join us/i })).toHaveAttribute("href", "/signup");
  });

  it("shows the signed-in user instead of auth links", () => {
    render(<HeaderBar user={user} />);
    expect(screen.getByRole("button", { name: /jamie/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /sign in/i })).not.toBeInTheDocument();
  });

  it("signs out from the user menu", async () => {
    const logout = vi.fn();
    server.use(
      http.post("*/api/auth/logout", () => {
        logout();
        return new HttpResponse(null, { status: 204 });
      }),
    );
    render(<HeaderBar user={user} />);

    await userEvent.click(screen.getByRole("button", { name: /jamie/i }));
    expect(screen.getByRole("menu")).toHaveTextContent("jamie@example.com");
    await userEvent.click(screen.getByRole("menuitem", { name: /sign out/i }));

    await vi.waitFor(() => expect(refresh).toHaveBeenCalled());
    expect(logout).toHaveBeenCalledOnce();
  });

  it("mobile menu is closed by default and opens on click", async () => {
    const { container } = render(<HeaderBar user={null} />);
    expect(container.querySelector("#mobile-nav")).not.toBeInTheDocument();

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
    expect(container.querySelector("#mobile-nav")).toBeInTheDocument();
  });

  it("closes the mobile menu on Escape", async () => {
    const { container } = render(<HeaderBar user={null} />);
    await userEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(container.querySelector("#mobile-nav")).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");

    expect(container.querySelector("#mobile-nav")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });
});

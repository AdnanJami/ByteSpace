import { http, HttpResponse, type HttpHandler } from "msw";
import { courses } from "@/data/courses";

export const handlers: HttpHandler[] = [
  http.get("*/api/courses", () => HttpResponse.json(courses)),
  http.post("*/api/newsletter", () => HttpResponse.json({ ok: true })),
  http.post("*/api/auth/login", async ({ request }) => {
    const body = (await request.json()) as { email?: string; password?: string };
    if (body.email !== "demo@bytespace.com" || body.password !== "password123") {
      return HttpResponse.json(
        { message: "Incorrect email or password. Try demo@bytespace.com / password123." },
        { status: 401 },
      );
    }
    return HttpResponse.json({ ok: true });
  }),
  http.post("*/api/auth/register", () => HttpResponse.json({ ok: true }, { status: 201 })),
];

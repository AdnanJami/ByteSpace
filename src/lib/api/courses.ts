import { api } from "./client";
import type { Course } from "@/types/course";

export function getCourses(): Promise<Course[]> {
  return api<Course[]>("/api/courses");
}

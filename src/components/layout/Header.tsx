import { getSessionUser } from "@/lib/auth/session";
import { HeaderBar } from "./HeaderBar";

export async function Header() {
  const user = await getSessionUser();
  return <HeaderBar user={user} />;
}

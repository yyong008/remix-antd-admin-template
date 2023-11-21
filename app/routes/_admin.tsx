import { Outlet } from "@remix-run/react";
import { ClientOnly } from "~/components/ClientOnly";
import Loading from "~/components/Loading";

export default function AdminLayout() {
  return <div>
    <ClientOnly fallback={<Loading />}>{() => <Outlet />}</ClientOnly>
  </div>
}

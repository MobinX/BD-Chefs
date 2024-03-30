import { headers } from "next/headers";

import Link from "next/link";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";
import { exeLogin } from "@/services/actions/auth";
import { login, registration } from "@/services/auth_repo";
import AuthUI from "./auth_ui";

export default async function Page({ params, query }) {
  const url = new URL(headers().get("x-url"));
  const searchParams = url.searchParams;
  const isNew = searchParams.get("new"); //checking for sign up or sign in
  console.log(isNew);

  return (
    <div className="flex flex-col items-center space-y-3 justify-center bg-base-100 w-full pt-8 md:pt-20 px-6 md:px-10 pb-14 overflow-y-scroll scrollbar-hide h-full min-h-full min-w-full">
      <AuthUI isNew={isNew ? true : false} />
    </div>
  );
}

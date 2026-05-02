"use client";

import { Button, Card, CloseButton, Spinner } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import Image from "next/image";

async function getUserData() {
  return;
}

export default function User() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  // email: "ratulsardar4747@gmail.com";
  // emailVerified: true;
  // id: "69f4db48a4224c21cac7020c";
  // image: "https://lh3.googleusercontent.com/a/ACg8ocIw-0zygJeXcd76hrICTATNfE0GREWvuiYi86tA1pwIhGKc6w=s96-c";
  // name: "Ratul Sardar";

  return (
    <section>
      <div className="cssContainer">
        {isPending ? (
          <div className="bg-background relative z-40 w-full min-h-[50dvh] flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        ) : (
          <Card className="w-full max-w-xl items-center text-center">
            <div className="relative h-[140px] w-full shrink-0 overflow-hidden border-2 border-gray-600/40 rounded-2xl sm:h-[120px] sm:w-[120px]">
              <Image
                alt="avatar"
                className="pointer-events-none absolute inset-0 h-full w-full  object-contain select-none"
                loading="lazy"
                src={session ? "/avatar.png" : session.user?.image}
                width={120}
                height={120}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <Card.Header className="gap-1">
                <Card.Title className="pr-8">{session?.user?.name}</Card.Title>
                <Card.Description>{session?.user?.email}</Card.Description>
              </Card.Header>
              <Card.Footer className="mt-auto flex w-full flex-col items-center gap-3">
                {/* <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  Only 10 spots
                </span>
                <span className="text-xs text-muted">
                  Submission ends Oct 10.
                </span>
              </div>*/}
                <Button className="w-full sm:w-auto">Update data</Button>
              </Card.Footer>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}

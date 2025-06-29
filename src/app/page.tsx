"use server";

import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const response = await prisma.snippet.findMany();

  return (
    <div className="">
      {response.length === 0 ? (
        <div>
          <h1 className="text-center text-4xl mt-10 font-bold">Snippet Manager</h1>

          <div className="max-w-5xl mx-auto mt-10 flex justify-between items-center px-4">
            <div />
            <Link href="/new">
              <Button className="hover:cursor-pointer px-10">
                New Snippet
              </Button>
            </Link>
          </div>

          <div className="text-center mt-[10%] text-lg">
            No snippets present...
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-4xl mt-10 font-bold">Snippets</h1>

          <div className="max-w-5xl mx-auto mt-10 flex justify-between items-center px-4">
            <div />
            <Link href="/new">
              <Button className="hover:cursor-pointer px-10">
                New Snippet
              </Button>
            </Link>
          </div>

          <div className="mt-6 space-y-4 px-10">
            {response.map((snippet) => (
              <div
                key={snippet.id}
                className="bg-gray-200 sm:mx-30 sm:p-4 p-2 sm:px-10 sm:text-xl flex items-center justify-between rounded-xl"
              >
                <h1>{snippet.title}</h1>
                <Link href={`/snippet/${snippet.id}`}>
                  <Button variant={"link"} className="hover:cursor-pointer">
                    View
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

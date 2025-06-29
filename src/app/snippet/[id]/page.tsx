"use server";

import EditorBoard from "@/components/EditorBoard";
import { prisma } from "@/lib/prisma";

export default async function EditSnippet({
  params,
}: {
  params: Promise<{id:string}>
}) {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <EditorBoard snippet={snippet} />
    </div>
  );
}

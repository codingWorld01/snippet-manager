"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"


export const createSnippet = async (code: string, formData:FormData) => {
    try {

        console.log("title: ", formData.get("title"))
        await prisma.snippet.create({
            data: {
                title: formData.get("title") as string,
                code
            }
        })

    }
    catch(error: unknown) {
        console.log(error);
    }

    redirect("/");
}

export const deleteSnippet = async (id: number) => {
    try {
       await prisma.snippet.delete({
      where: {
        id,
      },
    });

    }
    catch(error: unknown) {
        console.log(error);
    }

    redirect("/");
}


export const updateSnippet = async (formData: FormData) => {
  const id = parseInt(formData.get("id") as string);
  const code = formData.get("code") as string;
  const title = formData.get("title") as string;

  await prisma.snippet.update({
    where: { id },
    data: { title, code },
  });

  redirect("/");
};

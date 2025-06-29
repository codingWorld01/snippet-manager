"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { createSnippet } from "@/actions";

export default function NewSnippet() {
  const [code, setCode] = useState("");

  const handleChange = (value: string = "") => {
    setCode(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await createSnippet(code, formData);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-5">
        <h1 className="text-4xl font-bold">Add New Snippet</h1>
        <h1>Title</h1>
        <Input type="text" name="title" className="border border-black" />

        <div>
          <Editor
            height="50vh"
            width="50vw"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue="// Write your code here"
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="hover:cursor-pointer w-full">
          ADD
        </Button>
      </form>
    </div>
  );
}

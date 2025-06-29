"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { deleteSnippet, updateSnippet } from "@/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Snippet = {
  code: string;
  title: string;
  id: number;
} | null;

const EditorBoard = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet?.code || "");
  const [title, setTitle] = useState(snippet?.title || "");

  const handleChange = (value: string = "") => setCode(value);

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Snippet Details</h1>

      <h1>Title</h1>
      <Input
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        className="border border-black"
      />

      <Editor
        height="50vh"
        width="50vw"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code}
        onChange={handleChange}
      />

      <div className="flex">
        <form action={updateSnippet} className="w-[50%] mr-4">
          <input type="hidden" name="id" value={snippet?.id} />
          <input type="hidden" name="title" value={title} />
          <input type="hidden" name="code" value={code} />
          <Button type="submit" className="hover:cursor-pointer w-full">
            Save
          </Button>
        </form>

        <form
          action={deleteSnippet.bind(null, snippet!.id)}
          className="w-[50%]"
        >
          <Button variant="destructive" className="w-full hover:cursor-pointer">
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditorBoard;

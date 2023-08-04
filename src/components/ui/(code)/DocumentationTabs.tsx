"use client";

import { FC } from "react";
import SimpleBar from "simplebar-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import Code from "./Code"

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="python" className="max-w-3xl w-full">
      <TabsList>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>

      <TabsContent value="python">
        <SimpleBar forceVisible="y">
          <Code/>
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
import { FC } from "react";
import type { Metadata } from "next";
import Paragraph from "@/components/ui/Paragraph";
import Masthead from "@/components/ui/Masthead";
import "simplebar-react/dist/simplebar.min.css";
import DocumentationTabs from "@/components/ui/(code)/DocumentationTabs";

export const metadata: Metadata = {
  title: "AutoDocs API | Documentation",
  description: "AutoDocs API: Bringing Clarity to Code",
};

const page: FC = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <Masthead>Make a request</Masthead>
        <Paragraph>api/v1/code-documentation</Paragraph>

        <DocumentationTabs/>

        <div className="height: m-5"></div>
      </div>
    </div>
  );
};

export default page;
import { FC } from "react";
import type { Metadata } from "next";
import Masthead from "@/components/ui/Masthead";
import Paragraph from "@/components/ui/Paragraph";
import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "AutoDocs API | About",
  description: "AutoDocs API: Bringing Clarity to Code",
};

const page: FC = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <Masthead className="text-4xl font-bold text-center text-gray-800">
          About Us
        </Masthead>
        <Paragraph className="text-lg text-gray-600">
          <span className="leading-loose">
            Welcome to <b className="text-blue-500">AutoDocs API</b>, an
            open-source service designed to streamline the process of creating
            documentation for your codebase. We understand the challenges that
            developers face when it comes to maintaining accurate and up-to-date
            documentation. Manual documentation is time-consuming, prone to
            human error, and often falls behind as actual code changes.
          </span>
          <br />
          <br />
          <span className="leading-loose">
            Our mission is to simplify code documentation and empower developers
            to focus on what matters most - building amazing software.
          </span>
        </Paragraph>

        <div className="container max-w-9xl mx-auto mt-12">
          <div className="flex flex-wrap justify-center gap-6">
            {/* How It Works Container */}
            <div className="w-full md:w-1/2 bg-green-50 p-4 rounded-md">
              <h2 className="text-2xl font-bold text-green-800">
                How It Works:
              </h2>
              <ul className="list-disc list-inside mt-2">
                <li className="text-gray-700">
                  Sign up for an AutoDocs API account and get your API key.
                </li>
                <li className="text-gray-700">
                  Make a simple API call, providing your raw code as input.
                </li>
                <li className="text-gray-700">
                  The AI engine will process your code and generate
                  comprehensive Markdown documentation.
                </li>
                <li className="text-gray-700">
                  Access the high-quality documentation instantly, ready to be
                  integrated into your project.
                </li>
              </ul>
            </div>
          </div>

          <div className="h-8"></div>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Key Features Container */}
            <div className="w-full md:w-1/2 bg-blue-50 p-4 rounded-md">
              <h2 className="text-2xl font-bold text-blue-800">
                Key Features:
              </h2>
              <ul className="list-disc list-inside mt-2">
                <li className="text-gray-700">
                  <span className="font-bold">Effortless Integration:</span>{" "}
                  Integrate AutoDocs API into your development workflow
                  seamlessly. With a simple API call, you get comprehensive code
                  documentation in Markdown format, ready to be shared with your
                  team or community.
                </li>
                <li className="text-gray-700">
                  <span className="font-bold">High-Quality Output:</span> Our
                  AI-powered engine ensures that the generated documentation is
                  of the highest quality, providing clear and concise
                  explanations of your code&apos;s functionality and structure.
                </li>
                <li className="text-gray-700">
                  <span className="font-bold">Language Support:</span> Whether
                  your code is written in Python, JavaScript, Java, C++, or any
                  popular programming language, AutoDocs API supports a wide
                  range of languages, making it a versatile choice for all
                  developers.
                </li>
                <li className="text-gray-700">
                  <span className="font-bold">Version Control Friendly:</span>{" "}
                  Keep your documentation in sync with your codebase
                  effortlessly. AutoDocs API works seamlessly with version
                  control systems, updating documentation whenever there are
                  code changes.
                </li>
                <li className="text-gray-700">
                  <span className="font-bold">Customization Options:</span>{" "}
                  Tailor the documentation output to match your project&apos;s style
                  and branding. Customize the layout, colors, and even add your
                  company&apos;s logo to give the documentation a personal touch.
                </li>
              </ul>
            </div>

            {/* Why Choose AutoDocs API? Container */}
            <div className="w-full md:w-1/3 bg-yellow-50 p-4 rounded-md">
              <h2 className="text-2xl font-bold text-yellow-800">
                Why Choose AutoDocs API?
              </h2>
              <ul className="list-disc list-inside mt-2">
                <li className="text-gray-700">
                  <span className="font-bold">Time-Saving:</span> Spend less
                  time documenting and more time coding. AutoDocs API
                  accelerates your development process by automatically creating
                  top-notch documentation.
                </li>
                <li className="text-gray-700">
                  <span className="font-bold">Consistency:</span> Maintain
                  consistent and coherent documentation across your entire
                  codebase with every update.
                </li>
                <li className="text-gray-700">
                  <span className="font-bold">Team Collaboration:</span> Foster
                  collaboration and understanding among team members by
                  providing them with clear and updated code documentation.
                </li>
                <li className="text-gray-700">
                  <span className="font-bold">Enhanced User Experience:</span>{" "}
                  Empower your end-users with comprehensive documentation,
                  making it easier for them to understand and utilize your
                  software.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-8"></div>
      </div>
    </div>
  );
};

export default page;

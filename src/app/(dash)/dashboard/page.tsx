import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import ApiDashboard from "@/components/ui/(dash)/ApiDashboard"
import RequestKey from "@/components/ui/(dash)/RequestKey"


export const metadata: Metadata = {
  title: "AutoDocs API | Dashboard",
  description: "AutoDocs API: Bringing Clarity to Code",
};

const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? <ApiDashboard /> : <RequestKey />}
    </div>
  );
};

export default page;
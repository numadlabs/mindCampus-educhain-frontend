import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ReactNode } from "react";

export default function CollectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full bg-background min-h-screen items-center">
      <div className="w-full overflow-x-hidden max-w-[1920px] px-4 md2:px-[112px] 3xl:px-10">
        {children}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

import { useBreakpoint } from "../../hooks/utils/useBreakpoint";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const breakpoint = useBreakpoint();

  return (
    <div className="min-h-screen bg-gray-50">


      <div className="flex">
        {breakpoint !== "mobile"}

        <main className="flex-1 p-4 tablet:p-6 desktop:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

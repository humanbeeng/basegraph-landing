import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TopBar } from "@/components/top-bar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-svh bg-sidebar">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="p-2 bg-sidebar">
          <main className="h-full w-full rounded-lg border border-border bg-background shadow-sm flex flex-col overflow-hidden">
            <TopBar />
            <div className="flex-1 overflow-auto">
              {children}
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

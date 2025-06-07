import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Router from "./components/Router";
import { RouterProvider } from "./hooks/useRouter";

function App() {
  return (
    <RouterProvider>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </RouterProvider>
  );
}

export default App;

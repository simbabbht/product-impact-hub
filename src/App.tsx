import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import ProductOwner from "./pages/ProductOwner";
import OpsBuilder from "./pages/OpsBuilder";
import OpsBuilderFull from "./pages/OpsBuilderFull";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product-owner" element={<ProductOwner />} />
              <Route path="/product-management" element={<ProductOwner />} />
              <Route path="/ops-builder" element={<OpsBuilder />} />
              <Route path="/ops-builder-full" element={<OpsBuilderFull />} />
              <Route path="/projet/:slug" element={<ProjectDetail />} />
              <Route path="/work/:slug" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

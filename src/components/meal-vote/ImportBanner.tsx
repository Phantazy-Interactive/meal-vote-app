import { useState } from "react";
import { Link2, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ImportBannerProps {
  onImport: (url: string) => Promise<void>;
  quota?: { used: number; total: number };
}

export const ImportBanner = ({ onImport, quota }: ImportBannerProps) => {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus("loading");
    setProgress(25);
    setMessage("Fetching recipe...");

    try {
      // Simulate progress updates
      setTimeout(() => {
        setProgress(50);
        setMessage("Parsing ingredients...");
      }, 500);

      setTimeout(() => {
        setProgress(75);
        setMessage("Normalizing data...");
      }, 1000);

      await onImport(url);
      
      setProgress(100);
      setStatus("success");
      setMessage("Recipe imported successfully!");
      
      setTimeout(() => {
        setUrl("");
        setStatus("idle");
        setProgress(0);
        setMessage("");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed to import recipe");
      setProgress(0);
    }
  };

  const quotaPercentage = quota ? (quota.used / quota.total) * 100 : 0;

  return (
    <Card className="p-6 bg-gradient-warm border-primary/20">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Link2 className="w-5 h-5 text-primary" />
              Import Recipe from URL
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Paste a recipe link to automatically import ingredients and instructions
            </p>
          </div>
          {quota && (
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Monthly imports</p>
              <p className="text-sm font-semibold text-foreground">
                {quota.used} / {quota.total}
              </p>
            </div>
          )}
        </div>

        {quota && (
          <Progress value={quotaPercentage} className="h-1" />
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="https://example.com/recipe"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={status === "loading"}
              className="flex-1"
            />
            <Button
              type="submit"
              disabled={status === "loading" || !url.trim()}
              className="bg-gradient-primary"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Importing...
                </>
              ) : (
                "Import"
              )}
            </Button>
          </div>

          {status === "loading" && (
            <div className="space-y-2 animate-fade-in">
              <Progress value={progress} />
              <p className="text-xs text-muted-foreground">{message}</p>
            </div>
          )}

          {status === "success" && (
            <div className="flex items-center gap-2 text-success text-sm animate-fade-in">
              <CheckCircle2 className="w-4 h-4" />
              {message}
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 text-destructive text-sm animate-fade-in">
              <AlertCircle className="w-4 h-4" />
              {message}
            </div>
          )}
        </form>
      </div>
    </Card>
  );
};

import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";

const variantIcons = {
  destructive: AlertCircle,
  success: CheckCircle2,
  warning: AlertTriangle,
  info: Info,
} as const;

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, icon, variant, ...props }) {
        const IconComponent = variant && variant !== "default" ? variantIcons[variant as keyof typeof variantIcons] : null;
        const showIcon = icon !== undefined ? icon : IconComponent;

        return (
          <Toast key={id} variant={variant} {...props}>
            <div className="flex gap-3 items-start">
              {showIcon && (
                <div className="shrink-0 mt-0.5">
                  {typeof showIcon === "object" ? showIcon : IconComponent && <IconComponent className="h-5 w-5" />}
                </div>
              )}
              <div className="grid gap-1 flex-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

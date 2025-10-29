import { cn } from "@repo/ui/cn";

interface BaseNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

function BaseNode({ className, selected, ...props }: BaseNodeProps) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground relative min-w-48 rounded-md border p-3",
        className,
        selected ? "border-muted-foreground shadow-lg" : "",
        "hover:ring-1",
      )}
      tabIndex={0}
      {...props}
    />
  );
}

interface BaseNodeHeaderProps extends React.HTMLAttributes<HTMLElement> {}

function BaseNodeHeader({ className, ...props }: BaseNodeHeaderProps) {
  return (
    <header
      {...props}
      className={cn(
        "mx-0 my-0 -mb-1 flex flex-row items-center justify-between gap-2 px-3 py-2",
        className,
      )}
    />
  );
}

interface BaseNodeHeaderTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function BaseNodeHeaderTitle({
  className,
  ...props
}: BaseNodeHeaderTitleProps) {
  return (
    <h3
      data-slot="base-node-title"
      className={cn("user-select-none flex-1 font-semibold", className)}
      {...props}
    />
  );
}

interface BaseNodeContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function BaseNodeContent({ className, ...props }: BaseNodeContentProps) {
  return (
    <div
      data-slot="base-node-content"
      className={cn("flex flex-col gap-y-2 p-3", className)}
      {...props}
    />
  );
}

interface BaseNodeFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function BaseNodeFooter({ className, ...props }: BaseNodeFooterProps) {
  return (
    <div
      data-slot="base-node-footer"
      className={cn(
        "flex flex-col items-center gap-y-2 border-t px-3 pb-3 pt-2",
        className,
      )}
      {...props}
    />
  );
}

export {
  BaseNode,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
  BaseNodeContent,
  BaseNodeFooter,
};

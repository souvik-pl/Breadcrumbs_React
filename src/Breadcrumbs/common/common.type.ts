export type BreadcrumbsProps = {
  children: JSX.Element[];
  onSelect: (crumbId: string) => void;
};

export type CrumbProps = {
  id: string;
  label: string;
  index: number;
};

export type BreadcrumbContextType = {
  crumbCount: number;
  onSelect: (crumbId: string) => void;
};

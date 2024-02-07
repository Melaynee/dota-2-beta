import { usePathname } from "next/navigation";

export const useCurrentPathName = () => {
  const path = usePathname();
  return path.split("/")[1];
};

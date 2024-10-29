import { ReactNode } from "react";
import Searchbar from "./search/serachbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}

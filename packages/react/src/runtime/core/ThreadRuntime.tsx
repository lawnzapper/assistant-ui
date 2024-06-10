import type { ComponentType } from "react";
import type { ThreadState } from "../../context/stores/Thread";

export type Unsubscribe = () => void;
export type ThreadRuntime = Readonly<ThreadState> & {
  subscribe: (callback: () => void) => Unsubscribe;
};

export type ReactThreadRuntime = Readonly<ThreadState> & {
  unstable_synchronizer?: ComponentType;
};

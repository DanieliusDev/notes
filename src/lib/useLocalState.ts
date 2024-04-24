"use client";

import { useEffect, useState } from "react";

export function useLocalState<T>(key: string, initialState: T) {
  const [value, setValue] = useState<T>(initialState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) localStorage.setItem(key, JSON.stringify(value));
    else {
      setValue(
        JSON.parse(localStorage.getItem(key) ?? JSON.stringify(initialState))
      );
      setReady(true);
    }
  }, [initialState, key, ready, value]);

  return [value, setValue] as const;
}

import { useEffect, useMemo, useState } from "react";

export function useTimer({ endAt, isRunning, onExpire }) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!isRunning || !endAt) {
      return undefined;
    }

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, endAt]);

  const secondsLeft = useMemo(() => {
    if (!endAt) {
      return 0;
    }
    return Math.max(0, Math.floor((endAt - now) / 1000));
  }, [endAt, now]);

  useEffect(() => {
    if (isRunning && endAt && secondsLeft === 0) {
      onExpire?.();
    }
  }, [isRunning, endAt, secondsLeft, onExpire]);

  const time = useMemo(() => {
    const mins = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const secs = String(secondsLeft % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }, [secondsLeft]);

  return { secondsLeft, time };
}

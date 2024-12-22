import React, { PropsWithChildren } from "react";

type Props = {
  error?: string | null;
} & PropsWithChildren;

const ErrorWrapper = ({ error, children }: Props) => {
  if (error) {
    return (
      <div className="text-2xl w-full h-full text-rose-400 flex items-center justify-center">
        {error}
      </div>
    );
  }
  return children;
};

export default ErrorWrapper;

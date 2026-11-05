import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-12 w-28 bg-slate-900 text-white rounded-full outline-hidden transition-all focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 dark:bg-white/10 disabled:scale-100 disabled:bg-slate-900/65 dark:disabled:bg-white/5"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
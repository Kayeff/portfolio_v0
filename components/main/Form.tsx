"use client";
import { Send } from "lucide-react";
import { ContactFormT, contactSchema } from "@/lib/validators/contact";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendmail } from "@/app/actions/contact";

export default function Form() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<ContactFormT>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormT> = async ({
    name,
    email,
    message,
  }) => {
    startTransition(async () => {
      try {
        await sendmail({ name, email, message });
        reset();
      } catch (error) {
        alert("Failed to send message");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2"
    >
      <div className="w-full flex flex-col gap-2">
        <input
          type="text"
          placeholder="name"
          {...register("name")}
          className="w-full border border-foreground/50 outline-none p-2 focus:border-foreground px-3"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="w-full flex flex-col gap-2">
        <input
          type="email"
          placeholder="email"
          {...register("email")}
          className="w-full border border-foreground/50 focus:border-foreground outline-none p-2 px-3"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="w-full flex flex-col gap-2 lg:col-span-2">
        <textarea
          placeholder="message"
          {...register("message")}
          className="h-52 w-full border border-foreground/50 focus:border-foreground p-2 outline-none resize-none px-3"
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          disabled={isPending}
          className="w-max duration-200 text-background py-2 px-10 cursor-pointer bg-foreground font-medium lg:col-span-2"
        >
          {isPending ? "Sending..." : <Send size={20} strokeWidth={1.5} />}
        </button>
        {isSubmitted && <p>Sent!</p>}
      </div>
    </form>
  );
}

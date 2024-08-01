"use client";
import { SendEmail } from "@/actions/email";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { EmailSchema } from "@/app/api/post/schema";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Page = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<EmailSchema>({
    defaultValues: {
      email: "",
      message: "",
      nama: "",
    },
  });

  const onSubmit = async (data: EmailSchema) => {
    setIsLoading(true);
    try {
      await SendEmail(data);
      toast({
        description: "Email Send Succes",
      });
      setIsLoading(false);
    } catch {
      toast({
        description: "Something Went Wrong",
      });
      setIsLoading(false);
    }
  };
  return (
    <main className="flex justify-center  items-center w-full min-h-screen ">
      <div className="flex flex-col gap-4 container max-w-3xl">
        <h3 className="text-3xl ">Get in Touch</h3>
        <p className="text-gray-300">
          I'm always open to new opportunities and collaborations. Drop me a
          message!
        </p>
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            placeholder="nama"
            {...register("nama")}
            className="placeholder:text-white"
          />
          <Input
            type="text"
            placeholder="email"
            {...register("email")}
            className="placeholder:text-white"
          />
          <textarea
            className="w-full   min-h-[30vh] max-h-[50vh] border-2 p-4 rounded-md border-gray-400 focus:outline-none text-white bg-transparent placeholder:text-white resize-none  overflow-hidden"
            placeholder="Send Message"
            {...register("message")}
          />
          <Button className="bg-neutral-800 py-2 ">Submit</Button>
        </form>
      </div>
    </main>
  );
};

export default Page;

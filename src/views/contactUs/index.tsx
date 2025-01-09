"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateContactusMutation } from "@/graphql/generated/graphql";
import Link from "next/link";
import { useState } from "react";
import ContactUsForm from "./form";

type FormState = {
  fullName: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

const Index = () => {
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [createContactus, { loading, error }] = useCreateContactusMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const { data } = await createContactus({
        variables: {
          input: {
            full_name: formState.fullName,
            phone_number: formState.phoneNumber,
            subject: formState.subject,
            body: formState.message,
          },
        },
      });

      if (data?.createContactus?.item) {
        alert("ContactUs created successfully!");
        setFormState({
          fullName: "",
          phoneNumber: "",
          subject: "",
          message: "",
        });
      } else if (data?.createContactus?.error) {
        alert(
          `Error: ${data.createContactus.error.field} - ${data.createContactus.error.message}`
        );
      }
    } catch (err) {
      console.error("Error creating contact", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };
  return (
    <div className="max-w-7xl mx-auto py-4 px-2">
      <div className="text-2xl font-bold mb-4">
        <Button asChild>
          <Link href={"/"}>Go Back</Link>
        </Button>
      </div>
      <h1 className="text-2xl font-bold mb-4 w-fit mx-auto">Contact us</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>{/* <CardTitle>Contact Us</CardTitle> */}</CardHeader>
        <CardContent>
          <ContactUsForm
            formState={formState}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            error={error?.message}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;

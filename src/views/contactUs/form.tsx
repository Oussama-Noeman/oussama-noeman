"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export type FormState = {
  fullName: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

interface ContactUsFormProps {
  formState: FormState;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error?: string;
}

const ContactUsForm: React.FC<ContactUsFormProps> = ({
  formState,
  onChange,
  onSubmit,
  loading,
  error,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="text-red-600 mb-4">
          <p>Error: {error}</p>
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium">
          Full Name
        </label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          value={formState.fullName}
          onChange={onChange}
          placeholder="Enter your full name"
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium">
          Phone Number
        </label>
        <Input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formState.phoneNumber}
          onChange={onChange}
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium">
          Subject
        </label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={onChange}
          placeholder="Enter the subject"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={onChange}
          placeholder="Write your message here"
          required
        />
      </div>
      <div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronDown, Send } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  orgSize: z.string().min(1, "Please select an organization size"),
  details: z.string().min(10, "Please provide more details (min 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          organizationSize: data.orgSize,
          inquiryDetails: data.details,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert("Inquiry submitted successfully!");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("There was an error submitting your inquiry. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-0 rounded-none shadow-none border-none">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">First Name</label>
          <input
            {...register("firstName")}
            placeholder="John"
            className="w-full p-3 rounded-none bg-white border border-slate-200 focus:border-[#006d6d] outline-none transition-all text-xs font-normal"
          />
          {errors.firstName && <p className="text-red-500 text-[10px]">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
          <input
            {...register("lastName")}
            placeholder="Doe"
            className="w-full p-3 rounded-none bg-white border border-slate-200 focus:border-[#006d6d] outline-none transition-all text-xs font-normal"
          />
          {errors.lastName && <p className="text-red-500 text-[10px]">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Corporate Email</label>
        <input
          {...register("email")}
          placeholder="john@company.com"
          className="w-full p-3 rounded-none bg-white border border-slate-200 focus:border-[#006d6d] outline-none transition-all text-xs font-normal"
        />
        {errors.email && <p className="text-red-500 text-[10px]">{errors.email.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Organization Size</label>
        <div className="relative">
          <select
            {...register("orgSize")}
            className="w-full p-3 rounded-none bg-white border border-slate-200 focus:border-[#006d6d] outline-none transition-all text-xs font-normal appearance-none"
          >
            <option value="">Select...</option>
            <option value="1-50">1-50 Employees</option>
            <option value="51-200">51-200 Employees</option>
            <option value="201-500">201-500 Employees</option>
            <option value="500+">500+ Employees</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <ChevronDown size={14} />
          </div>
        </div>
        {errors.orgSize && <p className="text-red-500 text-[10px]">{errors.orgSize.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Inquiry Details</label>
        <textarea
          {...register("details")}
          placeholder="Tell us about your team's needs..."
          rows={3}
          className="w-full p-3 rounded-none bg-white border border-slate-200 focus:border-[#006d6d] outline-none transition-all text-xs font-normal"
        />
        {errors.details && <p className="text-red-500 text-[10px]">{errors.details.message}</p>}
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="w-full bg-slate-200 text-gray-500 p-3 rounded-none font-bold disabled:opacity-50 transition-all hover:bg-slate-300 text-xs flex items-center justify-center gap-2"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
};

export default ContactForm;

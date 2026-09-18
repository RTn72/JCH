import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Select a service").max(120),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  details: z
    .string()
    .trim()
    .min(10, "Please add a few details about the project")
    .max(2000),
  /** Honeypot — must stay empty. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    // Simple bot trap: silently accept and discard.
    if (data.website) return { ok: true as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_enquiries").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      service: data.service,
      budget: data.budget || null,
      details: data.details,
    });

    if (error) {
      console.error("Failed to store enquiry", error);
      throw new Error("We couldn't send your enquiry. Please try WhatsApp instead.");
    }

    return { ok: true as const };
  });

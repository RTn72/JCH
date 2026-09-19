import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100),

  email: z.string().trim().email("Enter a valid email address").max(255),

  phone: z.string().trim().max(30).optional().or(z.literal("")),

  company: z.string().trim().max(120).optional().or(z.literal("")),

  service: z.string().trim().min(1, "Select a service").max(120),

  budget: z.string().trim().max(60).optional().or(z.literal("")),

  details: z.string().trim().min(10, "Please add a few details about the project").max(2000),

  /**
   * Honeypot — must stay empty.
   */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    // Simple bot trap: silently accept and discard.
    if (data.website) {
      return { ok: true as const };
    }

    // ─────────────────────────────────────────────
    // 1. SAVE ENQUIRY TO SUPABASE
    // ─────────────────────────────────────────────

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

    // ─────────────────────────────────────────────
    // 2. SEND EMAIL NOTIFICATION
    // ─────────────────────────────────────────────

    const resendApiKey = process.env["RESEND_API_KEY"];
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is missing.");

      // Enquiry is already safely stored in Supabase,
      // so don't make the customer lose their submission.
      return { ok: true as const };
    }

    const resend = new Resend(resendApiKey);

    const { error: emailError } = await resend.emails.send({
      from: "Jimmy's Creative Hub <onboarding@resend.dev>",
      to: ["prajapatratan880@gmail.com"],
      subject: `🔔 New Enquiry — ${data.service} — ${data.fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #222;">

          <div style="background:#111; padding:24px; border-radius:12px 12px 0 0;">
            <h1 style="color:#fff; margin:0; font-size:24px;">
              New Enquiry Received
            </h1>

            <p style="color:#ccc; margin:8px 0 0;">
              Jimmy's Creative Hub
            </p>
          </div>

          <div style="padding:28px; background:#f8f8f8;">

            <h2 style="margin-top:0;">
              Client Details
            </h2>

            <table style="width:100%; border-collapse:collapse;">

              <tr>
                <td style="padding:10px 0; font-weight:bold;">
                  Name
                </td>
                <td style="padding:10px 0;">
                  ${escapeHtml(data.fullName)}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">
                  Email
                </td>
                <td style="padding:10px 0;">
                  <a href="mailto:${escapeHtml(data.email)}">
                    ${escapeHtml(data.email)}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">
                  Phone
                </td>
                <td style="padding:10px 0;">
                  ${escapeHtml(data.phone || "Not provided")}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">
                  Company / Brand
                </td>
                <td style="padding:10px 0;">
                  ${escapeHtml(data.company || "Not provided")}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">
                  Service
                </td>
                <td style="padding:10px 0;">
                  ${escapeHtml(data.service)}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">
                  Budget
                </td>
                <td style="padding:10px 0;">
                  ${escapeHtml(data.budget || "Not specified")}
                </td>
              </tr>

            </table>

            <hr style="border:none; border-top:1px solid #ddd; margin:24px 0;" />

            <h2>Project Details</h2>

            <div style="
              background:#fff;
              padding:18px;
              border-radius:10px;
              border:1px solid #e5e5e5;
              line-height:1.6;
              white-space:pre-wrap;
            ">
              ${escapeHtml(data.details)}
            </div>

            <div style="margin-top:28px;">
              <a
                href="mailto:${escapeHtml(data.email)}"
                style="
                  display:inline-block;
                  background:#111;
                  color:#fff;
                  text-decoration:none;
                  padding:12px 20px;
                  border-radius:8px;
                  font-weight:bold;
                "
              >
                Reply to Client
              </a>
            </div>

          </div>

          <div style="
            padding:18px;
            text-align:center;
            color:#777;
            font-size:13px;
          ">
            This enquiry was submitted through the Jimmy's Creative Hub website.
          </div>

        </div>
      `,
    });

    if (emailError) {
      console.error("Failed to send enquiry notification email", emailError);

      // IMPORTANT:
      // Enquiry is already stored in Supabase,
      // so don't show an error to the customer just because
      // the notification email failed.
    }

    return { ok: true as const };
  });

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

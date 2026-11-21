"use client";

import { Suspense } from "react";
import * as Yup from "yup";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";

import { Formik, Form, type FormikHelpers } from "formik";
import { BsSendFill } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import InputField from "../../primitives/InputField/InputField";
import { Button } from "@/components/primitives/Button/Button";
import { Textarea } from "@/components/primitives/Textarea/Textarea";

import { siteConfig } from "@/config/site";
import PhoneField from "@/components/primitives/PhoneField/PhoneField";

type WebsiteType = "Landing Page" | "Wedding Website" | "Personal Portfolio";

interface InquiryFormValues {
    service: WebsiteType;
    name: string;
    email: string;
    message: string;
}

const WEBSITE_TYPES: {
    slug: string;
    value: WebsiteType;
    label: string;
    desc: string;
}[] = [
    {
        slug: "landing",
        value: "Landing Page",
        label: "Landing Page",
        desc: "Product, SaaS, or launch",
    },
    {
        slug: "wedding",
        value: "Wedding Website",
        label: "Wedding Website",
        desc: "Invites, RSVP & event details",
    },
    {
        slug: "personal",
        value: "Personal Portfolio",
        label: "Personal Portfolio",
        desc: "Showcase, resume & brand",
    },
];

function ProjectInquiryContent() {
    const searchParams = useSearchParams();
    const typeParam = searchParams.get("type")?.toLowerCase();
    const emailParam = searchParams.get("email");

    const preselectedType: WebsiteType =
        WEBSITE_TYPES.find((item) => item.slug === typeParam)?.value ?? "Landing Page";

    const validationSchema = Yup.object().shape({
        service: Yup.string().required("Please select a website type"),
        name: Yup.string().required("Full name is required"),
        email: Yup.string()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Please enter a valid email address"
            )
            .required("Email is required"),
        message: Yup.string().required("Please share a few details about your project"),
    });

    const initialValues: InquiryFormValues = {
        service: preselectedType,
        name: "",
        email: emailParam ?? "",
        message: "",
    };

    const handleSubmit = async (
    values: InquiryFormValues,
    { setSubmitting, resetForm }: FormikHelpers<InquiryFormValues>
): Promise<void> => {
    try {
        
        await emailjs.send(
             siteConfig.EMAIL_JS_SERVICE_ID,
             siteConfig.EMAIL_JS_TEMPLATE_ID,
             {
                name: values.name,
                email: values.email,
                message: values.message,
                service: values.service,
                plan: "Custom Website Build",
             },
            {
                publicKey: siteConfig.EMAIL_JS_PUBLIC_KEY
            } 
        );

        toast("Inquiry received!", {
            description:
                "Thank you for reaching out! I'll review your inquiry and get back to you within 24 hours.",
        });

        resetForm();
    } catch (error) {
         const emailError = error as {
             status?: number;
             text?: string;
        };

    console.error("EmailJS Error:", {
        status: emailError.status,
        message: emailError.text,
        fullError: error,
    });

        toast("Failed to send inquiry", {
            description:
                `Something went wrong. You can also email me directly at ${siteConfig.email}.`,
        });
    } finally {
        setSubmitting(false);
    }
};

    return (
        <section className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 rounded-lg border border-(--color-border) bg-(--color-surface) p-8 md:p-12">
                {/* Left Column: Context & Scope */}
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider px-2.5 py-1 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent) mb-4">
                            <HiOutlineSparkles size={14} />
                            <span>Custom Web Builds</span>
                        </div>

                        <h3 className="font-serif text-3xl md:text-4xl text-(--color-text) mb-4 leading-tight">
                            Start a custom project inquiry.
                        </h3>

                        <p className="text-sm text-(--color-text-muted) leading-relaxed mb-6">
                            Need a high-converting landing page, an interactive wedding website for your guests, or a bespoke personal site? Select your website type and share your details.
                        </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-(--color-border)">
                        <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim)">
                            What happens next
                        </div>
                        <ul className="space-y-2 text-xs text-(--color-text-muted)">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-(--color-primary)" />
                                Direct delivery to{" "}
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="text-(--color-text) hover:text-(--color-primary) transition-colors"
                                >
                                    {siteConfig.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-(--color-primary)" />
                                Personalized scope &amp; timeline reply within 24h
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-(--color-primary)" />
                                Tailored design &amp; responsive frontend engineering
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Formik + EmailJS Form */}
                <div className="pt-6 lg:pt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-(--color-border)">
                    <Formik<InquiryFormValues>
                        enableReinitialize
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, values, setFieldValue }) => (
                            <Form className="flex flex-col gap-4 w-full">
                                {/* Website Type Selector Pills */}
                                <div>
                                    <label className="block font-mono text-[0.7rem] uppercase tracking-wider text-(--color-text-dim) mb-2">
                                        1. Select Website Type
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                        {WEBSITE_TYPES.map((item) => {
                                            const isSelected = values.service === item.value;
                                            return (
                                                <button
                                                    key={item.value}
                                                    type="button"
                                                    onClick={() => setFieldValue("service", item.value)}
                                                    className={`text-left p-3 rounded-md border transition-all cursor-pointer ${
                                                        isSelected
                                                            ? "border-(--color-primary) bg-[oklch(0.78_0.15_var(--accent-hue)/0.12)]"
                                                            : "border-(--color-border) bg-(--color-surface-hover) hover:border-(--color-text-dim)"
                                                    }`}
                                                >
                                                    <div
                                                        className={`text-xs font-semibold mb-0.5 ${
                                                            isSelected
                                                                ? "text-(--color-primary)"
                                                                : "text-(--color-text)"
                                                        }`}
                                                    >
                                                        {item.label}
                                                    </div>
                                                    <div className="text-[0.68rem] text-(--color-text-dim) leading-snug">
                                                        {item.desc}
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <InputField name="name" label="Full Name" />
                                <InputField name="email" label="Email Address" />
                                <PhoneField name="phone" label="Phone Number" />
                                <InputField
                                    as={Textarea}
                                    name="message"
                                    label="Project Details & Message"
                                    className="resize-none h-28"
                                />

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        disabled={isSubmitting}
                                        icon={
                                            isSubmitting ? (
                                                <AiOutlineLoading3Quarters
                                                    className="animate-spin"
                                                    size={14}
                                                />
                                            ) : (
                                                <BsSendFill size={13} />
                                            )
                                        }
                                    >
                                        {isSubmitting ? "Sending Inquiry..." : "Send Project Inquiry"}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export function ProjectInquirySection() {
    return (
        <Suspense
            fallback={
                <div className="w-full max-w-5xl mx-auto h-96 rounded-lg border border-(--color-border) bg-(--color-surface) animate-pulse" />
            }
        >
            <ProjectInquiryContent />
        </Suspense>
    );
}

export default ProjectInquirySection;
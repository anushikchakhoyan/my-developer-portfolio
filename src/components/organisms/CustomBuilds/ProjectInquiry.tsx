"use client";

import { Suspense } from "react";
import * as Yup from "yup";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";

import { Formik, Form, type FormikHelpers } from "formik";
import { BsSendFill } from "react-icons/bs";
import { HiOutlineSparkles, HiOutlineMail } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import InputField from "../../primitives/InputField";
import { Button } from "@/components/primitives/Button";
import { Textarea } from "@/components/primitives/Textarea";
import PhoneField from "@/components/primitives/PhoneField";

import { siteConfig } from "@/config/site";

export type WebsiteType = "Landing Page" | "Wedding Website" | "Personal Portfolio";

interface InquiryFormValues {
    service: WebsiteType;
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface ProjectInquiryProps {
    selectedType?: WebsiteType;
    initialEmail?: string;
    onSelectType?: (type: WebsiteType) => void;
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

const NEXT_STEPS = [
    {
        step: "01",
        title: "Scope & Timeline Review",
        desc: "I'll review your goals and reply within 24 hours with a tailored plan.",
    },
    {
        step: "02",
        title: "Design & Architecture",
        desc: "Pixel-accurate UI design and responsive frontend setup.",
    },
    {
        step: "03",
        title: "Build & Launch",
        desc: "Fast, accessible delivery ready for your custom domain.",
    },
];

function ProjectInquiryContent({
    selectedType,
    initialEmail,
    onSelectType,
}: ProjectInquiryProps) {
    const searchParams = useSearchParams();
    const typeParam = searchParams.get("type")?.toLowerCase();
    const emailParam = searchParams.get("email");

    const resolvedType: WebsiteType =
        selectedType ??
        WEBSITE_TYPES.find((item) => item.slug === typeParam)?.value ??
        "Landing Page";

    const resolvedEmail = initialEmail || emailParam || "";

    const validationSchema = Yup.object().shape({
        service: Yup.string().required("Please select a website type"),
        name: Yup.string().required("Full name is required"),
        email: Yup.string()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Please enter a valid email address"
            )
            .required("Email is required"),
        phone: Yup.string().optional(),
        message: Yup.string().required("Please share a few details about your project"),
    });

    const initialValues: InquiryFormValues = {
        service: resolvedType,
        name: "",
        email: resolvedEmail,
        phone: "",
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
                    phone: values.phone || "Not provided",
                    message: values.message,
                    service: values.service,
                    plan: "Custom Website Build",
                },
                {
                    publicKey: siteConfig.EMAIL_JS_PUBLIC_KEY,
                }
            );

            toast("Inquiry received!", {
                description:
                    "Thank you for reaching out! I'll review your inquiry and get back to you within 24 hours.",
            });

            resetForm({
                values: {
                    service: values.service,
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                },
            });
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
                description: `Something went wrong. You can also email me directly at ${siteConfig.email}.`,
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl border border-(--color-border) bg-(--color-surface)">
                {/* Subtle top accent line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-(--color-primary) via-(--color-accent) to-transparent opacity-70" />

                <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr]">
                    {/* Left Column: Editorial Context & Process */}
                    <div className="flex flex-col justify-between p-7 md:p-10 bg-(--color-surface-hover)/40">
                        <div>
                            <div className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-widest px-2.5 py-1 rounded-full border border-(--color-border) bg-(--color-surface) text-(--color-primary) mb-5">
                                <HiOutlineSparkles size={13} />
                                <span>Project Inquiry</span>
                            </div>

                            <h3 className="font-serif text-2xl md:text-3xl text-(--color-text) mb-3 leading-snug">
                                Tell me about what we&apos;re building.
                            </h3>

                            <p className="text-sm text-(--color-text-muted) leading-relaxed mb-8">
                                Share your timeline, goals, or inspiration links. Whether you&apos;re launching a product or planning an event, I&apos;ll tailor the build around your needs.
                            </p>

                            {/* Numbered Process Steps */}
                            <div className="space-y-4">
                                <div className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim)">
                                    What happens next
                                </div>
                                <ol className="space-y-3.5">
                                    {NEXT_STEPS.map((item) => (
                                        <li key={item.step} className="flex items-start gap-3">
                                            <span className="font-mono text-[0.7rem] text-(--color-primary) mt-0.5">
                                                {item.step}
                                            </span>
                                            <div>
                                                <div className="text-xs font-medium text-(--color-text)">
                                                    {item.title}
                                                </div>
                                                <p className="text-xs text-(--color-text-muted) leading-relaxed mt-0.5">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        {/* Direct Email Footer Card */}
                        <div className="mt-8 pt-5 border-t border-(--color-border)">
                            <div className="flex items-center gap-2.5 text-xs text-(--color-text-muted)">
                                <span className="flex items-center justify-center w-7 h-7 rounded-md border border-(--color-border) bg-(--color-surface) text-(--color-primary) shrink-0">
                                    <HiOutlineMail size={14} />
                                </span>
                                <div className="min-w-0">
                                    <div className="text-[0.68rem] font-mono uppercase tracking-wider text-(--color-text-dim)">
                                        Prefer direct email?
                                    </div>
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="text-(--color-text) hover:text-(--color-primary) transition-colors truncate block"
                                    >
                                        {siteConfig.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="p-7 md:p-10 border-t lg:border-t-0 lg:border-l border-(--color-border)">
                        <Formik<InquiryFormValues>
                            enableReinitialize
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, values, setFieldValue }) => (
                                <Form className="flex flex-col gap-5 w-full">
                                    {/* Website Type Selector */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2.5">
                                            <label className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim)">
                                                01. Selected Package
                                            </label>
                                            <span className="font-mono text-[0.68rem] text-(--color-primary)">
                                                {values.service}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                            {WEBSITE_TYPES.map((item) => {
                                                const isSelected = values.service === item.value;
                                                return (
                                                    <button
                                                        key={item.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setFieldValue("service", item.value);
                                                            onSelectType?.(item.value);
                                                        }}
                                                        className={`group relative text-left p-3 rounded-lg border transition-all cursor-pointer ${
                                                            isSelected
                                                                ? "border-(--color-primary) bg-[oklch(0.78_0.15_var(--accent-hue)/0.1)]"
                                                                : "border-(--color-border) bg-(--color-surface-hover)/50 hover:border-(--color-text-dim)"
                                                        }`}
                                                    >
                                                        <div className="flex items-center justify-between gap-1.5 mb-1">
                                                            <span
                                                                className={`text-xs font-medium transition-colors ${
                                                                    isSelected
                                                                        ? "text-(--color-primary)"
                                                                        : "text-(--color-text)"
                                                                }`}
                                                            >
                                                                {item.label}
                                                            </span>
                                                            <span
                                                                className={`w-1.5 h-1.5 rounded-full transition-opacity ${
                                                                    isSelected
                                                                        ? "bg-(--color-primary) opacity-100"
                                                                        : "bg-(--color-text-dim) opacity-0 group-hover:opacity-40"
                                                                }`}
                                                            />
                                                        </div>
                                                        <div className="text-[0.68rem] text-(--color-text-muted) leading-snug">
                                                            {item.desc}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Contact Fields */}
                                    <div className="space-y-4">
                                        <div className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim)">
                                            02. Your Details
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <InputField name="name" label="Full Name" />
                                            <InputField name="email" label="Email Address" />
                                        </div>

                                        <PhoneField name="phone" label="Phone Number (Optional)" />

                                        <InputField
                                            as={Textarea}
                                            name="message"
                                            label="Project Details, Goals & Timeline"
                                            className="resize-none h-28"
                                        />
                                    </div>

                                    <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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

                                        <span className="text-[0.7rem] text-(--color-text-dim)">
                                            Typical response under 24h
                                        </span>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function ProjectInquiry({
    selectedType,
    initialEmail,
    onSelectType,
}: ProjectInquiryProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full max-w-4xl mx-auto h-96 rounded-xl border border-(--color-border) bg-(--color-surface) animate-pulse" />
            }
        >
            <ProjectInquiryContent
                selectedType={selectedType}
                initialEmail={initialEmail}
                onSelectType={onSelectType}
            />
        </Suspense>
    );
}

export default ProjectInquiry;
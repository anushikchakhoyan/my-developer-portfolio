"use client";

import { Suspense } from "react";
import * as Yup from "yup";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Formik, Form, type FormikHelpers } from "formik";
import { HiOutlineSparkles, HiOutlineMail } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";

import InputField from "../../primitives/InputField";
import { Button } from "@/components/primitives/Button";
import { Textarea } from "@/components/primitives/Textarea";
import PhoneField from "@/components/primitives/PhoneField";

import { BUILD_PACKAGES, WebsiteType } from "@/config/data";
import { siteConfig } from "@/config/site";

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

const NEXT_STEPS_KEYS = ["01", "02", "03"] as const;

function ProjectInquiryContent({
    selectedType,
    initialEmail,
    onSelectType,
}: ProjectInquiryProps) {
    const t = useTranslations("inquiry");
    const tPackages = useTranslations("packages");
    const searchParams = useSearchParams();

    const typeParam = searchParams.get("type")?.toLowerCase();
    const emailParam = searchParams.get("email");

    const resolvedType: WebsiteType =
        selectedType ??
        BUILD_PACKAGES.find((item) => item.slug === typeParam)?.value ??
        "Landing Page";

    const resolvedEmail = initialEmail || emailParam || "";

    const validationSchema = Yup.object().shape({
        service: Yup.string().required(t("validation.serviceRequired")),
        name: Yup.string().required(t("validation.nameRequired")),
        email: Yup.string()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                t("validation.emailInvalid")
            )
            .required(t("validation.emailRequired")),
        phone: Yup.string().optional(),
        message: Yup.string().required(t("validation.messageRequired")),
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

            toast(t("toast.successTitle"), {
                description: t("toast.successDesc"),
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

            toast(t("toast.errorTitle"), {
                description: t("toast.errorDesc", { email: siteConfig.email }),
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="w-full max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl border border-(--color-border) bg-(--color-surface)">
                {/* Subtle top accent line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-(--color-primary) via-(--color-accent) to-transparent opacity-70" />

                <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr]">
                    {/* Left Column: Editorial Context & Process */}
                    <div className="flex flex-col justify-between p-7 md:p-10 bg-(--color-surface-hover)/40">
                        <div>
                            <div className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-widest px-2.5 py-1 rounded-full border border-(--color-border) bg-(--color-surface) text-(--color-primary) mb-5">
                                <HiOutlineSparkles size={13} />
                                <span>{t("badge")}</span>
                            </div>

                            <h3 className="font-serif text-2xl md:text-3xl text-(--color-text) mb-3 leading-snug">
                                {t("heading")}
                            </h3>

                            <p className="text-sm text-(--color-text-muted) leading-relaxed mb-8">
                                {t("description")}
                            </p>

                            {/* Numbered Process Steps */}
                            <div className="space-y-4">
                                <div className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim)">
                                    {t("nextStepsTitle")}
                                </div>
                                <ol className="space-y-3.5">
                                    {NEXT_STEPS_KEYS.map((stepNum) => (
                                        <li key={stepNum} className="flex items-start gap-3">
                                            <span className="font-mono text-[0.7rem] text-(--color-primary) mt-0.5">
                                                {stepNum}
                                            </span>
                                            <div>
                                                <div className="text-xs font-medium text-(--color-text)">
                                                    {t(`steps.${stepNum}.title`)}
                                                </div>
                                                <p className="text-xs text-(--color-text-muted) leading-relaxed mt-0.5">
                                                    {t(`steps.${stepNum}.desc`)}
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
                                        {t("directEmailLabel")}
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
                            {({ isSubmitting, values, setFieldValue }) => {
                                const activePkg = BUILD_PACKAGES.find(
                                    (item) => item.value === values.service
                                );

                                return (
                                    <Form className="flex flex-col gap-5 w-full">
                                        {/* Website Type Selector */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2.5">
                                                <label className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim)">
                                                    {t("selectedPackage")}
                                                </label>
                                                <span className="font-mono text-[0.68rem] text-(--color-primary)">
                                                    {activePkg
                                                        ? tPackages(`${activePkg.slug}.title`)
                                                        : values.service}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                                {BUILD_PACKAGES.map((pkg) => {
                                                    const isSelected = values.service === pkg.value;
                                                    const pkgTitle = tPackages(`${pkg.slug}.title`);
                                                    const pkgSubtitle = tPackages(`${pkg.slug}.subtitle`);

                                                    return (
                                                        <button
                                                            key={pkg.value}
                                                            type="button"
                                                            onClick={() => {
                                                                setFieldValue("service", pkg.value);
                                                                onSelectType?.(pkg.value);
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
                                                                    {pkgTitle}
                                                                </span>
                                                                <span
                                                                    className={`w-1.5 h-1.5 rounded-full transition-opacity ${
                                                                        isSelected
                                                                            ? "bg-(--color-primary) opacity-100"
                                                                            : "bg-(--color-text-dim) opacity-0 group-hover:opacity-40"
                                                                    }`}
                                                                />
                                                            </div>
                                                            <div className="text-[0.68rem] text-(--color-text-muted) line-clamp-2 leading-snug">
                                                                {pkgSubtitle}
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Contact Fields */}
                                        <div className="space-y-4">
                                            <div className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim)">
                                                {t("yourDetails")}
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <InputField name="name" label={t("fields.name")} />
                                                <InputField name="email" label={t("fields.email")} />
                                            </div>

                                            <PhoneField name="phone" label={t("fields.phone")} />

                                            <InputField
                                                as={Textarea}
                                                name="message"
                                                label={t("fields.message")}
                                                className="resize-none h-28"
                                            />
                                        </div>

                                        <div className="pt-1 flex flex-col sm:items-center sm:justify-between gap-3">
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
                                                {isSubmitting ? t("submitting") : t("submit")}
                                            </Button>

                                            <span className="text-[0.7rem] text-(--color-text-dim)">
                                                {t("responseNote")}
                                            </span>
                                        </div>
                                    </Form>
                                );
                            }}
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
                <div className="w-full max-w-5xl mx-auto h-96 rounded-xl border border-(--color-border) bg-(--color-surface) animate-pulse" />
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
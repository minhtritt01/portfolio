import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { MdPerson, MdEmail, MdMessage } from "react-icons/md";
import AnimatedSection from "./AnimatedSection";

const socialLinks = [
  { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/minhtritt01/", label: "LinkedIn" },
  { icon: <FaGithub size={20} />, href: "https://github.com/minhtritt01", label: "GitHub" },
  { icon: <BsFacebook size={20} />, href: "https://www.facebook.com/minhtritt01/", label: "Facebook" },
  { icon: <HiOutlineMail size={20} />, href: "mailto:minhtritt01@gmail.com", label: "Email" },
];

const Contact = () => {
  const { t } = useTranslation();

  const validationSchema = useMemo(
    () =>
      yup.object({
        name: yup.string().required(t("contact.form.errors.nameRequired")),
        email: yup
          .string()
          .email(t("contact.form.errors.emailInvalid"))
          .required(t("contact.form.errors.emailRequired")),
        message: yup.string().required(t("contact.form.errors.messageRequired")),
      }),
    [t]
  );

  const formik = useFormik({
    initialValues: { email: "", name: "", message: "" },
    validationSchema,
    enableReinitialize: true,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://getform.io/f/c2afd619-c657-49a5-b5ad-1f0683d56d51",
        { name: formik.values.name, email: formik.values.email, message: formik.values.message },
        { headers: { Accept: "application/json" } }
      );
      toast.success(t("contact.form.successToast"), {
        position: toast.POSITION.TOP_CENTER,
      });
      formik.resetForm();
    } catch {
      toast.error(t("contact.form.errorToast"), {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const inputClass =
    "w-full p-3 pl-10 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground transition-colors duration-200";
  const errorClass = "text-red-500 dark:text-red-400 text-sm mt-1 ml-1";

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-background dot-grid py-20 text-foreground"
    >
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedSection className="mb-10">
          <h2 className="font-display text-4xl font-bold inline-block text-gradient-theme">
            {t("contact.heading")}
          </h2>
          <div className="h-1 w-16 bg-gradient-theme-r mt-2 rounded-full" />
          <p className="text-muted-foreground mt-4">{t("contact.subheading")}</p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
          {/* Left info */}
          <AnimatedSection
            className="w-full md:w-1/3 flex flex-col gap-4 md:gap-6 max-w-lg mx-auto md:max-w-none"
            delay={0.1}
            y={0}
            margin="-80px"
          >
            <div className="hidden md:block">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t("contact.getInTouch")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("contact.intro")}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              <a href="mailto:minhtritt01@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors min-w-0">
                <HiOutlineMail size={16} className="shrink-0" />
                <span className="text-sm truncate">minhtritt01@gmail.com</span>
              </a>
              <a href="tel:+840834790997" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <HiOutlinePhone size={16} className="shrink-0" />
                <span className="text-sm">(+84) 834 790 997</span>
              </a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-muted border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="flex-1 w-full" delay={0.2} y={0} margin="-80px">
            <form
              onSubmit={onSubmit}
              className="blue-glassmorphism flex flex-col gap-4 p-6 md:p-8 shadow-sm dark:shadow-none max-w-lg mx-auto md:max-w-none"
            >
              <div className="relative">
                <MdPerson size={18} className="absolute left-3 top-3.5 text-muted-foreground" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={t("contact.form.namePlaceholder")}
                  className={inputClass}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className={errorClass}>{formik.errors.name}</p>
                )}
              </div>

              <div className="relative">
                <MdEmail size={18} className="absolute left-3 top-3.5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  className={inputClass}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className={errorClass}>{formik.errors.email}</p>
                )}
              </div>

              <div className="relative">
                <MdMessage size={18} className="absolute left-3 top-3.5 text-muted-foreground" />
                <textarea
                  name="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows="6"
                  className={`${inputClass} resize-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className={errorClass}>{formik.errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!formik.dirty || !formik.isValid}
                className="w-full py-3 px-6 rounded-lg bg-gradient-theme-r text-primary-foreground font-semibold shadow-lg shadow-primary/30 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {t("contact.form.send")}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;

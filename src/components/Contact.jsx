import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { MdPerson, MdEmail, MdMessage } from "react-icons/md";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const socialLinks = [
  { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/minhtritt01/", label: "LinkedIn" },
  { icon: <FaGithub size={20} />, href: "https://github.com/minhtritt01", label: "GitHub" },
  { icon: <BsFacebook size={20} />, href: "https://www.facebook.com/minhtritt01/", label: "Facebook" },
  { icon: <HiOutlineMail size={20} />, href: "mailto:minhtritt01@gmail.com", label: "Email" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const formik = useFormik({
    initialValues: { email: "", name: "", message: "" },
    validationSchema,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://getform.io/f/c2afd619-c657-49a5-b5ad-1f0683d56d51",
        { name: formik.values.name, email: formik.values.email, message: formik.values.message },
        { headers: { Accept: "application/json" } }
      );
      toast.success("Message sent! I'll get back to you soon.", {
        position: toast.POSITION.TOP_CENTER,
      });
      formik.resetForm();
    } catch {
      toast.error("Something went wrong. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const inputClass =
    "w-full p-3 pl-10 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-200";
  const errorClass = "text-red-400 text-sm mt-1 ml-1";

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#060609] dot-grid py-20 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 rounded-full" />
          <p className="text-gray-400 mt-4">Have a project in mind? Let's talk.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
          {/* Left info */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col gap-4 md:gap-6 max-w-lg mx-auto md:max-w-none"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Description — hidden on mobile to save space */}
            <div className="hidden md:block">
              <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just a friendly chat.
              </p>
            </div>

            {/* Contact details — 2-col on mobile, stacked on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              <a href="mailto:minhtritt01@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors min-w-0">
                <HiOutlineMail size={16} className="shrink-0" />
                <span className="text-sm truncate">minhtritt01@gmail.com</span>
              </a>
              <a href="tel:+840834790997" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <HiOutlinePhone size={16} className="shrink-0" />
                <span className="text-sm">(+84) 834 790 997</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-white/5 border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 text-gray-400 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-white/5 border border-gray-700/50 backdrop-blur-sm max-w-lg mx-auto md:max-w-none"
            >
              <div className="relative">
                <MdPerson size={18} className="absolute left-3 top-3.5 text-gray-500" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
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
                <MdEmail size={18} className="absolute left-3 top-3.5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
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
                <MdMessage size={18} className="absolute left-3 top-3.5 text-gray-500" />
                <textarea
                  name="message"
                  placeholder="Your message"
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
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

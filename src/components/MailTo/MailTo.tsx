interface MailToInterface {
  email: string;
  subject?: string;
  body?: string;
  children: React.ReactNode;
}
const MailTo = ({ email, subject, body, children }: MailToInterface) => {
  return (
    <a
      className="mail-to"
      href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
    >
      {children}
    </a>
  );
};
export default MailTo;

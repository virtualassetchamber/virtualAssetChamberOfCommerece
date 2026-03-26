import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NewsletterModalProvider } from "@/context/NewsletterModalContext";
import NewsletterModal from "@/components/NewsLetterModal";

export default function ChamberLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NewsletterModalProvider>
        <Navbar />
        <main className="grow">
          {children}

          <NewsletterModal />
        </main>
        <Footer />
      </NewsletterModalProvider>
    </>
  );
}
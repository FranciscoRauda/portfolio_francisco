import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
 
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="bg-black">{children}</main>
      <Footer />
    </>
  )
}
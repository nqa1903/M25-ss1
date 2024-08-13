import Header from "@/components/Header";
import Company from "./pages/Company";
import Button from "@/components/Button";
import Header1 from "./layouts/Header1";
import Footer from "./layouts/Footer";

export default function page() {
  return (
    <div>
      <Header1></Header1>
      <h1>Welcome Anh</h1>
      <Footer></Footer>
      <Company></Company>
      <Button></Button>
      <Header></Header>
    </div>
  )
}

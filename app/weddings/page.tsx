import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
export default function WeddingsPage() {
  return (
   <PageTransition>

  <>
  
    <Navbar />

    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center">

        <p className="tracking-[0.4em] text-yellow-400 mb-6">
          AUREO WEDDINGS
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-8">
          Cinematic Wedding Experiences
        </h1>

        <p className="max-w-2xl text-neutral-400 text-lg">
          Experiencias digitales premium diseñadas para bodas
          inolvidables con narrativa visual cinematográfica.
        </p>

      </div>

    </main>

  </>

</PageTransition>
  );
}
"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Typography from "@/components/ui/typography";
import { ReactLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import GalleryComponent from "@/components/gallery/page";
import SmallImagesGallery from "@/components/gallery/description";
import { ScrollPage } from "@/components/scroll-page";

// export default function About() {
//   const t = useTranslations("About");

//   return (
//     <>
//       <Header />
//       <ReactLenis
//         root
//         options={{
//           lerp: 0.05,
//         }}
//       >
//         <main className=" flex flex-col gap-y-2 lg:gap-y-10">
//           <section className="relative container mx-auto min-h-screen px-4 flex items-center justify-center text-center mt-[-7rem]">
//             <Typography text="Projetos" color="white" size="xl5" />

//             <div className="hidden lg:block absolute bottom-12 left-0">
//               <ScrollPage sectionLink="#gallery" />
//             </div>
//           </section>

//           <GalleryComponent />
//         </main>
//       </ReactLenis>
//       <Footer page="Contato" route="/contact" />
//     </>
//   );
// }

export default function About() {
  const t = useTranslations("About");

  return (
    <>
      <Header />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <main className="flex flex-col gap-y-6 lg:gap-y-10">
          <section className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center pt-12 min-h-[calc(100vh-80px)]">
            <Typography
              text="Projetos"
              color="white"
              size="xl5"
              className="mt-[-7rem]"
              letterPadding={false}
            />
            <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0">
              <ScrollPage sectionLink="#gallery" />
            </div>
          </section>

          <GalleryComponent />
        </main>
      </ReactLenis>
      <Footer page="Contato" route="/contact" />
    </>
  );
}

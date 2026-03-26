import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { CariDomain , Desain, Harga, HubungiKami} from "@/pages";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative  flex  content-center items-center justify-center pt-32 pb-32">
        <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full text-center ">
              <Typography
                variant="h4"
                color="black"
                className="mb-6 "
              >
                Website  Travel Umroh
              </Typography>
              <Typography
                variant="h1"
                color="black"
                className="font-black text-5xl lg:text-7xl px-8 py-2 w-full leading-loose"
              >
                Bangun Website Travel Umroh:
              </Typography>
                <Typography
                variant="h1"
                color="black"
                className="font-black text-5xl lg:text-7xl px-8 py-2 w-full leading-loose"
              >
                Dirancang Khusus untuk
              </Typography>
              <Typography
                variant="h1"
                color="black"
                className="font-black mb-5 text-5xl lg:text-7xl px-8 py-2 w-full leading-loose"
              >
                Mendapatkan Jamaah     
              </Typography>
              <Typography variant="lead" color="black" className="opacity-80">
                Mulai dari Rp 300.000/bulan atau <br />
                Rp 1.500.000/tahun
              </Typography>
              <CariDomain />

            </div>

          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-t from-blue-50 to-white py-12 px-4">
          <div className="flex items-center justify-center h-full">
              <Typography
                variant="h1"
                color="black"
                className="mx-1 font-black text-5xl lg:text-5xl text-center"
              >
                Temukan Desain 
                <span className="text-blue-600"> Website Umroh </span>  
                Terbaikmu
              </Typography>
            </div>
          <div className="flex flex-col items-center justify-center mt-5 h-full gap-1">
              <Typography
                variant="h5"
                color="black"
                className="text-center"
              >
                Template <span className="text-blue-600 font-bold">Website Travel Umroh</span> Dirancang Khusus sebagai Alat Akuisisi Jamaah:
              </Typography>
              <Typography
                variant="h5"
                color="black"
                className=" text-center"
              >
              Companya Profile sekaligus Katalog Perjalanan
              </Typography>
              <Desain />
              <Harga />

          </div>
      </div>
      <div>
        <HubungiKami />
      </div>
      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section> */}
      {/* <div className="bg-white">
        <Footer />
      </div> */}
    </>
  );
}

export default Home;

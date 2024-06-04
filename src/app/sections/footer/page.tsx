import Container from "@/app/components/container";
import { DoorOpen, Home, icons, Mails, Phone } from "lucide-react";
import React from "react";

const ContactOptions = [
  {
    title: "Our Location",
    info: "4070 tuxedo drive, Victoria, BC, V8X 2L3",
    link: "https://maps.app.goo.gl/cxiiPkJNfwJEYCtw6",
    icon: Home,
  },
  {
    title: "Make a Call",
    info: "(250)-918-5591",
    link: "tel:(250)-918-5591",
    icon: Phone,
  },
  {
    title: "Send are Email",
    info: "info@albcanada.com",
    link: "mailto:someone@example.com",
    icon: Mails,
  },
  {
    title: "Working Hours",
    info: "Everyday 8am - 6pm",
    link: "https://maps.app.goo.gl/cxiiPkJNfwJEYCtw6",
    icon: DoorOpen,
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-secondary">
        <Container className="py-24">
          <h2 className="text-4xl teko text-primary">Get in Touch</h2>
          <h1 className="text-5xl text-white font-semibold teko mt-4">
            Need Roofing Serivces?
          </h1>

          <div className="flex gap-8 justify-between flex-wrap mt-12">
            {ContactOptions.map((contact, i) => (
              <a
                key={i}
                className="flex gap-4 flex-1 min-w-[300px]"
                href={contact.link}
                target="_blank"
              >
                <contact.icon className="box-content	text-secondary min-w-8 min-h-8 p-5 bg-primary" />
                <div className="text-white">
                  <h1 className="teko text-2xl">{contact.title}</h1>
                  <p className="serrat">{contact.info}</p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </div>
      <div className="bg-[#2E2523]">
        <Container>
          <p className="text-white serrat p-7 text-center">
            © Copyright 2024 ALB Canada Construction
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;

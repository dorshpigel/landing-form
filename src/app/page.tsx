"use client";
import Form from "@/components/Form";
import AppLayout from "@/components/AppLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "./layout";

export default function HomePage() {
  return (
    <RootLayout>
      <AppLayout>
        <h1 className="font-sans text-3xl font-bold mb-6 text-center">Get in Touch</h1>
        <Form onSuccess={() => console.log("Success callback fired")} />
        <ToastContainer
          theme="dark"
          pauseOnHover={true}
          position="bottom-left"
        />
      </AppLayout>
    </RootLayout>
  );
}

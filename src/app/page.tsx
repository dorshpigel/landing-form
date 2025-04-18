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
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
        <Form onSuccess={() => console.log("Success callback fired")} />
        <ToastContainer position="top-center" />
      </AppLayout>
    </RootLayout>
  );
}

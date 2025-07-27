"use client";

import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Mail className="h-6 w-6" />
          Contact Information
        </h1>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="text-sm"
        >
          ← Go Back
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left - Contact Info */}
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
            <Mail className="text-blue-600 mt-1" />
            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-blue-600">anup.ingale@viit.ac.in</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg flex items-start gap-3">
            <Phone className="text-green-600 mt-1" />
            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-green-600">9325383604</p>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg flex items-start gap-3">
            <MapPin className="text-purple-600 mt-1" />
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-purple-600">
                Vishwakarma Institute of Information Technology, Pune, India
              </p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="space-y-4 bg-white p-6 border rounded-lg shadow">
          <div>
            <label className="block font-semibold">Name</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input type="email" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold">Message</label>
            <textarea className="w-full border p-2 rounded" rows={4} />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

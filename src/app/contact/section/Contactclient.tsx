"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Check, AlertCircle, Phone, MapPin, Clock, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  ContactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import type { Restaurant } from "@/types/restaurant";

interface OpeningHoursGroup {
  daysDisplay: string;
  timings: string;
  isOpen: boolean;
}

interface ContactClientProps {
  restaurant: Restaurant;
  openingHoursGroups: OpeningHoursGroup[];
}

const ContactClient: React.FC<ContactClientProps> = ({
  restaurant,
  openingHoursGroups,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const latitude = restaurant?.address?.coords?.[0];
  const longitude = restaurant?.address?.coords?.[1];
  const address = `${restaurant?.name} ${restaurant?.address?.firstLine} ${restaurant?.address?.city} ${restaurant?.address.postCode}`;
  const placeQuery = `${restaurant?.name} ${restaurant?.address?.firstLine} ${restaurant?.address?.city} ${restaurant?.address.postCode}`;

  // Clickable Link - uses coords if available, otherwise uses address
  const mapLink =
    latitude && longitude
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery)}`
      : `https://www.google.com/maps?q=${latitude},${longitude}`;

  const mapEmbedUrl =
    latitude && longitude
      ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`
      : `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      first: "",
      last: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const bookTableMutation = useMutation({
    mutationFn: async (values: ContactFormData) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      setModalType("success");
      setShowModal(true);
    },
    onError: () => {
      setModalType("error");
      setShowModal(true);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    bookTableMutation.mutate(data);
  };

  return (
    <section className="relative h-full w-full bg-[#040507] py-8 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-12 px-4 md:px-20">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <span className="font-playfair text-sm tracking-[3px] text-[#B68F62] uppercase md:text-base">
            Get In Touch
          </span>
          <h1 className="font-alagambe text-3xl font-[400] text-[#E9DDC3] uppercase md:text-5xl">
            Contact Us
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            <div className="space-y-6">
              <h2 className="font-alagambe text-xl font-[400] text-[#E9DDC3] uppercase md:text-2xl">
                Visit Our Restaurant
              </h2>
              <p className="font-playfair max-w-[500px] text-sm font-[400] text-[#C1B6A6] md:text-base">
                {restaurant?.description}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-4 rounded-lg border border-[#B68F62]/30 bg-[#0E0C07] p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B68F62]">
                  <Phone className="h-5 w-5 text-[#040507]" />
                </div>
                <div>
                  <h3 className="font-playfair text-sm font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                    Phone
                  </h3>
                  <div className="flex flex-col gap-1">
                    <Link
                      href={`tel:${restaurant?.contactNumber}`}
                      className="font-playfair text-base text-[#E9DDC3] transition-colors hover:text-[#B68F62]"
                    >
                      {restaurant?.contactNumber}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 rounded-lg border border-[#B68F62]/30 bg-[#0E0C07] p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B68F62]">
                  <Mail className="h-5 w-5 text-[#040507]" />
                </div>
                <div>
                  <h3 className="font-playfair text-sm font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                    Email
                  </h3>
                  <div className="flex flex-col gap-1">
                    <Link
                      className="font-playfair text-base text-[#E9DDC3] transition-colors hover:text-[#B68F62]"
                      href={`mailto:${restaurant?.email}`}
                    >
                      {restaurant?.email ?? ""}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-lg border border-[#B68F62]/30 bg-[#0E0C07] p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B68F62]">
                  <MapPin className="h-5 w-5 text-[#040507]" />
                </div>
                <div>
                  <h3 className="font-playfair text-sm font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                    Location
                  </h3>
                  <Link
                    target="_blank"
                    href={mapLink ?? "https://share.google/qyjN4HvpzX2U6iCp1"}
                    className="font-playfair text-base text-[#E9DDC3] transition-colors hover:text-[#B68F62]"
                  >
                    {restaurant?.address.firstLine},
                    {restaurant?.address.secondLine}
                    <br />
                    {restaurant?.address.city} {restaurant?.address.postCode},
                    {restaurant?.address.countryCode}
                  </Link>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 rounded-lg border border-[#B68F62]/30 bg-[#0E0C07] p-4 shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B68F62]">
                  <Clock className="h-5 w-5 text-[#040507]" />
                </div>
                <div className="flex w-full flex-col gap-3">
                  <h3 className="font-playfair text-sm font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                    Opening Hours
                  </h3>
                  <div className="h-[1px] w-full bg-[#B68F62]/30" />
                  <div className="flex flex-col gap-2">
                    {openingHoursGroups.map((group, index) => (
                      <div
                        key={index}
                        className="flex w-full flex-row justify-between"
                      >
                        <span className="font-playfair text-sm font-[400] text-[#E9DDC3]">
                          {group.daysDisplay}
                        </span>
                        <span className="font-playfair text-sm font-[400] text-[#E9DDC3]">
                          {group.isOpen ? group.timings : "Closed"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="rounded-lg border border-[#B68F62]/30 bg-[#0E0C07] p-6 shadow-lg md:p-8">
              <div className="mb-6">
                <h2 className="font-alagambe text-xl font-[400] text-[#E9DDC3] uppercase md:text-2xl">
                  Send us a Message
                </h2>
                <p className="font-playfair mt-2 text-sm font-[400] text-[#C1B6A6]">
                  We&apos;d love to hear from you. Send us a message and
                  we&apos;ll respond as soon as possible.
                </p>
              </div>

              {isMounted ? (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="first"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-none border-0 border-b-2 border-b-[#B68F62]/50 bg-transparent px-0 text-[#E9DDC3] placeholder:text-[#C1B6A6]/60 focus-visible:border-b-[#C9AB81] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="last"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Last Name"
                                {...field}
                                className="h-12 rounded-none border-0 border-b-2 border-b-[#B68F62]/50 bg-transparent px-0 text-[#E9DDC3] placeholder:text-[#C1B6A6]/60 focus-visible:border-b-[#C9AB81] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      /> 
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Email Address"
                              type="email"
                              {...field}
                              className="h-12 rounded-none border-0 border-b-2 border-b-[#B68F62]/50 bg-transparent px-0 text-[#E9DDC3] placeholder:text-[#C1B6A6]/60 focus-visible:border-b-[#C9AB81] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Phone Number"
                              type="tel"
                              {...field}
                              className="h-12 rounded-none border-0 border-b-2 border-b-[#B68F62]/50 bg-transparent px-0 text-[#E9DDC3] placeholder:text-[#C1B6A6]/60 focus-visible:border-b-[#C9AB81] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Your Message"
                              {...field}
                              className="min-h-[120px] resize-none rounded-none border-0 border-b-2 border-b-[#B68F62]/50 bg-transparent px-0 text-[#E9DDC3] placeholder:text-[#C1B6A6]/60 focus-visible:border-b-[#C9AB81] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={bookTableMutation.isPending}
                        className="font-alagambe w-full rounded-none bg-[#B68F62] px-6 py-6 text-sm font-[400] tracking-[2px] text-[#040507] uppercase transition-all duration-150 hover:bg-[#C9AB81] active:scale-95 disabled:opacity-50"
                      >
                        {bookTableMutation.isPending
                          ? "Sending Message..."
                          : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </Form>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="h-12 animate-pulse rounded bg-[#B68F62]/10" />
                    <div className="h-12 animate-pulse rounded bg-[#B68F62]/10" />
                  </div>
                  <div className="h-12 animate-pulse rounded bg-[#B68F62]/10" />
                  <div className="h-12 animate-pulse rounded bg-[#B68F62]/10" />
                  <div className="h-[120px] animate-pulse rounded bg-[#B68F62]/10" />
                  <div className="h-12 animate-pulse rounded bg-[#B68F62]/10" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <div className="mb-6 text-center">
            <span className="font-playfair text-sm tracking-[3px] text-[#B68F62] uppercase md:text-base">
              Visit Us
            </span>
            <h2 className="font-alagambe mt-2 text-2xl font-[400] text-[#E9DDC3] uppercase md:text-3xl">
              Find Our Location
            </h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#B68F62]/30 shadow-lg">
            <iframe
              src={mapEmbedUrl}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full"
            />
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      {isMounted && showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#040507]/80 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-lg border border-[#B68F62]/30 bg-[#0E0C07] p-6 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              {modalType === "success" ? (
                <>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#B68F62]/20">
                    <Check className="h-8 w-8 text-[#C9AB81]" />
                  </div>
                  <h3 className="font-alagambe mb-2 text-xl font-[400] text-[#E9DDC3] uppercase">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-playfair mb-6 font-[400] text-[#C1B6A6]">
                    Thank you for contacting us. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        setShowModal(false);
                        form.reset();
                      }}
                      className="font-alagambe rounded-none bg-[#B68F62] font-[400] tracking-[2px] text-[#040507] uppercase hover:bg-[#C9AB81]"
                    >
                      Perfect!
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowModal(false)}
                      className="font-alagambe rounded-none border-[#B68F62] font-[400] tracking-[2px] text-[#000] uppercase hover:bg-[#fff5f5]"
                    >
                      Close
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                    <AlertCircle className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="font-alagambe mb-2 text-xl font-[400] text-[#E9DDC3] uppercase">
                    Something Went Wrong
                  </h3>
                  <p className="font-playfair mb-6 font-[400] text-[#C1B6A6]">
                    We couldn&apos;t send your message. Please try again or call
                    us directly.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setShowModal(false)}
                      className="font-alagambe rounded-none bg-red-600 font-[400] tracking-[2px] text-white uppercase hover:bg-red-700"
                    >
                      Try Again
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowModal(false)}
                      className="font-alagambe rounded-none border-[#B68F62] font-[400] tracking-[2px] text-[#E9DDC3] uppercase hover:bg-[#B68F62]/10"
                    >
                      Close
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactClient;

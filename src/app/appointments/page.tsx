import AppointmentForm from "@/components/appointment-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function AppointmentsPage() {
    return (
        <>
        <div className="bg-primary/5">
            <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Book an Appointment</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Schedule a confidential consultation with our legal experts. Please fill out the form below or contact us directly.
            </p>
            </div>
        </div>

        <div className="py-16 lg:py-24">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid gap-12 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <h2 className="font-headline text-2xl font-bold text-primary">Contact Information</h2>
                        <p className="mt-2 text-muted-foreground">
                            We are available to assist you. You can reach us via phone, email, or by visiting our chambers.
                        </p>
                        <div className="mt-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <a href="tel:01605013008" className="text-muted-foreground hover:text-primary transition-colors">01605013008</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a href="mailto:advpiyushjain1995@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">advpiyushjain1995@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Our Chambers</h3>
                                    <p className="text-muted-foreground">
                                        Punjab & Haryana High Court, Chandigarh, India
                                        <br />
                                        District Courts, Sector 43, Chandigarh, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                       <AppointmentForm />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

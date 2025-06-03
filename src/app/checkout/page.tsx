"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CreditCard, Lock, MapPin, User } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<CheckoutForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
    },
  });

  const orderSummary = {
    items: [
      { name: "Premium Leather Handbag", price: 299, quantity: 1 },
      { name: "Executive Wallet", price: 89, quantity: 2 }
    ],
    subtotal: 477,
    shipping: 15,
    tax: 38.16,
    total: 530.16
  };

  const onSubmit = async (data: CheckoutForm) => {
    setIsLoading(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Order submitted:", data);
    setIsLoading(false);
    // Here you would typically redirect to a success page
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/cart" className="text-amber-700 hover:text-amber-900">
                Cart
              </Link>
              <span className="text-amber-400">→</span>
              <span className="text-amber-950 font-semibold">Checkout</span>
            </div>

            <h1 className="text-4xl font-bold text-amber-950 mb-8">Checkout</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Checkout Form */}
              <div className="space-y-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Shipping Information */}
                    <Card className="border-amber-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-amber-950">
                          <MapPin className="h-5 w-5" />
                          Shipping Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john.doe@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main Street" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input placeholder="New York" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                  <Input placeholder="NY" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="zipCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>ZIP Code</FormLabel>
                                <FormControl>
                                  <Input placeholder="10001" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Payment Information */}
                    <Card className="border-amber-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-amber-950">
                          <CreditCard className="h-5 w-5" />
                          Payment Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="cardName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name on Card</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <Input placeholder="1234 5678 9012 3456" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="expiryDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expiry Date</FormLabel>
                                <FormControl>
                                  <Input placeholder="MM/YY" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="cvv"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CVV</FormLabel>
                                <FormControl>
                                  <Input placeholder="123" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
                          <Lock className="h-4 w-4" />
                          Your payment information is secure and encrypted
                        </div>
                      </CardContent>
                    </Card>

                    <Button 
                      type="submit" 
                      className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : `Complete Order - $${orderSummary.total.toFixed(2)}`}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="border-amber-200 sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-amber-950">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {orderSummary.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <div>
                          <p className="font-medium text-amber-950">{item.name}</p>
                          <p className="text-sm text-amber-700">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-medium text-amber-950">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                    
                    <div className="border-t border-amber-200 pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-amber-700">Subtotal</span>
                        <span className="text-amber-950">${orderSummary.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-700">Shipping</span>
                        <span className="text-amber-950">${orderSummary.shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-700">Tax</span>
                        <span className="text-amber-950">${orderSummary.tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-amber-200 pt-2">
                        <div className="flex justify-between text-lg font-semibold">
                          <span className="text-amber-950">Total</span>
                          <span className="text-amber-950">${orderSummary.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
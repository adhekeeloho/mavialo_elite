"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Premium Leather Handbag",
      price: 299,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      color: "Brown"
    },
    {
      id: 2,
      name: "Executive Wallet",
      price: 89,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
      color: "Black"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-amber-950 mb-8">Shopping Cart</h1>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="mx-auto h-24 w-24 text-amber-300 mb-4" />
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">Your cart is empty</h2>
                <p className="text-amber-700 mb-8">Start shopping to add items to your cart</p>
                <Link href="/">
                  <Button className="bg-amber-900 hover:bg-amber-800">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="border-amber-200">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full md:w-32 h-32 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-amber-950 text-lg">{item.name}</h3>
                                <Badge variant="outline" className="mt-1">
                                  {item.color}
                                </Badge>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(item.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="font-medium text-amber-950">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-amber-950 text-lg">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <p className="text-sm text-amber-700">
                                  ${item.price.toFixed(2)} each
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="border-amber-200 sticky top-24">
                    <CardHeader>
                      <CardTitle className="text-amber-950">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-amber-700">Subtotal</span>
                        <span className="font-medium text-amber-950">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-700">Shipping</span>
                        <span className="font-medium text-amber-950">${shipping.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-amber-200 pt-4">
                        <div className="flex justify-between text-lg font-semibold">
                          <span className="text-amber-950">Total</span>
                          <span className="text-amber-950">${total.toFixed(2)}</span>
                        </div>
                      </div>
                      <Link href="/checkout" className="block">
                        <Button className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3">
                          Proceed to Checkout
                        </Button>
                      </Link>
                      <Link href="/" className="block">
                        <Button variant="outline" className="w-full border-amber-300 text-amber-900">
                          Continue Shopping
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
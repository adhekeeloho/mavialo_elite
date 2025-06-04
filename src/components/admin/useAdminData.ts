 // hooks/use-admin-data.ts
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Product, Order, MainPageSettings } from "./interface"; 
import supabase from "../../config/supabase"; 

export const useAdminData = () => {
  const { toast } = useToast();

  const [productForm, setProductForm] = useState({
    title: "", 
    price: "",
    rating: "", 
    review: "", 
    description: "",
    tag: "", 
   
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null);

  
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      customerName: "John Doe",
      email: "john@example.com",
      phone: "+1 234-567-8900",
      address: "123 Main St, New York, NY 10001",
      items: [
        {
          productId: "1",
          productName: "Executive Briefcase",
          quantity: 1,
          price: "$449",
        },
      ],
      total: "$449",
      status: "pending",
      orderDate: "2024-01-15",
    },
    {
      id: 4,
      customerName: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 234-567-8901",
      address: "456 Oak Ave, Los Angeles, CA 90210",
      items: [
        {
          productId: "1",
          productName: "Executive Briefcase",
          quantity: 2,
          price: "$449",
        },
      ],
      total: "$898",
      status: "completed",
      orderDate: "2024-01-12",
    },
  ]);

  const [mainPageSettings, setMainPageSettings] = useState<MainPageSettings>({
    heroTitle: "Handcrafted Leather Goods",
    heroSubtitle:
      "Premium quality leather products made with traditional craftsmanship",
    featuredProductIds: ["1"],
    announcement: "Free shipping on orders over $200!",
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setImagePreview("");
    }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let imageUrl: string | null = null;

    // 1. Image Upload to Supabase Storage
    if (selectedImage) { // Check if selectedImage (your state variable) exists
      const fileExt = selectedImage.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const filePath = `product-images/${fileName}`;

      // FIX: Use selectedImage (your state variable) instead of selectedFile
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, selectedImage, { // <--- Changed selectedFile to selectedImage
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Supabase Storage Upload Error:", uploadError);
        setError(`Image upload failed: ${uploadError.message}`);
        setLoading(false);
        toast({
          title: "Image Upload Failed",
          description: `Error: ${uploadError.message}`,
          variant: "destructive",
        });
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("product-images")
        .getPublicUrl(filePath);

      imageUrl = publicUrlData.publicUrl;
      console.log("Uploaded image URL:", imageUrl);
    } else {
      setError("Please select an image to upload.");
      setLoading(false);
      toast({
        title: "Missing Image",
        description: "Please select an image for the product.",
        variant: "destructive",
      });
      return;
    }

    // 2. Insert Product Data into Supabase Database
    try {
      const newProductData = {
        title: productForm.title,
        price: parseFloat(productForm.price), 
        rating: parseFloat(productForm.rating), 
        review: productForm.review,
        description: productForm.description,
        tag: productForm.tag, 
        image_url: imageUrl, 
      };

      const { data, error: dbError } = await supabase
        .from("products") // Your database table name
        .insert([newProductData])
        .select(); // Select the inserted row to get its ID etc.

      if (dbError) {
        console.error("Supabase DB Insert Error:", dbError);
        setError(`Failed to add product to database: ${dbError.message}`);
        toast({
          title: "Product Add Failed",
          description: `Error: ${dbError.message}`,
          variant: "destructive",
        });
      } else {
        console.log("Product added:", data);
        toast({
          title: "Product Added",
          description: "Product has been successfully added to the catalog.",
        });

        // Reset form and image preview
        setProductForm({
          title: "",
          price: "",
          rating: "",
          review: "",
          description: "",
          tag: "",
        });
        setImagePreview("");
        setSelectedImage(null);

        // If you're displaying products on the admin panel, you'd re-fetch them here
        // or add the new product to the local state if `products` is managed here
        // setProducts((prev) => [...prev, data[0] as Product]);
      }
    } catch (err: any) {
      console.error("An unexpected error occurred:", err);
      setError(`An unexpected error occurred: ${err.message}`);
      toast({
        title: "Unexpected Error",
        description: `Error: ${err.message}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Keep other functions if they are used elsewhere
  const handleDeleteProduct = (id: number) => {
    // This function would also need to be refactored to delete from Supabase
    // For example:
    // const { error } = await supabase.from('products').delete().eq('id', id);
    // if (error) console.error(error);
    // else setProducts((prev) => prev.filter((p) => p.id !== id));
    toast({
      title: "Product Deleted",
      description: "Product has been removed from the catalog. (Local delete only)",
    });
  };

  const updateOrderStatus = (orderId: number, newStatus: Order["status"]) => {
    // This would also need to be refactored to update Supabase
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    toast({
      title: "Order Updated",
      description: `Order status updated to ${newStatus}. (Local update only)`,
    });
  };

  const handleMainPageSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would also need to be refactored to update Supabase
    toast({
      title: "Settings Updated",
      description: "Main page settings have been updated. (Local update only)",
    });
  };

  const getStatusBadgeVariant = (status: Order["status"]) => {
    switch (status) {
      case "completed":
        return "default";
      case "processing":
        return "secondary";
      case "pending":
        return "outline";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  const handleImageUploadToGallery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      toast({
        title: "Images Uploaded",
        description: `${files.length} image(s) uploaded successfully.`,
      });
      // In a real application, you would handle the actual image upload to a server here.
      // For this example, we're just showing the toast.
    }
  };

  const pendingOrders = orders.filter(
    (order) => order.status === "pending" || order.status === "processing"
  );
  const completedOrders = orders.filter(
    (order) => order.status === "completed"
  );

  return {
    // products, // Removed unless you manage fetching products here
    // setProducts, // Removed
    productForm,
    setProductForm,
    selectedImage,
    setSelectedImage,
    imagePreview,
    setImagePreview,
    orders,
    setOrders,
    mainPageSettings,
    setMainPageSettings,
    handleImageUpload,
    handleProductSubmit,
    handleDeleteProduct,
    updateOrderStatus,
    handleMainPageSettingsSubmit,
    getStatusBadgeVariant,
    handleImageUploadToGallery,
    pendingOrders,
    completedOrders,
    loading, // Expose loading state
    error, // Expose error state
  };
};

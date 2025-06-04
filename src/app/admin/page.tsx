"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab";
import AdminHeader from "@/components/admin/adminHeader";
import PendingOrdersTable from "@/components/admin/pendingOrderTable";
import CompletedOrdersTable from "@/components/admin/completeOrderTable";
import ProductManagementTable from "@/components/admin/productManagementTable";
import AddProductForm from "@/components/admin/addProductForm";
import ImageGallery from "@/components/admin/imageGallery";
import MainPageSettingsForm from "@/components/admin/mainPageSettingsForm";
import { useAdminData } from "@/components/admin/useAdminData";
import { useEffect, useState } from "react";
import supabase from "@/config/supabase";
import { Product } from "@/components/admin/interface";

const AdminDashboard = () => {
  const {
    //products,
    productForm,
    setProductForm,
    imagePreview,
    orders,
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
    loading,
  } = useAdminData();

  const [productList, setProductList] = useState<Product[]>([]);
const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select();
      if (error) console.error(error);
      else setProductList(data as Product[]);
    };
    fetchProducts();
  }, []);
  
  console.log(productList.length > 0 ? productList : "No products found");

  console.log(productList, "data")
  const filteredProducts = productList.filter((product) => {
    const productName = product.title?.toLowerCase() || "";
    const productTag = product.tag?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();
    const filter = filterTerm.toLowerCase();
    return (
      (filter === "" || productTag === filter) &&
      (search === "" || productName.includes(search))
    );
  });
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="container mx-auto px-6 py-8">
        <AdminHeader />

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-amber-50">
            <TabsTrigger value="orders" className="bg-stone-50">Orders</TabsTrigger>
            <TabsTrigger value="completed" className="bg-stone-50">Completed</TabsTrigger>
            <TabsTrigger value="products" className="bg-stone-50">Products</TabsTrigger>
            <TabsTrigger value="add-product" className="bg-stone-50">Add Product</TabsTrigger>
            <TabsTrigger value="images" className="bg-stone-50">Images</TabsTrigger>
            <TabsTrigger value="main-page" className="bg-stone-50">Main Page</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <PendingOrdersTable
              pendingOrders={pendingOrders}
              updateOrderStatus={updateOrderStatus}
              getStatusBadgeVariant={getStatusBadgeVariant}
            />
          </TabsContent>

          <TabsContent value="completed">
            <CompletedOrdersTable completedOrders={completedOrders} />
          </TabsContent>

          <TabsContent value="products">
            <ProductManagementTable
              products={filteredProducts}
              handleDeleteProduct={handleDeleteProduct}
            />
          </TabsContent>

          <TabsContent value="add-product">
            <AddProductForm
              productForm={productForm}
              setProductForm={setProductForm}
              handleProductSubmit={handleProductSubmit}
              handleImageUpload={handleImageUpload}
              imagePreview={imagePreview}
              loading={loading}
            />
          </TabsContent>

          <TabsContent value="images">
            <ImageGallery
              handleImageUploadToGallery={handleImageUploadToGallery}
            />
          </TabsContent>

          <TabsContent value="main-page">
            <MainPageSettingsForm
              mainPageSettings={mainPageSettings}
              setMainPageSettings={setMainPageSettings}
              handleMainPageSettingsSubmit={handleMainPageSettingsSubmit}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
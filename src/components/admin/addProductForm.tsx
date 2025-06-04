// components/AddProductForm.tsx (or wherever it's located)
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Assuming Product interface is correctly imported or defined locally
// import { Product } from "./interface"; // Or adjust path as needed

// Define the form state interface specifically for this form
interface ProductFormState {
  title: string; // Changed from 'name'
  price: string; // Still string for input, will convert to number on submit
  rating: string; // Added for 'rating'
  review: string; // Corresponds to 'review' text in DB
  description: string;
  // image will be handled by selectedFile, not directly in form state
  // category and features are removed to match DB columns
  tag: string; // Changed from 'badge'
}

interface AddProductFormProps {
  productForm: ProductFormState; // Use the specific form state interface
  setProductForm: React.Dispatch<React.SetStateAction<ProductFormState>>;
  handleProductSubmit: (e: React.FormEvent) => void;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string;
  loading: boolean; // Add loading prop to disable button
}

const AddProductForm: React.FC<AddProductFormProps> = ({
  productForm,
  setProductForm,
  handleProductSubmit,
  handleImageUpload,
  imagePreview,
  loading, // Destructure loading prop
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleProductSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Product Title</Label> {/* Changed from Product Name */}
                <Input
                  id="title"
                  value={productForm.title}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      title: e.target.value, // Changed from 'name'
                    }))
                  }
                  placeholder="Executive Briefcase"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number" // Set type to number for price
                    value={productForm.price}
                    onChange={(e) =>
                      setProductForm((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                    placeholder="449" // Removed '$' as it's a number
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="rating">Rating (1-5)</Label> {/* New input for rating */}
                  <Input
                    id="rating"
                    type="number" // Rating should be a number
                    value={productForm.rating}
                    onChange={(e) =>
                      setProductForm((prev) => ({
                        ...prev,
                        rating: e.target.value,
                      }))
                    }
                    min="1"
                    max="5"
                    step="0.1" // Allow decimal ratings if needed, adjust if integer only
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="review">Review Count (e.g., "12 reviews")</Label> {/* Clarified review input */}
                <Input
                  id="review"
                  value={productForm.review}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      review: e.target.value,
                    }))
                  }
                  placeholder="599 reviews" // Example placeholder
                />
              </div>

              <div>
                <Label htmlFor="tag">Tag</Label> {/* Changed from 'badge' */}
                <Input
                  id="tag"
                  value={productForm.tag} // Changed from 'badge'
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      tag: e.target.value, // Changed from 'badge'
                    }))
                  }
                  placeholder="bestseller, new, limited"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={productForm.description}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Product description..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* Removed Category and Features as they are not in your current DB schema */}
              {/* If you add them to your DB, you can re-add inputs here */}

              <div>
                <Label htmlFor="image">Product Image</Label>
                <div className="mt-2">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mb-4"
                  />
                  {imagePreview && (
                    <div className="mt-4">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-md border"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-900 hover:bg-amber-800"
            disabled={loading} // Disable button when loading/submitting
          >
            {loading ? "Adding Product..." : "Add Product"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddProductForm;
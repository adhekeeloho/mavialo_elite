import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Image } from "lucide-react";

interface ImageGalleryProps {
  handleImageUploadToGallery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  handleImageUploadToGallery,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image className="h-5 w-5" />
          Image Gallery
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center">
          <Upload className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-amber-950 mb-2">
            Upload Images
          </h3>
          <p className="text-amber-800 mb-4">
            Drag and drop images here or click to browse
          </p>
          <Input
            type="file"
            accept="image/*"
            multiple
            className="max-w-xs mx-auto"
            onChange={handleImageUploadToGallery}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
          ].map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-32 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white"
                >
                  Use Image
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageGallery;
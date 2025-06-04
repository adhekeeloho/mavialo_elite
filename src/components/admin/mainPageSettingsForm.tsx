import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";
import { MainPageSettings } from "./interface";

interface MainPageSettingsFormProps {
  mainPageSettings: MainPageSettings;
  setMainPageSettings: React.Dispatch<React.SetStateAction<MainPageSettings>>;
  handleMainPageSettingsSubmit: (e: React.FormEvent) => void;
}

const MainPageSettingsForm: React.FC<MainPageSettingsFormProps> = ({
  mainPageSettings,
  setMainPageSettings,
  handleMainPageSettingsSubmit,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="h-5 w-5" />
          Main Page Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleMainPageSettingsSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="heroTitle">Hero Section Title</Label>
                <Input
                  id="heroTitle"
                  value={mainPageSettings.heroTitle}
                  onChange={(e) =>
                    setMainPageSettings((prev) => ({
                      ...prev,
                      heroTitle: e.target.value,
                    }))
                  }
                  placeholder="Main headline for your website"
                />
              </div>

              <div>
                <Label htmlFor="heroSubtitle">Hero Section Subtitle</Label>
                <Textarea
                  id="heroSubtitle"
                  value={mainPageSettings.heroSubtitle}
                  onChange={(e) =>
                    setMainPageSettings((prev) => ({
                      ...prev,
                      heroSubtitle: e.target.value,
                    }))
                  }
                  placeholder="Describe your brand or main value proposition"
                  className="min-h-[80px]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="announcement">Announcement Banner</Label>
                <Input
                  id="announcement"
                  value={mainPageSettings.announcement}
                  onChange={(e) =>
                    setMainPageSettings((prev) => ({
                      ...prev,
                      announcement: e.target.value,
                    }))
                  }
                  placeholder="Special offers, shipping info, etc."
                />
              </div>

              <div>
                <Label htmlFor="featuredProducts">
                  Featured Product IDs (comma separated)
                </Label>
                <Input
                  id="featuredProducts"
                  value={mainPageSettings.featuredProductIds.join(", ")}
                  onChange={(e) =>
                    setMainPageSettings((prev) => ({
                      ...prev,
                      featuredProductIds: e.target.value
                        .split(",")
                        .map((id) => id.trim()),
                    }))
                  }
                  placeholder="1, 2, 3"
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-900 hover:bg-amber-800"
          >
            Update Main Page Settings
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MainPageSettingsForm;
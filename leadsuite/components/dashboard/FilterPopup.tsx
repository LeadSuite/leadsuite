
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Filter, Check, X } from "lucide-react";

interface FilterPopupProps {
  type: 'location' | 'intent';
  onApplyFilter: (value: string) => void;
}

export function FilterPopup({ type, onApplyFilter }: FilterPopupProps) {
  const [locationValue, setLocationValue] = useState("");
  const [intentValue, setIntentValue] = useState("");
  
  const handleApply = () => {
    if (type === 'location') {
      onApplyFilter(locationValue);
    } else {
      onApplyFilter(intentValue);
    }
  };
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={16} /> {type === 'location' ? 'Location' : 'Intent'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-white shadow-md border border-gray-200 rounded-md">
        <div className="space-y-4">
          <h3 className="text-md font-medium">Filter by {type === 'location' ? 'Location' : 'Intent'}</h3>
          
          {type === 'location' ? (
            <div className="space-y-2">
              <Label>Enter location</Label>
              <Input 
                placeholder="City, State" 
                value={locationValue} 
                onChange={(e) => setLocationValue(e.target.value)} 
              />
              <p className="text-sm text-gray-500">Enter a city or state to filter contacts</p>
            </div>
          ) : (
            <div className="space-y-4">
              <RadioGroup value={intentValue} onValueChange={setIntentValue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="High" id="high" />
                  <Label htmlFor="high">High</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Medium" id="medium" />
                  <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Fair" id="fair" />
                  <Label htmlFor="fair">Fair</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NA" id="na" />
                  <Label htmlFor="na">N/A</Label>
                </div>
              </RadioGroup>
            </div>
          )}
          
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => {
              if (type === 'location') {
                setLocationValue("");
              } else {
                setIntentValue("");
              }
            }}>
              <X size={16} className="mr-1" /> Clear
            </Button>
            <Button 
              size="sm"
              className="bg-leadsuite-blue hover:bg-leadsuite-blue/90 text-white"
              onClick={handleApply}
            >
              <Check size={16} className="mr-1" /> Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

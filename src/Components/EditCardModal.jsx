import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";

const EditCardModal = ({ isOpen, onClose, onSave, card }) => {
  const [editedCard, setEditedCard] = useState(card);

  useEffect(() => {
    setEditedCard(card);
  }, [card]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleProgressChange = (value) => {
    setEditedCard((prev) => ({ ...prev, progress: value[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedCard);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Card</DialogTitle>
          <Button
            className="absolute right-4 top-4"
            variant="ghost"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="title" className="text-right">
                Title
              </label>
              <Input
                id="title"
                name="title"
                value={editedCard.title}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right">
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                value={editedCard.description}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="progress" className="text-right">
                Progress
              </label>
              <div className="col-span-3">
                <Slider
                  id="progress"
                  min={0}
                  max={10}
                  step={1}
                  value={[editedCard.progress]}
                  onValueChange={handleProgressChange}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditCardModal;

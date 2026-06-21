'use client'
import React, { useState, useRef } from "react";
import { Input, Select, ListBox, TextArea, Button } from "@heroui/react";
import Image from "next/image";
import { toast } from "react-toastify";

const genresList = [
  { label: "Fiction", value: "fiction" },
  { label: "Mystery", value: "mystery" },
  { label: "Sci-Fi", value: "sci-fi" },
  { label: "Romance", value: "romance" },
  { label: "Historical", value: "historical" },
  { label: "Non-Fiction", value: "non-fiction" },
  { label: "Fantasy", value: "fantasy" },
  { label: "Horror", value: "horror" }
];

export default function AddEbookForm() {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    price: "",
    description: ""
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenreSelection = (keys) => {
    const selectedValue = keys;
    setFormData((prev) => ({ ...prev, genre: selectedValue || "" }));
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      toast.error("Please upload a book cover image.",{position:'top-center',theme:'dark'});
      return;
    }

    setSubmitting(true);
    setUploadingImage(true);

    try {
      const imgFormData = new FormData();
      imgFormData.append("image", imageFile);

      
      const imgbbApiKey = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API ; 
      
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
        method: "POST",
        body: imgFormData
      });

      if (!response.ok) {
        throw new Error("imgBB upload failed");
      }

      const imgData = await response.json();
      const uploadedImageUrl = imgData.data.url; 

      setUploadingImage(false);

      const payload = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        coverImage: uploadedImageUrl
      };

      // todo: post api

      console.log("Fable Form Final Payload Shared to Server Axis:", payload);
      alert("Ebook uploaded successfully!");

      setFormData({ title: "", genre: "", price: "", description: "" });
      setImageFile(null);
      setImagePreview("");
    } catch (error) {
      console.error("Error submitting form data:", error);
      toast.error("Image upload failed. Please try again.", {position:'top-center',theme:'dark'});
    } finally {
      setSubmitting(false);
      setUploadingImage(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-10 shadow-2xl">
      

      <div
        className="ebook-font-sans rounded-sm border"
        style={{
          background: "#FAF7F0",
          borderColor: "#E3DDCB",
          boxShadow: "0 1px 2px rgba(27,36,48,0.04), 0 12px 32px -16px rgba(27,36,48,0.12)"
        }}
      >
        <div
          className="flex items-baseline justify-between px-7 sm:px-9 pt-7 pb-5 border-b"
          style={{ borderColor: "#E3DDCB" }}
        >
          <div>
            <p
              className="text-[11px] tracking-[0.18em] uppercase font-medium"
              style={{ color: "#B08D57" }}
            >
              New Submission
            </p>
            <h2
              className="ebook-font-serif text-2xl mt-1"
              style={{ color: "#1B2430" }}
            >
              Add an Ebook
            </h2>
          </div>
          <span
            className="hidden sm:block text-[11px] font-mono tracking-wide"
            style={{ color: "#9A9180" }}
          >
            DRAFT — UNPUBLISHED
          </span>
        </div>

        <form onSubmit={handleSubmit} className="px-7 sm:px-9 py-7 space-y-8">
          <div className="flex flex-col sm:flex-row gap-7">

            {/* SECTION: Book Cover — styled like an actual book, not a generic dropzone */}
            <div className="flex flex-col space-y-2 shrink-0">
              <label
                className="text-[11px] tracking-[0.14em] uppercase font-medium"
                style={{ color: "#6B6354" }}
              >
                Cover
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />

              <div
                onClick={triggerFileSelect}
                className="w-44 h-64 cursor-pointer flex flex-col items-center justify-center text-center transition-all group overflow-hidden relative rounded-sm"
                style={{
                  background: imagePreview ? "transparent" : "#F1EDE3",
                  border: imagePreview ? "1px solid #E3DDCB" : "1px dashed #C9C0AA",
                  boxShadow: imagePreview
                    ? "3px 3px 0 #E3DDCB, inset 3px 0 0 rgba(27,36,48,0.06)"
                    : "none"
                }}
              >
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Cover Preview"
                    height={200}
                    width={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center space-y-2.5 px-3">
                    <svg
                      className="w-5 h-5 transition-colors"
                      style={{ color: "#A39A86" }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    </svg>
                    <p className="text-[11px] leading-snug" style={{ color: "#8C8472" }}>
                      Upload cover
                      <br />
                      <span style={{ color: "#B08D57" }}>2:3 ratio</span>
                    </p>
                  </div>
                )}

                {uploadingImage && (
                  <div
                    className="absolute inset-0 flex items-center justify-center text-[10px] font-mono tracking-wide text-white"
                    style={{ background: "rgba(27,36,48,0.55)" }}
                  >
                    UPLOADING…
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              {/* SECTION: Ebook Title */}
              <div className="flex flex-col space-y-1.5">
                <label
                  className="text-[11px] tracking-[0.14em] uppercase font-medium"
                  style={{ color: "#6B6354" }}
                >
                  Title
                </label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="The title as it should appear on the cover"
                  variant="bordered"
                  required
                  className="w-full ebook-font-serif h-12 rounded-sm border-[#D8D1BC] hover:border-[#B08D57] focus:border-[#B08D57] shadow-none bg-white text-[17px] text-[#1B2430] placeholder:text-[#B3AB97]"
                />
              </div>

              {/* SECTION: Genre & Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1.5">
                  <label
                    className="text-[11px] tracking-[0.14em] uppercase font-medium"
                    style={{ color: "#6B6354" }}
                  >
                    Genre
                  </label>
                  <Select
                    isRequired
                    selectedKeys={formData.genre ? new Set([formData.genre]) : new Set()}
                    onSelectionChange={handleGenreSelection}
                    className="w-full"
                  >
                    <Select.Trigger
                      variant="bordered"
                      className="border-[#D8D1BC] hover:border-[#B08D57] shadow-none h-11 bg-white rounded-sm text-sm"
                    >
                      <Select.Value placeholder="Select a genre" />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox className="p-1">
                        {genresList.map((item) => (
                          <ListBox.Item
                            key={item.value}
                            id={item.value}
                            textValue={item.label}
                            className="data-[hover=true]:bg-[#F1EDE3] data-[hover=true]:text-[#1B2430] cursor-pointer py-2 px-3 text-sm text-[#3A3528] rounded-sm"
                          >
                            {item.label}
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label
                    className="text-[11px] tracking-[0.14em] uppercase font-medium"
                    style={{ color: "#6B6354" }}
                  >
                    Price
                  </label>
                  <div className="relative">
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-mono pointer-events-none"
                      style={{ color: "#9A9180" }}
                    >
                      $
                    </span>
                    <Input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      variant="bordered"
                      min="0"
                      step="0.01"
                      required
                      className="w-full h-11 rounded-sm border-[#D8D1BC] hover:border-[#B08D57] focus:border-[#B08D57] shadow-none bg-white text-sm font-mono text-[#1B2430] pl-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION: Description */}
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                className="text-[11px] tracking-[0.14em] uppercase font-medium"
                style={{ color: "#6B6354" }}
              >
                Description & Outline
              </label>
              <span
                className="text-[10px] font-mono tracking-wide select-none"
                style={{ color: "#B08D57" }}
              >
                FOCUS MODE
              </span>
            </div>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="What is this book about? Who is it for?"
              variant="bordered"
              required
              className="w-full min-h-32 rounded-sm border-[#D8D1BC] hover:border-[#B08D57] focus:border-[#B08D57] shadow-none bg-white text-sm text-[#1B2430] placeholder:text-[#B3AB97] leading-relaxed"
            />
          </div>

          {/* Action strip */}
          <div
            className="pt-5 flex items-center justify-between border-t"
            style={{ borderColor: "#E3DDCB" }}
          >
            <span className="text-[11px]" style={{ color: "#9A9180" }}>
              Saved as draft until published
            </span>
            <Button
              type="submit"
              isLoading={submitting}
              disabled={submitting}
              className="font-medium px-7 h-11 rounded-sm transition-colors text-sm tracking-wide"
              style={{
                background: "#1B2430",
                color: "#FAF7F0"
              }}
            >
              {submitting ? "Publishing…" : "Publish Ebook"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
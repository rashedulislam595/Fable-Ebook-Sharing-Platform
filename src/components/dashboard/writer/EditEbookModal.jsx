'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Modal, Button, Input, Select, ListBox, TextArea } from '@heroui/react';
import { Pencil } from 'lucide-react';

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

export default function EditEbookModal({ ebook }) {
    const fileInputRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: ebook?.title || '',
        genre: ebook?.genre || '',
        price: ebook?.price || '',
        description: ebook?.description || '',
    });

    const [imageFile, setImageFile] = useState(null);

    const [imagePreview, setImagePreview] = useState(
        ebook?.coverImage || ''
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleGenreSelection = (keys) => {
        setFormData((prev) => ({
            ...prev,
            genre: keys,
        }));
    };

    const triggerFileSelect = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleUpdate = async () => {
        try {
            setLoading(true);

            const updateData = {
                ...formData,
                imageFile,
            };

            console.log(updateData);

            // =========================
            // API CALL HERE
            // =========================

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal>
            <Modal.Trigger>
                <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-zinc-500 hover:text-amber-600 hover:bg-zinc-100 min-w-8 w-8 h-8 rounded-md transition-colors"
                    title="Edit Ebook"
                >
                    <Pencil width={14} height={14} />
                </Button>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl">

                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <div className='text-center'>
                                <h2 className="text-2xl font-bold text-[#1B2430]">
                                    Edit Ebook
                                </h2>

                                <p className="text-sm text-zinc-500 mt-1">
                                    Update your ebook information and save changes.
                                </p>
                            </div>
                        </Modal.Header>

                        <Modal.Body>

                            <div className="space-y-8">

                                <div className="flex flex-col lg:flex-row gap-8">

                                    {/* Cover */}
                                    <div className="shrink-0">
                                        <label className="text-[11px] tracking-[0.14em] uppercase font-medium text-[#6B6354] block mb-2">
                                            Cover
                                        </label>

                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />

                                        <div
                                            onClick={triggerFileSelect}
                                            className="relative w-44 h-64 cursor-pointer overflow-hidden rounded-sm border border-[#E3DDCB]"
                                        >
                                            {imagePreview && (
                                                <Image
                                                    src={imagePreview}
                                                    alt="Cover"
                                                    fill
                                                    className="object-cover w-full"
                                                />
                                            )}

                                            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-xs font-medium">
                                                Change Cover
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fields */}
                                    <div className="flex-1 flex flex-col gap-6">

                                        <div>
                                            <label className="text-[11px] tracking-[0.14em] uppercase font-medium text-[#6B6354] block mb-2">
                                                Title
                                            </label>

                                            <Input
                                                name="title"
                                                className='w-full'
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                variant="bordered"
                                                placeholder="Ebook title"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">

                                            <div>
                                                <label className="text-[11px] tracking-[0.14em] uppercase font-medium text-[#6B6354] block mb-2">
                                                    Genre
                                                </label>

                                                <Select
                                                    selectedKeys={
                                                        formData.genre
                                                            ? new Set([formData.genre])
                                                            : new Set()
                                                    }
                                                    onSelectionChange={handleGenreSelection}
                                                >
                                                    <Select.Trigger>
                                                        <Select.Value placeholder="Select Genre" />
                                                    </Select.Trigger>

                                                    <Select.Popover>
                                                        <ListBox>
                                                            {genresList.map((genre) => (
                                                                <ListBox.Item
                                                                    key={genre.value}
                                                                    id={genre.value}
                                                                >
                                                                    {genre.label}
                                                                </ListBox.Item>
                                                            ))}
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            <div>
                                                <label className="text-[11px] tracking-[0.14em] uppercase font-medium text-[#6B6354] block mb-2">
                                                    Price
                                                </label>

                                                <Input
                                                    type="number"
                                                    name="price"
                                                    className='w-full'
                                                    value={formData.price}
                                                    onChange={handleInputChange}
                                                    variant="bordered"
                                                    placeholder="0.00"
                                                />
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <label className="text-[11px] tracking-[0.14em] uppercase font-medium text-[#6B6354] block mb-2">
                                        Description & Outline
                                    </label>

                                    <TextArea
                                        name="description"
                                        className='w-full min-h-32'
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        variant="bordered"
                                        placeholder="Update ebook description..."
                                        
                                    />
                                </div>

                                <div className="grid md:grid-cols-3 gap-4 border-t border-[#E3DDCB] pt-5">

                                    <div>
                                        <p className="text-[11px] uppercase tracking-wider text-zinc-500">
                                            Author
                                        </p>

                                        <p className="font-medium text-[#1B2430]">
                                            {ebook?.writerName}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[11px] uppercase tracking-wider text-zinc-500">
                                            Status
                                        </p>

                                        <p className="font-medium capitalize text-[#B08D57]">
                                            {ebook?.status}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[11px] uppercase tracking-wider text-zinc-500">
                                            Email
                                        </p>

                                        <p className="font-medium text-[#1B2430] break-all">
                                            {ebook?.writerEmail}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </Modal.Body>

                        <Modal.Footer>

                            <Button
                                slot="close"
                                variant="light"
                            >
                                Cancel
                            </Button>

                            <Button
                                onPress={handleUpdate}
                                isLoading={loading}
                                className="bg-[#1B2430] text-[#FAF7F0]"
                            >
                                Save Changes
                            </Button>

                        </Modal.Footer>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
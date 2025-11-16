import { Image, X } from 'lucide-react';
import type { RefObject } from 'react';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/shadcn/form';

interface ProductImageUploadProps {
	fileInputRef: RefObject<HTMLInputElement | null>;
	currentImages: Array<{ file: File; preview: string }>;
	isDragging: boolean;
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleBrowseClick: () => void;
	handleDragEnter: (e: React.DragEvent) => void;
	handleDragLeave: (e: React.DragEvent) => void;
	handleDragOver: (e: React.DragEvent) => void;
	handleDrop: (e: React.DragEvent) => void;
	handleRemoveFile: (index: number) => void;
}

export function ProductImageUpload({
	fileInputRef,
	currentImages,
	isDragging,
	handleFileChange,
	handleBrowseClick,
	handleDragEnter,
	handleDragLeave,
	handleDragOver,
	handleDrop,
	handleRemoveFile,
}: ProductImageUploadProps) {
	return (
		<FormItem>
			<FormLabel>Gambar Produk</FormLabel>
			<FormControl>
				<div className="space-y-3">
					<input
						ref={fileInputRef}
						type="file"
						accept="image/jpeg,image/png,image/webp"
						multiple
						onChange={handleFileChange}
						className="hidden"
					/>
					{/* biome-ignore lint/a11y/useSemanticElements: Keeping div for styling flexibility with drag-and-drop */}
					<div
						className={`border-2 border-dashed rounded-xl py-2 px-4 transition-colors ${
							isDragging ? 'border-green-500 bg-green-50' : 'border-primary'
						}`}
						role="button"
						tabIndex={0}
						onDragEnter={handleDragEnter}
						onDragLeave={handleDragLeave}
						onDragOver={handleDragOver}
						onDrop={handleDrop}
						onClick={handleBrowseClick}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								handleBrowseClick();
							}
						}}
					>
						<div className="flex items-center gap-3">
							<Image className="size-6 text-green-600" />
							<div className="flex-1">
								<p className="text-sm text-gray-600">
									{isDragging
										? 'Lepaskan file di sini...'
										: 'Unggah 5 gambar atau lebih agar eksposur produk dan peluang penjualan meningkat.'}
								</p>
								{currentImages.length > 0 && (
									<p className="text-xs text-gray-500 mt-1">
										{currentImages.length} dari 5 gambar telah diunggah
									</p>
								)}
							</div>
							<Button
								type="button"
								variant="outline"
								onClick={handleBrowseClick}
								className="border-green-600 text-green-600 hover:bg-green-50"
								disabled={currentImages.length >= 5}
							>
								Browse files
							</Button>
						</div>
					</div>

					{/* Preview Gambar yang sudah diupload */}
					{currentImages.length > 0 && (
						<div className="grid grid-cols-5 gap-3">
							{currentImages.map((fileItem, index) => (
								<div
									key={`${fileItem.file.name}-${index}`}
									className="relative group aspect-square rounded-lg overflow-hidden border-2 border-gray-200"
								>
									<img
										src={fileItem.preview}
										alt={`Preview ${index + 1}`}
										className="w-full h-full object-contain object-center"
									/>
									<button
										type="button"
										onClick={() => handleRemoveFile(index)}
										className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
									>
										<X className="h-3 w-3" />
									</button>
								</div>
							))}
						</div>
					)}
				</div>
			</FormControl>
			<FormMessage />
		</FormItem>
	);
}

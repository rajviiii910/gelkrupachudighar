import { STORE_INFO } from '../data/storeConfig';

/**
 * Copy image to user's system clipboard as PNG
 */
export async function copyImageToClipboard(imageUrl: string): Promise<boolean> {
  if (typeof window === 'undefined' || !navigator.clipboard) return false;

  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error('Image failed to load for clipboard'));
    });

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;
    ctx.drawImage(img, 0, 0);

    return new Promise<boolean>((resolve) => {
      canvas.toBlob(async (blob) => {
        if (!blob) return resolve(false);
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob,
            }),
          ]);
          resolve(true);
        } catch (e) {
          console.warn('Clipboard write error:', e);
          resolve(false);
        }
      }, 'image/png');
    });
  } catch (err) {
    console.warn('Canvas toBlob failed:', err);
    return false;
  }
}

/**
 * Download the product photo directly to device
 */
export function downloadImage(imageUrl: string, filename: string) {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = filename.endsWith('.jpg') ? filename : `${filename}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Utility to share an image and message directly to WhatsApp or via native Web Share
 */
export async function shareProductToWhatsApp({
  title,
  message,
  imageUrl,
  whatsappNumber = STORE_INFO.contact.whatsappNumber,
}: {
  title: string;
  message: string;
  imageUrl?: string;
  whatsappNumber?: string;
}) {
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const fullImageUrl = imageUrl
    ? imageUrl.startsWith('http')
      ? imageUrl
      : `${origin}${imageUrl}`
    : '';

  // Ensure message includes the photo link if available
  let finalMessage = message;
  if (fullImageUrl && !finalMessage.includes(fullImageUrl)) {
    finalMessage += `\n\n📸 Photo / Design: ${fullImageUrl}`;
  }

  // Attempt to copy image to clipboard so user can instantly paste in chat
  if (imageUrl) {
    try {
      await copyImageToClipboard(imageUrl);
    } catch {
      // Non-blocking
    }
  }

  // Try Web Share API with actual image file if supported (Mobile Chrome, Safari, etc.)
  if (imageUrl && typeof navigator !== 'undefined' && 'canShare' in navigator) {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], `${title.replace(/\s+/g, '_').toLowerCase()}.jpg`, {
        type: 'image/jpeg',
      });

      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          title,
          text: finalMessage,
          files: [file],
        });
        return { method: 'native_share', success: true };
      }
    } catch (err: unknown) {
      if ((err as Error)?.name === 'AbortError') {
        return { method: 'aborted', success: false };
      }
      console.warn('Native file share failed, falling back to WhatsApp link:', err);
    }
  }

  // Direct WhatsApp link fallback (works everywhere, including desktop WhatsApp Web & mobile)
  const encoded = encodeURIComponent(finalMessage);
  const waUrl = `https://wa.me/${cleanNumber}?text=${encoded}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
  return { method: 'whatsapp_url', success: true };
}

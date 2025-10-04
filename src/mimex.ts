import { mimexData, mimes, extensions } from "./mimeTypes";
import type { Mime, Extension } from "./mimeTypes";

class MimeX {
    /**
     * Retrieves the MIME type associated with the given file extension.
     * @param extension - The file extension (with or without leading dot).
     * @returns The MIME type associated with the given file extension, or undefined if not found.
     */
    getMimes(extension: string): Readonly<Mime[]> | undefined {
        // Normalize extension to start with a dot
        const ext = (extension.startsWith(".") ? extension : `.${extension}`) as Extension;
        if (!extensions.includes(ext)) { return undefined; }

        const item = mimexData.find(item => (item.extensions as unknown as string[]).includes(ext))!;
        return item.mimes;
    }

    /**
     * Retrieves the file extensions associated with the given MIME type.
     * @param mime - The MIME type.
     * @returns The file extensions associated with the given MIME type, or undefined if not found.
     */
    getExtensions(mime: string): Readonly<Extension[]> | undefined {
        if (!mimes.includes(mime as Mime)) { return undefined; }

        const item = mimexData.find(item => (item.mimes as unknown as string[]).includes(mime))!;
        return item?.extensions;
    }

    /**
     * Checks if the given string is a valid MIME type supported by Mimex.
     * @param mime - The MIME type to check.
     * @returns True if the MIME type is supported, false otherwise.
     */
    isMime(mime: string): boolean {
        return mimes.includes(mime as Mime);
    }

    /**
     * Checks if the given string is a valid file extension supported by Mimex.
     * @param extension - The file extension to check.
     * @returns True if the file extension is supported, false otherwise.
     */
    isExtension(extension: string): boolean {
        const ext = (extension.startsWith(".") ? extension : `.${extension}`) as Extension;
        return extensions.includes(ext);
    }

    /**
     * Retrieves the list of supported MIME types.
     * @returns The list of supported MIME types.
     */
    get mimes() { return mimes; }

    /**
     * Retrieves the list of supported file extensions.
     * @returns The list of supported file extensions.
     */
    get extensions() { return extensions; }
}

const mimex = new MimeX();
export default mimex;